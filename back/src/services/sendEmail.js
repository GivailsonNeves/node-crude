const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "<user>",
        pass: "<pass>"
    },
});

module.exports = async function (email, code) {
    const info = await transporter.sendMail({
        from: '"Confirmation Crud" <confirmation@crud.com>',
        to: email,
        subject: "Confirmação de e-mail",
        html: `
                <p><b>Confirme seu e-mail</b></p>
                <p><a href="http://localhost:3333/emailvalidate/${code}">confirmar</a></p>
            `
    });
    return info.messageId;
}