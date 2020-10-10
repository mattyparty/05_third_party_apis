$(document).ready(function () {
  //gets current hour in military format
  curhour = moment().format("HH");
  //adds to class id of current hour "present"
  $("#" + curhour).addClass("present");
  //loop to change future time slots to present
  for (let i = 7; i < 18; i++) {
    if (curhour < i) {
      $("#" + i).addClass("future");
    }
  }
  //end of loop

  function calenderstoreinputs() {
    $(".event").each(function () {
      var inputId = $(this).attr("id");
      $(this).val(localStorage.getItem(inputId));
    });
  }

  //Click event to save user input in local storage
  $(".saveBtn").click(function () {
    var scheduledata = $(this).siblings(".event").val();
    var thisinputid = $(this).siblings(".event").attr("id");
    //setting local storage  - localstorage.setitem(key,Value)
    localStorage.setItem(thisinputid, scheduledata);
    console.log(scheduledata);
    console.log(thisinputid);
    console.log($(this));
  });

  calenderstoreinputs();
});
