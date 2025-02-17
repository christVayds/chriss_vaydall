
$(document).ready(function(){
    var open = false;

    $('#open-mobile-nav').click(function(){
        if(open){
            document.getElementById('mobile-nav').classList.remove('show');
            this.textContent = 'Menu';
            open = false;
        } else {
            document.getElementById('mobile-nav').classList.add('show');
            this.textContent = 'Close';
            open = true;
        }
    });
    
    $('#mobile-nav').click(function(){
        this.classList.remove('show');
        open = false;
        document.getElementById('open-mobile-nav').textContent = 'Menu';
    });
});