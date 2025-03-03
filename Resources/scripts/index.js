
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting){
            entry.target.style.transitionDelay= `${index * 0.3}s`;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.5});

document.querySelectorAll('.faded').forEach(box => {
    observer.observe(box);
});

document.querySelectorAll('.scale').forEach(box => {
    observer.observe(box);
});

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

if("serviceWorker" in navigator){
    console.log('serviceWorker' in navigator);
    navigator.serviceWorker.register('/service-workers.js')
    .then(() => console.log('Service worker registered'))
    .catch((err) => console.log('service worker failed', err))
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", event =>{
    event.preventDefault();
    deferredPrompt = event;

    const installButton = document.createElement('button');
    installButton.textContent = 'Install App';
    document.body.appendChild(installButton);

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choice => {
            if(choice.outcome === 'accepted'){
                console.log("user installed the pwa");
            }
            deferredPrompt = null;
        });
    });
});