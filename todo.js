//Check Off Specific Todos By Clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('checkOff')
});

$('ul').on('click', '.delBotton', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation()
});

$('input[type = "text"]').keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append('<li><span class = "delBotton">X</span> ' + todoText + '</li>')
    }
});