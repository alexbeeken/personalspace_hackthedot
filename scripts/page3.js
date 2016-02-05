$(function() {
  $('.yes-button').on("click", function() {
    $('.yes-button').css({background:'#b00100'});
    $('.good').delay(500).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(1000);
  }); 
  $('#alone').on("click", function() {
    $('#alone2').fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(1200);
  });

  $("#submit").on("click", function(e) {
    e.preventDefault();
    $('form').fadeOut(1000);
    $('.cat').delay(1000).fadeIn(1000);
  });
});