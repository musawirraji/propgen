'use client';
import { images } from '@/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HeroImage = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const totalImages = images.length;
  const radius = 400;
  const theta = (2 * Math.PI) / totalImages;
  return (
    <div className='relative h-[600px] w-full flex flex-col items-center justify-center perspective-1000'>
      <div
        className='relative w-full h-full transform-style-3d'
        style={{
          transform: `translateZ(-300px) rotateY(${rotation}deg)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {images.map((image, index) => {
          const angle = theta * index;
          const x = radius * Math.sin(angle);
          const z = radius * Math.cos(angle);

          return (
            <>
              <div
                key={index}
                className='absolute left-1/2 top-1/2 w-[200px] h-[300px] transform-style-3d border-2 border-primary-300 rounded-lg shadow-lg'
                style={{
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-angle * (180 / Math.PI)}deg)`,
                }}
              >
                <Image
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className='object-cover rounded-lg'
                  sizes='200px'
                />
                <div className='absolute bottom-0 left-0 right-0 p-2 rounded-b-lg bg-opacity-60 bg-primary-300'>
                  <p className='text-lg font-semibold text-white text-cent'>
                    {image.title}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className='max-w-2xl mx-auto text-center'>
        <p className='text-sm text-muted-foreground'>
          AI-powered proposals that showcase your expertise and connect with
          client needs. Freelancers and agencies can discover perfect
          opportunities and win more business.
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
