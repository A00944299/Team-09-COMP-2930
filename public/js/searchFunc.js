var myfirebase = firebase.database();

var submitButton = document.getElementById("searchButton");

submitButton.addEventListener("click", function(){
   var text = document.getElementById("search").value;
   var ref = myfirebase.ref("BldngInfo");
   ref.orderByChild("softPlastic").equalTo(1).on("child_added", function(snapshot){
      console.log(snapshot.key);
   });
});