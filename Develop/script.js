// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  function generateTimeBlocks() {
    for (var i = 9; i <= 17; i++) {
      var hour = i;
      if (i < 12) {
        hour = hour + "AM";
      } else if (i == 12) {
        hour = hour + "PM";
      } else {
        hour = hour - 12 + "PM";
      } console.log(hour)
    }
  }
  generateTimeBlocks()
});
