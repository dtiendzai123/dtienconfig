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

  $done({ body: JSON.stringify(customConfig) });
} else {
  $done({});
}
