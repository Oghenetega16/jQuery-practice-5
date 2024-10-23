$('#growbox').click(function () {
    $('#box').animate({width: '710px'});
});

$('#growtext').click(function () {
    $('#box').animate({fontSize: '24px'});
});

$('#movebox').click(function () {
    $('#box').animate({left: '+=300px'}, 3000);
});

$('#doall').click(function () {
    $('#box').animate({width: '710px', fontSize: '24px', left: '+=300px'}, 3000);
});

$('#sequence').click(function () {
    $('#box').animate({width: '710px'}, 1500, function (){
        $('#box').animate({fontSize: '24px'}, 1500, function (){
            $('#box').animate({left: '+=300px'}, 1500);
        });
    });
});

