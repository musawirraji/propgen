'use client';
import AuthForm from '@/components/forms/AuthForm';
import { SignInSchema } from '@/lib/validations';
import React from 'react';

const page = () => {
  return (
    <AuthForm
      formType='SIGN_IN'
      schema={SignInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={async (data): Promise<ActionResponse> => {
        console.log('Sign In Data:', data);
        return { success: true };
      }}
    />
  );
};

export default page;
