const url = $request.url;

if (url.includes("/api/config") || url.includes("/api/aim")) {
  const customConfig = {
    hitdetect: {
      collider: {
        enabled: true,
        zone: "head_bounds",
        custom_head_region: true,
        head_bounds: {
          radius: 0.035,
          height: 0.075,
          center: {
            x: -0.0456970781,
            y: -0.004478302,
            z: -0.0200432576
          }
        }
      },
      target_priority_bone: "head_joint",
      exclude_bone_regions: [
        "spine_lower", "pelvis", "chest", "shoulder_l", "shoulder_r"
      ],
      fov_based_filter: true,
      max_fov_angle: 360.0,
      precise_headbox: {
        enabled: true,
        bounds: {
          shape: "capsule",
          center: {
            x: -0.0456970781,
            y: -0.004478302,
            z: -0.0200432576
          },
          radius: 0.028,
          height: 0.066
        }
      },
      accuracy_threshold: 0.98,
      obstruction_check: true,
      force_reselect_on_obstruct: true,
      snap_to_head_on_drift: true,
      snap_correction_speed: 99.9,
      lock_weighting_system: {
        "bone:head_joint": 1.0,
        "bone:neck_upper": 0.15,
        "bone:chest": 0.0
      }
    },
    aimlock: {
      enabled: true,
      target_bone: "head_joint",
      auto_trigger: true,
      activation_radius: 360.0,
      tracking_mode: "3d_bone_xyz",
      stickiness: 5.0,
      stick_duration: 999.0,
      snap_to_target_on_deviation: true,
      deviation_threshold: 0.0001,
      snap_speed: 99.9,
      continuous_lock: {
        enabled: true,
        zone: "head_box",
        priority_bone: "head_joint",
        fallback_enabled: true
      },
      stick_to_bone: true,
      flexible_lock: {
        enabled: true,
        allow_outside_zone: true
      },
      continue_tracking_on_miss: true,
      tracking_target_bone: "head_joint",
      snap_back_on_approximate: true,
      snap_threshold: 0.1,
      rotation_sync_from_bone: true,
      rotation_sync_target: "head_joint",
      rotation_sync_strength: 1.0,
      magnetic_center_pull: true,
      magnetic_pull_strength: 0.94,
      center_stick_duration: 999.0,
      head_bone_structure: {
        position: {
          x: -0.0456970781,
          y: -0.004478302,
          z: -0.0200432576
        },
        rotation: {
          x: 0.0258174837,
          y: -0.08611039,
          z: -0.1402113,
          w: 0.9860321
        },
        scale: {
          x: 0.99999994,
          y: 1.00000012,
          z: 1.0
        }
      },
      head_center_reference: {
        x: -0.015870847,
        y: 1.4875782,
        z: -0.0072678495
      }
    },
    bullet: {
      trajectory: {
        spread: 0.0,
        recoil: 0.0,
        random_error: 0.0
      },
      auto_correct_to_bone: "head_joint",
      auto_correct_strength: 1.0,
      path_lock: {
        enabled: true,
        region: "head_box",
        max_offset: 0.0001
      },
      hit_validation_mode: "strict_head_only"
    },
    drag: {
      assist: {
        enabled: true,
        lock_priority_bone: "head_joint",
        stick_to_bone: true,
        stick_strength: 1.0,
        stick_duration: 999.0,
        response_speed: 99.0
      },
      stabilization_zone: {
        enabled: true,
        target_bone: "head_joint",
        radius: 0.019,
        dampening: 0.995
      },
      center_lock_when_stabilized: true,
      sync_with_head_rotation: true,
      sync_stabilization_gain: 1.5
    },
    fire: {
      gesture: {
        drag_assist: true,
        drag_force_multiplier: 4.0,
        drag_response_speed: 999.0,
        input_response_speed: 98.0,
        velocity_amplifier: 1.75,
        drag_consistency: 1.0,
        drag_axis_mode: "omnidirectional",
        drag_distance_limit: 999.0,
        drag_lock_bone: "head_joint",
        drag_lock_strength: 1.0,
        dynamic_force_boost: true,
        force_boost_on_enemy_action: 1.5
      }
    }
  };
{
  "input_lock_on_precision_mode": "head_3d_tracking",
  "input_lock_on_track_velocity": true,
  "input_lock_on_rotation_tracking": true,
  "input_lock_on_predict_movement": true,
  "input_lock_on_keep_xy": true,
  "input_lock_on_offset_x": 0.0457,
  "input_lock_on_offset_y": 0.0045,
  "input_lock_on_offset_z": 0.02,
  "drag.assist.enabled": true,
  "input.drag.velocity_response.enabled": true,
  "input.drag.velocity_response.sensitivity": 10.0,
  "input.drag.prelock_on_drag_start": true,
  "input.drag.prelock_bone": "head_joint",
  "input.drag.instant_snap_on_start": true,
  "input.drag.instant_snap_zone": "tight_head_box",
  "input.drag.instant_snap_speed": 99.99,
  "input.drag.directional_bias.enabled": true,
  "input.drag.directional_bias.priority_axis": "Y+",
  "input.drag.directional_bias.threshold": 0.85,
  "input.drag.ignored_bones": [
    "chest",
    "pelvis",
    "shoulder_r",
    "shoulder_l",
    "neck_lower"
  ],
  "input.drag.stick_on_snap": true,
  "input.drag.stick_duration": 999.0,
  "input.drag.stick_strength": 1.0,
  "input.drag.target_priority": "bone:head_joint",
  "input.drag.tracking_mode": "3d_bone_xyz",
  "input.drag.head_tracking.enabled": true,
  "input.drag.head_prediction_speed": 0.95,
  "drag.assist.lock_priority_bone": "head_joint",
  "drag.assist.stick_to_bone": true,
  "drag.assist.stick_strength": 1.0,
  "drag.assist.stick_duration": 999.0,
  "drag.assist.response_speed": 99.0,
  "drag.stabilization_zone.enabled": true,
  "drag.stabilization_target_bone": "head_joint",
  "drag.stabilization_radius": 0.019,
  "drag.stabilization_dampening": 0.995,
  "drag.center_lock_when_stabilized": true,
  "drag.sync_with_head_rotation": true,
  "drag.sync_stabilization_gain": 1.5,
  "drag.magnetic_snap_on_entry": true,
  "drag.magnetic_snap_force": 1.0,
  "drag.assist.snap_back_on_deviation": true,
  "drag.assist.deviation_threshold": 0.0001,
  "drag.assist.snap_speed": 99.9,
  "drag.assist.tracking_mode": "3d_bone_xyz",
  "drag.assist.lock_zone": "head_box",
  "drag.assist.block_secondary_bones": [
    "neck_lower",
    "chest",
    "shoulder_l",
    "shoulder_r"
  ],
  "fire.gesture.drag_assist": true,
  "fire.gesture.drag_force_multiplier": 4.0,
  "fire.gesture.drag_axis_mode": "omnidirectional",
  "fire.gesture.input_response_speed": 98.0,
  "fire.gesture.velocity_amplifier": 1.75,
  "fire.gesture.drag_consistency": 1.0,
  "fire.gesture.drag_response_speed": 999.0,
  "fire.gesture.drag_distance_limit": 999.0,
  "fire.gesture.drag_lock_bone": "head_joint",
  "fire.gesture.drag_lock_strength": 1.0,
  "fire.gesture.dynamic_force_boost": true,
  "fire.gesture.force_boost_on_enemy_action": 1.5,
  "fire.gesture.drag_softening": false,
  "fire.gesture.aim_bias_mode": "nearest_target_alignment",
  "fire.gesture.drag_boundary_mode": "elastic_clamp",
  "fire.gesture.latency_compensation": 0.0,
  "input.aimassist.adaptive_mode": "gimbal_head_track",
  "input.aimassist.bone_target": "head_joint",
  "input.aimassist.aim_zone": "forward_arc",
  "input.aimassist.aim_zone_angle": 180.0,
  "envsense.advanced_tracking": true,
  "envsense.target_position": {
    "x": -0.0456970781,
    "y": -0.004478302,
    "z": -0.0200432576
  },
  "envsense.target_rotation": {
    "x": 0.0258174837,
    "y": -0.08611039,
    "z": -0.1402113,
    "w": 0.9860321
  },
  "envsense.target_scale": {
    "x": 0.99999994,
    "y": 1.00000012,
    "z": 1.0
  }
};
    drag: {
      multi_axis_tracking: {
        enabled: true,
        target_bone: "head_joint",
        track_x: true,
        track_y: true,
        track_z: true,
        sensitivity: 9.99 // MAX
      },
      stabilization_dampening: 0.999, // gần như triệt dao động
      limit_zone_radius: 0.05, // vùng rộng hơn để lock
      rotation_follow_enabled: true,
      rotation_lock_strength: 9.99, // lực xoay tối đa
      continuous_lock_on: {
        enabled: true,
        mode: "head_follow_strict",
        tolerance_radius: 0.00001, // rất nhạy khi lệch
        relock_delay: 0.0 // snap tức thì
      },
      sync_rotation_to_bone: true,
      sync_rotation_gain: 9.99 // xoay mạnh theo đầu
    },
    aimlock: {
      head_center_reference: true
    }
  };
 const structuredTrackingConfig = {
  "drag.structured_tracking.enabled": true,
  "drag.structured_tracking.bone_name": "head_joint",
  "drag.structured_tracking.position": {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  },
  "drag.structured_tracking.rotation": {
    x: 0.0258174837,
    y: -0.08611039,
    z: -0.1402113,
    w: 0.9860321
  },
  "drag.structured_tracking.scale": {
    x: 0.99999994,
    y: 1.00000012,
    z: 1.0
  },
  "drag.structured_tracking.center_reference": {
    x: -0.015870847,
    y: 1.4875782,
    z: -0.0072678495
  },
  "drag.structured_tracking.follow_gain": 1.65,
  "drag.structured_tracking.rotation_lock_strength": 1.1,
  "drag.structured_tracking.snap_back_enabled": true,
  "drag.structured_tracking.snap_back_speed": 0.95
};
 class AimLockEngine {
  constructor(config) {
    this.config = config;
    this.recoilAccumulated = { x: 0, y: 0 };
    this.smoothedAim = { x: 0, y: 0 };
  }

  smooth(value, prev, alpha = 0.3) {
    return alpha * value + (1 - alpha) * prev;
  }

  applyRecoil(weapon) {
    const recoil = this.config.recoil[weapon] || { x: 0, y: 0 };
    this.recoilAccumulated.x += recoil.x;
    this.recoilAccumulated.y += recoil.y;
    this.recoilAccumulated.x *= 0.85;
    this.recoilAccumulated.y *= 0.85;
    return { x: -this.recoilAccumulated.x, y: -this.recoilAccumulated.y };
  }

  getSpread(weapon) {
    return { x: 0, y: 0 };
  }

  dynamicSensitivity(baseSpeed, offsetMagnitude, isFiring) {
    const minSpeed = baseSpeed * 0.5;
    const maxSpeed = baseSpeed * 1.5;
    const scale = Math.min(offsetMagnitude * 2, 1);
    return isFiring ? minSpeed + (maxSpeed - minSpeed) * scale : baseSpeed;
  }

  updateAimAndFire(player, enemy, weapon, state) {
    const toTarget = enemy.bone_HeadPos.subtract(player.cameraPos).normalize();
    const localAimDir = worldToCameraSpace(toTarget, player.cameraForward, player.cameraRight, player.cameraUp);

    const rawOffsetX = localAimDir.x;
    const rawOffsetY = localAimDir.y;

    const recoilOffset = this.applyRecoil(weapon);
    const spreadOffset = this.getSpread(weapon);
    const totalOffsetX = rawOffsetX + recoilOffset.x + spreadOffset.x;
    const totalOffsetY = rawOffsetY + recoilOffset.y + spreadOffset.y;

    const offsetMag = Math.sqrt(totalOffsetX ** 2 + totalOffsetY ** 2);
    const profile = this.config.weapon_profiles[weapon] || this.config.weapon_profiles["default"];
    const currentSensitivity = this.dynamicSensitivity(profile.tracking_speed, offsetMag, state.firing || false);
    const alpha = Math.min(0.1 + currentSensitivity * 0.1, 0.7);

    this.smoothedAim.x = this.smooth(totalOffsetX, this.smoothedAim.x, alpha);
    this.smoothedAim.y = this.smooth(totalOffsetY, this.smoothedAim.y, alpha);

    console.log(`🎯 Aim: X=${this.smoothedAim.x.toFixed(3)} Y=${this.smoothedAim.y.toFixed(3)} Sens=${currentSensitivity.toFixed(2)} Weapon=${weapon}`);
  }
}

