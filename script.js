$(document).ready(function () {

    var now = moment().format('dddd, MMMM Do YYYY');
    console.log(now)
    $("#currentDay").append(now)

    var nineText = localStorage.getItem("nine");

    $("#nine-text").val(nineText)

    // var nine = $("#nine").text();
    // var ten = $("#ten").text();
    // var eleven = $("#eleven").text();
    // var twelve = $("#twelve").text();
    // var one = $("#one").text();
    // var two = $("#two").text();
    // var three = $("#three").text();
    // var four = $("#four").text();
    // var five = $("#five").text();

    $("#nine-button").on("click", function () {
        var nine = $("#nine-text").val();
        localStorage.setItem("nine", nine);
    });
    // localStorage.setItem("ten", ten);
    // localStorage.setItem("eleven", eleven);
});