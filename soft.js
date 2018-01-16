function Smooth(init, max){
  this.max = max;
  this.init = init;
  initializeTypes();
}
function initializeTypes(){
  //TODO:Add other interpolation input types
}
Smooth.prototype.linear = function(frac){
  if(frac > 1)
	  return this.max;
  return frac*(this.max - this.init) + this.init;
}
Smooth.prototype.cubic = function(frac){
  if(frac > 1)
    return this.max;
  return (Math.pow(frac, 3)*-2 + Math.pow(frac, 2)*3)*(this.max-this.init) + this.init;
}
Smooth.prototype.quintic = function(frac){
  if(frac > 1)
    return this.max;
  return (Math.pow(frac, 5)*6 - Math.pow(frac, 4)*15 + Math.pow(frac, 3)*10)*
          (this.max-this.init)+this.init;
}
Smooth.prototype.septic = function(frac){
  if(frac > 1)
    return this.max;
  return (Math.pow(frac, 7)*-20 + Math.pow(frac, 6)*70 - Math.pow(frac, 5)*84 +
          Math.pow(frac, 4)*35)*(this.max-this.init)+this.init;
}