// === Vector3 & Helper ===
class Vector3 {
  constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
  add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
  subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
  multiplyScalar(s) { return new Vector3(this.x * s, this.y * s, this.z * s); }
  length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); }
  normalize() { const len = this.length(); return len > 0 ? this.multiplyScalar(1 / len) : new Vector3(); }
}

function worldToCameraSpace(worldVec, cameraForward, cameraRight, cameraUp) {
  return new Vector3(
    worldVec.x * cameraRight.x + worldVec.y * cameraRight.y + worldVec.z * cameraRight.z,
    worldVec.x * cameraUp.x + worldVec.y * cameraUp.y + worldVec.z * cameraUp.z,
    worldVec.x * cameraForward.x + worldVec.y * cameraForward.y + worldVec.z * cameraForward.z
  );
}

// === Cấu hình đầy đủ ===
const config = {

weapon_profiles: {
  default: { tracking_speed: 15.0, flick_speed: 1.6 },
  m1887: { tracking_speed: 20.0, flick_speed: 1.7, snapBias: 1.35, pull_strength: 1.35 },
  mp40: { tracking_speed: 19.5, flick_speed: 1.68 },
  m1014: { tracking_speed: 19.0, flick_speed: 1.66 },
  spas12: { tracking_speed: 18.5, flick_speed: 1.64 },
  thompson: { tracking_speed: 18.0, flick_speed: 1.62 },
  ump: { tracking_speed: 17.5, flick_speed: 1.6 },
  mp5: { tracking_speed: 17.0, flick_speed: 1.58 },
  p90: { tracking_speed: 16.5, flick_speed: 1.56 },
  uzi: { tracking_speed: 16.0, flick_speed: 1.55 },
  vector: { tracking_speed: 15.5, flick_speed: 1.54 },
  parafal: { tracking_speed: 16.8, flick_speed: 1.6 },
  ak: { tracking_speed: 15.2, flick_speed: 1.55 },
  scar: { tracking_speed: 15.0, flick_speed: 1.52 },
  groza: { tracking_speed: 14.8, flick_speed: 1.5 },
  an94: { tracking_speed: 14.5, flick_speed: 1.48 },
  ac80: { tracking_speed: 7.5, flick_speed: 1.75, recoilcontrol: true },
  m14: { tracking_speed: 13.8, flick_speed: 1.52 },
  famas: { tracking_speed: 14.5, flick_speed: 1.5 },
  aug: { tracking_speed: 14.8, flick_speed: 1.52 },
  xm8: { tracking_speed: 14.0, flick_speed: 1.48 },
  m60: { tracking_speed: 13.5, flick_speed: 1.46 },
  m249: { tracking_speed: 13.2, flick_speed: 1.44 },
  m4a1: { tracking_speed: 14.5, flick_speed: 1.5 },
  m82b: { tracking_speed: 10.0, flick_speed: 1.35 },
  awm: { tracking_speed: 10.5, flick_speed: 1.37 },
  kar98k: { tracking_speed: 10.2, flick_speed: 1.36 },
  desert_eagle: { tracking_speed: 15.8, flick_speed: 1.6 },
  usp2: { tracking_speed: 15.2, flick_speed: 1.58 },
  m1873: { tracking_speed: 18.0, flick_speed: 1.65 },
  trogon: { tracking_speed: 21.0, flick_speed: 1.75 },
  mag7: { tracking_speed: 20.5, flick_speed: 1.72 }
},
recoil: {
  m1887: { x: 0.1, y: 0.35 },
  mp40: { x: 0.08, y: 0.25 },
  m1014: { x: 0.09, y: 0.3 },
  spas12: { x: 0.085, y: 0.28 },
  thompson: { x: 0.08, y: 0.26 },
  ump: { x: 0.075, y: 0.24 },
  mp5: { x: 0.07, y: 0.23 },
  p90: { x: 0.065, y: 0.22 },
  uzi: { x: 0.06, y: 0.2 },
  vector: { x: 0.058, y: 0.18 },
  ak: { x: 0.1, y: 0.35 },
  scar: { x: 0.095, y: 0.33 },
  groza: { x: 0.092, y: 0.32 },
  an94: { x: 0.09, y: 0.31 },
  parafal: { x: 0.085, y: 0.3 },
  famas: { x: 0.09, y: 0.32 },
  aug: { x: 0.088, y: 0.31 },
  xm8: { x: 0.085, y: 0.3 },
  m60: { x: 0.1, y: 0.35 },
  m249: { x: 0.12, y: 0.4 },
  m4a1: { x: 0.09, y: 0.3 },
  m82b: { x: 0.13, y: 0.45 },
  awm: { x: 0.12, y: 0.42 },
  kar98k: { x: 0.11, y: 0.4 },
  desert_eagle: { x: 0.075, y: 0.25 },
  usp2: { x: 0.07, y: 0.23 },
  m1873: { x: 0.1, y: 0.28 },
  trogon: { x: 0.14, y: 0.45 },
  mag7: { x: 0.13, y: 0.42 }
}

};

const player = {
  cameraPos: new Vector3(0, 1.5, 0),
  cameraForward: new Vector3(0, 0, 1),
  cameraRight: new Vector3(1, 0, 0),
  cameraUp: new Vector3(0, 1, 0)
};

const enemy = {
  bone_HeadPos: new Vector3(-0.0456970781, -0.004478302, -0.0200432576)

};

const allWeapons = [
  "default", "m1887", "mp40", "m1014", "spas12", "thompson", "ump", "mp5", "p90", "uzi", "vector",
  "parafal", "ak", "scar", "groza", "an94", "ac80", "m14", "famas", "aug", "xm8", "m60", "m249",
  "m4a1", "m82b", "awm", "kar98k", "desert_eagle", "usp2", "m1873", "trogon", "mag7"
];

const state = { firing: true };

