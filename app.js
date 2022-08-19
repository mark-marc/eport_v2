//template_ah1eonc
//service_ggeohad
//8Avufxh3TWCKqWNPK

function contact(){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_ggeohad',
        'template_ah1eonc',
        event.target,
        '8Avufxh3TWCKqWNPK'

    ).then(() => {
        
        loading.classList.remove( "modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
            "The email service is temporarily unavailable. Please contact me directly on markderickgo@gmail.com"
        );
    })
}
let isModalOpen = false;
function toggleModal (){
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");

    }
    isModalOpen = true;
    //toggle modal

    document.body.classList += " modal--open";
}