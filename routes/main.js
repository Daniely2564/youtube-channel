const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('about/aboutme');
})

module.exports = router;