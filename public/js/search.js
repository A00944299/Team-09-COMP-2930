var myFirebase = firebase.database();

var wasteButton = document.getElementById("waste");
var recyclingButton = document.getElementById("recycling");
var compostButton = document.getElementById("compost");
var paperButton = document.getElementById("paper");
var i = 0;
wasteButton.addEventListener("click", function(){
    var ref = myFirebase.ref("BldngInfo");
    
    ref.on("value", function(snapshot){
        var key = Object.keys(snapshot.val())[i++];
        console.log("BuldingNo " + key);
        var x = Object.keys(snapshot.val()[i]);
        console.log("Latitute " + x.BldngLat);
        console.log("Longitude " + x.BldngLong)
    });
});

/*recyclingButton.addEventListener("click", function(){

});

compostButton.addEventListener("click", function(){

});

paperButton.addEventListener("click", ) */