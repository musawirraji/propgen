export function TrustedSection() {
  const companies = [
    { name: 'Acme Inc', logo: 'ACME' },
    { name: 'Airbnb', logo: 'airbnb' },
    { name: 'Stripe', logo: 'stripe' },
    { name: 'Slack', logo: 'slack' },
    { name: 'Netflix', logo: 'NETFLIX' },
  ];

  return (
    <section className='w-full py-16 border-t md:py-20'>
      <div className='container px-4 md:px-6'>
        <div className='space-y-12'>
          <h2 className='text-3xl font-bold text-center animate-fade-in'>
            Trusted by the best
          </h2>

          <div className='flex flex-wrap items-center justify-center gap-8 md:gap-16'>
            {companies.map((company, index) => (
              <div
                key={index}
                className='transition-all duration-300 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 animate-fade-in'
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <p className='text-xl font-bold md:text-2xl'>{company.logo}</p>
              </div>
            ))}
          </div>

          <div className='grid gap-8 mt-16 md:grid-cols-3'>
            <div
              className='relative animate-fade-in'
              style={{ animationDelay: '0.3s' }}
            >
              <div className='art-card w-[150px] h-[180px] bg-gradient-to-br from-orange-400 to-red-600'>
                <div className='flex flex-col justify-end w-full h-full p-4'>
                  <h4 className='text-sm font-bold text-white'>UX Expert</h4>
                </div>
              </div>
              <div className='max-w-xs p-4 mt-6 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-md'>
                <h3 className='font-medium'>Where art meets marketing</h3>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Create proposals that stand out visually and convert better
                </p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6 md:col-span-2'>
              <div
                className='art-card w-[150px] md:w-[200px] h-[200px] md:h-[250px] bg-gradient-to-br from-amber-400 to-yellow-600 animate-fade-in'
                style={{ animationDelay: '0.4s' }}
              >
                <div className='flex flex-col justify-end w-full h-full p-4'>
                  <h4 className='text-sm font-bold text-white'>Copywriter</h4>
                </div>
              </div>
              <div
                className='art-card w-[150px] md:w-[200px] h-[200px] md:h-[250px] bg-gradient-to-br from-blue-400 to-indigo-600 animate-fade-in'
                style={{ animationDelay: '0.5s' }}
              >
                <div className='flex flex-col justify-end w-full h-full p-4'>
                  <h4 className='text-sm font-bold text-white'>Developer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='mt-16 text-center animate-fade-in'
          style={{ animationDelay: '0.6s' }}
        >
          <h3 className='mb-4 text-xl font-medium'>Where art meets market</h3>
          <p className='max-w-2xl mx-auto text-muted-foreground'>
            Discover community where artists and talented collectors find
            destination for digital artists and collectors.
          </p>
        </div>
      </div>
    </section>
  );
}
