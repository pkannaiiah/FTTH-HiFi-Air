var swiper = new Swiper(".global_hero_banner", {
  spaceBetween: 30,
  // autoplay: {
  //   delay: 500,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//FAQ Accordion


const accordionItemFooters = document.querySelectorAll(
  ".footer_menu_head"
);
accordionItemFooters.forEach((accordionItemFooter) => {
  accordionItemFooter.addEventListener("click", (event) => {
      // Allow to collapse one item at a time
      const currentlyActiveAccordionItemFooter = document.querySelector(
          ".footer_menu_head.active"
      );
      if (
          currentlyActiveAccordionItemFooter &&
          currentlyActiveAccordionItemFooter !== accordionItemFooter
      ) {
          currentlyActiveAccordionItemFooter.classList.toggle("active");
          currentlyActiveAccordionItemFooter.nextElementSibling.style.maxHeight = 0;
      }
      //

      accordionItemFooter.classList.toggle("active");
      const accordionItemBody = accordionItemFooter.nextElementSibling;
      if (accordionItemFooter.classList.contains("active")) {
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
          accordionItemBody.style.maxHeight = 0;
      }
  });
});


//FAQ Accordion
$('.card .collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.card');
  $('html,body').animate({
    scrollTop: $card.offset().top - 100
  }, 500);
});

//Scroll Top
var btn = $('.sroll_top_fixed');

$(window).scroll(function() {   
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});