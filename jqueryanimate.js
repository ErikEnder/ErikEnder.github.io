var barWidth = $('#top-bar').clientWidth;
var cornerWidth = $('.corner').clientWidth;

var leftMove = barWidth - cornerWidth;

$(document).ready(function(){
  $('.dog-container').animate({left: '90%'}, 1000);
});
