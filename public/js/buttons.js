var myFirebase = firebase.database();

var wasteButton = document.getElementById("waste");
var recyclingButton = document.getElementById("recycling");
var compostButton = document.getElementById("compost");
var paperButton = document.getElementById("paper");

wasteButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  clear()
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    addToMap(x.BldngLat,x.BldngLong);
      console.log("BuildingNo " + snapshot.key);
      console.log("Latitute " + x.BldngLat);
      console.log("Longitude " + x.BldngLong)
      console.log("Garbage? " + x.waste)
  });
});


recyclingButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  clear()
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    addToMap(x.BldngLat,x.BldngLong);
    console.log("BuildingNo " + snapshot.key);
    console.log("Latitute " + x.BldngLat);
    console.log("Longitude " + x.BldngLong)
    console.log("Recyling " + x.recycling)
  });
});


compostButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  clear()
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    
    addToMap(x.BldngLat,x.BldngLong);
      console.log("BuildingNo " + snapshot.key);
      console.log("Latitute " + x.BldngLat);
      console.log("Longitude " + x.BldngLong)
      console.log("Compost? " + x.organic)
  });
});


paperButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  clear()
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    addToMap(x.BldngLat,x.BldngLong);
      console.log("BuildingNo " + snapshot.key);
      console.log("Latitute " + x.BldngLat);
      console.log("Longitude " + x.BldngLong)
      console.log("Paper " + x.paper)
  });
});





