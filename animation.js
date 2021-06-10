var id = null;
function myMove() {
  var elem = document.getElementById("dog-gif");
  var pos = 100;
  elem.style.bottom = '465px';
  clearInterval(id);
  id = setInterval(frameF, 10);

  function frameF() {
    if (pos == 1150) {
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
