$(document).ready(function() {
    $('.item-menu').hover(
        function() {
            $(this).addClass('active');
        },
        
        function() {
            $(this).removeClass('active');
        }
    );
});