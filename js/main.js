$(document).ready(function() {
});


$(".progress > span").each(function() {
    $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
            width: $(this).data("origWidth")
        }, 1000);
});

$(".btn-form").on("click",function(){
    $(".wrapper-form").fadeIn("slow");
});

$(".close").on("click",function(){
    $(".wrapper-form").fadeOut("slow");
});

