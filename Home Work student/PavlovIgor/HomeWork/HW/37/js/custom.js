jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

    jQuery('.header_btn').click(function(){
        jQuery('.modal_window').addClass('active');
    });

    jQuery('.modal_close').click(function(){
        jQuery('.modal_window').removeClass('active');
    });

    jQuery('.input_label').click(function(){
        jQuery('.input_textarea').toggleClass('active');
    });

    jQuery('.link_active').click(function(){
        jQuery('.modal_item_2').toggleClass('active');
    });

    jQuery('.link_item_menu').click(function() {
        jQuery(this).addClass('active');
        jQuery('.link_item_menu').not(this).removeClass('active');
    });
});

