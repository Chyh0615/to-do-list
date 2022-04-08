$(document).ready(function() {
    $("#input").change(function() {
        var input = $(this).val();
        $("ul").append("<li>" + input + "<i class='fa-solid fa-circle-check'></i> <i class='fa-solid fa-trash'></i>" +"</li>");
        $(this).val("");
    });

    $("ul").on("click", ".fa-trash", function() {
        $(this).parent("li").fadeOut(400);
    });
    
    $("ul").on("click", ".fa-circle-check", function(){
        $(this).parent("li").addClass("check")
    });  
    
})