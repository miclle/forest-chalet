// This is a jQuery plugins file.

(function($){

  // Needs require this lib at the moment:
  // CodeMirror https://github.com/marijnh/CodeMirror
  // marked     https://github.com/chjj/marked
  jQuery.fn.extend({
    markdown: function(){
      return this.each( function(){
        if ( this.type !== 'textarea' ){
          return false;
        }

        var $textarea = jQuery(this);
        var $wrapper  = $textarea.parent();
        var $preview  = jQuery($textarea.attr('data-markdown-preview'));

        var editor = CodeMirror.fromTextArea(this, {
          mode:         'markdown',
          theme:        "default",
          // lineNumbers: true,
          matchBrackets: true,
          lineWrapping: true,
          autofocus:    true,
          showCursorWhenSelecting:  true,
          tabSize: 4,
          indentUnit: 4,
          indentWithTabs: true,
          onChange: function(){
            $textarea.val(editor.getValue());
            $preview.html(marked(editor.getValue()));
          },
          onScroll: function(){
            var scrollInfo = editor.getScrollInfo();
            var previewScrollHeight = $preview[0].scrollHeight;
            $preview.scrollTop( scrollInfo.y / scrollInfo.height * previewScrollHeight );
          },
          onCursorActivity: function() {
            editor.matchHighlight("CodeMirror-matchhighlight");
          },
          onCursorActivity: function() {
            editor.setLineClass(hlLine, null, null);
            hlLine = editor.setLineClass(editor.getCursor().line, null, "CodeMirror-activeline-background");
          }
        });

        var hlLine = editor.setLineClass(0, "CodeMirror-activeline-background");

        editor.setSize("100%", $wrapper.height());

        $(window).resize(function(){
          editor.setSize("100%", $wrapper.height());
        });

        $preview.html(marked(editor.getValue()));

      });

    }
  });

})(jQuery);