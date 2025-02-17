
$(document).ready(function(){
    var open = false;

    $('#open-mobile-nav').click(function(){
        if(open){
            document.getElementById('mobile-nav').classList.remove('show');
            open = false;
        } else {
            document.getElementById('mobile-nav').classList.add('show');
            open = true;
        }
    });
    
    $('#mobile-nav').click(function(){
        this.classList.remove('show');
    });
});