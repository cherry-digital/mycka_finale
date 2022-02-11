$('.slideshow').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "custom-paging",
    customPaging: function (slider, i) {
        return ' <span class="red"> ' + (i + 1) + ' </span> / ' + slider.slideCount;
    },
    arrows: true,
    appendArrows: ".slideshow-arrows",
    appendDots: ".slideshow-dots",
    autoplay: true
});
