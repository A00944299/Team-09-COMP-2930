var mysql = require("mysql");

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"trashere_db"
})

   con.connect();
   


   function search(String n){
      n = n.toLowerCase();
      con.query('SELECT Name FROM BldngInfo WHERE' + n + " IS 1", function(error,results, fields){
         if(error) throw error;
         console.log('The solutions is', results);
      });
   }
   con.query('SELECT Name FROM BldngInfo', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results);
  });

  con.end();

