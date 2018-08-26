$(document).ready(function() {
  $(window).resize(function() {
    let x = $(window).width();
    if (x > 800) {
      $("ul").slideDown("fast");
    } else {
      $("ul").slideUp("fast");
    }
  });

  $("#bars").click(function() {
    $("ul").slideToggle("fast");
  });
});
