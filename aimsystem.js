// === Vector3 + Kalman Filter ===
class Vector3 {
  constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
  add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
  subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
  multiplyScalar(s) { return new Vector3(this.x * s, this.y * s, this.z * s); }
  length() { return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2); }
  normalize() {
    const len = this.length();
    return len > 0 ? this.multiplyScalar(1 / len) : new Vector3();
  }
  clone() { return new Vector3(this.x, this.y, this.z); }
  static zero() { return new Vector3(0, 0, 0); }
}

class KalmanFilter {
  constructor(R = 0.01, Q = 0.0001) {
    this.R = R;
    this.Q = Q;
    this.A = 1;
    this.B = 0;
    this.C = 1;
    this.cov = NaN;
    this.x = NaN;
  }

  filter(z) {
    if (isNaN(this.x)) {
      this.x = (1 / this.C) * z;
      this.cov = (1 / this.C) * this.R * (1 / this.C);
    } else {
      const predX = this.A * this.x;
      const predCov = this.A * this.cov * this.A + this.Q;
      const K = predCov * this.C * (1 / (this.C * predCov * this.C + this.R));
      this.x = predX + K * (z - this.C * predX);
      this.cov = predCov - K * this.C * predCov;
    }
    return this.x;
  }

  reset() {
    this.cov = NaN;
    this.x = NaN;
  }
}

// Helper: quaternion to 4x4 matrix (column-major)
function quaternionToMatrix(q) {
  const { x, y, z, w } = q;
  return [
    1 - 2 * y * y - 2 * z * z,   2 * x * y - 2 * z * w,       2 * x * z + 2 * y * w,     0,
    2 * x * y + 2 * z * w,       1 - 2 * x * x - 2 * z * z,   2 * y * z - 2 * x * w,     0,
    2 * x * z - 2 * y * w,       2 * y * z + 2 * x * w,       1 - 2 * x * x - 2 * y * y, 0,
    0,                           0,                           0,                         1
  ];
}

// Multiply 4x4 matrix * Vector3 (assuming Vector3 w=1)
function multiplyMatrixVec(m, v) {
  const x = v.x, y = v.y, z = v.z;
  return new Vector3(
    m[0] * x + m[1] * y + m[2] * z + m[3],
    m[4] * x + m[5] * y + m[6] * z + m[7],
    m[8] * x + m[9] * y + m[10] * z + m[11]
  );
}

// === AimLock Engine with Bindpose & Kalman Filtering ===
class AimLockWithBindpose {
  constructor() {
    this.velocity = Vector3.zero();
    this.prevPos = null;
    this.kalman = {
      x: new KalmanFilter(),
      y: new KalmanFilter(),
      z: new KalmanFilter()
    };
    this.lastUpdate = Date.now();
  }

  getWorldHeadFromBindpose(position, rotation, scale, bindpose) {
    const model = quaternionToMatrix(rotation);

    // Scale matrix components by scale vector
    const scaled = [
      model[0] * scale.x, model[1] * scale.y, model[2] * scale.z, position.x,
      model[4] * scale.x, model[5] * scale.y, model[6] * scale.z, position.y,
      model[8] * scale.x, model[9] * scale.y, model[10] * scale.z, position.z,
      0, 0, 0, 1
    ];

    const bind = [
      bindpose.e00, bindpose.e01, bindpose.e02, bindpose.e03,
      bindpose.e10, bindpose.e11, bindpose.e12, bindpose.e13,
      bindpose.e20, bindpose.e21, bindpose.e22, bindpose.e23,
      bindpose.e30, bindpose.e31, bindpose.e32, bindpose.e33
    ];

    // Multiply bindpose matrix * position vector
    return multiplyMatrixVec(bind, new Vector3(scaled[3], scaled[7], scaled[11]));
  }

  trackHead(pos) {
    const now = Date.now();
    const dt = (now - this.lastUpdate) / 1000;
    if (dt > 0 && this.prevPos) {
      const delta = pos.subtract(this.prevPos).multiplyScalar(1 / dt);
      this.velocity = delta;
    }
    this.prevPos = pos.clone();
    this.lastUpdate = now;

    return new Vector3(
      this.kalman.x.filter(pos.x),
      this.kalman.y.filter(pos.y),
      this.kalman.z.filter(pos.z)
    );
  }

  aimToHead() {
    // Bone head info (vị trí, rotation quaternion, scale)
    const position = { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 };
    const rotation = { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 };
    const scale = { x: 0.99999994, y: 1.00000012, z: 1.0 };

    // Bindpose matrix của bone head
    const bindpose = {
      e00: -1.34559613e-13, e01: 8.881784e-14, e02: -1.0, e03: 0.487912,
      e10: -2.84512817e-6, e11: -1.0, e12: 8.881784e-14, e13: -2.842171e-14,
      e20: -1.0, e21: 2.84512817e-6, e22: -1.72951931e-13, e23: 0.0,
      e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
    };

    // Tính vị trí thế giới của bone head sau khi áp bindpose
    const worldHead = this.getWorldHeadFromBindpose(position, rotation, scale, bindpose);

    // Lọc Kalman để giảm noise và đoán vị trí mượt mà hơn
    const trackedHead = this.trackHead(worldHead);

    // Đặt tâm ngắm (giả lập, bạn thay phần này bằng API set aim thực tế)
    this.setAim(trackedHead);
  }

  setAim(vec3) {
    console.log("🎯 AimLock to bone_Head:", vec3.x.toFixed(6), vec3.y.toFixed(6), vec3.z.toFixed(6));
    // Thay bằng API call thực tế của game hoặc injector
    // VD: GameAPI.setCrosshairTarget(vec3.x, vec3.y, vec3.z);
  }

  runLoop() {
    const loop = () => {
      this.aimToHead();
      setTimeout(loop, 16); // chạy ~60fps
    };
    loop();
  }
}

// === Khởi chạy hệ thống AimLock ===
const aimSystem = new AimLockWithBindpose();
aimSystem.runLoop();
