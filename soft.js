function Smooth(init, max){
  self.max = max;
  self.init = init;
  initializeTypes();
}
function initializeTypes(){
  //TODO:Add other interpolation input types
}
Smooth.prototype.linear = function(frac){
  if(frac > 1)
	  return this.max;
  return frac*(self.max - self.init) + self.init;
}
