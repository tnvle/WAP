const myModule = (function(){
    "use strict";
    var createBicyclePrototye = function(){
        return {
            speed: 0,
            applyBrake: function(decrement){
                this.speed -= decrement;
            },

            speedup : function(increment){
                this.speed += increment;
            }
        }
    };

    var createMountainBikePrototype   = function(prototype ){
        var obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function(gear){
            this.gear = gear;
        };
        return obj;
    };

    var start = function(){
        var bicyclePrototype = createBicyclePrototye();
        var mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);

        console.log(bicyclePrototype);
        console.log(mountainBikePrototype);

        bicyclePrototype.speedup(10);
        console.log(bicyclePrototype);
        console.log(mountainBikePrototype);
        
        bicyclePrototype.applyBrake(4);
        console.log(bicyclePrototype);
        console.log(mountainBikePrototype);

        console.log(bicyclePrototype.speed);
        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.speedup(5);
        console.log(bicyclePrototype);
        console.log(mountainBikePrototype);

        mountainBikePrototype.applyBrake(2);
        console.log(bicyclePrototype);
        console.log(mountainBikePrototype);

        mountainBikePrototype.setGear(5);
        console.log(bicyclePrototype);
        console.log(mountainBikePrototype);

        var bicyclePrototype2 = createBicyclePrototye();
        var mountainBikePrototype2 = createMountainBikePrototype(bicyclePrototype2); 
        var mountainBikePrototype3 = createMountainBikePrototype(mountainBikePrototype2); 

        bicyclePrototype2.speedup(20);
        mountainBikePrototype2.speedup(10);
        mountainBikePrototype2.setGear(15);
        console.log(bicyclePrototype2);
        console.log(mountainBikePrototype2);
        console.log(mountainBikePrototype3);
        console.log(bicyclePrototype2.speed);
        console.log(mountainBikePrototype2.speed, mountainBikePrototype2.gear);
        console.log(mountainBikePrototype3.speed, mountainBikePrototype3.gear);

        mountainBikePrototype3.speedup(20);
        mountainBikePrototype3.setGear(25);
        console.log(mountainBikePrototype2.speed, mountainBikePrototype2.gear);
        console.log(mountainBikePrototype3.speed, mountainBikePrototype3.gear);
    };


    return{
        start:start
    };

})();

function pageLoad(){
    myModule.start();
}
window.onload = pageLoad;