$(function () {
  // 헤더 스크립트
  var header = $('.header')
  var nav = $('.nav')

  $(window).scroll(function () {
    var scrollTopValue = $(document).scrollTop()

    if (scrollTopValue > 0) {
      header.addClass('active')
    } else {
      header.removeClass('active')
    }

    if (scrollTopValue > 0) {
      nav.addClass('active')
    } else {
      nav.removeClass('active')
    }

    if (scrollTopValue > 900) {
      goTop.fadeIn()
    } else {
      goTop.fadeOut()
    }
  })
})
