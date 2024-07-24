import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
    try {
      // Parse the request body to get the POST parameters
      const body = await request.json();
      const { name, email, message } = body;
  
      // Validate the name parameter
      if (typeof name !== 'string') {
        throw new Error('Invalid name parameter');
      }
  
      // Send the email with the extracted parameters
      const { data, error } = await resend.emails.send({
        from: 'Aaron <aaron@aarontaylor.pro>',
        to: ['aarontaylorg33k@gmail.com'],
        subject: 'Website Lead',
        react: EmailTemplate({ name, email, message }), // Use the name parameter here
      });
  
      if (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
  
      return NextResponse.json(data);
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
