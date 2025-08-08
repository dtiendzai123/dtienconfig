let body = $response.body;

// Nếu là JSON thì parse thử
try { body = JSON.parse($response.body); } catch (e) {}
// === Vector3 ES5 ===
function Vector3(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}
Vector3.prototype.add = function(v) { return new Vector3(this.x+v.x, this.y+v.y, this.z+v.z); };
Vector3.prototype.subtract = function(v) { return new Vector3(this.x-v.x, this.y-v.y, this.z-v.z); };
Vector3.prototype.multiplyScalar = function(s) { return new Vector3(this.x*s, this.y*s, this.z*s); };
Vector3.prototype.length = function() { return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); };
Vector3.prototype.lengthSq = function() { return this.x*this.x + this.y*this.y + this.z*this.z; };
Vector3.prototype.normalize = function() {
  var len = this.length();
  return len>0 ? this.multiplyScalar(1/len) : new Vector3();
};
Vector3.prototype.dot = function(v) { return this.x*v.x + this.y*v.y + this.z*v.z; };
Vector3.prototype.cross = function(v) {
  return new Vector3(
    this.y*v.z - this.z*v.y,
    this.z*v.x - this.x*v.z,
    this.x*v.y - this.y*v.x
  );
};
Vector3.prototype.distanceTo = function(v) { return this.subtract(v).length(); };
Vector3.prototype.distanceToSq = function(v) { return this.subtract(v).lengthSq(); };
Vector3.prototype.lerp = function(v, a) { return this.add(v.subtract(this).multiplyScalar(a)); };
Vector3.prototype.clone = function() { return new Vector3(this.x, this.y, this.z); };
Vector3.prototype.copy = function(v) { this.x=v.x; this.y=v.y; this.z=v.z; return this; };
Vector3.zero = function(){return new Vector3(0,0,0);};
Vector3.one = function(){return new Vector3(1,1,1);};
Vector3.forward = function(){return new Vector3(0,0,1);};
Vector3.up = function(){return new Vector3(0,1,0);};
Vector3.right = function(){return new Vector3(1,0,0);};

// === AdvancedKalmanFilter ES5 ===
function AdvancedKalmanFilter(R, Q, processNoise){
  this.R = R!=null?R:0.01;
  this.Q = Q!=null?Q:0.0001;
  this.processNoise = processNoise!=null?processNoise:0.001;
  this.cov = NaN; this.x = NaN; this.velocity = 0; this.lastTime = 0;
}
AdvancedKalmanFilter.prototype.filter = function(measurement, deltaTime){
  if(deltaTime==null) deltaTime=0.016;
  if(isNaN(this.x)){
    this.x = measurement; this.cov=this.R; this.velocity=0;
    this.lastTime = Date.now(); return this.x;
  }
  var dt=deltaTime;
  var predictedX = this.x + this.velocity * dt;
  var predictedCov = this.cov + this.Q + this.processNoise*dt*dt;
  var K = predictedCov/(predictedCov+this.R);
  this.x = predictedX + K*(measurement-predictedX);
  this.cov = (1-K)*predictedCov;
  var now = Date.now();
  if(this.lastTime>0){
    var realDt=(now-this.lastTime)/1000;
    if(realDt>0){
      this.velocity = (this.x - (predictedX - this.velocity*dt))/realDt;
    }
  }
  this.lastTime = now;
  return this.x;
};
AdvancedKalmanFilter.prototype.predict = function(deltaTime){
  return !isNaN(this.x)?this.x + this.velocity*deltaTime:0;
};
AdvancedKalmanFilter.prototype.reset = function(){
  this.cov = NaN; this.x = NaN; this.velocity=0; this.lastTime=0;
};

