var myfirebase = firebase.database();

var submitButton = document.getElementById("searchButton");
var input = document.getElementById("search")
var buildingList = [];
var userLat;
var userLong;
var nearestVal = 2;
var nearestBuild;

input.addEventListener("keydown", function(event){
  if(event.keyCode == 13){
    event.preventDefault();
    search();
  }
});


// gets user location immediately after page load and location allowed
window.onload = getLocation();

function search() {
  let input = document.getElementById("search").value.toLowerCase();
  buildingList = [];
  
  // connecting to TrashType database
  var ref = myfirebase.ref("TrashType");
  ref.orderByKey().equalTo(input).on("child_added", function(snapshot) {
    let x = snapshot.val();
    let type = x.type;
    console.log(JSON.parse(JSON.stringify(type)));
    identifyBuilding(type, findClosest);
    building(type);
  });
}

function building(x){
  clear();
  console.log("buld");
  let ref = myfirebase.ref("BldngInfo");
  ref.orderByChild(x).equalTo(1).on("child_added", function(snapshot){
    let x = snapshot.val();
    
    addToMap(x.BldngLat, x.BldngLong);
  });
}

// gets all builings that have the bin available and adds into an array
function identifyBuilding(trashType, callback) {
  console.log("identifyBuilding executing...");
  let ref = myfirebase.ref("BldngInfo");
  ref.orderByChild(trashType).equalTo(1).on("child_added", function(snapshot) {
    buildingList.push(snapshot.key);
  });
  console.log(JSON.parse(JSON.stringify(buildingList)));
  callback();
}

// gets latitude and longitude of each building
function findClosest() {
  console.log("findClosest executing...");
  for (let i = 0; i < buildingList.length; i++) {
    let ref = myfirebase.ref("BldngInfo");
    ref.orderByKey().equalTo(buildingList[i]).on("child_added", function(snapshot) {
      let x = snapshot.val();
      //console.log(snapshot.key);
      let temp = (userLat - x.BldngLat) + (userLong - x.BldngLong);
      console.log(JSON.parse(JSON.stringify(temp)));
      if (temp < nearestVal) {
        nearestVal = temp;
        nearestBuild = buildingList[i];
      }
    });
    setTimeout(console.log(JSON.parse(JSON.stringify("nearestVal: " + nearestVal))));
    console.log(JSON.parse(JSON.stringify("nearestBuild: " + nearestBuild)));
  }
}

// gets user location coordinates
// https://medium.com/@adeyinkaadegbenro/how-to-detect-the-location-of-your-websites-visitor-using-javascript-92f9e91c095f
function getLocation() {
  navigator.geolocation.getCurrentPosition(function success(position) {
    // for when getting location is a success
    userLat  = position.coords.latitude;
    userLong = position.coords.longitude;
    console.log('latitude', userLat, 'longitude', userLong);
  });
}


