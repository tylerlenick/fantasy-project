const User = require("../models").User;

module.exports = function (passport) {
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
		const newUser = req.body;
		User.register(newUser, newUser.password,(err,user)=>{
			if (err){ return res.json(err.message); }
			// console.log(user)
			passport.authenticate("local")(req, res, function() {
				console.log(req.user);
				res.json(req.user);
			})
		});
	});

	router.post("/login",passport.authenticate('local') ,function(req,res){
		console.log("test log in authroute")
		// console.log(req.user);
		const userInfo = req.user
		res.json(userInfo);
	});

	router.get('/logout', function(req, res) {
		req.logout();
		res.json();
	});

	return router;
};