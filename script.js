$(document).ready(function () {

    var now = moment().format('dddd, MMMM Do YYYY');
    console.log(now)
    $("#currentDay").append(now)

    var currentTime = moment().hours();
    console.log(currentTime)

    function setBackground() {
        $(".time").each(function () {
            var itemTime = $(this).attr("class").split(" ").pop()
            console.log(itemTime)

            if (itemTime < currentTime) {
                $("input").addClass("past");
            } else if (itemTime === currentTime) {
                $("input").removeClass("past");
                $("input").addClass("present");
            }
            else {
                $("input").removeClass("past");
                $("input").removeClass("present");
                $("input").addClass("future");
            }
        })

    }

    setBackground()

    $("#local-delete").on("click", function () {
        localStorage.clear();
        location.href = "index.html"
    });


    var nineText = localStorage.getItem("nine");
    $("#nine-text").val(nineText)

    var tenText = localStorage.getItem("ten");
    $("#ten-text").val(tenText)

    var elevenText = localStorage.getItem("eleven");
    $("#eleven-text").val(elevenText)

    var twelveText = localStorage.getItem("twelve");
    $("#twelve-text").val(twelveText)

    var oneText = localStorage.getItem("one");
    $("#one-text").val(oneText)

    var twoText = localStorage.getItem("two");
    $("#two-text").val(twoText)

    var threeText = localStorage.getItem("three");
    $("#three-text").val(threeText)

    var fourText = localStorage.getItem("four");
    $("#four-text").val(fourText)

    var fiveText = localStorage.getItem("five");
    $("#five-text").val(fiveText)


    $("#nine-button").on("click", function () {
        var nine = $("#nine-text").val();
        localStorage.setItem("nine", nine);
    });

    $("#ten-button").on("click", function () {
        var ten = $("#ten-text").val();
        localStorage.setItem("ten", ten);
    });

    $("#eleven-button").on("click", function () {
        var eleven = $("#eleven-text").val();
        localStorage.setItem("eleven", eleven);
    });

    $("#twelve-button").on("click", function () {
        var twelve = $("#twelve-text").val();
        localStorage.setItem("twelve", twelve);
    });
    $("#one-button").on("click", function () {
        var one = $("#one-text").val();
        localStorage.setItem("one", one);
    });
    $("#two-button").on("click", function () {
        var two = $("#two-text").val();
        localStorage.setItem("two", two);
    });
    $("#three-button").on("click", function () {
        var three = $("#three-text").val();
        localStorage.setItem("three", three);
    });
    $("#four-button").on("click", function () {
        var four = $("#four-text").val();
        localStorage.setItem("four", four);
    });
    $("#five-button").on("click", function () {
        var five = $("#five-text").val();
        localStorage.setItem("five", five);
    });


});