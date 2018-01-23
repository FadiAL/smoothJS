function Smooth(init, max){
  this.max = max;
  this.init = init;
  this.delta = max - init;
  initializeTypes();
}
function initializeTypes(){
  Smooth.LINEAR = "linear";
  Smooth.CUBIC = "cubic";
  Smooth.QUINTIC = "quintic";
  Smooth.SEPTIC = "septic";
}
Smooth.prototype.interpolate = function(frac, type){
  if(frac > 1)
    return this.max;
  switch (type){
    case Smooth.LINEAR:
      return frac*(this.delta) + this.init;
      break;
    case Smooth.CUBIC:
      return (Math.pow(frac, 3)*-2 + Math.pow(frac, 2)*3)*this.delta + this.init;
      break;
    case Smooth.QUINTIC:
      return (Math.pow(frac, 5)*6 - Math.pow(frac, 4)*15 + Math.pow(frac, 3)*10)*
            this.delta+this.init;
      break;
    case Smooth.SEPTIC:
      return (Math.pow(frac, 7)*-20 + Math.pow(frac, 6)*70 - Math.pow(frac, 5)*84 +
              Math.pow(frac, 4)*35)*this.delta+this.init;
      break;
    default:
      console.log("UNKOWN TYPE");
  }
  return -1;
}
