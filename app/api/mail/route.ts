import { NextResponse } from 'next/server';
import Nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, formType } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { message: '이름과 연락처는 필수 항목입니다.' },
        { status: 400 }
      );
    }

    // Check for API token
    const TOKEN = process.env.MAILTRAP_API_TOKEN;
    if (!TOKEN) {
      console.error('MAILTRAP_API_TOKEN is not set');
      return NextResponse.json(
        { message: '이메일 설정이 올바르지 않습니다.' },
        { status: 500 }
      );
    }

    // Create Nodemailer transport with Mailtrap
    const transport = Nodemailer.createTransport(
      MailtrapTransport({
        token: TOKEN,
      })
    );

    const sender = {
      address: 'noreply@smallbusiness.co.kr',
      name: '제이에스에너지 웹사이트',
    };

    const recipients = ['sungeun8877@gmail.com', 'josephlee153@gmail.com'];

    // Build email content
    const emailSubject = formType === 'contact'
      ? '상담 신청 (상세 문의)'
      : '빠른 상담 신청';

    let emailText = `새로운 상담 신청이 접수되었습니다.\n\n`;
    emailText += `이름: ${name}\n`;
    emailText += `연락처: ${phone}\n`;

    if (email) {
      emailText += `이메일: ${email}\n`;
    }

    if (message) {
      emailText += `\n문의 내용:\n${message}\n`;
    }

    emailText += `\n신청 시간: ${new Date().toLocaleString('ko-KR')}\n`;
    emailText += `신청 유형: ${formType === 'contact' ? '상세 문의 폼' : '빠른 상담 폼'}`;

    // Send email
    await transport.sendMail({
      from: sender,
      to: recipients,
      subject: emailSubject,
      text: emailText,
      category: 'Contact Form',
    });

    return NextResponse.json(
      { message: '상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: '이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
