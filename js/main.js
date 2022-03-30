(function($) {
    // Navbar

    $('.open-nav-menu').click(function() {
        $(".nav-menu").addClass("open");
        $('.submenu').slideUp();
    });

    $('.close-nav-menu').click(function() {
        $(".nav-menu").removeClass("open");
        $('.submenu').slideUp();
    });

    $('.submenu-btn').on('click', function() {
        let $this = $(this);
        let submenu;
        submenu = $this.parent().next('.submenu');
        let thisMinusIcon = $this.children('.menu-icon-2');
        let minusIcon = $('.menu-icon-2');
        if ($this.parents('.has-child-menu').length) {
            submenu = $this.parent().next('.child-menu');
            $('.submenu.child-menu').not(submenu).slideUp();
            let parentsIcon = $this.parents('.menu-item-has-children').find('.menu-icon-2').first();
            minusIcon.not(thisMinusIcon).not(parentsIcon).removeClass('hide');
        } else {
            submenu = $this.parent().next('.submenu');
            $('.submenu').not(submenu).slideUp();
            minusIcon.not(thisMinusIcon).removeClass('hide');
        }
        thisMinusIcon.toggleClass('hide');
        submenu.slideToggle();
    });

    // Navbar-search-btn
    $('.navbar-search-btn').click(function() {
        $('.navbar-search-page').slideDown();
    });
    $('.close-search-menu').click(function() {
        $('.navbar-search-page').slideUp();
    });

    // Navbar
    $('.open-nav-menu')
        // Banner
    $('.banner-carousel').owlCarousel({
        loop: false,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
    // Navbar

    // Upcoming Event
    $('.upcoming-event-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    // Wow ja
    new WOW().init();
    // Navbar Shrink
    $(window).on("scroll", function() {

        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });



})(jQuery);