for (const weapon of allWeapons) {
  console.log(`\n--- AIMING WITH: ${weapon.toUpperCase()} ---`);
  aimEngine.updateAimAndFire(player, enemy, weapon, state);
}

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
    this.recoilOffset = Vector3.zero();
    this.smoothedRecoilOffset = Vector3.zero();
    this.lastUpdateTime = null;
  }

  updateEnemyVelocity(currentPos, currentTime) {
    if (this.prevEnemyPos == null) {
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

  predictHeadPosition(headPos, leadTime) {
    let predicted = headPos.add(this.enemyVelocity.multiplyScalar(leadTime));
    const offsetVec = predicted.subtract(headPos);
    if (offsetVec.length() > this.config.maxLeadDistance) {
      predicted = headPos.add(offsetVec.normalize().multiplyScalar(this.config.maxLeadDistance));
    }
    return predicted;
  }

  updateRecoilOffset(newRecoilOffset) {
    this.smoothedRecoilOffset = new Vector3(
      this.smoothedRecoilOffset.x * this.config.recoilSmoothFactor + newRecoilOffset.x * (1 - this.config.recoilSmoothFactor),
      this.smoothedRecoilOffset.y * this.config.recoilSmoothFactor + newRecoilOffset.y * (1 - this.config.recoilSmoothFactor),
      this.smoothedRecoilOffset.z * this.config.recoilSmoothFactor + newRecoilOffset.z * (1 - this.config.recoilSmoothFactor),
    );
  }

  smoothAim(targetPos) {
    this.smoothAimPos = new Vector3(
      this.smoothAimPos.x * this.config.smoothFactor + targetPos.x * (1 - this.config.smoothFactor),
      this.smoothAimPos.y * this.config.smoothFactor + targetPos.y * (1 - this.config.smoothFactor),
      this.smoothAimPos.z * this.config.smoothFactor + targetPos.z * (1 - this.config.smoothFactor),
    );
    return this.smoothAimPos.clone();
  }

  getAimPosition(playerPos, bone_HeadPos, cameraForward, cameraRight, cameraUp, recoilOffset, currentTime) {
  this.updateEnemyVelocity(bone_HeadPos, currentTime);
  this.updateRecoilOffset(recoilOffset);
  const predictedHead = this.predictHeadPosition(bone_HeadPos, this.config.leadTime);
  const worldAimVec = predictedHead.subtract(playerPos);
    const cameraForwardNorm = cameraForward.normalize();
    const cameraRightNorm = cameraRight.normalize();
    const cameraUpNorm = cameraUp.normalize();
    let localAimVec = worldToCameraSpace(worldAimVec, cameraForwardNorm, cameraRightNorm, cameraUpNorm);
    const localRecoilOffset = worldToCameraSpace(this.smoothedRecoilOffset, cameraForwardNorm, cameraRightNorm, cameraUpNorm);
    localAimVec = localAimVec.subtract(localRecoilOffset);
    const smoothLocalAim = this.smoothAim(localAimVec);
    const smoothWorldAim = cameraToWorldSpace(smoothLocalAim, cameraForwardNorm, cameraRightNorm, cameraUpNorm);
    const finalAimPos = playerPos.add(smoothWorldAim);
    return finalAimPos;
  }
}

function demoAimLock() {
  const aimLock = new AimLockHeadLock({
    leadTime: 0.15,
    smoothFactor: 0.9,
    maxLeadDistance: 3,
    recoilSmoothFactor: 0.8,
  });

  const playerPos = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);
  const cameraForward = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);
  const cameraRight = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);
  const cameraUp = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);

  // Khởi tạo bone_HeadPos với tọa độ xyz yêu cầu
  const enemy = {
    bone_HeadPos: new Vector3(-0.0456970781, -0.004478302, -0.0200432576),
  };

  let recoilOffset = new Vector3(0, 0, 0);
  const startTime = Date.now();

  setInterval(() => {
    const t = (Date.now() - startTime) / 1000;

    // Nếu muốn, thêm chuyển động nhẹ quanh vị trí ban đầu
    enemy.bone_HeadPos.x = -0.0456970781 + Math.sin(t * 2) * 0.005;  // dao động rất nhỏ
    enemy.bone_HeadPos.z = -0.0200432576 + Math.cos(t * 2) * 0.005;

    recoilOffset.x = Math.sin(t * 10) * 0.05;
    recoilOffset.y = Math.cos(t * 10) * 0.03;

    const aimPos = aimLock.getAimPosition(
      playerPos,
      enemy.bone_HeadPos,
      cameraForward,
      cameraRight,
      cameraUp,
      recoilOffset,
      Date.now()
    );

    console.log(`Aim Position: x=${aimPos.x.toFixed(4)} y=${aimPos.y.toFixed(4)} z=${aimPos.z.toFixed(4)}`);
  }, 16);
}

demoAimLock();

// Ví dụ cấu trúc enemy có bone head và velocity
const enemy = {
  head: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
  velocity: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
  armorLevel: 2 // ví dụ level giáp
};

function predictEnemyHead(enemy, deltaTime) {
  return {
    x: enemy.head.x + enemy.velocity.x * deltaTime,
    y: enemy.head.y + enemy.velocity.y * deltaTime,
    z: enemy.head.z + enemy.velocity.z * deltaTime
  };
}

function applyKalmanFilter(current, previous, kalmanState) {
  const alpha = kalmanState.alpha || 0.75;
  return {
    x: alpha * current.x + (1 - alpha) * previous.x,
    y: alpha * current.y + (1 - alpha) * previous.y,
    z: alpha * current.z + (1 - alpha) * previous.z
  };
}

function applyEMASmoothing(current, last, factor = 0.65) {
  return {
    x: factor * current.x + (1 - factor) * last.x,
    y: factor * current.y + (1 - factor) * last.y,
    z: factor * current.z + (1 - factor) * last.z
  };
}

function compensateArmor(headPos, enemy) {
  const armorFactor = enemy.armorLevel ? (1 - enemy.armorLevel * 0.1) : 1;
  return {
    x: headPos.x,
    y: headPos.y + 0.015 * armorFactor, // bám đỉnh đầu qua mũ/giáp
    z: headPos.z
  };
}

function computeFinalAim(localPlayer, enemy, lastTracked, kalmanState) {
  const deltaTime = getFrameDeltaTime();
  const predictedHead = predictEnemyHead(enemy, deltaTime);
  const armorAdjusted = compensateArmor(predictedHead, enemy);
  const smoothed = applyEMASmoothing(armorAdjusted, lastTracked);
  const filtered = applyKalmanFilter(smoothed, lastTracked, kalmanState);
  return filtered;
}

function aimAtVector(camera, targetVec) {
  const aimVec = {
    x: targetVec.x - camera.x,
    y: targetVec.y - camera.y,
    z: targetVec.z - camera.z
  };

  // normalize vector
  const length = Math.sqrt(aimVec.x ** 2 + aimVec.y ** 2 + aimVec.z ** 2);
  const norm = {
    x: aimVec.x / length,
    y: aimVec.y / length,
    z: aimVec.z / length
  };

  // convert to pitch and yaw angles
  const pitch = -Math.asin(norm.y);
  const yaw = Math.atan2(norm.x, norm.z);

  return { pitch, yaw };
}

// Hàm giả lập lấy deltaTime giữa các frame (bạn cần thay bằng code thực tế)
function getFrameDeltaTime() {
  return 0.016; // 16ms ~ 60fps
}
}

function lockToHead(localPlayer, enemy, camera, state) {
  // Bổ sung tọa độ bone head cụ thể vào enemy.head
  enemy.head = {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  };

  // Tính toán vị trí đầu dự đoán (bù giáp, làm mượt, Kalman)
  const targetVec = computeFinalAim(localPlayer, enemy, state.lastVec, state.kalman);

  // Tính góc quay để ngắm vào đầu
  const aimAngles = aimAtVector(camera, targetVec);

  // Tự động bắn nếu crosshair gần đầu
  if (state.autoFire && isCrosshairNearHead(camera, targetVec)) {
    triggerAutoFire();
  }

  // Áp dụng góc aim
  applyAimAngles(aimAngles.pitch, aimAngles.yaw);

  // Cập nhật vị trí cuối để làm mượt lần sau
  state.lastVec = targetVec;
}

function isCrosshairNearHead(camera, headVec) {
  const dx = Math.abs(camera.target.x - headVec.x);
  const dy = Math.abs(camera.target.y - headVec.y);
  const dz = Math.abs(camera.target.z - headVec.z);
  const distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
  return distance < 0.1; // ngưỡng auto fire
}

function triggerAutoFire() {
  if (!isFiring()) {
    simulateMouseDown();
    setTimeout(() => simulateMouseUp(), 60); // auto-tap
  }
}

function updateKalmanState(state, newVec) {
  state.lastEstimate = newVec;
  return state;
}

function getFrameDeltaTime() {
  const now = performance.now();
  const dt = (now - (globalThis.lastFrame || now)) / 1000;
  globalThis.lastFrame = now;
  return dt;
}

function applyAimAngles(pitch, yaw) {
  // Hook hệ thống hoặc inject trực tiếp vào bộ xử lý chuột
  sendInputToMouse({
    deltaX: yaw * sensitivityConfig.yaw,
    deltaY: pitch * sensitivityConfig.pitch
  });
}

/**
 * Chọn mục tiêu tốt nhất dựa trên khoảng cách và góc nhìn, sử dụng offset cố định cho xương đầu
 * @param {Object} localPlayer - Người chơi, gồm {x, y, z, cameraYaw, camera}
 * @param {Array} enemies - Danh sách kẻ địch, mỗi kẻ địch có vị trí gốc {x,y,z} và health
 * @param {number} maxAngleDiff - Giới hạn góc nhìn tối đa (mặc định ±60 độ)
 * @returns {Object|null} - Trả về mục tiêu phù hợp hoặc null nếu không có
 */
