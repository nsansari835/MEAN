var mongoose = require('mongoose');

var Product = mongoose.model('Product');

module.exports = {
    GetAll: function(req, res) {
        console.log("Reached the getall request");
        Product.find({}, function(err, data) {
            if (err) {
                console.log(err); 
                res.json({message: "Error", err: err}); 
            } else {
                console.log("Reached the getall else")
                res.json({message: "Success", data: data}) 
            }
        }) 
    },
add: function(req, res) {
    console.log(req.body, "Reached the MAKETASK request")
    console.log(req.params.id, "Reached the MAKETASK request")
    console.log("Post Data:", req.body)
    Product.create(req.body, function(err, data) {
        if (err) {
            console.log("Reached the add route", err)
            res.json({message: "Error", err: err}); 
        } else {
            res.json({message: "Success", data: data}) 
        } 
    })
},

getOne: function(req, res) {
    // console.log(req.body, "Reached the getall request")
    // console.log(req.params.id, "Reached the getall request")
    Product.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
            console.log(err); 
            res.json({message: "Error", err: err}); 
        } else {
            console.log("Reached the getall else")
            res.json({message: "Success", data: data}) 
        }                    
    }) 
},

alter: function(req, res) {
    console.log("Post Data:", req.body)
    Product.update({_id: req.params.id}, {$set: {name: req.body.name , quantity: req.body.quantity, price: req.body.price}}, function(err, data) {
        if (err) {
            console.log("Reached the add route")
            res.json({message: "Error", err: err}); 
        } else {

            res.json({message: "Success", data: data}) 
        }
    }
)},

removepet: function(req, res) {
    Product.findOneAndRemove({_id: req.params.id}, function(err, data){
        if (err) {
            console.log(err); 
            res.json({message: "Error", err: err}); 
        } else {
            res.json({message: "Success", data: data}) 
        }                    
    }) 
},

}