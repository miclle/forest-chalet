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
        var $preview = jQuery($textarea.attr('data-markdown-preview'));

        var editor = CodeMirror.fromTextArea(this, {
          mode:         'gfm',
          theme:        "default",
          lineWrapping: true,
          autofocus:    true,
          showCursorWhenSelecting:  true
        });

        editor.setSize("100%", "100%");

        editor.on("change", function(instance, changeObj) {
          $textarea.val(instance.getValue());
          $preview.html(marked(instance.getValue()));
        });

        editor.on("scroll", function(instance) {

          var scrollInfo = instance.getScrollInfo();

          var previewScrollHeight = $preview[0].scrollHeight;

          $preview.scrollTop( scrollInfo.top / scrollInfo.height * previewScrollHeight );
        });

        $preview.html(marked(editor.getValue()));

      });

    }
  });

})(jQuery);