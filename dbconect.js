const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})
function getUsers() {
    connection.query('SELECT * FROM auth', (err, rows, fields) => {
        if (err) throw err
        users = JSON.parse(JSON.stringify(rows));
        console.log(users);
    })
}
var data;
function getQtySum(){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT SUM(quantity) FROM customer WHERE owner = 'customer2'`,(err, result, fields)=>{
            r =result[0]['SUM(quantity)']; 
            resolve(r);
        })
    })
    // connection.query(`SELECT SUM(quantity) FROM customer WHERE owner = 'customer2'`,(err, result, fields)=>{
    //     result[0]['SUM(quantity)'];    
    // })
}
function getWtSum(){
    connection.query(`SELECT SUM(weight) FROM customer WHERE owner = 'customer2'`,(err, result, fields)=>{
        console.log(JSON.parse(JSON.stringify(result)));
    })
}
function getBoxCountSum(){
    connection.query(`SELECT SUM(BoxCount) FROM customer WHERE owner = 'customer2'`,(err, result, fields)=>{
        console.log(JSON.parse(JSON.stringify(result)));
    })
}
// getUsers();
// getQtySum().then(p=>{
//     data = p;
// });
// console.log(data);
// getWtSum();
// getBoxCountSum();


// getData().then(console.log)

connection.query(`SELECT * FROM customer`,(err, result, fields)=>{
    console.log(JSON.parse(JSON.stringify(result)));
})