function smartEnemySelector(localPlayer, enemies, maxAngleDiff = 60) {
  let closest = null;
  let bestScore = Infinity;

  // Offset cố định của bone_Head so với gốc nhân vật (theo nghiên cứu game)
  const headOffset = {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  };

  enemies.forEach(enemy => {
    if (enemy.health <= 0) return;

    // Ước lượng vị trí đầu dựa vào vị trí gốc cộng offset cố định
    const headPos = {
      x: enemy.x + headOffset.x,
      y: enemy.y + headOffset.y,
      z: enemy.z + headOffset.z
    };

    const dx = headPos.x - localPlayer.x;
    const dy = headPos.y - localPlayer.y;
    const dz = headPos.z - localPlayer.z;
    const dist = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);

    const angleToEnemy = getAngleTo(headPos, localPlayer.camera);
    const angleDiff = Math.abs(angleToEnemy - localPlayer.cameraYaw);

    if (angleDiff > maxAngleDiff) return;

    const score = dist + angleDiff * 15;

    if (score < bestScore) {
      bestScore = score;
      closest = {
        ...enemy,
        head: headPos // Lưu lại vị trí đầu đã tính để dùng sau
      };
    }
  });

  return closest;
}

function mainAimLoop(localPlayer, enemies, state) {
  const target = smartEnemySelector(localPlayer, enemies);

  if (target) {
    lockToHead(localPlayer, target, localPlayer.camera, state);
    state.kalman = updateKalmanState(state.kalman, state.lastVec);
  }
}

const sensitivityConfig = {
  yaw: 0.01,   // tỉ lệ điều chỉnh ngang
  pitch: 0.01  // tỉ lệ điều chỉnh dọc
};

function getAngleTo(targetVec, camera) {
  const dx = targetVec.x - camera.position.x;
  const dy = targetVec.y - camera.position.y;
  const dz = targetVec.z - camera.position.z;

  const distance = Math.sqrt(dx ** 2 + dz ** 2);
  const pitch = -Math.atan2(dy, distance); // góc dọc
  const yaw = Math.atan2(dx, dz);          // góc ngang

  return { pitch, yaw };
}

function sendInputToMouse({ deltaX, deltaY }) {
  // Cần hook hoặc thư viện native để tương tác với input chuột
  nativeMouse.moveRelative(deltaX, deltaY);
}

function simulateMouseDown() {
  nativeMouse.pressButton('left');
}

function simulateMouseUp() {
  nativeMouse.releaseButton('left');
} 
function adjustForTerrainElevation(headVec, terrainMap) {
  const groundHeight = terrainMap.getHeightAt(headVec.x, headVec.z);
  const elevationOffset = headVec.y - groundHeight;

  if (elevationOffset > 2.5) {
    headVec.y -= 0.05; // hạ đầu khi trên cao
  } else if (elevationOffset < 0.5) {
    headVec.y += 0.04; // nâng đầu nếu ở thấp
  }

  return headVec;
}
function predictByPing(vec, velocity, pingMs) {
  const t = pingMs / 1000;
  return {
    x: vec.x + velocity.x * t,
    y: vec.y + velocity.y * t,
    z: vec.z + velocity.z * t
  };
}

const { getEnemyHead, predictHeadPosition } = require('./Predict');
const { updateKalmanFilter } = require('./Kalman');
const { smoothAim, getAngleTo, sendInputToMouse, simulateMouseDown, simulateMouseUp } = require('./AimLogicUtils');
const { getClosestEnemy } = require('./Targeting');
const terrainMap = require('./TerrainMap');

let currentTarget = null;
let trackingData = {};

function AimLoop(localPlayer, enemyList, camera, config) {
  if (!localPlayer || !enemyList || enemyList.length === 0) return;

  const enemy = getClosestEnemy(enemyList, localPlayer.position, camera.direction, config.fov, currentTarget);
  if (!enemy) {
    currentTarget = null;
    return;
  }

  const rawHead = getEnemyHead(enemy);
  const adjustedHead = adjustForTerrainElevation(rawHead, terrainMap);
  const predictedHead = predictHeadPosition(adjustedHead, enemy.velocity, config.frameDelay, config.ping);

  const kalmanHead = updateKalmanFilter(enemy.id, predictedHead, trackingData);
  const aimAngle = getAngleTo(kalmanHead, camera);

  const smoothedAngle = smoothAim(aimAngle, camera.rotation, config.smoothness, config.randomize);
  const deltaYaw = smoothedAngle.yaw - camera.rotation.yaw;
  const deltaPitch = smoothedAngle.pitch - camera.rotation.pitch;

  sendInputToMouse({
    deltaX: deltaYaw * config.sensitivity.yaw,
    deltaY: deltaPitch * config.sensitivity.pitch
  });

  if (config.autoFire && Math.abs(deltaYaw) < 0.01 && Math.abs(deltaPitch) < 0.01) {
    simulateMouseDown();
    setTimeout(simulateMouseUp, config.fireDelay);
  }

  currentTarget = enemy.id;
}

module.exports = {
  AimLoop
};
const { AimLoop } = require('./AimLoop');
const { getLocalPlayer, getEnemies, getCamera } = require('./GameMemory');
const terrainMap = require('./TerrainMap');

let config = {
  fov: 25,
  smoothness: 0.65,
  randomize: true,
  autoFire: true,
  fireDelay: 15,
  frameDelay: 2,
  ping: 40,
  sensitivity: {
    yaw: 1.1,
    pitch: 1.15
  }
};

function initEngine(customConfig) {
  if (customConfig) Object.assign(config, customConfig);
  console.log('[AimLockEngine] Initialized with config:', config);
}

function updateFrame() {
  const localPlayer = getLocalPlayer();
  const enemyList = getEnemies();
  const camera = getCamera();

  AimLoop(localPlayer, enemyList, camera, config);
}

module.exports = {
  initEngine,
  updateFrame
};
targetSwitching: {
  enabled: true,
  prioritize: "headWeakArmor", // headWeakArmor | closest | lowestHP
  refreshRateMs: 45,
  predictiveLead: true,
  targetMemoryFrames: 3
}
const validTargets = enemies.filter(e => e.visible && e.headExposed);
validTargets.sort((a, b) => {
  if (config.targetSwitching.prioritize === "headWeakArmor") {
    return (a.armorLevel - b.armorLevel) || (a.distance - b.distance);
  }
  return a.distance - b.distance;
});
const selectedTarget = validTargets[0];
autoLearn: {
  enabled: true,
  learningRate: 0.015,
  curvatureMemory: 6,
  adjustForFlick: true,
  decayRate: 0.005,
  realtimeFeedback: true
}
if (config.autoLearn.enabled) {
  engine.learnTrackingCurve(enemy, weapon, feedback); // feedback = kết quả bắn gần nhất
}
class TargetSelector {
  constructor() {
    this.currentTarget = null;
    this.flickCooldownMs = 200;
    this.lastSwitchTime = 0;
  }
/**
 * Điều chỉnh tâm aim sau khi kéo:
 * - Không giật về giáp (neck/shoulder)
 * - Kéo nhẹ tới giữa đầu
 * - Kéo nặng khi gần sát đỉnh đầu
 * 
 * @param {object} currentPos - {x, y} vị trí tâm hiện tại
 * @param {object} targetHeadPos - {x, y} vị trí đỉnh đầu mục tiêu
 * @param {object} armorZonePos - {x, y} vị trí vùng giáp (neck/shoulder)
 * @param {number} pullDistance - khoảng cách kéo từ tâm cũ tới đỉnh đầu (px)
 * @returns {object} vị trí tâm mới đã điều chỉnh
 */
function adjustAimAfterPull(currentPos, targetHeadPos, armorZonePos, pullDistance, boneData = {}) {
  const distToHead = Math.hypot(currentPos.x - targetHeadPos.x, currentPos.y - targetHeadPos.y);
  const distToArmor = Math.hypot(currentPos.x - armorZonePos.x, currentPos.y - armorZonePos.y);

  // --- BONE HEAD DATA (ưu tiên lock)
  const bone_Head = boneData.bone_Head || {
    offset: {x: -0.0456970781, y: -0.004478302, z: -0.0200432576},
    radius: 360.0
  };

  // 1. Hạn chế kéo lệch về giáp (chỉ kéo nhẹ 30%)
  if (distToArmor < distToHead * 0.7) {
    currentPos.x += (armorZonePos.x - currentPos.x) * 0.3;
    currentPos.y += (armorZonePos.y - currentPos.y) * 0.3;
  }

  // 2. Kéo nhẹ tới giữa đầu (easing)
  const t = Math.min(1, pullDistance / 50);
  const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
  const easeFactor = easeOutQuad(t);

  currentPos.x += (targetHeadPos.x - currentPos.x) * easeFactor * 0.6;
  currentPos.y += (targetHeadPos.y - currentPos.y) * easeFactor * 0.6;

  // 3. Kéo mạnh hơn khi gần bone_Head (trong vùng lock)
  const boneRadius = bone_Head.radius || 360.0;
  const distToBoneHead = Math.hypot(currentPos.x - targetHeadPos.x + bone_Head.offset.x, currentPos.y - targetHeadPos.y + bone_Head.offset.y);

  if (distToBoneHead < boneRadius) {
    const heavyPullFactor = (boneRadius - distToBoneHead) / boneRadius;
    currentPos.x += (targetHeadPos.x - currentPos.x + bone_Head.offset.x) * heavyPullFactor * 0.9;
    currentPos.y += (targetHeadPos.y - currentPos.y + bone_Head.offset.y) * heavyPullFactor * 0.9;
  }

  return currentPos;
}
function adjustAimAfterPull(currentPos, targetHeadPos, armorZonePos, pullDistance, boneInfo) {
  // Lấy offset nếu có
  if (boneInfo && boneInfo.offset) {
    targetHeadPos = {
      x: targetHeadPos.x + boneInfo.offset.x,
      y: targetHeadPos.y + boneInfo.offset.y
    };
  }

  // Tính khoảng cách tới head và armor
  const distToHead = Math.hypot(currentPos.x - targetHeadPos.x, currentPos.y - targetHeadPos.y);
  const distToArmor = Math.hypot(currentPos.x - armorZonePos.x, currentPos.y - armorZonePos.y);

  // 1. Giảm kéo về armor nếu nó gần hơn
  if (distToArmor < distToHead * 0.7) {
    currentPos.x += (armorZonePos.x - currentPos.x) * 0.3;
    currentPos.y += (armorZonePos.y - currentPos.y) * 0.3;
  }

  // 2. Kéo nhẹ đến head bằng easeOutQuad
  const t = Math.min(1, pullDistance / 50);
  const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
  const easeFactor = easeOutQuad(t);

  currentPos.x += (targetHeadPos.x - currentPos.x) * easeFactor * 0.6;
  currentPos.y += (targetHeadPos.y - currentPos.y) * easeFactor * 0.6;

  // 3. Nếu gần head trong phạm vi radius → kéo mạnh hơn
  const headRadius = (boneInfo && boneInfo.radius) || 6.5;
  if (distToHead < headRadius) {
    const heavyPullFactor = (headRadius - distToHead) / headRadius;
    currentPos.x += (targetHeadPos.x - currentPos.x) * heavyPullFactor * 0.7;
    currentPos.y += (targetHeadPos.y - currentPos.y) * heavyPullFactor * 0.7;
  }

  return currentPos;
} 
class PcSimAimSensitivity {
  constructor({
    baseSensitivity = 0.8,       // base nhạy thấp hơn do DPI cao
    maxSensitivity = 2.0,        // max nhạy giảm chút để mượt
    rampUpTimeMs = 180,          // ramp-up nhanh hơn
    sensitivityScale = 1.0       // scale tổng cuối áp dụng cho màn giả lập
  } = {}) {
    this.baseSensitivity = baseSensitivity;
    this.maxSensitivity = maxSensitivity;
    this.rampUpTimeMs = rampUpTimeMs;
    this.sensitivityScale = sensitivityScale;

    this.currentSensitivity = baseSensitivity;
    this.isShooting = false;
    this.shootStartTime = 0;
    this.lastMouseDelta = 0;
  }

