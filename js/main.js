(function () {

    "use strict";

    //===== Prealoder



    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.getElementById("header_navbar");
        var logo = document.querySelector("img#logo");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "block";
        } else {
            backToTo.style.display = "none";
        }
    };

    // Get the navbar


    // for menu scroll
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };

    window.document.addEventListener('scroll', onScroll);


    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );


    //===== glide slider for testimonial

    new Glide('.glide', {
        type: 'slider',
        perView: 1,
        animationDuration: 1000
    }).mount()

    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();

})();
const flecha = new Image(50, 50);
flecha.src = "images/flecha.png";
let index = 1;

actualizarD("niños");
index = 1;
actualizarD("equipos");
index = 1;
actualizarD("niñas");
index = 1;
actualizarD("personalizadas");
index = 1;
actualizarD("PyT");



function actualizarD(categoria) {
    
    let row = document.getElementById("row-"+`niñas`);
    limpiar(categoria);
    let lim = index + 4;
    for (index; index <= lim; index++) {
        var card = document.createElement("card");
        card.setAttribute("class", `col-sm-4 col-md-2 card`);
        var img = new Image();
        img.src = `images/Reposteria/Niños/a (${index}).jpg`;
        img.setAttribute("class", "card-img-top")
        img.onerror = function () {
            index = 1;
            img.src = `images/Reposteria/niñas/a (${index}).jpg`;
        }

        card.appendChild(img);
        row.appendChild(card);

        const mas = document.createElement("button");
        mas.appendChild(flecha)

        mas.onclick = () => {
            actualizarD(categoria);
        }
        row.appendChild(mas);
    }



    function limpiar(categoria) {
    let row = document.getElementById("row-"+`${categoria}`);
        while (row.firstChild) {
            row.removeChild(row.lastChild);
        }
    }

}



