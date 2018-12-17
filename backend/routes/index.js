var mongoose = require('mongoose');
var router = require('express').Router();
var User = mongoose.model('User');
var 'Register' = mongoose.model('Register');
var ObjectID = require('mongodb').ObjectID;
//router.use('/api', require('./api'));

router.get('/user', function(req, res, next){
    console.log("===================4894613=", req.query);

    var userData = new User({
        category: req.query.category,
        email: req.query.email,
        f_name: req.query.f_name,
        grade: req.query.grade,
        l_name: req.query.l_name,
        p_cert: req.query.p_cert,
        password: req.query.password,
        s_name1: req.query.s_name1,
        s_name2: req.query.s_name2,
        savedToCloud: req.query.savedToCloud,
        sc_name1: req.query.sc_name1,
        sc_name2: req.query.sc_name2,
        summary: req.query.summary,
        t_cert: req.query.t_cert,
        t_email: req.query.t_email,
        teamname: req.query.teamname,
        title: req.query.title,
        _id: new ObjectID()
    });

    userData.save(function(err) {
        if (err)
            console.log(err);
        else
            return res.json({"user": "sotnikov.uri"});
    });
});
router.get('/registeruser', function(req, res, next){
	 console.log(req.body);
});
module.exports = router;
