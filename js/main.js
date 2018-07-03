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
    $(".wrapper-form, .bg-modal").fadeIn("slow");
});

$(".close").on("click",function(){
    $(".wrapper-form, .bg-modal").fadeOut("slow");
});

