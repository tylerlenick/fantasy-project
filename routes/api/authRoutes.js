const User = require("../../models").User;
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.get("/isAuthenticated",function(req,res){
		if (req.isAuthenticated()){
			res.json({
				userId: req.user._id,
				username: req.user.username,
				isAuthenticated: true
			});
			//you can also pass up any other fields you with to expose
			//for example, 
			//nickname: req.user.nickname
		} else {
			res.json({
				userId: null,
				username: null,
				isAuthenticated: false
			});
		}
	});

	router.post("/signup",function(req,res){
		console.log("test authroutes.js")
		const newUser = req.body;
		User.register(newUser, newUser.password,(err,user)=>{
			if (err){ return res.json("authroutes error message: " + err.message); }
			console.log("test user registered")
			// console.log(user);
			console.log(user.username);
			const userInfo = req.user
			res.json(userInfo);
		});
	});

	router.post("/login",passport.authenticate('local') ,function(req,res){
		console.log("test log in authroute")
		console.log(req.user);
		const userInfo = req.user
		res.json(userInfo);
	});

	router.get('/logout', function(req, res) {
		req.logout();
		res.json();
	});

	return router;
};