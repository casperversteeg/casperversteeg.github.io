
(function($) {

"use strict";

// RADIAL PROGRESS BAR
enableRadialProgress();

$('a[href="#"]').on('click', function(event) { return; });
})(jQuery);

function enableRadialProgress() {

  $(".radial-progress").each(function() {
    var $this = $(this), SprogPercent = $this.data('prog-grade');
    var progPercent;
    switch (SprogPercent) {
    case "F":
      progPercent = 0;
      break;
    case "D-":
      progPercent = 5;
      break;
    case "D":
      progPercent = 15;
      break;
    case "D+":
      progPercent = 20;
      break;
    case "C-":
      progPercent = 25;
      break;
    case "C":
      progPercent = 30;
      break;
    case "C+":
      progPercent = 35;
      break;
    case "B-":
      progPercent = 40;
      break;
    case "B":
      progPercent = 45;
      break;
    case "B+":
      progPercent = 50;
      break;
    case "A-":
      progPercent = 55;
      break;
    case "A":
      progPercent = 60;
      break;
    case "A+":
      progPercent = 60;
      break;
    case "S":
      progPercent = 60;
      break;
    }
    var bar = new ProgressBar.Circle(this, {
      color : '#aaa',
      strokeWidth : 3,
      trailWidth : 1,
      easing : 'easeInOut',
      duration : 1400,
      text : {

      },
      from : {color : '#aaa', width : 1},
      to : {color : '#00539B', width : 3},
      // Set default step function for all animate calls
      step : function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value());
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(SprogPercent);
        }
      }
    });

    $(this).waypoint(function() { bar.animate(progPercent / 60); },
                     {offset : "90%"})
  });
}

function isExists(elem) {
  if ($(elem).length > 0) {
    return true;
  }
  return false;
}
