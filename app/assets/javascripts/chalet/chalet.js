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
//= require jquery.ui.resizable

//= require markdown/Markdown.Converter
//= require markdown/Markdown.Sanitizer
//= require markdown/Markdown.Editor
//= require markdown/jquery.markdown

$(function(){

  $("#markdown").resizable({
    handles: "e",
    resize: function(event, ui) {
      console.log(ui);
    }
  });

  var converter = Markdown.getSanitizingConverter();
  // converter.hooks.chain("preBlockGamut", function (text, rbg) {
  //   return text.replace(/^ {0,3}""" *\n((?:.*?\n)+?) {0,3}""" *$/gm, function (whole, inner) {
  //     return "<blockquote>" + rbg(inner) + "</blockquote>\n";
  //   });
  // });
  var editor = new Markdown.Editor(converter);
  editor.run();



});