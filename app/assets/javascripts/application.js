// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require jquery.pjax
//= require jquery.plugins

$(function() {
  // pjax
  $(document).pjax('a:not([data-remote]):not([data-behavior]):not([data-skip-pjax])', '[data-pjax-container]');

  $('#setting-icon').hover(function(){
    $(this).addClass('animated rotateLeft').removeClass('rotateRight');
  }, function(){
    $(this).addClass('animated rotateRight').removeClass('rotateLeft');
  }).click(function(){
    var $login = $('#login').addClass('animated');
    if($login.data('show')){
      $login.removeClass('fadeInDown').addClass('fadeOutDown').data('show', false);
    }else{
      $login.removeClass('fadeOutDown').addClass('fadeInDown').data('show', true);
    }
    $(this).rotate(360);
  });

  $(window).verticalScrollCog('#setting-icon');

});