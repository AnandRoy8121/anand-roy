// pages/api/sendEmail.js

import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Create a Nodemailer transporter using your SMTP server credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.email,
          pass: process.env.pass,
        },
      });

    try {
     const adminTemplatePath = path.resolve('./tempates/adminEmailtemplate.html');
    
    const adminTemplate = fs.readFileSync(adminTemplatePath, 'utf-8');
    console.log('code is ok till reading template')
    // Replace placeholders with dynamic data
    const addminDynamicData = {
        name: name,
        email: email,
        message: message

    };
    const htmlTemplate = adminTemplate.replace(/{{(\w+)}}/g, (match, key) => addminDynamicData[key]);
    console.log('code is ok till replacing template')
    await transporter.sendMail({
      from: process.env.email,
      to: process.env.email,
      subject: `You received new enquiry from ${name}`,
      html: htmlTemplate,
    });

    
      // Send the email
      //await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error});
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
