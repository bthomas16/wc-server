const express = require('express');
const router = express.Router();

const sgMail = require('@sendgrid/mail');

router.post('/', (req, res) => {
    let formData = req.body.messageBody;

    // let transporter = nodeMailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: process.env.GoogleAuth_user,
    //         pass: process.env.GoogleAuth_pass
    //     }
    // });

    // let mailOptions = {
    //     from: '"Watch SOC" <watchsoc_info@watchsoc.com>', // sender address
    //     to: req.body.emailTo, // list of receivers
    //     subject: "Your message to Watch SOC", // Subject line
    //     html: `<p>Here is a copy of the message you sent to Watch SOC:</p>
    //            <p>${req.body.messageBody}</p>
    //            <p>We will get back to you as soon as possible!</p>
    //            <a href="www.watchsoc.com/profile">Visit your profile here</a>` // html body
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return res.json({isSuccess: false, message: 'Unable to send message'});
    //     }
    //         return res.json({isSuccess: true, message: 'Message sent successfully'});
    //     });







        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
        to: formData.email,
         from: '"Watch SOC" <watchsoc_info@watchsoc.com>', // sender address
        to: req.body.emailTo, // list of receivers
        subject: "Your message to Watch SOC", // Subject line
        html: `<p>Here is a copy of the message you sent to Watch SOC:</p>
               <p>${req.body.messageBody}</p>
               <p>We will get back to you as soon as possible!</p>
               <a href="www.watchsoc.com/profile">Visit your profile here</a>` 
        };
    
        sgMail.send(msg);



    });
    
    module.exports = router;
