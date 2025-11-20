import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(request: Request) {
const body = await request.json()
const { name, email, message } = body


// Simple validation
if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })


// Nodemailer setup (use env vars)
const transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: Number(process.env.SMTP_PORT || 587),
secure: false,
auth: {
user: process.env.SMTP_USER,
pass: process.env.SMTP_PASS,
}
})


const mailText = `New lead from ORCA:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`


await transporter.sendMail({
from: process.env.SMTP_FROM,
to: process.env.LEADS_EMAIL,
subject: `ORCA Lead — ${name}`,
text: mailText
})


return NextResponse.json({ ok: true })
}