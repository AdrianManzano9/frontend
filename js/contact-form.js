function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        console.log(navigator.userAgent)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '542625432347';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#name').value
        let email = document.querySelector('#email').value
        let number = document.querySelector('#number').value
        let date = document.querySelector('#subject').value
        let comment = document.querySelector('#message').value

        let mensaje = 'send?phone=' + phone + '&text=*_Formulario_*%0A Nombre: ' + nombre + '%0A Teléfono: ' + number + '%0A Correo Electrónico?%0A' + email + '%0A Fecha de entrega: '+date+'%0A Descripción: '+comment+''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});
