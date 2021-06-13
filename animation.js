var id = null;

function myMove() {
  var barHeight = document.getElementById("top-bar").clientHeight;
  var barWidth = document.getElementById("top-bar").clientWidth;
  var cornerWidth = document.querySelector(".corner").clientWidth;

  var windowHeight = window.innerHeight;


  var elem = document.getElementsByClassName("dog-container")[0];
  var pos = elem.style.left;
  var intClientWidth = document.clientWidth;

  clearInterval(id);
  id = setInterval(frameF, 10);

  function frameF() {
    if (pos == (barWidth - cornerWidth)) {
      elem.style.transform = 'scaleX(-1)';
      id = setInterval(frameB, 10);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }

  function frameB() {
      if (pos == 0) {
      elem.style.display = 'none';
    } else {
      pos--;
      elem.style.left = pos + 'px';

    }
  }
}
