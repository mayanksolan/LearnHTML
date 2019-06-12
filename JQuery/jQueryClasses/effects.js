$("button").on("click", function(){
    $("div").slideToggle(5000, function(){
    console.log("Fade Completed");
    });
});