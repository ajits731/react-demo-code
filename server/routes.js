const express = require('express');
const router = express.Router();
const fetch = require('cross-fetch');

router.get('/getCustomProducts', ((req,res) => {
    console.log('request object:', req);
    fetch('https://dummyjson.com/products').then((res) => res.json()).then((response)=>res.send(response));
}));


// router.post

// router.put


module.exports = router;