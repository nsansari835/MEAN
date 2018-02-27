// let express = require('express');
// let path = require('path');
// const bodyParser = require('body-parser');
// let app = express();

// app.use(express.static( __dirname + '/client/dist' ));
// app.use(bodyParser.json());

// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// // ===============================

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/restful_api');
// mongoose.Promise = global.Promise;

// var AuthorSchema = new mongoose.Schema({
//     name: String,
//    }, {timestamps: true})
//     // We are setting this Schema in our Models as 'Task'
//    let Author = mongoose.model('Author', AuthorSchema); // We are retrieving this Schema from our Models, Taskd 'Task'





// // Root Request
// app.get('/tasks', function(req, res){
//     Author.find({}, function(err, quotes){
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//            res.json({message: "Error", error: err})
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Success", data: quotes})
//         }
//      })
// })

// app.post('/tasks/new', function(req, res) {
//     console.log("POST DATA", req.body);
//     let new_Task = new Task({
        
//         name: req.body.name,
    
    
//     });

//     new_Author.save(function(err){
//         if(err){
//             console.log(err);
//             res.send(err);
//         }else{

//     // This is where we would add the Lion from req.body to the database.
//             res.redirect('/tasks');
//         }
//     })
// })


// app.get('/tasks/remove/:id', function(req, res) {
//     console.log("POST DATA", req.body);
//     Author.remove({id: req.params.id}, function(err){
//         if(err){
//             console.log(err);
//             res.send(err);
//         }else{

//     // This is where we would add the Lion from req.body to the database.
//             res.redirect('/tasks');
//         }
//     })
// })


// app.post('/tasks/:id/update', function(req, res) {
//     console.log("POST DATA", req.body);
//     Author.update({_id: req.params.id}, {$set: {name: req.body.name}},{multi: false}, function(err, newTask) {
//         if(err){
//             console.log(err);
//             res.send(err);
//         }else{
            
//     // This is where we would add the Lion from req.body to the database.
//             res.redirect('/tasks');
//         }
//     })
// })



// app.get('/:name', function(req, res) {
//     console.log("POST DATA", req.body);
//     Author.find({name: req.params.name}, function(err, newTask){
//         if(err){
//             console.log(err);
//             res.send(err);
//         }else{

//     // This is where we would add the Lion from req.body to the database.
//         res.json({message: "Success", data: newTask})
//         }
//     })
// })


// app.listen(8000, function() {
//     console.log("listening on port 8000");
// })




 // Require the Express Module
 var express = require('express');
 var bodyParser = require('body-parser');
 var path = require('path');
 var mongoose = require('mongoose');
 
 var app = express();
 
 app.use(bodyParser.json());
 
 // Angular app 
 app.use(express.static(__dirname + '/client/dist/' )); // <-- MAKE SURE YOU name YOUR Angular as "public", 
 // or UPDATE this path appropriate to what you named your Angular directory.
 
 // Mongoose config require
 require('./server/config/mongoose.js');
 
 // Require route for server.js
 var routes_setter = require('./server/config/routes.js');
 // Invoke route
 routes_setter(app);
 app.all("*", (req,res,next) => {
     res.sendFile(path.resolve("./client/dist/index.html"))
 });
 
 app.listen(8000, function() {
     console.log('Listening to port 8000');
 })