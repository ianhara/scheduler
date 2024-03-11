// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //display current date and time
  document.getElementById("currentDay").textContent = dayjs();
  //get current hour to set classes
  var currentHour = dayjs().hour();
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
        .attr("id", "hour-" + i)
        .addClass("row time-block");

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

      // Append elements
      $timeBlock.append($hourDisplay, $userInput, $saveBtn);

      // Append the time block to our container
      $(".container-fluid").append($timeBlock);
      //once we append add class to userinput area based on currentHour
      if (i < currentHour) {
        $userInput.addClass("past");
      } else if (i === currentHour) {
        $userInput.addClass("present");
      } else {
        $userInput.addClass("future");
      }
    }
  }
  generateTimeBlocks();

  $(".saveBtn").on("click", function () {
    //use second half of id string to set hour
    var hour = parseInt($(this).parent().attr("id").split("-")[1]);
    //grab text area content
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem("hour_" + hour, userInput);
  });

  function displayInput() {
    // for each hour
    for (var i = 9; i <= 17; i++) {
      // grab input
      var savedInput = localStorage.getItem("hour_" + i);
      // if not null or undefined
      if (savedInput) {
        // Set the text area
        $("#hour-" + i + " .description").val(savedInput);
      }
    }
  }

  displayInput();
});
