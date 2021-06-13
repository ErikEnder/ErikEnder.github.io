var id = null;
var barHeight = document.getElementsByClass("top-bar").style.height;
var screenHeight = screen.height;

function myMove() {
  var elem = document.getElementById("dog-gif");
  var pos = elem.style.left;
  elem.style.height = (screenHeight - barHeight) + 'px';
  
  clearInterval(id);
  id = setInterval(frameF, 10);

  function frameF() {
    if (pos == (screen.width - 100)) {
      elem.style.transform = 'scaleX(-1)';
      id = setInterval(frameB, 10);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }

  function frameB() {
      if (pos == 100) {
      elem.style.transform = 'none';
      id = setInterval(frameF, 10);
    } else {
      pos--;
      elem.style.left = pos + 'px';

    }
  }
}
