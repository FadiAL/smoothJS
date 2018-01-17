var DURATION = 3000;
var DISTANCE = 1000;
var lin = document.querySelector("#linear");
var cub = document.querySelector("#cubic");
var qui = document.querySelector("#quintic");
var sep = document.querySelector("#septic");
animateMotion(lin, "linear", DURATION);
animateMotion(cub, "cubic", DURATION);
animateMotion(qui, "quintic", DURATION);
animateMotion(sep, "septic", DURATION);

function animateMotion(elem, type, animTime){
  var move = new Smooth(0, DISTANCE);
  function anim(curTime){
    var factor = curTime/animTime;
    var delta;
    switch (type){
      case "linear":
        delta = move.linear(factor) + "px";
        break;
      case "cubic":
        delta = move.cubic(factor) +"px";
        break;
      case "quintic":
        delta = move.quintic(factor) + "px";
        break;
      case "septic":
        delta = move.septic(factor) + "px";
        break;
    }
    elem.style.left = delta
    if(curTime >= animTime)
      return;
    requestAnimationFrame(anim);
  }
  requestAnimationFrame(anim);
}
