var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host     : 'localhost',
    port: 8889,
    user     : 'root',
    password : 'root',
    database : 'bamazon_db'
  });

  connection.connect(function(err){
        if(err) {console.log(err)}

        start();
  });

function start() {
    // console.log("You're in the start function.");

    connection.query("SELECT * FROM products", function(err, res) {
        console.table(res);
        placeOrder()
    });
}

function placeOrder() {
    inquirer.prompt([
        {
            // Question 1
            type: "input",
            message: "Please enter the product ID of the item you'd like to purhcase.",
            name: "ProductID"
        },
        {
            // question 2
            type: "input",
            message: "How many units of the product would you like to purchase?",
            name: "Quantity"
        }
    ]).then(answers => {
        // console.table(answers);
        connection.query('SELECT * FROM products WHERE id=' + answers.ProductID, function (err, res) {
            if (err) throw err;
            // console.table(res);
            if (answers.Quantity > res[0].stock_quantity) {
                console.log("Please enter a lower amount of units.");
            } else {
                var newQuantity = res[0].stock_quantity - answers.Quantity;
                connection.query('UPDATE products SET stock_quantity =' + newQuantity + ' WHERE id=' + answers.ProductID, function (err, res) {
                    if (err) throw err;
                    console.log("\n------------");
                    console.log("Order placed.");
                    console.log("-------------\n");
                    start();
                });
            }
        });
    })
}
