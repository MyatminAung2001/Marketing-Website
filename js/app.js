//scroll
let screenHeight = $(window).height();

$(window).scroll(function () {

    let currentPosition = $(this).scrollTop();
        
    if (currentPosition >= screenHeight-100) {
            $(".hero-nav").addClass("hero-nav-scroll");
    } else {
            $(".hero-nav").removeClass("hero-nav-scroll");
            setActive("home") 
    }
});

//responsive menu icon
$(".navbar-toggler").click(function () {
    let result = $(".navbar-collapse").hasClass("show");
    console.log(result);

    if(result) {
        $(".menu-icon").removeClass("fa-solid fa-xmark").addClass("fa-solid fa-bars")
    } else {
        $(".menu-icon").removeClass('fa-solid fa-bars').addClass("fa-solid fa-xmark")
    }
});

// section revalling
function setActive(current) {
    $('.nav-link').removeClass("current-section")
    $(`.nav-link[href='#${current}']`).addClass("current-section");
};

function navScroll() {
    let currentSection = $("section[id]");
    
    currentSection.waypoint(function (direction) {

        if (direction == "down") {
            let currentSectionId = $(this.element).attr("id");
            setActive(currentSectionId)
        }

    }, {
        offset: '150px'
    });

    currentSection.waypoint(function (direction) {
        
        if (direction == "up") {
            let currentSectionId = $(this.element).attr("id");
            setActive(currentSectionId)
        }
    }, {
        offset : '150px'
    });
};

navScroll();

//animation
new WOW().init();

//slide
$(".pricing-slide").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        { 
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//Window Loading
$(window).on("load", function() {
    $(".loading-screen").fadeOut(500, function() {
        $(this).remove();
    });
});