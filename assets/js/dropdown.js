$(document).ready(function() {
    $('.dropdown').on('mouseenter click', function() {
        $(this).find('.dropdown-content').stop(true, true).slideDown(200);
    });

    $('.dropdown').on('mouseleave', function() {
        $(this).find('.dropdown-content').stop(true, true).slideUp(200);
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-content').slideUp(200);
        }
    });
});