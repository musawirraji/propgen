'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  type DefaultValues,
  type FieldValues,
  type Path,
  useForm,
} from 'react-hook-form';
import type { z, ZodType } from 'zod';
import { Check, Eye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ROUTES from '@/constants/routes';
import { toast } from '@/hooks/use-toast';

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<ActionResponse>;
  formType: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  formType,
}: AuthFormProps<T>) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    const result = (await onSubmit(data)) as ActionResponse;
    if (result?.success) {
      toast({
        title: 'Success',
        description:
          formType === 'SIGN_IN'
            ? 'Signed in successfully'
            : 'Signed up successfully',
      });
      router.push(ROUTES.HOME);
    } else {
      toast({
        title: `Error ${result.status}`,
        description: result?.error?.message,
        variant: 'destructive',
      });
    }
  };

  const buttonText = formType === 'SIGN_IN' ? 'Sign In' : 'Sign Up';

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
        <h1 className='mb-6 text-3xl font-bold text-gray-900'>Get Started</h1>

        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-2.5 mb-4'>
                <FormLabel className='text-sm font-medium text-gray-700'>
                  {field.name === 'email'
                    ? 'Email Address'
                    : field.name === 'phoneNumber'
                      ? 'Phone Number'
                      : field.name === 'fullname'
                        ? 'Fullname'
                        : field.name === 'username'
                          ? 'Username'
                          : field.name.charAt(0).toUpperCase() +
                            field.name.slice(1)}
                </FormLabel>
                <div className='relative'>
                  <FormControl>
                    {field.name === 'phoneNumber' ? (
                      <div className='flex'>
                        <div className='flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md'>
                          <span className='text-sm text-gray-500'>🇳🇬 +234</span>
                        </div>
                        <Input
                          required
                          type='tel'
                          {...field}
                          className='flex-1 rounded-l-none bg-gray-50 border border-gray-300 rounded-md py-2.5 px-3 focus:ring-indigo-500 focus:border-indigo-500'
                          placeholder='1234567890'
                        />
                      </div>
                    ) : (
                      <Input
                        required
                        type={field.name === 'password' ? 'password' : 'text'}
                        {...field}
                        className='bg-gray-50 border border-gray-300 rounded-md py-2.5 px-3 w-full focus:ring-indigo-500 focus:border-indigo-500'
                        placeholder={
                          field.name === 'fullname'
                            ? 'John Doe'
                            : field.name === 'username'
                              ? 'Johnny Bravo'
                              : ''
                        }
                      />
                    )}
                  </FormControl>
                  {field.name === 'username' && (
                    <div className='absolute transform -translate-y-1/2 right-3 top-1/2'>
                      <Check className='w-5 h-5 text-green-500' />
                    </div>
                  )}
                  {field.name === 'password' && (
                    <div className='absolute transform -translate-y-1/2 right-3 top-1/2'>
                      <Eye className='w-5 h-5 text-gray-400' />
                    </div>
                  )}
                </div>
                <FormMessage className='text-xs text-red-600' />
                {field.name === 'password' &&
                  !form.formState.errors.password && (
                    <p className='text-xs text-gray-500'>
                      At least 8 characters no more than 20 Uppercase letters,
                      Lowercase letters, numbers symbols
                    </p>
                  )}
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className='w-full py-3 text-sm font-medium text-white transition rounded-md bg-primary-200 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          {form.formState.isSubmitting
            ? buttonText === 'Sign In'
              ? 'Signing In...'
              : 'Continuing...'
            : buttonText}
        </Button>

        {formType === 'SIGN_IN' ? (
          <p className='text-sm text-center text-gray-600'>
            Don&apos;t have an account?{' '}
            <Link
              href={ROUTES.SIGN_UP}
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Sign Up
            </Link>
          </p>
        ) : (
          <p className='text-sm text-center text-gray-600'>
            Already have an account?{' '}
            <Link
              href={ROUTES.SIGN_IN}
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Login
            </Link>{' '}
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
