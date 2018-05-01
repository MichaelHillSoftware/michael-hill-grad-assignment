var express = require('express');
var router = express.Router();
var users = require('./users');

router.get('/', (req, res)=>{
    res.render('index');
});

router.use('/users', users);

router.use((req, res, next)=>{
    res.status(404);
    res.render('404');
});

module.exports = router;