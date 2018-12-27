const express = require('express');
const router = express.Router();
const nodeMailer = require('nodeMailer')

router.post('/', (req, res) => {
    let formData = req.body;

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GoogleAuth_user,
            pass: process.env.GoogleAuth_pass
        }
    });
    
    console.log('get it to', req.body)

    let mailOptions = {
        from: '"Watch SOC" <watchsoc_info@watchsoc.com>', // sender address
        to: formData.email, // list of receivers
        subject: "Welcome to Watch SOC!", // Subject line
        html: `<p>Thank you for joining Watch SOC, ${formData.firstName}! We are so excited to have you join us.</p>
        <a href="http://localhost:8080/profile" target="_blank">Visit your profile here</a>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        console.log('hello, sir')
        if (error) {
            console.log('oops, err', error)
            return res.json({isSuccess: false, message: 'Unable to send message'});
        }
            console.log('Sent the thing', info);
            return res.json({isSuccess: true, message: 'Message sent successfully'});
        });
    });
    
    module.exports = router;
