const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "g.zc@hotmail.com",
          pass: "lhqyxlcozvmnrlkw"
        }
      });
    const mensaje={
        from: "MyShop <g.zc@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}
/* const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "8279cac390ec95",
          pass: "59d12689433bc7"
        }
      });
    const mensaje={
        from: "Toyland <noreply@toyland.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
} */

module.exports= sendEmail;