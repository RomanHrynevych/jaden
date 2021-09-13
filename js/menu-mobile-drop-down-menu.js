function openOrCloseDropdown() {
    if (!$('#burger').hasClass("active")) {
        $('#burger').addClass("active");
        $('#drop-down-menu').addClass("active");
        $('header').addClass("active");
        $('.nav-link').addClass("nav-link-open");
    }   else {
        $('#burger').removeClass("active");
        $('#drop-down-menu').removeClass("active");
        $('header').removeClass("active");
        $('.nav-link').removeClass("nav-link-open");
    }
}