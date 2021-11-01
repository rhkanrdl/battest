
$(function(){

    menu();
    coverimage();
    maintab();
    outlink();



    $("button.check-co").click(function() {
        $("#modal-co").addClass("on");
    });
    
    

    $(window).on("resize", function(){
        $("nav#main-menu h3 a").unbind();
        menu();
        coverimage();
    });

    /* ----- slider ----- */
    var $mainIssue = $("section.main-issue div.slider");

    $mainIssue.slick({

        // arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        fade:true,
        speed: 1000,
        nextArrow: ".issue-next",
    
    });
    
    var $mainNews = $("section.main-news div.slider");

    $mainNews.slick({

        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        speed: 1000,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        vertical: true,
    
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



});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on("resize", function(){
    windowh = $(window).height();
    windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {

    $(document).on("mousemove", function(e){
        if (windowW > 1200 && e.pageY > 410) {
            $("nav#main-menu").removeClass("on");
            $("#header").removeClass("on");
        }
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
        $("#header").addClass("on");
    });

}

/* ----- cover image ----- */ 
function coverimage() {


    $(".main-issue .slide").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".main-content .news p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".main-equipment .slide p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".sub-content .sub-agency-detail p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
}

/* ----- main tab ----- */ 
function maintab() {

    $(".main-content .news h3").on("click", function(){
        $(".main-content .news h3").removeClass("active");
        $(this).addClass("active");

        $(".main-content .news .tab-data").removeClass("active");
        
        $(".main-content .news ."+ $(this).attr("data") +"").addClass("active");

    });
}

/* ----- outlink ----- */ 
function outlink() {
    $(".agency-open").click(function() {
        console.log("클릭");
        $(this).toggleClass("on");
    });
}












