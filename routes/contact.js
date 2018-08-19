const router = require('express').Router();
const nodemailer = require('nodemailer');
const config = require('../config/config');

router.route('/')
    .get((req,res)=>{
        res.render('contact/contact');
    })
    .post((req,res)=>{
      console.log(req.body)
        let transporter = nodemailer.createTransport({
            service:'Gmail',
            auth:{
              user: config.mailer.id,
              pass: config.mailer.pass
            },

          });
          let mailOptions = {
            from: `Danny TWLC <${config.mailer.id}>`,
            to: `jarkassp2@gmail.com`,
            subject: `A Message from TWLC`,
            text: `This is a mail from Daniel TWLC`,
            html:`
              <h1 style="text-align:center;">${req.body.subject}</h1>
              <p>Email:${req.body.email}</p>
              <div>${req.body.content}</div>
            `
            };
          
          transporter.sendMail(mailOptions, function(err,info){
            if(err){
              console.log(err);
            } else {
              console.log(info);
            }
          })
        }); 
  
        

module.exports = router;
