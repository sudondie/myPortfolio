document.addEventListener("DOMContentLoaded", function () {
    $('.row__burger').click(function (event) {
        $('.row__burger,.header__menu,.header__description,.header__image,.aboutMe,body').toggleClass('active');
    });
    let htmlimage = document.querySelector('.header__image');
    let menuButton = document.querySelector('.row__burger');
    let menuList = document.querySelector('.header__menu');
    let animationHTML = anime({
        targets: htmlimage,
        keyframes: [{
                scale: 1.1
            },
            {
                rotate: 360,
                duration: 2000
            },
            {
                scale: 1
            },
        ],
        autoplay: false,
        duration: 1500,
    });
    let animationMenu = anime({
        targets: menuList,
        scale: 1.1,
        duration: 1000,
    })
    htmlimage.onmouseover = animationHTML.play;
    menuButton.onclick = animationMenu.play;



    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 400,
        easing: 'linear',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
    });
});