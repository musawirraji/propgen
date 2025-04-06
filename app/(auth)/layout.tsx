import SocialAuthForm from '@/components/forms/SocialAuthForm';
import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className='flex w-full min-h-screen p-4 bg-primary-light sm:p-8 md:p-12'>
      <div className='flex flex-col w-full mx-auto overflow-hidden bg-white shadow-2xl max-w-7xl rounded-3xl lg:flex-row'>
        {/* Left side - Branding */}
        <div className='relative p-10 overflow-hidden lg:w-1/2 lg:p-12'>
          {/* Base background color */}
          <div className='absolute inset-0 bg-primary-200'></div>

          {/* Main radial gradient - middle to top right */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(circle at 70% 30%, rgba(121, 134, 203, 0.9) 0%, rgba(92, 107, 192, 0.6) 40%, transparent 70%)',
            }}
          ></div>

          {/* Second radial gradient - center */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(149, 117, 205, 0.7) 0%, transparent 60%)',
            }}
          ></div>

          {/* Third radial gradient - bottom left */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(circle at 20% 80%, rgba(100, 181, 246, 0.8) 0%, transparent 50%)',
            }}
          ></div>

          {/* Subtle light effect for depth */}
          <div
            className='absolute inset-0 opacity-30'
            style={{
              backgroundImage:
                'linear-gradient(to bottom right, rgba(255,255,255,0.2) 0%, transparent 70%)',
            }}
          ></div>

          <div className='relative z-10 flex flex-col h-full'>
            <div className='mb-8'>
              <div className='flex items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <img
                  src='/lovable-uploads/c2abc667-0a0e-4453-99be-ece8cd408e1d.png'
                  alt='Bear Logo'
                  className='w-8 h-8'
                />
              </div>
            </div>

            <div className='flex flex-col justify-center flex-1'>
              <button className='px-6 py-3 mb-10 text-sm font-medium text-white transition rounded-full w-fit bg-white/20 backdrop-blur-sm hover:bg-white/30'>
                Join the Community
              </button>

              <h1 className='mb-16 text-5xl font-semibold leading-tight text-white'>
                Power Your Proposal with AI Experience
              </h1>

              {/* Steps */}
              <div className='grid gap-4 md:grid-cols-3'>
                <div className='flex flex-col p-6 rounded-xl bg-white/10 backdrop-blur-sm'>
                  <div className='flex items-center justify-center w-10 h-10 mb-4 text-white bg-indigo-600 rounded-full'>
                    1
                  </div>
                  <h3 className='text-lg font-medium text-white'>
                    Get Started
                  </h3>
                </div>

                <div className='flex flex-col p-6 rounded-xl bg-white/10 backdrop-blur-sm'>
                  <div className='flex items-center justify-center w-10 h-10 mb-4 text-white rounded-full bg-white/20'>
                    2
                  </div>
                  <h3 className='text-lg font-medium text-white'>
                    Create Your Account
                  </h3>
                </div>

                <div className='flex flex-col p-6 rounded-xl bg-white/10 backdrop-blur-sm'>
                  <div className='flex items-center justify-center w-10 h-10 mb-4 text-white rounded-full bg-white/20'>
                    3
                  </div>
                  <h3 className='text-lg font-medium text-white'>
                    Start Proposing
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className='flex items-center justify-center flex-1 p-8 bg-white lg:p-12 lg:w-1/2'>
          <div className='w-full max-w-md'>
            {children}

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 text-gray-500 bg-white'>OR</span>
                </div>
              </div>

              <SocialAuthForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
