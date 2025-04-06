'use client';

import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';
import { toast } from '@/hooks/use-toast';

const SocialAuthForm = () => {
  const handleSignIn = async (provider: 'github' | 'google' | 'apple') => {
    try {
      //   await signIn(provider, {
      //     redirectTo: ROUTES.HOME,
      //   })
      throw new Error('Not implemented');
    } catch (error) {
      console.log(error);

      toast({
        title: 'Sign-in Failed',
        description:
          error instanceof Error
            ? error.message
            : 'An error occured during sign-in',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='grid grid-cols-2 gap-3 mt-6'>
      <Button
        variant='outline'
        className='flex items-center justify-center w-full gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        onClick={() => handleSignIn('google')}
      >
        <svg className='w-5 h-5' aria-hidden='true' viewBox='0 0 24 24'>
          <path
            d='M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z'
            fill='#EA4335'
          />
          <path
            d='M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z'
            fill='#4285F4'
          />
          <path
            d='M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z'
            fill='#FBBC05'
          />
          <path
            d='M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z'
            fill='#34A853'
          />
        </svg>
        <span>Google</span>
      </Button>

      <Button
        variant='outline'
        className='flex items-center justify-center w-full gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        onClick={() => handleSignIn('apple')}
      >
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z' />
        </svg>
        <span>Apple</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
