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
