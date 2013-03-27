// This is a jQuery plugins file.

(function($){

  // needs js-markdown-extra.js at the moment
  jQuery.fn.extend({
    markdown: function(){
      return this.each( function(){
        if ( this.type !== 'textarea' ){
          return false;
        }

        var $textarea = jQuery(this);
        var $preview = jQuery($textarea.attr('data-markdown-preview'));

        var update = function(){
          $preview.html(marked($textarea.val()));
        }

        $textarea.bind('change keypress keyup keydown mousedown mouseup blur cut paste', update);

        update();

        $textarea.bind('scroll', function(){
          var scrollTop = $textarea.scrollTop();
          var textareaScrollHeight = $textarea[0].scrollHeight;
          var previewScrollHeight = $preview[0].scrollHeight;
          $preview.scrollTop( scrollTop / textareaScrollHeight * previewScrollHeight );
        });

      });

    }
  });

})(jQuery);