window.onload = function() {
  const startbutton = document.getElementById("start-button");
  startbutton.onclick = function(event) {
    console.log('expanding startbutton');
    return false;  /* disable bubbling */
  };
  console.log("cake javascript loaded");
}
/* vim: set tabstop=8 softtabstop=2 expandtab shiftwidth=2: */
