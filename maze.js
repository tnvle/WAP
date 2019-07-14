$(document).ready(function(){
    start = false;
    finished = false;
    

    $("#start").click(function(){
        start = true;
        finished = false;
        
        //$("h2").empty();
        $("div.boundary").removeClass("youlose");
    });

    $("div.boundary").mouseover(youlose);

    $("#end").mouseover(function(){
        if(start && !finished){
            $("h2").text("You win!");
            finished = true;
        }
        
    });

    $("#maze").mouseleave(youlose);

    function youlose(){
        if(start && !finished){
            $("div.boundary").addClass("youlose");
            $("h2").text("You lose!");
            finished = true;
        }
    }
}); 