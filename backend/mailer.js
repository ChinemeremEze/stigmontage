const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const mailMessage = async (req, res) => {
    try{
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
        if(!req.body){
            return res.status(400).json({status: 400, message: "Fullname, Email and message are required"});
        }
        if(!req.body.name){
            return res.status(400).json({status: 400, message: "Name is required"});
        }
        if(!req.body.email){
            return res.status(400).json({status: 400, message: "Email is required"});
        }
        if(!req.body.message){
            return res.status(400).json({status: 400, message: "Message is required"});
        }
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${req.body.name} 👻 <${req.body.email}>`, // sender address
    to: " giftcoin@gmail.com", // list of receivers
    subject: "Giftcoin Contact Us Page ✔", // Subject line
    text: req.body.message, // plain text body
    html: `<b>${req.body.message}?</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.status(200).json({status: 200, message: "Preview URL: %s", url: nodemailer.getTestMessageUrl(info)})
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }catch(e){
        console.log(e)
        res.status(400).json({status: 400, message: e});
    }
}
module.exports = {mailMessage}
//main().catch(console.error);
