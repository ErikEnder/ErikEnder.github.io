var id = null;
function myMove() {
  var elem = document.getElementById("dog-gif");
  var pos = elem.style.left;
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
      elem.style.display = 'none';
      id = setInterval(frameF, 10);
    } else {
      pos--;
      elem.style.left = pos + 'px';

    }
  }
}