// === Matrix4 ES5 ===
var Matrix4 = {
  multiplyMatrixVec: function(m,v){
    return new Vector3(
      m[0]*v.x + m[1]*v.y + m[2]*v.z + m[3],
      m[4]*v.x + m[5]*v.y + m[6]*v.z + m[7],
      m[8]*v.x + m[9]*v.y + m[10]*v.z + m[11]
    );
  },
  quaternionToMatrix: function(q){
    var x=q.x, y=q.y, z=q.z, w=q.w;
    var xx=x*x, yy=y*y, zz=z*z, xy=x*y, xz=x*z, yz=y*z, wx=w*x, wy=w*y, wz=w*z;
    return [
      1-2*(yy+zz), 2*(xy-wz),   2*(xz+wy),   0,
      2*(xy+wz),   1-2*(xx+zz), 2*(yz-wx),   0,
      2*(xz-wy),   2*(yz+wx),   1-2*(xx+yy), 0,
      0,0,0,1
    ];
  },
  compose: function(pos, rot, scale){
    var m = Matrix4.quaternionToMatrix(rot);
    return [
      m[0]*scale.x, m[1]*scale.y, m[2]*scale.z, pos.x,
      m[4]*scale.x, m[5]*scale.y, m[6]*scale.z, pos.y,
      m[8]*scale.x, m[9]*scale.y, m[10]*scale.z, pos.z,
      0,0,0,1
    ];
  }
};

// === PerformanceMonitor ES5 ===
function PerformanceMonitor(){
  this.frameCount=0; this.lastTime=Date.now();
  this.fps=0; this.avgProcessTime=0; this.processTimes=[];
}
PerformanceMonitor.prototype.startFrame = function(){
  this.frameStart = Date.now();
};
PerformanceMonitor.prototype.endFrame = function(){
  var t = Date.now() - this.frameStart;
  this.processTimes.push(t);
  if(this.processTimes.length>60) this.processTimes.shift();
  var sum=0;
  for(var i=0;i<this.processTimes.length;i++) sum+=this.processTimes[i];
  this.avgProcessTime = sum/this.processTimes.length;
  this.frameCount++;
  var now=Date.now();
  if(now-this.lastTime>=1000){
    this.fps = this.frameCount;
    this.frameCount=0;
    this.lastTime = now;
  }
};
PerformanceMonitor.prototype.getStats = function(){
  return {
    fps: this.fps,
    avgProcessTime: this.avgProcessTime.toFixed(2),
    isOptimal: this.fps>=58 && this.avgProcessTime<2
  };
};

