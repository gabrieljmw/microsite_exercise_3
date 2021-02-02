$(window).on("load", function() {
    $(".nav a:first").click();
})

function loadpage(e) {
    e.preventDefault();
    $(".nav .nav-link.active").removeClass("active");
    $(this).addClass("active");

    let href = $(this).attr('href');
    $(".content").load(href);
}


$(document).on("click", ".nav .nav-item .nav-link", loadpage);