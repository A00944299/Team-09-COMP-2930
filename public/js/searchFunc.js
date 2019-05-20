var myfirebase = firebase.database();


var submitButton = document.getElementById("searchButton");

submitButton.addEventListener("click", function() {
  
  // gets search value
  var input = document.getElementById("search").value.toLowerCase();
  
  var ref = myfirebase.ref("TrashType");
  ref.orderByKey().equalTo(input).on("child_added", function(snapshot) {
    var x = snapshot.val();
    var type = x.type;
    alert(type);
  });
});
