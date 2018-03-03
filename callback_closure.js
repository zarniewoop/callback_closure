function logCar(logMsg, callback){
    process.nextTick(function(){
        calback(logMsg);
    });
}

var cars = ["Range Rover","Rolls Royce","Bentley"];

for (var idx in cars){
    var message = "Saw a " + cars[idx];
    logCar (message, function(){
        console.log("Normal Callback :" + msg);
    });

}

for (var idx in cars){
    var message = "Saw a " + cars[idx];
    (function(msg){
        logCar(msg, function(){
            console.log("Closure Callback: " + msg);
        });
    })(message);
}
