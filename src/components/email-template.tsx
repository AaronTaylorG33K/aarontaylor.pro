import * as React from 'react';

interface EmailTemplateProps {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, phone, message
}) => (
  <div>
    <h1>{name}</h1>
    <div>{email} / {phone}</div>
    <div>{message}</div>
  </div>
);
