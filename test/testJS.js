var lin = document.querySelector("#linear");
var cub = document.querySelector("#cubic");
animateMotion(lin, "linear", 3000);
animateMotion(cub, "cubic", 3000);

function animateMotion(elem, type, animTime){
  var move = new Smooth(0, 700);
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
    }
    elem.style.left = delta
    if(curTime >= animTime)
      return;
    requestAnimationFrame(anim);
  }
  requestAnimationFrame(anim);
}
