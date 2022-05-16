jQuery(document).ready(function() {
    'use strict'
    let Btn = jQuery('.btn');
    let ModWindow = jQuery('.modal_window');
    
    
    jQuery('.item').click(function(){
        jQuery(this).addClass('active');
        jQuery('.item').not(this).removeClass('active');
    });

    jQuery('.btn').click(function() {
        jQuery('.modal_window').slideDown();
    });
    jQuery('.btn').click(function() {
        jQuery('.modal_window').animate({
            opacity:'1',
        });
    });
    jQuery('.btn').click(function() {
        jQuery('.main-block').animate({
            opacity:'0.5',
            transition: '2.9s'
        });
    });

    jQuery('.closed').click(function() {
        jQuery('.modal_window').slideUp();
        jQuery('.main-block').css("opacity", "1");
    });
   


jQuery(document).click(function(e) {
    if ( ! Btn.is(e.target) && Btn.has(e.target).length === 0 && ! ModWindow.is(e.target) && ModWindow.has(e.target).length === 0) {
        ModWindow.hide();
        jQuery('.main-block').css("opacity", "1");
    }
});


jQuery('.open').click(function() {
    jQuery('.form_window').animate({
        right: '-7px',
        
    });
});

});
