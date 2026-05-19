window.onload = function() {
  const startbutton = document.getElementById("start-button");
  const maxTouch = navigator.maxTouchPoints ?? navigator.msMaxTouchPoints ?? 0;
  startbutton.onclick = function(event) {
    console.log('expanding startbutton');
    return false;  /* disable bubbling */
  };
  console.log("cake javascript loaded: maxTouch = " + maxTouch);
}
/* vim: set tabstop=8 softtabstop=2 expandtab shiftwidth=2: */
