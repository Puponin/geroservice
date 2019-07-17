window.onload = function () {

    var menuStyle = getComputedStyle(navbar);
    btn.onclick = function () {
        if (menuStyle.opacity == "0") {
            navbar.classList.add("active");
            btn.classList.add("active");
        } else {
            navbar.classList.remove("active");
            btn.classList.remove("active");
        }
    };

    var btns = document.querySelectorAll(".score li"),
        imgs = document.querySelectorAll(".img_slides img");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", slider);
    }

    function slider() {
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.borderColor = '#dedfe0';
            imgs[i].classList.remove('active');
            if (btns[i] === this) {
                btns[i].style.borderColor = '#4d95dd';
                imgs[i].classList.add('active');
            }
        }
    }
    var slideIndex = 0;
    autoSlider();
    function autoSlider() {
        for (let i = 0; i < imgs.length; i++) {
            btns[i].style.borderColor = '#dedfe0';
            imgs[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > imgs.length) {
            slideIndex = 1;
        }
        btns[slideIndex - 1].style.borderColor = '#4d95dd';
        imgs[slideIndex - 1].classList.add('active');
        setTimeout(autoSlider, 4000);
    }
};

$(function () {
    links = $('.menu a');

    links.on('click', function (e) {
        e.preventDefault();

        links.removeClass('active');
        var selector = $(this).addClass('active').attr('href');
        var target = $(selector);

        $('html, body').animate({
            scrollTop: target.offset().top - 120
        }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});
