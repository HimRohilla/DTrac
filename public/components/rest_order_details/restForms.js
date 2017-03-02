$(document).ready(function() {
    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();
    navListItems.click(function(e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');
        
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });
    $('ul.setup-panel li.active a').trigger('click');

    $("#step_1_next").on("click", function() {showDivs('#step-2', '#list-2')});
    $("#step_2_next").on("click", function() {showDivs('#step-3', '#list-3')});
});
function showDivs(a, b) {
    allWells = $('.setup-content');
    navListItems = $('ul.setup-panel li a');
    navListItems.closest('li').removeClass('active');
    $(''+b).addClass('active');
    allWells.hide();
    $(''+a).show();        
} 