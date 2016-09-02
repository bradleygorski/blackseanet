(function() {
    var display = function($bio, $button) {
        var str = '▲';
        $button.text(str);
        $bio.slideDown('fast');
    };

    var hide = function($bio, $button) {
        var str = '▼';
        $button.text(str);
        $bio.slideUp('fast');
    };

    $('.people-bio-button').click(function(e) {
        var $this = $(this);
        var $bio = $this.closest('li').find('.people-bio');
        if (!$this.data('showing')) {
            display($bio, $this);
            $this.data('showing', true);
        } else {
            hide($bio, $this);
            $this.data('showing', false);
        }
    });
})();
