'use client';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import FeatureCard from '../cards/FeatureCard';
import { features } from '@/constants';

export function GatewaySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1) % (features.length - visibleCount + 1)
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? features.length - visibleCount : prevIndex - 1
    );
  };

  // Show navigation arrows only when needed
  const showNavigation = features.length > visibleCount;

  return (
    <section className='w-full py-20 md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='space-y-10'>
          <h2 className='text-3xl font-bold leading-tight md:text-4xl'>
            A gateway for winning proposals
          </h2>

          <div className='relative rounded-[32px] overflow-hidden shadow-lg'>
            <div className='relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-amber-200 to-amber-100'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='flex px-4 space-x-6 overflow-hidden md:px-8 lg:px-12'>
                  {features
                    .slice(activeIndex, activeIndex + visibleCount)
                    .map((feature, index) => (
                      <FeatureCard
                        key={index + activeIndex}
                        title={feature.title}
                        description={feature.description}
                        gradient={feature.gradient}
                      />
                    ))}
                </div>
              </div>

              {showNavigation && (
                <div className='absolute flex space-x-2 right-10 md:right-16 bottom-10'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='bg-white rounded-full hover:bg-white/90'
                    onClick={handlePrev}
                  >
                    <ArrowLeft className='w-4 h-4' />
                    <span className='sr-only'>Previous</span>
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='bg-white rounded-full hover:bg-white/90'
                    onClick={handleNext}
                  >
                    <ArrowRight className='w-4 h-4' />
                    <span className='sr-only'>Next</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
