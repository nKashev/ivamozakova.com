document.addEventListener("DOMContentLoaded", function() {
    // Select the element(s) you want to add the attribute to
    var elements = document.querySelectorAll(".data-home-page");

    // Add the data-home-page attribute to each element
    elements.forEach(function(element) {
        element.setAttribute("data-home-page", "https://ivamozakova.com");
    });
});
