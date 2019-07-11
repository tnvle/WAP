$(function(){
    blank_x = ((15 % 4)) ;//the last tile
    blank_y = (Math.floor(15 / 4)) ;

    $("#puzzlearea div").addClass("puzzlepiece");
    $("#puzzlearea div").each(function(index, e){
        // var x = 100*index;
        // var y = 100*(index%4);
        var x = ((index % 4) * 100) ;
        var y = (Math.floor(index / 4) * 100) ;
        $(e).css("left", x + "px");
        $(e).css("top", y + "px"); 
        $(e).css("background-position", -x + 'px ' + (-y) + 'px');        
        
        // store x and y for later
        $(e).attr("x", x/100);
        $(e).attr("y", y/100);
        $(e).attr("id", y/100 + "_" + x/100);
    });

    $("#puzzlearea div").mousedown(moveTile);

    $("#shufflebutton").click(shuffle);
});

function moveTile(){
    if(squareCanMove.apply(this))
    {
        var e = $(this);
        var tmp_x = parseInt(e.attr("x"));
        var tmp_y = parseInt(e.attr("y"));

        e.attr("x", blank_x);
        e.attr("y", blank_y);
        e.attr("id", blank_y + "_" + blank_x);
        e.css("left", blank_x*100 + "px");
        e.css("top", blank_y*100 + "px"); 
        e.css("background-position", -blank_x*100 + 'px ' + (-blank_y*100) + 'px');    
        

        blank_x = tmp_x;
        blank_y = tmp_y;
    }
}

function squareCanMove(){
    
    var e = $(this);
    if(parseInt(e.attr("x")) == blank_x && ((parseInt(e.attr("y")) == blank_y - 1) || (parseInt(e.attr("y")) == blank_y + 1)))
        return true;
    if(parseInt(e.attr("y")) == blank_y && ((parseInt(e.attr("x")) == blank_x - 1) || (parseInt(e.attr("x")) == blank_x + 1)))
        return true;

    return false;
}

function shuffle(){
    var size = 4;
    var numOfMoves = 200;
    var neighborOffsets = [-size, +size, -1, +1 ]; // up down left right
        while (numOfMoves > 0) {
            
            do {
                var indexNeighbor = parseInt(Math.random() * 4);
                var neighbor = blank_y*size + blank_x + neighborOffsets[indexNeighbor];
                neighborObj = getTile(Math.floor(neighbor/4), neighbor%4);
                
            } while (!neighborObj);
            moveTile.apply(neighborObj);
            numOfMoves--;
        }
}

function getTile(row, col){
    var strId = row + "_" + col;
    return $("#puzzlearea div").filter("#" + strId)[0];
}

