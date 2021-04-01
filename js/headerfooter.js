$(document).ready(function () {

            $(window).scroll(function () {
                    var sct = $(window).scrollTop();

                    if (sct > 500) {
                        $("header").css('backgroundColor', '#091740');
                    
                        }else{
                         $("header").css('backgroundColor', 'rgb(9, 23, 64, 0.2)');
                        };
                });


           
})