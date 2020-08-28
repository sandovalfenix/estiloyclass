/* eslint-disable */
$(window).on('load', function () {
  // initialization of HSMegaMenu component
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 767.98,
    hideTimeOut: 0
  });

  // initialization of svg injector module
  $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
});
$(document).on('ready', function () {
  // initialization of malihu scrollbar
  $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

  // initialization of show animations
  $.HSCore.components.HSShowAnimation.init('.js-animation-link');

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');

  // initialization of select picker
  $.HSCore.components.HSSelectPicker.init('.js-select');

  // initialization of forms
  $.HSCore.components.HSRangeSlider.init('.js-range-slider');

  // initialization of forms
  $.HSCore.components.HSValidation.init('.js-validate');

  // initialization of countdowns
  const countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
    yearsElSelector: '.js-cd-years',
    daysElSelector: '.js-cd-days',
    hoursElSelector: '.js-cd-hours',
    minutesElSelector: '.js-cd-minutes',
    secondsElSelector: '.js-cd-seconds'
  });

  // initialization of autonomous popups
  $.HSCore.components.HSModalWindow.init('[data-modal-target]', '.js-modal-window', {
    autonomous: true
  });

  // initialization of forms
  $.HSCore.components.HSFocusState.init();

  // initialization of form validation
  $.HSCore.components.HSValidation.init('.js-validate', {
    rules: {
      confirmPassword: {
        equalTo: '#signupPassword'
      }
    }
  });

  // initialization of header
  $.HSCore.components.HSHeader.init($('#header'));

  // initialization of unfold component
  $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
    afterOpen: function () {
      $(this).find('input[type="search"]').focus();
    }
  });

  // initialization of step form
  $.HSCore.components.HSStepForm.init(".js-step-form");

  // initialization of sticky blocks
  $.HSCore.components.HSStickyBlock.init('.js-sticky-block');

  // initialization of fancybox
  $.HSCore.components.HSFancyBox.init('.js-fancybox');

  // initialization of slick carousel
  $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

});