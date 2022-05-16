jQuery(document).ready(function() {
    'use strict'

    
    jQuery('.item').click(function(){
        jQuery(this).addClass('select');
        jQuery('.item').not(this).removeClass('select');
    });

    let btnWindow = jQuery('.modalWin');
    let regBtn = jQuery('.reg-btn');

    jQuery('.reg-btn').click(function() {
        jQuery('.modalWin').slideDown();
    });

    jQuery('.closed').click(function() {
        jQuery('.modalWin').slideUp();
    });
    jQuery(document).click(function(e) {
        if ( !regBtn.is(e.target) && regBtn.has(e.target).length === 0 && ! btnWindow.is(e.target) && btnWindow.has(e.target).length === 0) {
            btnWindow.hide();
        }
    });


    jQuery('.btnOpen').click(function(){
        jQuery('.preForm').toggle('slow');
    });
});