function isTheSameDropOffLocation() {
    var isTheSameDropOffLocation_input = document.getElementById("isTheSameDropOffLocation_input");
    var selectedValue = isTheSameDropOffLocation_input.value;

    if (selectedValue == "Same Drop-Off Location") {
        document.getElementById("dropOffLocation_col").style.margin = "0";
        document.getElementById("dropOffLocation_col").style.padding = "0";
        document.getElementById("dropOffLocation_form_group").style.display = "none";
    } else {
        document.getElementById("dropOffLocation_col").style.margin = "5px";
        document.getElementById("dropOffLocation_col").style.padding = "1";
        document.getElementById("dropOffLocation_form_group").style.display = "inline-block";
    }
}

function SetCookiesBooking() {
    var isTheSameDropOffLocation_input = document.getElementById("isTheSameDropOffLocation_input");
    var selectedValue = isTheSameDropOffLocation_input.value;

    var pickUpLocation = document.getElementById("pickUpLocation_input").value;
    var dropOffLocation = document.getElementById("pickUpLocation_input").value;
    var pickUpDate = document.getElementById("pickUpDate_input").value;
    var dropOffDate = document.getElementById("dropOffDate_input").value;

    if (selectedValue != "Same Drop-Off Location") {
        dropOffLocation = document.getElementById("dropOffLocation_input").value;
    }

    document.cookie =
        "BookingInformation=" +
        "pickUpLocation_output=" +
        pickUpLocation +
        "|dropOffLocation_output=" +
        dropOffLocation +
        "|pickUpDate_output=" +
        pickUpDate +
        "|dropOffDate_output=" +
        dropOffDate;

    alert(document.cookie);

    document.getElementById("popular_models_section").scrollIntoView({ behavior: "smooth" });
}

function ConcatenateCookies(id) {
    var arrCookies = document.cookie.split("BookingInformation=");

    alert(arrCookies.length);
    if (arrCookies.length != 2) {
        alert("Set up a booking first");
        document.getElementById("booking_section").scrollIntoView({ behavior: "smooth" });
        document.getElementById("car" + id + "Form").action = "index.html#booking_section";

        return;
    }
    var carBrand = document.getElementById("car" + id + "Brand").innerText;
    var carModel = document.getElementById("car" + id + "Model").innerText;
    var carType = document.getElementById("car" + id + "Type").innerText;
    var carCost = document.getElementById("car" + id + "Cost").innerText;

    alert(document.cookie);
    document.cookie +=
        "BookingInformation=" +
        "|carBrand_output=" +
        carBrand +
        "|carModel_output=" +
        carModel +
        "|carType_output=" +
        carType +
        "|carCost_output=" +
        carCost;

    alert(document.cookie);
    document.getElementById("car" + id + "Form").action = "confirmation.html";
}

function GetCookies() {
    var arrCookies = document.cookie.split("BookingInformation=");
    var strCookies = arrCookies.join("");
    alert(strCookies);
    arrCookies = strCookies.split("|");

    alert(arrCookies.length);

    for (var i = 0; i < arrCookies.length; i++) {
        var column = arrCookies[i].split("=");
        document.getElementById(column[0]).innerText = column[1];
        console.log(i);
    }
}