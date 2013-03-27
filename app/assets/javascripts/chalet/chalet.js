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

//= require codemirror
//= require codemirror/utils/overlay
//= require codemirror/modes/xml
//= require codemirror/modes/markdown
//= require codemirror/modes/gfm

//= require markdown/marked

//= require md5

//= require jquery.plugins

$(function(){

  $markdown_editor = $('#markdown-editor');
  $markdown_preview = $('#markdown-preview');

  $("#markdown-input").resizable({
    handles: "e",
    resize: function(event, ui) {
      $markdown_preview.width($markdown_editor.width() - ui.size.width - 10); //10 is padding value
    }
  });

  var editor = CodeMirror.fromTextArea(document.getElementById("post_content"), {
    mode: 'gfm',
    theme: "default",
    lineWrapping: true,
    onCursorActivity: function() {
      editor.setLineClass(hlLine, null, null);
      hlLine = editor.setLineClass(editor.getCursor().line, null, "activeline");
    },
    onChange:function(){
      // compile();
      // console.log(editor.getValue());
      console.log("onChange");
     }
  });

  // $('.markdown-input').markdown();

});