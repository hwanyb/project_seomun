$(document).ready(function () {

    $(".top_icon1>a").click(function () {
        $(".m_nav").animate({
            left: "0"
        });
    });
    $(".m_back").click(function () {
        $(".m_nav").animate({
            left: "-300px"
        });
    });

    $("header").animate({
        top: "0",
        opacity: "1"
    }, 500);

    $(".sec1_title").delay(500).animate({
        opacity: "1",
        left: "0px"
    }, 500);
    $(".sec1_logo").delay(700).animate({
        opacity: "1",
        right: "0px"
    }, 500);
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 100) {
            $(".sec2_pattern").animate({
                opacity: "0.6"
            }, 1000)
        };

        if (sct > 250) {
            $(".sec2_txt").animate({
                opacity: "1",
                bottom: "0"
            }, 800)
            $(".sec2").find(".btn_more_y").delay(300).animate({
                opacity: "1",
                height: "46px"
            }, 800);
        };
        if (sct > 600) {
            $(".sec3_order").animate({
                opacity:"1",
                bottom:"0"
            },500);
             $(".sec3_tour").delay(200).animate({
                opacity:"1",
                bottom:"0"
            },500);
        };
    });



});
