$('[data-fancybox]').fancybox({
  youtube : {
    controls : 0,
    showinfo : 0
  },
  vimeo : {
    color : 'f00'
  }
});

$(function () {

  var mixer = mixitup('.directions__list');

$('.directions__filter-btn').on('click', function(){
  $('.directions__filter-btn').removeClass('directions__filter-btn--active')
  $(this).addClass('directions__filter-btn--active')
  })
})