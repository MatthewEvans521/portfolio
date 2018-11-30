$(function() {
    smoothScroll(350);
    cprnmoreWrap();
    onmaxWrap();
    //projectWrap();
    //test();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

// Project Section Navigation and Animation (each wrap is a diffrent project)
function cprnmoreWrap() {
    $('.thumbnail-1').click(function() {
        $('.projectContainer').css('left','-100%');
        $('.cprnmoreWrap').show();
    });

    $('.projectBack').click(function() {
        $('.projectContainer').css('left', '0%');
        $('.cprnmoreWrap').hide(800);
    });
}

function onmaxWrap() {
    $('.thumbnail-2').click(function() {
        $('.projectContainer').css('left','-100%');
        $('.onmaxWrap').show();
    });

    $('.projectBack').click(function() {
        $('.projectContainer').css('left', '0%');
        $('.onmaxWrap').hide(800);
    });
}

//Working on consolidateing the project wrap into one function below (unfinished)
/**
function test() {
    $('thumbnail-#').click(function() {

    $('.projectContainer').css('left','-100%');
});



function projectWrap() {
    $('thumbnail').click(function() {

        var proj =  $(this).attr('id');

        $('.projectContainer').css('left','-100%');
        $('.'(proj)'Wrap').show();
    });

    $('.projectBack').click(function() {
        $('.projectContainer').css('left', '0%');
        $('.' + proj + 'Wrap').hide(800);
    });
}
**/
