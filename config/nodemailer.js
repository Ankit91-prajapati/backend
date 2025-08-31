import 'dotenv/config';  //dotenv importalways should be top
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host:process.env.BREVO_HOST,
    port:process.env.BREVO_PORT,
    secure: false,
    auth:{
        user:process.env.BREVO_USER,
        pass:process.env.BREVO_PASS
    }
})

export default transporter;