  update(isShootingNow, mouseDelta) {
    const now = Date.now();

    if (isShootingNow) {
      if (!this.isShooting) {
        this.isShooting = true;
        this.shootStartTime = now;
      }
      const elapsed = now - this.shootStartTime;
      const rampFactor = Math.min(1, elapsed / this.rampUpTimeMs);

      // adaptive sensitivity theo tốc độ chuột (mouseDelta)
      const speedFactor = Math.min(1, mouseDelta / 15); // 15 là ngưỡng tốc độ lớn
      const adaptiveRamp = rampFactor * (0.5 + 0.5 * speedFactor);

      this.currentSensitivity = this.baseSensitivity +
        adaptiveRamp * (this.maxSensitivity - this.baseSensitivity);
    } else {
      this.isShooting = false;
      this.currentSensitivity = this.baseSensitivity;
    }
    // Áp scale màn giả lập
    return this.currentSensitivity * this.sensitivityScale;
  }
}
  autoSwitchTarget(enemies) {
    const now = Date.now();
    const candidates = enemies.filter(e => e.visible && e.health > 0);

    if (candidates.length === 0) {
      this.currentTarget = null;
      return null;
    }

    // Sắp xếp ưu tiên giáp đầu yếu, gần, góc nhỏ
    candidates.sort((a, b) => {
      if (a.headArmor !== b.headArmor) {
        return a.headArmor - b.headArmor;
      }
      if (a.distance !== b.distance) {
        return a.distance - b.distance;
      }
      return a.angle - b.angle;
    });

    if (
      this.currentTarget &&
      candidates.includes(this.currentTarget) &&
      (now - this.lastSwitchTime) < this.flickCooldownMs
    ) {
      return this.currentTarget;
    }

    this.currentTarget = candidates[0];
    this.lastSwitchTime = now;
    return this.currentTarget;
  }
}
class FlickRecovery {
  constructor(flickRecoveryMs = 150) {
    this.flickRecoveryMs = flickRecoveryMs;
    this.active = false;
    this.lastFlickTime = 0;
    this.flickCount = 0;
  }

  update() {
    const now = Date.now();

    if (!this.active) {
      // Bắt đầu flick
      this.active = true;
      this.lastFlickTime = now;
      this.flickCount = 1;
      return false; // chưa recover
    } else {
      const interval = now - this.lastFlickTime;
      this.lastFlickTime = now;

      if (interval < 100) {
        this.flickCount++;
        this.flickRecoveryMs = Math.min(300, 150 + this.flickCount * 20);
      } else {
        this.flickCount = 1;
        this.flickRecoveryMs = 150;
      }

      if (now - this.lastFlickTime > this.flickRecoveryMs) {
        this.active = false;
        return true; // flick recovered
      }
      return false; // flick chưa recover
    }
  }

  reset() {
    this.active = false;
    this.flickCount = 0;
    this.lastFlickTime = 0;
    this.flickRecoveryMs = 150;
  }
const targetSelector = new TargetSelector();
const flickRecovery = new FlickRecovery(150);

function update(enemies) {
  const target = targetSelector.autoSwitchTarget(enemies);

  if (target) {
    const recovered = flickRecovery.update();
    if (recovered) {
      // xử lý flick recovered: micro correction, etc
    } else {
      // đang flick, giữ aim ổn định
    }
  }
}
const config = {
  fake_screen: {
    resolution: "1080x2400",
    dpi: 1440,
    emulate_pc_crosshair: { x: 1.46, y: 1.62 },
    tweaks: 22080,
    location_pc_crosshair: { x: 80.0, y: 56.7 }
  },
  auto_fov: {
    dynamic_adjust: true,
    max: 7.5
  },
  math: {
    predictive_offset: 0.27
  },
  headlock: {
    enabled: true,
    biasFactor: 1.68,
    lockHeightRatio: 0.988,
    crosshairMagnetism: true,
    adaptiveRange: true,
    distanceCompensation: true,
    velocityAdaption: true,
    headTopSnap: true,
    fallbackToNeck: false,
    smoothTracking: "EMA+Kalman",
    zigzagPrediction: true,
    autoFireOnSnap: true
  },
  aiTopHeadLock: {
    enabled: true,
    scanPrecision: 0.98,
    stabilityCurve: "sigmoid",
    curveFactor: 0.87,
    autoCorrect: true,
    adaptiveZ: true,
    momentumInertia: 0.92,
 headBoneZone: {
  bone: "bone_Head",
  offset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }, // vị trí thật của xương head
  radius: 360.0
}
    predictJitterFix: true,
    verticalBias: -0.5,
    horizontalSwayControl: 0.4,
    smartAnchor: {
      dynamicWeight: true,
      weightDecayRate: 0.02,
      lockRefreshRateMs: 32
    },
    neuralFilter: {
      useKalman: true,
      combineEMA: true,
      blendingRate: 0.6
    },
    deepTargetingMatrix: {
      depthWeighting: true,
      frameLookBack: 4,
      learningMomentum: 0.04
    },
    prediction: {
      leadFactor: 1.12
    }
  },
  const enemy = {
    bone_HeadPos: new Vector3(-0.0456970781, -0.004478302, -0.0200432576), 
    },
      const headOffset = {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  }; 

weapon_profiles: {
  default: { tracking_speed: 15.0, flick_speed: 1.6 },
  m1887: { tracking_speed: 20.0, flick_speed: 1.7, snapBias: 1.35, pull_strength: 1.35 },
  mp40: { tracking_speed: 19.5, flick_speed: 1.68 },
  m1014: { tracking_speed: 19.0, flick_speed: 1.66 },
  spas12: { tracking_speed: 18.5, flick_speed: 1.64 },
  thompson: { tracking_speed: 18.0, flick_speed: 1.62 },
  ump: { tracking_speed: 17.5, flick_speed: 1.6 },
  mp5: { tracking_speed: 17.0, flick_speed: 1.58 },
  p90: { tracking_speed: 16.5, flick_speed: 1.56 },
  uzi: { tracking_speed: 16.0, flick_speed: 1.55 },
  vector: { tracking_speed: 15.5, flick_speed: 1.54 },
  parafal: { tracking_speed: 16.8, flick_speed: 1.6 },
  ak: { tracking_speed: 15.2, flick_speed: 1.55 },
  scar: { tracking_speed: 15.0, flick_speed: 1.52 },
  groza: { tracking_speed: 14.8, flick_speed: 1.5 },
  an94: { tracking_speed: 14.5, flick_speed: 1.48 },
  ac80: { tracking_speed: 7.5, flick_speed: 1.75, recoilcontrol: true },
  m14: { tracking_speed: 13.8, flick_speed: 1.52 },
  famas: { tracking_speed: 14.5, flick_speed: 1.5 },
  aug: { tracking_speed: 14.8, flick_speed: 1.52 },
  xm8: { tracking_speed: 14.0, flick_speed: 1.48 },
  m60: { tracking_speed: 13.5, flick_speed: 1.46 },
  m249: { tracking_speed: 13.2, flick_speed: 1.44 },
  m4a1: { tracking_speed: 14.5, flick_speed: 1.5 },
  m82b: { tracking_speed: 10.0, flick_speed: 1.35 },
  awm: { tracking_speed: 10.5, flick_speed: 1.37 },
  kar98k: { tracking_speed: 10.2, flick_speed: 1.36 },
  desert_eagle: { tracking_speed: 15.8, flick_speed: 1.6 },
  usp2: { tracking_speed: 15.2, flick_speed: 1.58 },
  m1873: { tracking_speed: 18.0, flick_speed: 1.65 },
  trogon: { tracking_speed: 21.0, flick_speed: 1.75 },
  mag7: { tracking_speed: 20.5, flick_speed: 1.72 }
},
recoil: {
  m1887: { x: 0.1, y: 0.35 },
  mp40: { x: 0.08, y: 0.25 },
  m1014: { x: 0.09, y: 0.3 },
  spas12: { x: 0.085, y: 0.28 },
  thompson: { x: 0.08, y: 0.26 },
  ump: { x: 0.075, y: 0.24 },
  mp5: { x: 0.07, y: 0.23 },
  p90: { x: 0.065, y: 0.22 },
  uzi: { x: 0.06, y: 0.2 },
  vector: { x: 0.058, y: 0.18 },
  ak: { x: 0.1, y: 0.35 },
  scar: { x: 0.095, y: 0.33 },
  groza: { x: 0.092, y: 0.32 },
  an94: { x: 0.09, y: 0.31 },
  parafal: { x: 0.085, y: 0.3 },
  famas: { x: 0.09, y: 0.32 },
  aug: { x: 0.088, y: 0.31 },
  xm8: { x: 0.085, y: 0.3 },
  m60: { x: 0.1, y: 0.35 },
  m249: { x: 0.12, y: 0.4 },
  m4a1: { x: 0.09, y: 0.3 },
  m82b: { x: 0.13, y: 0.45 },
  awm: { x: 0.12, y: 0.42 },
  kar98k: { x: 0.11, y: 0.4 },
  desert_eagle: { x: 0.075, y: 0.25 },
  usp2: { x: 0.07, y: 0.23 },
  m1873: { x: 0.1, y: 0.28 },
  trogon: { x: 0.14, y: 0.45 },
  mag7: { x: 0.13, y: 0.42 }
  },
  antiban: {
    randomizeTiming: true,
    noiseInjection: true,
    hideSignature: true,
    humanizeInput: true,
    eventMasking: true,
    packetDelayJitter: true,
    frameDropSimulator: true,
    aimRandomBias: true,
    detectionBypass: true,
    obfuscationLayer: true,
    safeThreadExecution: true,
    systemHookBypass: true,
    memoryFootprintReducer: true,
    antiScreenSpy: true,
    codeShuffler: true,
    secureKeyRotation: true,
    inputRateLimiter: true,
    dynamicResponseTime: true,
    internalAPIEncrypt: true
  }
};
const engine = new AimLockEngine(config);

