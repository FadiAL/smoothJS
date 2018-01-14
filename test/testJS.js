var lin = document.querySelector("#linear");
animateMotionLin(lin, 3000);

function animateMotionLin(elem, animTime){
  var move = new Smooth(0, 700);
  function anim(curTime){
    elem.style.left = move.linear(curTime/animTime) + "px";
    if(curTime >= animTime)
      return;
    requestAnimationFrame(anim);
  }
  requestAnimationFrame(anim);
}
