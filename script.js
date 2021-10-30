function pageLoad(){
    $(function() {
        // Makes boxes big upon hover
        $('div.info-box').hover(function() {
            $(this).toggleClass('expand');
            $('div.info-box').not(this).toggleClass('shrink');
        });
        
        // Makes inner circles big upon hover
        $('div.info-box').hover(function() {
            $(this).children('div.info-circle').toggleClass('cir-expand');
            $('div.info-circle').not(this).children('div.info-circle').toggleClass('cir-shrink');
        });

        $('div.info-box').hover(function() {
            $(this).children('div.info-circle').children('div.info-title').toggleClass('title-move');
        });

        $('div.info-box').hover(function() {
            $(this).children('div.info-circle').children('div.info-content').toggleClass('display-content');
        });

        $('#trixie-pic, .click-me').click(function() {
            $('#trixie-pic').toggleClass('trixie-animate');
            $('.click-me').toggleClass('click-animate');
        });
    });
}
$(document).ready(pageLoad);