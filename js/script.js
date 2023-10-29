$('.share').click(function (e) { 
  e.preventDefault();
  $(e.currentTarget).toggleClass('gray');
  $('.action').toggleClass('hidden');
});