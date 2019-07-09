
    function MountainBike(){
        this.gear = 1; 
        this.setGear = function(gear){this.gear = gear;} ;      
    }
    
    

    var createBicyclePrototye = function(){
        MountainBike.prototype.speed = 0;

        MountainBike.prototype.applyBrake = function(decrement){
            this.speed -= decrement;
        };
    
        MountainBike.prototype.speedup = function(increment){
            this.speed += increment;
        };
        return MountainBike.prototype;
    };
    

    var createMountainBikePrototype   = function(){
        var obj = new MountainBike();            
        return obj;
    };

    var start = function(){
        var bicyclePrototype = createBicyclePrototye();
        var mountainBikePrototype = createMountainBikePrototype();

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
        var mountainBikePrototype2 = createMountainBikePrototype(); 
        var mountainBikePrototype3 = createMountainBikePrototype(); 

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


    


