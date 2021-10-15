$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();


    function pcmenu() {

        $(document).on("mousemove", function(e){
            if (windowW > 1200 && e.pageY > 410) {
                $("nav#main-menu").removeClass("on");
            }
        });
    }
    
    function mainSlide() {
        if (windowW < 1200) {
            $(".main-issue .slider img").attr("src", $(".main-issue .slider img").attr("data-for-mobile"));
        } else {
            $(".main-issue .slider img").attr("src", $(".main-issue .slider img").attr("data-for-pc"));
        }
    }


    pcmenu();
    mainSlide();

    $(window).on("resize", function(){
        
        windowh = $(window).height();
        windowW = $(window).width();
        
        $("nav#main-menu h3 a").unbind();
        pcmenu();


        mainSlide();

    });



    $("button.main-menu").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu h3 a").on("click", function (e) {
        
        $("nav#main-menu h3").removeClass("on");



        if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

            $(this).parent().addClass("on");
            e.preventDefault();

        }
        else {
            $("nav#main-menu h3 a").unbind();

        }
    });

    $("nav#main-menu div.menus").on("mouseenter", function(){
        $(this).parent().addClass("on");
    });


    $(".main-content .news h3").on("click", function(){
        $(".main-content .news h3").removeClass("active");
        $(this).addClass("active");

        $(".main-content .news .tab-data").removeClass("active");
        
        $(".main-content .news ."+ $(this).attr("data") +"").addClass("active");

    });

    $(".main-content .news p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".main-equipment .slide p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });



    $(".agency-open").click(function() {
        console.log("클릭");
        $(this).toggleClass("on");
    });






    var $mainEquipment = $("section.main-equipment div.slider");
    $mainEquipment.slick({
        autoplay:true,
        autoplaySpeed:5000,
        speed: 800,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: ".slick-prev",
        nextArrow: ".slick-next",
        
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                  variableWidth: false,
                  centerMode:false
              }
            }
        ]
        

    });






    var $mainIssue = $("section.main-issue div.slider");
    $mainIssue.slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        speed: 800,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                  variableWidth: false,
                  centerMode:false
              }
            }
        ]
        

    });





});
