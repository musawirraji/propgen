import { Button } from '@/components/ui/button';
import { roles } from '@/constants';
import RoleCard from '@/components/cards/RoleCard';

export function ShowcaseSection() {
  return (
    <section className='w-full py-20 bg-primary-light md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='grid items-start gap-12 md:grid-cols-2'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
              Showcase, sell, <br />& win proposals to <br />
              your ideal clients.
            </h2>
            <p className='text-lg text-muted-foreground'>
              Our AI doesn't just analyze job descriptions - it crafts
              personalized proposals that address client pain points directly
              and highlight your relevant experience.
            </p>
            <div className='flex gap-4'>
              <Button className='px-6 rounded-full hover:bg-primary-200'>
                Get started
              </Button>
              <Button variant='outline' className='px-6 rounded-full'>
                Read more
              </Button>
            </div>
          </div>

          <div className='flex gap-4 md:justify-end md:flex-wrap'>
            {roles.map((role, index) => (
              <RoleCard
                key={index}
                title={role.title}
                colors={role.colors}
                className={role.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
