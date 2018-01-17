var DURATION = 3000;
var DISTANCE = 1000;

var lin = document.querySelector("#linear");
var cub = document.querySelector("#cubic");
var qui = document.querySelector("#quintic");
var sep = document.querySelector("#septic");

animateMotion(lin, Smooth.LINEAR, 0);//For some reason, whatever animateMotion was called
//first will resolve Smooth.* as UNDEFINED, so call one randomly at the beginning, just
//so that all the rest will work, don't ask me why this happens

animateMotion(lin, Smooth.LINEAR, DURATION);
animateMotion(cub, Smooth.CUBIC, DURATION);
animateMotion(qui, Smooth.QUINTIC, DURATION);
animateMotion(sep, Smooth.SEPTIC, DURATION);

function animateMotion(elem, type, animTime){
  var move = new Smooth(0, DISTANCE);
  function anim(curTime){
    var factor = curTime/animTime;
    var delta = move.interpolate(factor, type);
    elem.style.left = delta + "px";
    if(curTime >= animTime)
      return;
    requestAnimationFrame(anim);
  }
  requestAnimationFrame(anim);
}
