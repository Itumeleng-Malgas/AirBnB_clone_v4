$(document).ready(function () {
    const amenities = {};
    $("DIV.popover ul li input[type=checkbox]").change(function () {
        if ($(this).is(":checked")) {
            amenities[$(this).data("id")] = $(this).data("name");
        } else {
            delete amenities[$(this).data("id")];
        }

        updateAmenities();
    });

    function updateAmenities() {
        if (Object.keys(amenities).length === 0) {
            $('div.amenities h4').html("&nbsp");
        } else {
            $('div.amenities h4').text(Object.values(amenities).join(", "));
        }
    }


    $.getJSON("http://0.0.0.0:5001/api/v1/status/", function (data, textStatus) {
        if (data.status == "OK") {
            console.log(data.status);
            $("div#api_status").addClass("available");
        } else {
            $("div#api_status").removeClass("available");
        }
    });

});