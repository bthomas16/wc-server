const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
    // let transporter = nodeMailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: process.env.GoogleAuth.user,
    //         pass: process.env.GoogleAuth.pass
    //     }
    // });

    // let mailOptions = {
    //     from: '"Watch SOC" <watchsoc_help@watchsoc.com>', // sender address
    //     to: req.body.to, // list of receivers
    //     subject: "Watch SOC password reset", // Subject line
    //     text: "Oh no! We heard you were locked out of your Watch SOC account! Follow the link below to reset your password",
    //     html: '<a href="www.watchcollection.com/resetpassword">Visit your profile here</a>' // html body
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         res.json({isSuccess: false, message: 'Unable to send message'});
    //     }
    //         console.log('Message %s sent: %s', info.messageId, info.response);
    //         res.json({isSuccess: true, message: 'Message sent successfully'});
    //     });
    });

    module.exports = router;
    