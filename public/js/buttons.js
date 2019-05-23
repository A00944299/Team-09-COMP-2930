var myFirebase = firebase.database();

var wasteButton = document.getElementById("waste");
var recyclingButton = document.getElementById("recycling");
var compostButton = document.getElementById("compost");
var paperButton = document.getElementById("paper");

// event listeners for the common trash types
// WASTE
wasteButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  //clears the map of current markers if there are any
  clear();
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    if(x.waste == 1){
      addToMap(x.BldngLat,x.BldngLong, snapshot.key, "black");
      }
  });
});

// RECYCLING
recyclingButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  clear();
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    if(x.recycling == 1){
      addToMap(x.BldngLat,x.BldngLong, snapshot.key, "blue");
      }
  });
});

// COMPOST
compostButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  clear();
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    if(x.organic == 1){
    addToMap(x.BldngLat,x.BldngLong, snapshot.key, "green");
    }
  });
});

//PAPER
paperButton.addEventListener("click", function(){
  var ref = myFirebase.ref("BldngInfo");
  clear();
  ref.on("child_added", function(snapshot){
    var x = snapshot.val();
    if(x.paper == 1){
      addToMap(x.BldngLat,x.BldngLong, snapshot.key, "yellow");
      }
  });
});
