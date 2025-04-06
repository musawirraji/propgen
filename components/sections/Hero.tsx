import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HeroImage from './HeroImage';

export function HeroSection() {
  return (
    <section className='w-full py-16 overflow-hidden md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='space-y-6 text-center'>
          <div className='max-w-3xl mx-auto space-y-4'>
            <h1 className='text-4xl font-bold tracking-wide sm:text-5xl xl:text-6xl/snug'>
              A place to{' '}
              <span className='px-2 text-white border rounded bg-primary-200'>
                create
              </span>{' '}
              your winning proposal.
            </h1>
            <p className='text-xl font-medium text-[#A9B5B3] mx-auto max-w-[700px]'>
              Our AI analyzes job descriptions to create personalized,
              conversational proposals that focus on client pain points, not
              generic qualifications.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/get-started'>
              <Button
                size='lg'
                className='h-auto px-8 py-3 text-base text-white rounded-full bg-primary-200 hover:bg-primary/90'
              >
                Get started
              </Button>
            </Link>
            <Link href='/blog'>
              <Button
                size='lg'
                variant='outline'
                className='h-auto px-8 py-3 text-base rounded-full'
              >
                Read more
              </Button>
            </Link>
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
}