let prevMousePos = { x: 960, y: 432 };  // Màn hình 1920x864
let currentMousePos = { x: 960, y: 432 };

function updateMousePosition(newX, newY) {
  currentMousePos.x = newX;
  currentMousePos.y = newY;
}

function getMouseDelta() {
  const deltaX = Math.abs(currentMousePos.x - prevMousePos.x);
  const deltaY = Math.abs(currentMousePos.y - prevMousePos.y);

  prevMousePos.x = currentMousePos.x;
  prevMousePos.y = currentMousePos.y;

  return deltaX + deltaY;
}

// Bộ điều khiển độ nhạy chuột
const sensitivityController = new SensitivityController(
  1.0,  // base sensitivity
  1.3,  // firing multiplier
  1.2   // drag multiplier
);

const player = { fps_stable: true };
let t = 0;

// Loop chính chạy mỗi 100ms
setInterval(() => {
  // Giả lập dao động chuột (drag nhẹ)
  const newX = currentMousePos.x + (Math.random() * 4 - 2);
  const newY = currentMousePos.y + (Math.random() * 4 - 2);
  updateMousePosition(newX, newY);

  const mouseDelta = getMouseDelta();
  const isFiring = true;

  // Cập nhật sensitivity theo trạng thái
  const effectiveSensitivity = sensitivityController.getEffectiveSensitivity(isFiring, mouseDelta > 1);
  engine.setSensitivity(effectiveSensitivity);

  // Giả lập dao động mục tiêu
  const jitterX = Math.sin(t / 10) * 0.05;
  const jitterZ = Math.cos(t / 15) * 0.07;

  const enemySim = {
    position: { x: 20 + jitterX, y: 4, z: jitterZ },
    velocity: { x: 0.12 + jitterX, y: 0.01, z: jitterZ },
    visible: true,
    distance: 13,
    angle: 2.5,
    height: 1.8
  };

  weaponList.forEach(weapon => {
  engine.updateAimAndFire(player, enemySim, weapon, { jumping: true });
});

  t++;
}, 100);

const bodyZones = [
  {
    bone: "bone_Hips_Spine",
    offset: { x: -0.219812, y: 0, z: 0 },
    radius: 0.0001,

    lockTarget: false
  },
  {
    bone: "bone_Hips",
    offset: { x: -0.05334, y: -0.003515, z: -0.000763 },
    radius: 0.0001,

    lockTarget: false
  },
  {
    bone: "bone_Spine",
    offset: { x: -0.021448, y: 0.0, z: 0.0 },
    radius: 0.0001,

    lockTarget: false
  },
  {
    bone: "bone_Spine1",
    offset: { x: -0.07382, y: 0.0, z: 0.0 },
    radius: 0.0001,

    lockTarget: false
  },
  {
    bone: "bone_Neck",
    offset: { x:  -0.045697, y: -0.004478, z: 0.020043 },
    radius: 4,

    lockTarget: false
  },
 
  
        const bone_Head = {
    name: "bone_Head",
    offset: {
      x: -0.0456970781,
      y: -0.004478302,
      z: -0.0200432576
    },
    position: {
      x: -0.0456970781,
      y: -0.004478302,
      z: -0.0200432576
    },
    rotation: {
      x: 0.0258174837,
      y: -0.08611039,
      z: -0.1402113,
      w: 0.9860321
    },
    scale: {
      x: 0.99999994,
      y: 1.00000012,
      z: 1.0
    }
  };
   radius: 360.0,

  // 🎯 Khóa chặt vào bone_Head khi tâm vào vùng
  autoLockOn: true,

  // ✅ Chỉ nhận diện bone_Head, không bone khác
  exclusiveTargeting: true,

  // 🔒 Tăng độ chính xác khi kẻ địch di chuyển
  stickyLock: true,

  // 💪 Mức độ giữ tâm trên đầu
  lockStrength: 1.0,
    lockTarget: true
  }
];

public class AimAssist : MonoBehaviour
{
    public float aimSpeed = 999.0f;
    public float aimRange = 999.0f;
    public LayerMask enemyLayer;

    private void Update()
    {
        Enemy currentEnemy = GetCurrentEnemy();
        if (currentEnemy == null) return;

        Vector3 directionToHead = (currentEnemy.headCollider.transform.position - transform.position).normalized;
        float distance = Vector3.Distance(transform.position, currentEnemy.headCollider.transform.position);

        if (distance <= aimRange)
        {
            Quaternion targetRotation = Quaternion.LookRotation(directionToHead);
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, aimSpeed * Time.deltaTime);
        }
    }

    private Enemy GetCurrentEnemy()
    {
        // Cách đơn giản nhất: tìm enemy gần nhất có tag "Enemy"
        Enemy[] enemies = FindObjectsOfType<Enemy>();
        float minDist = Mathf.Infinity;
        Enemy closest = null;

        foreach (Enemy e in enemies)
        {
            float dist = Vector3.Distance(transform.position, e.headCollider.transform.position);
            if (dist < minDist && dist <= aimRange)
            {
                minDist = dist;
                closest = e;
            }
        }
        return closest;
    }
}

public class LockHeadEnemyMovement : MonoBehaviour
{
    public Transform playerCamera;
    public Transform enemyHead;

    private void Update()
    {
        Vector3 direction = (playerCamera.position - enemyHead.position).normalized;
        enemyHead.rotation = Quaternion.Slerp(enemyHead.rotation, Quaternion.LookRotation(direction), 8.0f * Time.deltaTime);
    }
}

using UnityEngine;

public class WeaponAccuracy : MonoBehaviour
{
    public float firingRate = 999f;
    public float range = 999f;
    public float spread = 0.1f;
    public string weaponName;

    public Transform bone_Head; // Gán vào xương đầu địch
    public Camera playerCamera;

    // Offset chính xác để aim vào trung tâm đầu
    private Vector3 headOffset = new Vector3(-0.0456970781f, -0.004478302f, -0.0200432576f);
    private Vector3 lastHeadWorldPos;

    private void Shoot()
    {
        if (bone_Head == null || playerCamera == null)
        {
            Debug.LogWarning("Thiếu bone_Head hoặc camera.");
            return;
        }

        float accuracy = CalculateAccuracy();
        Vector3 rawHeadPos = bone_Head.position + headOffset;

        // Tính toán độ di chuyển mục tiêu (drag effect)
        Vector3 headVelocity = (rawHeadPos - lastHeadWorldPos) / Time.deltaTime;
        lastHeadWorldPos = rawHeadPos;

        // Dự đoán vị trí đầu tiếp theo (drag tracking)
        Vector3 predictedHeadPos = rawHeadPos + headVelocity * 0.05f; // 50ms dự đoán trước

        ApplyAccuracy(accuracy, predictedHeadPos);

        // Hiển thị vị trí đầu trên màn hình
        Vector3 screenPos = playerCamera.WorldToScreenPoint(predictedHeadPos);
        Debug.Log("Bone Head ScreenPos: " + screenPos);

        // Debug
        Debug.DrawRay(transform.position, (predictedHeadPos - transform.position).normalized * 50f, Color.red, 0.15f);
    }

    private float CalculateAccuracy()
    {
        float weaponMultiplier = GetWeaponMultiplier(weaponName);
        float accuracy = (firingRate / range) * weaponMultiplier * (1 - (spread / 100));
        return Mathf.Clamp01(accuracy);
    }

