// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page.

var saveBtns = $(".saveBtn");

var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-1");
var hour2 = $("#hour-2");
var hour3 = $("#hour-3");
var hour4 = $("#hour-4");
var hour5 = $("#hour-5");

var textDoc9 = $("#hour-9 .description");
var textDoc10 = $("#hour-10 .description");
var textDoc11 = $("#hour-12 .description");
var textDoc12 = $("#hour-1 .description");
var textDoc1 = $("#hour-2 .description");
var textDoc2 = $("#hour-3 .description");
var textDoc3 = $("#hour-4 .description");
var textDoc4 = $("#hour-5 .description");
var textDoc5 = $("#hour-6 .description");

// console.log(hour9);
// console.log(saveBtns);

$(function () {
  // Saving in storage
  saveBtns.on("click", saveText);
  function saveText() {
    localStorage.setItem("hour9", textDoc9.val());
    localStorage.setItem("hour10", textDoc10.val());
    localStorage.setItem("hour11", textDoc11.val());
    localStorage.setItem("hour12", textDoc12.val());
    localStorage.setItem("hour1", textDoc1.val());
    localStorage.setItem("hour2", textDoc2.val());
    localStorage.setItem("hour3", textDoc3.val());
    localStorage.setItem("hour4", textDoc4.val());
    localStorage.setItem("hour5", textDoc5.val());
  }

  // Presents item from storage

  // function renderLastTextDoc() {
  //   var lastTextDoc = localStorage.getItem(textDoc9.val());
  //   textDoc9.text = lastTextDoc;
  // } // tried making a function for retreiving text

  // retrieve text from saved storage
  textDoc9.text(localStorage.getItem(hour9));
  textDoc10.text(localStorage.getItem(hour10));
  textDoc11.text(localStorage.getItem(hour11));
  textDoc12.text(localStorage.getItem(hour12));
  textDoc1.text(localStorage.getItem(hour1));
  textDoc2.text(localStorage.getItem(hour2));
  textDoc3.text(localStorage.getItem(hour3));
  textDoc4.text(localStorage.getItem(hour4));
  textDoc5.text(localStorage.getItem(hour5));

  // console.log(localStorage);

  // displays time and date under header
  var localTime = dayjs().format("DD MMMM, YYYY, HH:mm:ss a");
  $("#currentDay").text(localTime);
  // console.log(localTime);

  var currentHour = dayjs().format("HH");
  // console.log(currentHour);

  // displays changing colors past, present, and future
  if (currentHour == 9) {
    hour9.removeClass("past", "future").addClass("present");
  } else if (currentHour > 9) {
    hour9.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 9) {
    hour9.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 10) {
    hour10.removeClass("past", "future").addClass("present");
  } else if (currentHour > 10) {
    hour10.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 10) {
    hour10.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 11) {
    hour11.removeClass("past", "future").addClass("present");
  } else if (currentHour > 11) {
    hour11.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 11) {
    hour11.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 12) {
    hour12.removeClass("past", "future").addClass("present");
  } else if (currentHour > 12) {
    hour12.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 12) {
    hour12.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 13) {
    hour1.removeClass("past", "future").addClass("present");
  } else if (currentHour > 13) {
    hour1.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 13) {
    hour1.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 14) {
    hour2.removeClass("past", "future").addClass("present");
  } else if (currentHour > 14) {
    hour2.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 14) {
    hour2.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 15) {
    hour3.removeClass("past", "future").addClass("present");
  } else if (currentHour > 15) {
    hour3.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 15) {
    hour3.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 16) {
    hour4.removeClass("past", "future").addClass("present");
  } else if (currentHour > 16) {
    hour4.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 16) {
    hour4.removeClass("past").removeClass("present").addClass("future");
  }

  if (currentHour == 17) {
    hour5.removeClass("past", "future").addClass("present");
  } else if (currentHour > 17) {
    hour5.removeClass("present").removeClass("future").addClass("past");
  } else if (currentHour < 17) {
    hour5.removeClass("past").removeClass("present").addClass("future");
  }

  // console.log(dayjs());
});
