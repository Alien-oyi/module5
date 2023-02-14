var m = moment();

// Day, date, time
$("#currentDay").text(moment().format('LLLL'));

function colorChange () {
    
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);
       
// change color when time past
    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}