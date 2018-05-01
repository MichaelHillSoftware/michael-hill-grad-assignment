var express = require('express');
var router = express.Router();

// GET - Renders User Register Page
router.get('/register', (req, res, next)=>{
    res.render('users/register');
});

// GET - Renders User Login Page
router.get('/login', (req, res, next)=>{
    res.render('users/login');
});

// POST - Would handle register
router.post('/register', (req, res, next)=>{
    res.render('users/register');
});

// POST - Would handle login
router.post('/login', (req, res, next)=>{
    res.render('users/login');
});

module.exports = router;