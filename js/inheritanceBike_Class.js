
    
    class createBicyclePrototye {
        constructor(){
            this.speed = 0;
        }
        
        applyBrake(decrement){
            this.speed -= decrement;
        }

        speedup(increment){
            this.speed += increment;
        }
        
    }

    class createMountainBikePrototype extends createBicyclePrototye{
        constructor(){
            super();
            this.gear = 1;
        }
       
        setGear(gear){
            this.gear = gear;
        }
        
    }

    var start = function(){
        var bicyclePrototype = new createBicyclePrototye();
        var mountainBikePrototype = new createMountainBikePrototype();

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

        var bicyclePrototype2 = new createBicyclePrototye();
        var mountainBikePrototype2 = new createMountainBikePrototype(); 
        var mountainBikePrototype3 = new createMountainBikePrototype(); 

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

    function pageLoad(){
        start();
    }
    window.onload = pageLoad;


