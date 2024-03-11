// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //display current date and time
  document.getElementById("currentDay").textContent = dayjs()

  //generate time blocks 9-5
  function generateTimeBlocks() {
    //for hours 9-5pm
    for (var i = 9; i <= 17; i++) {
      var hour = i;
      //if past noon concat PM instead AM
      if (i < 12) {
        hour = hour + "AM";
      } else if (i == 12) {
        hour = hour + "PM";
        //account for 1-5 to not display 13-17
      } else {
        hour = hour - 12 + "PM";
      }
    //create block per hour
      var $timeBlock = $("<div>")
      .attr("id","hour-" + i)

      //create and display hour
      var $hourDisplay = $("<div>")
      .addClass("col-2 col-md-1 hour text-center py-3")
      .text(hour);

      //create area for user input
      var $userInput = $("<textArea>")
      .addClass("col-8 col-md-10 description")
      .attr("rows", "3");

      //create saveBtn
      var $saveBtn = $("<button>")
      .addClass("btn saveBtn col-2 col-md-1")
        .attr("aria-label", "save")
        .html('<i class="fas fa-save" aria-hidden="true"></i>');


});
