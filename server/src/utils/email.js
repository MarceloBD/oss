import nodemailer from 'nodemailer';

const credentials = { user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD };

export const sendEmail = ({ to, html, subject }) => {
  const transporter = nodemailer.createTransport({ service: 'gmail', auth: credentials });
  const mailOptions = { from: 'no-reply@cursoenfase.com.br', to, subject, html };

  transporter.sendMail(mailOptions, err => err && console.log(err));
};
