
// == Vector3 module ==
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

// == Convert helper ==
function worldToCameraSpace(worldVec, forward, right, up) {
  return new Vector3(
    worldVec.x * right.x + worldVec.y * right.y + worldVec.z * right.z,
    worldVec.x * up.x + worldVec.y * up.y + worldVec.z * up.z,
    worldVec.x * forward.x + worldVec.y * forward.y + worldVec.z * forward.z
  );
}
function cameraToWorldSpace(localVec, forward, right, up) {
  return new Vector3(
    localVec.x * right.x + localVec.y * up.x + localVec.z * forward.x,
    localVec.x * right.y + localVec.y * up.y + localVec.z * forward.y,
    localVec.x * right.z + localVec.y * up.z + localVec.z * forward.z
  );
}

// == Core Aim Lock Engine ==
class AimLockHeadLock {
  constructor(config = {}) {
    this.config = {
      leadTime: 0.12,
      smoothFactor: 0.85,
      maxLeadDistance: 2.0,
      recoilSmoothFactor: 0.7,
      ...config,
    };
    this.prevEnemyPos = null;
    this.enemyVelocity = Vector3.zero();
    this.smoothAimPos = Vector3.zero();
    this.smoothedRecoilOffset = Vector3.zero();
    this.lastUpdateTime = null;
  }

  updateEnemyVelocity(currentPos, currentTime) {
    if (!this.prevEnemyPos) {
      this.prevEnemyPos = currentPos.clone();
      this.lastUpdateTime = currentTime;
      return;
    }
    const dt = (currentTime - this.lastUpdateTime) / 1000;
    if (dt <= 0) return;
    const newVelocity = currentPos.subtract(this.prevEnemyPos).multiplyScalar(1 / dt);
    this.enemyVelocity = new Vector3(
      this.enemyVelocity.x * this.config.smoothFactor + newVelocity.x * (1 - this.config.smoothFactor),
      this.enemyVelocity.y * this.config.smoothFactor + newVelocity.y * (1 - this.config.smoothFactor),
      this.enemyVelocity.z * this.config.smoothFactor + newVelocity.z * (1 - this.config.smoothFactor),
    );
    this.prevEnemyPos = currentPos.clone();
    this.lastUpdateTime = currentTime;
  }

  updateRecoilOffset(newRecoilOffset) {
    this.smoothedRecoilOffset = new Vector3(
      this.smoothedRecoilOffset.x * this.config.recoilSmoothFactor + newRecoilOffset.x * (1 - this.config.recoilSmoothFactor),
      this.smoothedRecoilOffset.y * this.config.recoilSmoothFactor + newRecoilOffset.y * (1 - this.config.recoilSmoothFactor),
      this.smoothedRecoilOffset.z * this.config.recoilSmoothFactor + newRecoilOffset.z * (1 - this.config.recoilSmoothFactor),
    );
  }

  predictHeadPosition(headPos, leadTime) {
    let predicted = headPos.add(this.enemyVelocity.multiplyScalar(leadTime));
    const offsetVec = predicted.subtract(headPos);
    if (offsetVec.length() > this.config.maxLeadDistance) {
      predicted = headPos.add(offsetVec.normalize().multiplyScalar(this.config.maxLeadDistance));
    }
    return predicted;
  }

  smoothAim(targetPos) {
    this.smoothAimPos = new Vector3(
      this.smoothAimPos.x * this.config.smoothFactor + targetPos.x * (1 - this.config.smoothFactor),
      this.smoothAimPos.y * this.config.smoothFactor + targetPos.y * (1 - this.config.smoothFactor),
      this.smoothAimPos.z * this.config.smoothFactor + targetPos.z * (1 - this.config.smoothFactor),
    );
    return this.smoothAimPos.clone();
  }

  getAimPosition(playerPos, boneHeadPos, cameraForward, cameraRight, cameraUp, recoilOffset, currentTime) {
    this.updateEnemyVelocity(boneHeadPos, currentTime);
    this.updateRecoilOffset(recoilOffset);
    const predictedHead = this.predictHeadPosition(boneHeadPos, this.config.leadTime);
    const worldAimVec = predictedHead.subtract(playerPos);
    const forward = cameraForward.normalize();
    const right = cameraRight.normalize();
    const up = cameraUp.normalize();
    let localAimVec = worldToCameraSpace(worldAimVec, forward, right, up);
    const localRecoilOffset = worldToCameraSpace(this.smoothedRecoilOffset, forward, right, up);
    localAimVec = localAimVec.subtract(localRecoilOffset);
    const smoothLocalAim = this.smoothAim(localAimVec);
    const smoothWorldAim = cameraToWorldSpace(smoothLocalAim, forward, right, up);
    return playerPos.add(smoothWorldAim);
  }
}

// === Drag Aim Instantly to Bone Head ===
function dragAimToBoneHeadInstant(currentAim, enemy) {
  if (!enemy || !enemy.bone_Head) return currentAim;
  return {
    x: enemy.bone_Head.x,
    y: enemy.bone_Head.y,
    z: enemy.bone_Head.z
  };
}

// === Enemy Input Data (Giả lập hoặc từ API gốc) ===
const enemyData = { bone_Head: { x: 22, y: 4, z: 2.1 } };
const boneHead = enemyData.bone_Head;

// === Player Setup & Recoil ===
const aimEngine = new AimLockHeadLock();
const playerPos = new Vector3(0, 0, 0);
const cameraF = new Vector3(0, 0, 1);
const cameraR = new Vector3(1, 0, 0);
const cameraU = new Vector3(0, 1, 0);
const recoil = new Vector3(0.02, -0.01, 0.005);
const timeNow = Date.now();

// === Calculate Aim ===
const aimResult = aimEngine.getAimPosition(
  playerPos, new Vector3(boneHead.x, boneHead.y, boneHead.z),
  cameraF, cameraR, cameraU,
  recoil, timeNow
);
const finalAim = dragAimToBoneHeadInstant(aimResult, enemyData);

// === Output API result ===
$done({ body: JSON.stringify({ aim: finalAim }) });
