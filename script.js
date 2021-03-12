$(".menu__item_information").on("click", () => {
    if ($(".main-block").hasClass("is-visible")) {
        $(".main-block").removeClass("is-visible");
    }

    if ($(".menu__item").hasClass("is-active")) {
        $(".menu__item").removeClass("is-active");
    }

    $(".menu__item_information").addClass("is-active");
    $(".main-block_information").addClass("is-visible");
});

$(".menu__item_ratings-info").on("click", () => {
    if ($(".main-block").hasClass("is-visible")) {
        $(".main-block").removeClass("is-visible");
    }

    if ($(".menu__item").hasClass("is-active")) {
        $(".menu__item").removeClass("is-active");
    }

    $(".menu__item_ratings-info").addClass("is-active");
    $(".main-block_ratings-info").addClass("is-visible");
});

$(".menu__item_where-to-buy").on("click", () => {
    if ($(".main-block").hasClass("is-visible")) {
        $(".main-block").removeClass("is-visible");
    }

    if ($(".menu__item").hasClass("is-active")) {
        $(".menu__item").removeClass("is-active");
    }

    $(".menu__item_where-to-buy").addClass("is-active");
    $(".main-block_where-to-buy").addClass("is-visible");
});