// === AdvancedAimLockSystem ES5 ===
function AdvancedAimLockSystem(config){
  this.config = {
    targetFPS: config.targetFPS||1000,
    smoothing: config.smoothing||0,
    predictionTime: config.predictionTime||0,
    maxDistance: config.maxDistance||9999,
    aimOffset: config.aimOffset||new Vector3( -0.04089227, 0.00907892,0.02748467),
    adaptiveSmoothing: !!config.adaptiveSmoothing,
    autoAdjustFilters: !!config.autoAdjustFilters,
    instantMode: !!config.instantMode
  };
  this.velocity = Vector3.zero();
  this.acceleration = Vector3.zero();
  this.prevPos = null;
  this.prevVel = Vector3.zero();
  this.kalman = {
    x: new AdvancedKalmanFilter(0.008,0.0001,0.001),
    y: new AdvancedKalmanFilter(0.008,0.0001,0.001),
    z: new AdvancedKalmanFilter(0.008,0.0001,0.001)
  };
  this.lastUpdate = Date.now();
  this.isActive=false;
  this.targetLocked=false;
  this.missedFrames=0;
  this.perfMonitor = new PerformanceMonitor();
  this.frameInterval = 1000/this.config.targetFPS;
  this.positionHistory=[];
  this.maxHistorySize=10;
}
AdvancedAimLockSystem.prototype.getWorldHeadPosition = function(bone){
  if(!this._cachedBindpose||this._bindposeChanged){
    this._cachedBindpose = [
      bone.bindpose.e00,bone.bindpose.e01,bone.bindpose.e02,bone.bindpose.e03,
      bone.bindpose.e10,bone.bindpose.e11,bone.bindpose.e12,bone.bindpose.e13,
      bone.bindpose.e20,bone.bindpose.e21,bone.bindpose.e22,bone.bindpose.e23,
      bone.bindpose.e30,bone.bindpose.e31,bone.bindpose.e32,bone.bindpose.e33
    ];
    this._bindposeChanged = false;
  }
  var wm = Matrix4.compose(bone.position,bone.rotation,bone.scale);
  var lp = new Vector3(wm[3],wm[7],wm[11]);
  return Matrix4.multiplyMatrixVec(this._cachedBindpose, lp);
};
AdvancedAimLockSystem.prototype.trackTarget = function(rawPos){
  this.perfMonitor.startFrame();
  if(this.config.instantMode){
    this.prevPos = rawPos.clone();
    this.lastUpdate = Date.now();
    this.perfMonitor.endFrame();
    return rawPos.clone();
  }
  var now=Date.now(), dt=(now-this.lastUpdate)/1000;
  if(dt<=0||dt>0.1){
    this.lastUpdate=now;
    this.perfMonitor.endFrame();
    return rawPos;
  }
  if(this.prevPos){
    var cv = rawPos.subtract(this.prevPos).multiplyScalar(1/dt);
    this.velocity = cv;
    if(this.prevVel){
      this.acceleration = cv.subtract(this.prevVel).multiplyScalar(1/dt);
    }
    this.prevVel = cv.clone();
  }
  var fp = new Vector3(
    this.kalman.x.filter(rawPos.x, dt),
    this.kalman.y.filter(rawPos.y, dt),
    this.kalman.z.filter(rawPos.z, dt)
  );
  this.positionHistory.push(fp.clone());
  if(this.positionHistory.length>this.maxHistorySize) this.positionHistory.shift();
  var sum=Vector3.zero();
  for(var i=0;i<this.positionHistory.length;i++){ sum=sum.add(this.positionHistory[i]); }
  var avg = sum.multiplyScalar(1/this.positionHistory.length);
  var predicted = this.predictPosition(avg, this.config.predictionTime);
  this.updateAdaptiveParameters(dt);
  this.prevPos = rawPos.clone();
  this.lastUpdate = now;
  this.perfMonitor.endFrame();
  return predicted;
};
AdvancedAimLockSystem.prototype.predictPosition = function(cur, pt){
  if(!this.velocity || this.velocity.lengthSq()<0.001) return cur.clone();
  var vc = this.velocity.multiplyScalar(pt);
  var ac = this.acceleration.multiplyScalar(0.5*pt*pt);
  return cur.add(vc).add(ac);
};
AdvancedAimLockSystem.prototype.updateAdaptiveParameters = function(dt){
  if(!this.config.adaptiveSmoothing) return;
  var perf=this.perfMonitor.getStats();
  if(perf.fps < this.config.targetFPS*0.9){
    this.dynamicSmoothing = Math.min(0.95, (this.dynamicSmoothing||this.config.smoothing)+0.01);
  } else if(perf.fps > this.config.targetFPS*1.1){
    this.dynamicSmoothing = Math.max(0.7, (this.dynamicSmoothing||this.config.smoothing)-0.01);
  }
  if(this.config.autoAdjustFilters){
    var vm = this.velocity.length();
    var vals = [this.kalman.x, this.kalman.y, this.kalman.z];
    for(var i=0;i<vals.length;i++){
      var f=vals[i];
      if(vm>10){
        f.Q = Math.min(0.01, f.Q*1.1);
      } else if(vm<1){
        f.Q = Math.max(0.0001, f.Q*0.95);
      }
    }
  }
};
AdvancedAimLockSystem.prototype.calculateSmoothAim = function(tp, ca){
  if(this.config.instantMode) return tp.clone();
  if(!ca) return tp;
  var d = ca.distanceTo(tp);
  var alpha = 1 - Math.exp(-d*0.1) * this.dynamicSmoothing;
  return ca.lerp(tp, alpha);
};
AdvancedAimLockSystem.prototype.isValidTarget = function(p){
  if(!p||isNaN(p.x)||isNaN(p.y)||isNaN(p.z)) return false;
  var d = p.length();
  if(d>this.config.maxDistance || d<0.1) return false;
  return true;
};
AdvancedAimLockSystem.prototype.aimToTarget = function(){
  if(!this.isActive) return;
  var boneData = {
    position: new Vector3(-0.0456970781,-0.004478302,-0.0200432576),
    rotation:{x:0.0258174837,y:-0.08611039,z:-0.1402113,w:0.9860321},
    scale:new Vector3(0.99999994,1.00000012,1),
    bindpose:{
      e00:-1.34559613e-13,e01:8.881784e-14,e02:-1,e03:0.487912,
      e10:-2.84512817e-6,e11:-1,e12:8.881784e-14,e13:-2.842171e-14,
      e20:-1,e21:2.84512817e-6,e22:-1.72951931e-13,e23:0,
      e30:0,e31:0,e32:0,e33:1
    }
  };
  try{
    var wh = this.getWorldHeadPosition(boneData);
    if(!this.isValidTarget(wh)){
      this.missedFrames++;
      if(this.missedFrames>30) this.resetTracking();
      return;
    }
    this.missedFrames=0;
    var tp = this.trackTarget(wh);
    var aimPos = tp.add(this.config.aimOffset);
    if(this.config.instantMode){
      this.setAim(aimPos);
      this.targetLocked=true; return;
    }
    if(this.lastAimPos){
      this.lastAimPos = this.calculateSmoothAim(aimPos, this.lastAimPos);
    } else {
      this.lastAimPos = aimPos.clone();
    }
    this.setAim(this.lastAimPos);
    this.targetLocked = true;
  } catch(e){
    if(typeof console!="undefined") console.error("AimLock error:", e);
    this.resetTracking();
  }
};
AdvancedAimLockSystem.prototype.setAim = function(p){
  if(this.config.instantMode) {
    // giao thức đến game
    return;
  }
  var s = this.perfMonitor.getStats();
  if(typeof console!="undefined") console.log("🎯 ["+s.fps+"fps|"+s.avgProcessTime+"ms] AimLock:", p.x.toFixed(4),p.y.toFixed(4),p.z.toFixed(4));
};
AdvancedAimLockSystem.prototype.resetTracking = function(){
  this.kalman.x.reset(); this.kalman.y.reset(); this.kalman.z.reset();
  this.velocity = Vector3.zero();
  this.acceleration = Vector3.zero();
  this.prevPos = null;
  this.prevVel = Vector3.zero();
  this.positionHistory=[];
  this.targetLocked=false;
  this.lastAimPos=null;
  this.missedFrames=0;
};
AdvancedAimLockSystem.prototype.start = function(){
  this.isActive=true;
  this.resetTracking();
  if(typeof console!="undefined") console.log("🟢 AimLock activated");
};
AdvancedAimLockSystem.prototype.stop = function(){
  this.isActive=false; this.targetLocked=false;
  if(typeof console!="undefined") console.log("🔴 AimLock deactivated");
};
AdvancedAimLockSystem.prototype.toggle = function(){
  if(this.isActive) this.stop(); else this.start();
};
AdvancedAimLockSystem.prototype.runLoop = function(){
  var self=this;
  function loop(){
    if(self.config.instantMode){
      self.aimToTarget();
      setTimeout(loop,0);
      return;
    }
    var now = Date.now();
    var dt = now - (self.lastFrameTime||now);
    if(dt >= self.frameInterval){
      self.aimToTarget();
      self.lastFrameTime = now;
    }
    setTimeout(loop, Math.max(1, self.frameInterval - dt));
  }
  self.lastFrameTime = Date.now();
  loop();
};
AdvancedAimLockSystem.prototype.getStatus = function(){
  var s = this.perfMonitor.getStats();
  return {
    active: this.isActive,
    targetLocked: this.targetLocked,
    fps: s.fps,
    avgProcessTime: s.avgProcessTime,
    isOptimal: s.isOptimal,
    dynamicSmoothing: (this.dynamicSmoothing||this.config.smoothing).toFixed(3),
    missedFrames: this.missedFrames
  };
};

// === Cấu hình & Khởi tạo ===
var GamePackages = {
  GamePackage1: "com.dts.freefireth",
  GamePackage2: "com.dts.freefiremax"
};
var aimConfig = {
  targetFPS:1000,
  smoothing:0,
  predictionTime:0,
  maxDistance:9999,
  aimOffset:new Vector3( -0.04089227, 0.00907892,0.02748467),
  adaptiveSmoothing:false,
  autoAdjustFilters:false,
  instantMode:true
};
if(typeof console!="undefined") console.log("⚡ Initializing INSTANT AimLock System - ZERO DELAY MODE...");
var advancedAimSystem = new AdvancedAimLockSystem(aimConfig);
if(typeof console!="undefined") console.log("🚀 INSTANT AIMLOCK ACTIVATED - NO SMOOTHING, NO DELAY!");
advancedAimSystem.start();
advancedAimSystem.runLoop();
setInterval(function(){
  var st = advancedAimSystem.getStatus();
  if(st.active && typeof console!="undefined") console.log("📊 System Status:", st);
}, 5000);
if (typeof body === "object") {
  $done({ body: JSON.stringify(body) });
} else {
  $done({ body });
}
