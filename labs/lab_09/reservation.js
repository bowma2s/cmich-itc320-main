"use strict";
$(document).ready(function () {

    document.querySelector("#arrival_date").focus();
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    $("#reservation_form").submit(function (event) {
        

        const arrivalDateValue = document.querySelector("#arrival_date").value.trim();
        const nightsValue = document.querySelector("#nights").value.trim();
        const nameValue = document.querySelector("#name").value.trim();
        const emailValue = document.querySelector("#email").value.trim();
        const phoneValue = document.querySelector("#phone").value.trim();

        document.querySelector("#arrival_date_info").textContent = "";
        document.querySelector("#nights_info").textContent = "";
        document.querySelector("#name_info").textContent = "";
        document.querySelector("#email_info").textContent = "";
        document.querySelector("#phone_info").textContent = "";

        if (arrivalDateValue === "") {
            document.querySelector("#arrival_date_info").textContent = "This field is required";
            event.preventDefault();
        }

        if (nightsValue === "") {
            document.querySelector("#nights_info").textContent = "This field is required";
            event.preventDefault();
        }

        if (nameValue === "") {
            document.querySelector("#name_info").textContent = "This field is required";
            event.preventDefault();
        }

        if (emailValue === "") {
            document.querySelector("#email_info").textContent = "This field is required";
            event.preventDefault();
        }

        if (phoneValue === "") {
            document.querySelector("#phone_info").textContent = "This field is required";
            event.preventDefault();
        }

        if (isNaN(nightsValue)) {
            document.querySelector("#nights_info").textContent = "This field must be numeric";
            event.preventDefault();
        }

        if (!emailPattern.test(emailValue)) {
            document.querySelector("#email_info").textContent = "Must be a valid email address";
            event.preventDefault();
        }

        else{
            window.location.href = response.html;
        }
    });
});
