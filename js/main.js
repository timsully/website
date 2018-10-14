$(window).on("scroll", function () {
  if ($(window).scrollTop() > 70) {
    $(".navbar-fixed-top").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".navbar-fixed-top").removeClass("active");
  }
});