    private void ApplyAccuracy(float accuracy, Vector3 targetHeadPosition)
    {
        Vector3 directionToHead = (targetHeadPosition - transform.position).normalized;

        // Kéo nhẹ nhưng giữ chắc vào đầu (kết hợp aim assist + prediction)
        Quaternion desiredRotation = Quaternion.LookRotation(directionToHead);
        transform.rotation = Quaternion.Slerp(transform.rotation, desiredRotation, accuracy * Time.deltaTime * 30f);
    }

    private float GetWeaponMultiplier(string weaponName)
    {
        switch (weaponName.ToLower())
        {
            // Shotgun
            case "m1887":
            case "m1014":
            case "spas12":
            case "mag7":
            case "trogon": return 999.0f;

            // SMG
            case "mp40":
            case "thompson": 
            case "ump":
            case "mp5":
            case "p90":
            case "uzi":
            case "vector": return 999.0f;

            // Rifle
            case "ak":
            case "scar":
            case "groza":
            case "an94":
            case "famas":
            case "aug":
            case "xm8":
            case "m60":
            case "m249":
            case "m4a1":
            case "parafal":
            case "m14": return 999.0f;

            // Sniper
            case "ac80":
            case "awm":
            case "kar98k":
            case "m82b": return 999.0f;

            // Pistol
            case "desert_eagle":
            case "usp2":
            case "m1873": return 999.0f;

            default: return 999.0f;
        }
    }
}

public class LockHeadEnemyMovement : MonoBehaviour
{
    public Transform playerCamera;
    public Transform bone_Head;

    private void Update()
    {
        if (bone_Head == null || playerCamera == null) return;

        Vector3 direction = (playerCamera.position - bone_Head.position).normalized;
        bone_Head.rotation = Quaternion.Slerp(bone_Head.rotation, Quaternion.LookRotation(direction), 8.0f * Time.deltaTime);
    }
}

    private void ApplyAccuracy(float accuracy)
    {
        // Tùy engine, có thể random theo hướng bắn lệch
        Vector3 adjustedDirection = transform.forward + Random.insideUnitSphere * (1 - accuracy) * 0.01f;
        Debug.DrawRay(transform.position, adjustedDirection * range, Color.red, 0.2f);
    
  // 👉 Đây là nơi bạn có thể "fire bullet here"
  // 🔥 Thực hiện bắn đạn từ currentPos về targetHeadPos
  // fireBullet(currentPos, targetHeadPos);

  return currentPos;
}
    }
    function adjustAimAfterPull(currentPos, targetHeadPos, armorZonePos, pullDistance, boneData) {
  const distToHead = Math.hypot(currentPos.x - targetHeadPos.x, currentPos.y - targetHeadPos.y);
  const distToArmor = Math.hypot(currentPos.x - armorZonePos.x, currentPos.y - armorZonePos.y);

  // 1. Giảm độ lệch khi gần armor (chỉ kéo nhẹ 30%)
  if (distToArmor < distToHead * 0.7) {
    currentPos.x += (armorZonePos.x - currentPos.x) * 0.3;
    currentPos.y += (armorZonePos.y - currentPos.y) * 0.3;
  }

  // 2. Dùng easing để kéo mượt về đầu (easeOutQuad)
  const t = Math.min(1, pullDistance / 50);
  const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
  const easeFactor = easeOutQuad(t);

  currentPos.x += (targetHeadPos.x - currentPos.x) * easeFactor * 0.6;
  currentPos.y += (targetHeadPos.y - currentPos.y) * easeFactor * 0.6;

  // 3. Khi rất gần đầu thì kéo mạnh hơn nữa
  if (distToHead < 5) {
    const heavyPullFactor = (5 - distToHead) / 5;
    currentPos.x += (targetHeadPos.x - currentPos.x) * heavyPullFactor * 0.7;
    currentPos.y += (targetHeadPos.y - currentPos.y) * heavyPullFactor * 0.7;
  }

  // 4. Nếu có boneData → áp dụng offset của bone_Head
  if (boneData && boneData.bone_Head && boneData.bone_Head.offset) {
    currentPos.x += boneData.bone_Head.offset.x;
    currentPos.y += boneData.bone_Head.offset.y;
  }

  // 👉 THỰC HIỆN BẮN ĐẠN TẠI ĐÂY
  fireBullet(currentPos, targetHeadPos);

  return currentPos;
}

// Hàm mô phỏng bắn đạn từ vị trí hiện tại tới đầu đối phương
function fireBullet(fromPos, toPos) {
  const direction = {
    x: toPos.x - fromPos.x,
    y: toPos.y - fromPos.y
  };
  const length = Math.hypot(direction.x, direction.y);
  const normalized = {
    x: direction.x / length,
    y: direction.y / length
  };

  console.log("🔥 Fire bullet from:", fromPos, "towards:", toPos, "dir:", normalized);
}

const currentAim = {x: -0.0456970781, y: -0.004478302, z: -0.0200432576 };
const targetHead = { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 };
const armorZone = { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 };
const pullDistance = 40;

  const bone_Head = {
  name: "bone_Head",
  offset: {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  },
  position: {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  },
  rotation: {
    x: 0.0258174837,
    y: -0.08611039,
    z: -0.1402113,
    w: 0.9860321
  },
  scale: {
    x: 0.99999994,
    y: 1.00000012,
    z: 1.0
  },
  radius: 360.0 // 👈 đúng rồi
};
adjustAimAfterPull(currentAim, targetHead, armorZone, pullDistance, boneData);

// ==== Auto-Lock Aim System for bone_Head ====

// Vùng định nghĩa vùng lock xung quanh đầu (collider)
const boneColliders = {
  bone_Head: {
    center: { x: -0.0456970781, y: -0.004478302, z:  -0.0200432576 }, // Tọa độ trung tâm đầu
    radius: 360.0,                     // Bán kính vùng lock
    lockTarget: true                // Bật chế độ cho phép lock
  }
};

// Kiểm tra aim có nằm trong vùng collider đầu hay không
function isWithinHeadCollider(aimPos, headCollider) {
  const dx = aimPos.x - headCollider.center.x;
  const dy = aimPos.y - headCollider.center.y;
  const dz = (aimPos.z || 0) - (headCollider.center.z || 0);
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  return dist <= headCollider.radius;
}

// Lock vào trung tâm đầu nếu đang nằm trong collider
function autoLockToBone(currentAim, boneData) {
  const headCollider = boneData.bone_Head;
  if (!headCollider.lockTarget) return currentAim;

  if (isWithinHeadCollider(currentAim, headCollider)) {
    return {
      x: headCollider.center.x,
      y: headCollider.center.y,
      z: headCollider.center.z || 0
    };
  }

  return currentAim;
}

// Kéo aim về đầu bằng easing (mượt)

function adjustAimAfterPull(currentPos, targetHeadPos, armorZonePos, pullDistance, boneData) {
  const distToHead = Math.hypot(currentPos.x - targetHeadPos.x, currentPos.y - targetHeadPos.y);
  const distToArmor = Math.hypot(currentPos.x - armorZonePos.x, currentPos.y - armorZonePos.y);

  // ✅ Giảm độ ưu tiên về armor để không lệch khỏi đầu
  if (distToArmor < distToHead * 0.5) {
    currentPos.x += (armorZonePos.x - currentPos.x) * 0.1;
    currentPos.y += (armorZonePos.y - currentPos.y) * 0.1;
  }

  // ✅ Easing mạnh hơn để kéo sớm hơn về bone_Head
  const t = Math.min(1, pullDistance / 40); // kéo nhanh hơn
  const easeOutExpo = (x) => 1 - Math.pow(2, -10 * x); // thay easeOutQuad → easeOutExpo
  const easeFactor = easeOutExpo(t);

  currentPos.x += (targetHeadPos.x - currentPos.x) * easeFactor * 0.85;  // kéo mạnh hơn
  currentPos.y += (targetHeadPos.y - currentPos.y) * easeFactor * 0.85;

  // ✅ Khi gần đầu, tăng lực kéo chính xác hơn
  if (distToHead < 6.5) {
    const heavyPullFactor = (6.5 - distToHead) / 6.5;
    currentPos.x += (targetHeadPos.x - currentPos.x) * heavyPullFactor * 0.9;
    currentPos.y += (targetHeadPos.y - currentPos.y) * heavyPullFactor * 0.9;
  }

  return currentPos;
}

// === Test chạy mô phỏng ===

let currentAim = { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 };
let targetHeadPos = { x: -0.0456970781, y: -0.004478302, z:  -0.0200432576 };
let armorPos = { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 };
let pullDistance = 40;

let aimAfterPull = adjustAimAfterPull(currentAim, targetHeadPos, armorPos, pullDistance, boneColliders);
let finalAim = autoLockToBone(aimAfterPull, boneColliders);

console.log("🎯 Final Aim:", finalAim);

using UnityEngine;

public class LockHeadEnemyMovement : MonoBehaviour
{
    public Transform playerCamera;
    public Transform enemyRoot; // Gốc nhân vật
    public Transform bone_Head;

