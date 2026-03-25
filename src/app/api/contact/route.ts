import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: Number(process.env.EMAIL_PORT) || 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            text: message,
            html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-w-xl; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #eef2f6;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%); padding: 30px 40px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                    New Portfolio Connect
                </h1>
                <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 15px;">
                    Someone wants to get in touch!
                </p>
            </div>
            
            <!-- Body -->
            <div style="padding: 40px;">
                <div style="margin-bottom: 25px;">
                    <p style="margin: 0 0 5px 0; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                    <p style="margin: 0; font-size: 18px; color: #0f172a; font-weight: 600;">${name}</p>
                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 15px;">${email}</a>
                </div>

                <div style="margin-bottom: 5px;">
                    <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                </div>
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; color: #334155; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">
${message.replace(/\n/g, '<br />')}
                </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #eef2f6;">
                <p style="margin: 0; color: #94a3b8; font-size: 13px;">
                    This message was sent securely from your portfolio contact form.
                </p>
            </div>
        </div>
            `,
        });

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
