var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb+srv://safiaa:safiaa@cluster0.ye0r3.mongodb.net/woowend?retryWrites=true&w=majority", ["drivers"]);



router.get("/drivers", function(req, res, next){
	db.drivers.find(function(err, drivers){
		if(err){
			res.send(err);

		}
		res.json(drivers);
	})
}); 




module.exports = router;