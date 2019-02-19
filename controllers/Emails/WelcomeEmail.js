const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer')

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
    

    let mailOptions = {
        from: '"Watch SOC" <watchsoc_info@watchsoc.com>', // sender address
        to: formData.email, // list of receivers
        subject: "Welcome to Watch SOC!", // Subject line
        html: `<p>Thank you for joining Watch SOC, ${formData.firstName}! We are so excited to have you join us.</p>
        <a href="www.watchsoc.com/profile">Visit your profile here</a>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({isSuccess: false, message: 'Unable to send message'});
        }
            return res.json({isSuccess: true, message: 'Message sent successfully'});
        });
    });
    
    module.exports = router;
