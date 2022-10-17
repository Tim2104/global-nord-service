;($(document).ready(function() {
    
    
    $('#close').click(function() {
        $('#alert-form').fadeOut(700).addClass('a-hidden');
    });
    
    $('#btn-mob-open').click(function() {
        $('#mob-nav-lnk').slideDown(500).css('visibility','visible');
    });
    
    $('#close-menu').click(function() {
        $('#mob-nav-lnk').slideUp(500).css('visibility','visible');
    });
    
    $(document).scroll(function() {
        
        if($(this).scrollTop() > 1600) {
            $('#arrow-up').css('visibility','visible').click(function() {
                $(document).scrollTop(0);
        });
        }else if($(this).scrollTop() < 1600) {
            $('#arrow-up').css('visibility','hidden');
    }
    
    });
    
    $('#wrap-mob-n-phone').click(function() {
        $('#mob-n-phone-box-a').css('display','block');
    });
    $('#close-box').click(function() {
        $('#mob-n-phone-box-a').css('display','none');
    })

})())
