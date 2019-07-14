"use strict";

var size = 16;
var blank_x = (size - 1) % 4;
var blank_y = Math.floor((size - 1)/4);

$(function(){
    $("#puzzlearea div").addClass("puzzlepiece");
    $("#puzzlearea div").each(function(index, e){
        var x = index % 4;
        var y = Math.floor(index / 4);

        relocate(e, x, y);
    });

    redHover();

    $("#puzzlearea div").mousedown(moveTile);

    $("#shufflebutton").click(shuffle);
});

function redHover(){
    //update red for canmove
    $("#puzzlearea div").removeClass("movablepiece");
    $("#puzzlearea div").each(function(index, e){
        if(squareCanMove.apply(e)){
            $(e).addClass("movablepiece");
        }
    });
}

function relocate(e, x, y){
        var el = $(e);
        el.attr("x", x);
        el.attr("y", y);
        el.attr("id", y + "_" + x);
        el.css("left", x*100 + "px");
        el.css("top", y*100 + "px");
        el.css("background-position", -x*100 + "px " + (-y*100) + "px");
}

function moveTile(){
    if(squareCanMove.apply(this))
    {
        var e = $(this);
        var tmp_x = parseInt(e.attr("x"));
        var tmp_y = parseInt(e.attr("y"));

        relocate(this, blank_x, blank_y);

        blank_x = tmp_x;
        blank_y = tmp_y;

        //update red for canmove
        redHover();
    }
}

function squareCanMove(){

    var e = $(this);
    if(parseInt(e.attr("x")) == blank_x
    && (
        (parseInt(e.attr("y")) == blank_y - 1)
        || (parseInt(e.attr("y")) == blank_y + 1)
        ))
    {
        return true;
    }

    if(parseInt(e.attr("y")) == blank_y
    && (
        (parseInt(e.attr("x")) == blank_x - 1)
        || (parseInt(e.attr("x")) == blank_x + 1)
        ))
    {
        return true;
    }

    return false;
}

function shuffle(){
    var asize = Math.sqrt(size);
    var numOfMoves = 200;
    var nbOffsets = [-asize, asize, -1, 1 ]; // up down left right
    var randIndex;
    var nbIndex;
    var neighborObj;
        while (numOfMoves > 0) {

            do {
                randIndex = parseInt(Math.random() * 4);
                nbIndex = blank_y*asize + blank_x + nbOffsets[randIndex];
                neighborObj = getTile(Math.floor(nbIndex/4), nbIndex%4);

            } while (!neighborObj);
            moveTile.apply(neighborObj);
            numOfMoves--;
        }
}

function getTile(row, col){
    var strId = row + "_" + col;
    return $("#puzzlearea div").filter("#" + strId)[0];
}

