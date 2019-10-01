// BACK TO TOP BUTTON

/**
 * Function implements smooth scrolling back to top after clicking the button
 */

let btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  }
  else {
    btn.removeClass('show');
  }
});

btn.on('click', function(d) {
  d.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// COLLAPSE NAV MENU

/**
 * Fix to bootstrap menu issue (not collapsing after clicking a link)
 */

$(".navbar-nav li a").click(function(event) {
  if (!$(this).parent().hasClass('dropdown'))
    $(".navbar-collapse").collapse('hide');
});