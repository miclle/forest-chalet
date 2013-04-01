// This is a jQuery plugins file.

(function($){

  // Needs require this lib at the moment:
  // CodeMirror Version 2.38 https://github.com/marijnh/CodeMirror
  // marked     https://github.com/chjj/marked
  // codemirror/extend.js
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
          mode:           'markdown',
          theme:          "default",
          // lineNumbers: true,
          matchBrackets:  true,
          lineWrapping:   true,
          autofocus:      true,
          indentWithTabs: true,
          tabSize: 2,
          showCursorWhenSelecting:  true,
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
            editor.setLineClass(hlLine, null, null);
            hlLine = editor.setLineClass(editor.getCursor().line, null, "CodeMirror-activeline-background");
          },
          extraKeys: {
            "Cmd-B": function(cm) { cm.wrapSymbolTag("**") },
            "Cmd-I": function(cm) { cm.wrapSymbolTag("*") },
            "Cmd-U": function(cm) { cm.wrapSymbolTag("~~") },
            "Cmd-K": function(cm) { cm.wrapSymbolTag("`") },
            "Cmd-1": function(cm) { cm.insertTitle(1) },
            "Cmd-2": function(cm) { cm.insertTitle(2) },
            "Cmd-3": function(cm) { cm.insertTitle(3) },
            "Cmd-4": function(cm) { cm.insertTitle(4) },
            "Cmd-5": function(cm) { cm.insertTitle(5) },
            "Cmd-6": function(cm) { cm.insertTitle(6) }
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