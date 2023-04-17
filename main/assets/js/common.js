fetch("../menu.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#menu").innerHTML = data;
        var $menu = $('#menu')
        $menu_openers = $menu.children('ul').find('.opener');
        $menu_openers.each(function() {
            var $this = $(this);
            $this.on('click', function(event) {
                event.preventDefault();
                $menu_openers.not($this).removeClass('active');
                $this.toggleClass('active');
                $window.triggerHandler('resize.sidebar-lock');
            });
        });
    });

$(document).ready(function(){
    $('.slider').bxSlider();
});