    // Offset cố định từ gốc (ví dụ từ dữ liệu JSON)
    private Vector3 headOffset = new Vector3(x: -0.0456970781f, y: -0.004478302f, z: -0.0200432576f; // bổ sung Z đã chuẩn hóa

    private void Update()
    {
        if (enemyRoot != null && bone_Head == null)
        {
            // Tạo xương đầu ảo nếu chưa có
            GameObject head = new GameObject("Temp_Head");
            head.transform.parent = enemyRoot;
            head.transform.localPosition = headOffset;
            bone_Head = head.transform;
        }

        if (bone_Head == null || playerCamera == null) return;

        // Tính hướng từ camera đến đầu
        Vector3 direction = (playerCamera.position - bone_Head.position).normalized;

        // Xoay đầu về phía camera
        bone_Head.rotation = Quaternion.Slerp(bone_Head.rotation, Quaternion.LookRotation(direction), 8.0f * Time.deltaTime);
    }
}

// Dữ liệu bone_Head với offset chính xác

const bone_Head = {
  name: "bone_Head",
  offset: {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  },
  position: {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  },
  rotation: {
    x: 0.0258174837,
    y: -0.08611039,
    z: -0.1402113,
    w: 0.9860321
  },
  scale: {
    x: 0.99999994,
    y: 1.00000012,
    z: 1.0
  },
  radius: 360.0 // 👈 đúng rồi
};

// Lấy tất cả kẻ địch trong bản đồ
function getAllEnemies() {
  // TODO: Trả về danh sách kẻ địch hiện có trong game
  return enemiesList; // ví dụ giả định
}

// Tính khoảng cách 3D giữa hai điểm
function calculateDistance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

// Tìm kẻ địch gần nhất
function getNearestEnemy() {
  let closestEnemy = null;
  let closestDistance = Infinity;

  for (const enemy of getAllEnemies()) {
    if (!enemy.bone_Head) continue;

    const distance = calculateDistance(player.position, enemy.bone_Head);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestEnemy = enemy;
    }
  }

  return closestEnemy;
}

// Nhắm vào vị trí với hệ thống aim
function aimAt(position) {
  // Có thể dùng moveMouseTo(position.x, position.y) nếu dùng auto mouse
  setAim(position.x, position.y, position.z); // ví dụ gọi hệ thống ngắm
}

// Khóa vào đầu (bone_Head) gần nhất với offset
function lockOnBoneHead() {
  const target = getNearestEnemy();
  if (target && target.bone_Head) {
    const offset = boneData.bone_Head.offset;
    const headPos = {
      x: target.bone_Head.x + offset.x,
      y: target.bone_Head.y + offset.y,
      z: target.bone_Head.z + offset.z
    };
    aimAt(headPos);
  }
}

// Vòng lặp chính: khóa liên tục vào bone_Head
setInterval(() => {
  lockOnBoneHead();
}, 0); // chạy liên tục mỗi frame

function dragAimToBoneHead(currentAim, enemy, boneData, pullSpeed = 0.4) {
  if (!enemy || !enemy.bone_Head) return currentAim;

  const offset = boneData.bone_Head?.offset || {x: -0.0456970781, y: -0.004478302, z: -0.0200432576 };
  const targetHeadPos = {
    x: enemy.bone_Head.x + offset.x,
    y: enemy.bone_Head.y + offset.y,
    z: enemy.bone_Head.z + offset.z
  };

  // Tính khoảng cách hiện tại giữa tâm và đầu
  const dx = targetHeadPos.x - currentAim.x;
  const dy = targetHeadPos.y - currentAim.y;
  const dz = targetHeadPos.z - currentAim.z;

  // Kéo dần đến vị trí đầu với tốc độ pullSpeed
  currentAim.x += dx * pullSpeed;
  currentAim.y += dy * pullSpeed;
  currentAim.z += dz * pullSpeed;

  return currentAim;
}

const bone_Head = {
  name: "bone_Head",
  offset: {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  },
  position: {
    x: -0.0456970781,
    y: -0.004478302,
    z: -0.0200432576
  },
  rotation: {
    x: 0.0258174837,
    y: -0.08611039,
    z: -0.1402113,
    w: 0.9860321
  },
  scale: {
    x: 0.99999994,
    y: 1.00000012,
    z: 1.0
  },
  radius: 360.0 // 👈 đúng rồi
};
   const customConfig = {
    aimlock: {
      enabled: true,
      target_bone: "head_joint",
      tracking_mode: "3d_bone_xyz",
      snap_to_target_on_deviation: true,
      deviation_threshold: 0.00001,       // Nhạy cực cao
      snap_speed: 99.99,                  // Snap cực nhanh
      magnetic_force_snap: {
        enabled: true,
        zone: "head_box",
        trigger_mode: "on_target_visible", // Ngay khi thấy target là hút vào
        pull_strength: 1.0,
        snap_vector_override: {
          mode: "direct_to_center",
          interpolation: false
        },
        delay: 0.0
      },
      stick_to_bone: true,
      stick_strength: 1.0,
      stick_duration: 999.0
    },
    input: {
      aimassist: {
        magnetic_pull: true,
        pull_strength: 1.0,
        pull_decay: 0.0,                   // Không giảm lực theo thời gian
        anchor_on_target_appear: true,
        force_snap_delay: 0.0
      }
    },
    hitdetect: {
      snap_on_deviation: true,
      snap_correction_speed: 99.99,
      strict_region_locking: true,
      lock_zone: "head_box"
    }
  },
     hitdetect: {
      collider: {
        enabled: true,
        custom_head_region: true,
        zone: "head_bounds",
        head_bounds: {
          radius: 0.035,
          height: 0.075,
          center: {
            x: -0.0456970781,
            y: -0.004478302,
            z: -0.0200432576
          }
        }
      },
      lock_weighting_system: {
        "bone:head_joint": 1.0,
        "bone:neck_upper": 0.1,
        "bone:chest": 0.0
      },
      precise_headbox: {
        enabled: true,
        bounds: {
          shape: "capsule",
          radius: 0.028,
          height: 0.066,
          center: {
            x: -0.0456970781,
            y: -0.004478302,
            z: -0.0200432576
          }
        }
      },
      target_priority_bone: "head_joint",
      snap_to_head_on_drift: true,
      snap_correction_speed: 99.9,
      deviation_tolerance: 0.00001,
      snap_on_deviation: true,
      fov_based_filter: true,
      max_fov_angle: 360.0,
      obstruction_check: true,
      force_reselect_on_obstruct: true
    },
    aimlock: {
      enabled: true,
      target_bone: "head_joint",
      tracking_mode: "3d_bone_xyz",
      continuous_lock: {
        enabled: true,
        zone: "head_box",
        priority_bone: "head_joint",
        fallback_enabled: true
      },
      stick_to_bone: true,
      continue_tracking_on_miss: true,
      snap_to_target_on_deviation: true,
      deviation_threshold: 0.00001,
      snap_speed: 99.99,
      rotation_sync_from_bone: true,
      rotation_sync_target: "head_joint",
      rotation_sync_strength: 1.0,
      head_bone_structure: {
        position: {
          x: -0.0456970781,
          y: -0.004478302,
          z: -0.0200432576
        },
        rotation: {
          x: 0.0258174837,
          y: -0.08611039,
          z: -0.1402113,
          w: 0.9860321
        },
        scale: {
          x: 0.99999994,
          y: 1.00000012,
          z: 1.0
        }
      }
    }
  };
  hitdetect: {
      collider: {
        enabled: true,
        zone: "head_bounds",
        custom_head_region: true,
        head_bounds: {
          radius: 0.035,
          height: 0.075,
          center: {
            x: -0.0456970781,
            y: -0.004478302,
            z: -0.0200432576
          }
        }
      },
      target_priority_bone: "head_joint",
      snap_to_head_on_drift: true,
      snap_correction_speed: 99.9,
      obstruction_check: true,
      force_reselect_on_obstruct: true,
      strict_region_locking: true,
      lock_zone: "head_box"
    },
    aimlock: {
      enabled: true,
      target_bone: "head_joint",
      tracking_mode: "3d_bone_xyz",
      stick_to_bone: true,
      continuous_lock: {
        enabled: true,
        zone: "head_box",
        priority_bone: "head_joint"
      },
      snap_to_target_on_deviation: true,
      deviation_threshold: 0.00001,
      snap_speed: 99.99,
      rotation_sync_from_env: true,
      rotation_sync_strength: 1.0,
      environmental_lock: {
        enabled: true,
        mode: "absolute",
        stick_duration: 999.0,
        force: 1.0
      },
      override_bone_targeting: true,
      override_priority_zone: "environmental_target",
      deep_lock_mode: true,
      deep_lock_accuracy_boost: 1.0
    },
    envsense: {
      advanced_tracking: true,
      worldspace_mapping_enabled: true,
      coordinate_sync_mode: "absolute",
      position_rounding: false,
      rotation_rounding: false,
      subunit_precision: true,
      subunit_threshold: 0.00001,
      latency_compensation: 0.0001,
      target_position: {
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
      },
      target_rotation: {
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
      },
      target_scale: {
        x: 0.99999994,
        y: 1.00000012,
        z: 1.0
      }
    }
  };
aimassist: {
      rotation_snap_trigger: {
        enabled: true,
        target_bone: "head_joint",
        angular_speed_threshold: 45.0,      // °/s — Nếu quay đầu nhanh hơn mức này thì snap
        snap_immediately: true,             // Kích hoạt snap không delay
        snap_zone: "head_box",
        snap_strength: 1.0,                 // Tối đa
        snap_speed: 99.99,                  // Gần như tức thì
        hold_duration_after_snap: 1.5,      // Giữ lock sau khi snap
        reset_if_slowing_down: true,        // Nếu enemy dừng quay thì bỏ lock
        prediction_enabled: true,
        prediction_lead_factor: 1.2         // Dẫn hướng nếu đang quay cực nhanh
      }
    },
    aimlock: {
      enabled: true,
      target_bone: "head_joint",
      tracking_mode: "3d_bone_xyz",
      rotation_sync_from_bone: true,
      snap_to_target_on_deviation: true,
      deviation_threshold: 0.0001,
      snap_speed: 99.9
    },
    debug: {
      draw_rotation_vectors: true,
      highlight_snap_event: true
    }
  };
$done({ body: JSON.stringify(customConfig) });
} else {
  $done({});
}
