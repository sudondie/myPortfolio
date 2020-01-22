document.addEventListener("DOMContentLoaded", function () {
    $('.row__burger').click(function(event){
        $('.row__burger,.header__menu,.header__description,.header__image,.aboutMe,body').toggleClass('active');
        anime({
            targets: '.header__menu.active',
        });
    });

    anime({
        targets: '.header__image',
        duration: 2000,
    });
    $('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 600,
        easing: 'swing',
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
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
