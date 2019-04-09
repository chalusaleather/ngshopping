$(function($) {
    $(document).ready(function() {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
});