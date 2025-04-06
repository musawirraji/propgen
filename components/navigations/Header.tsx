'use client';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavItem } from './nav-item';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

const navItems = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/support', label: 'Discord Support' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About Us' },
];

export function Header() {
  return (
    <header className='sticky top-0 pt-2 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/510 '>
      <div className='container flex items-center justify-between h-16 px-4 md:px-6'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600'></div>
            <span className='text-xl font-semibold'>Proposal AI</span>
          </Link>
        </div>

        <nav className='items-center hidden space-x-6 text-sm font-medium lg:flex'>
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </nav>

        <div className='hidden lg:flex'>
          <Link href={ROUTES.DASHBOARD}>
            <Button
              size='sm'
              className='px-4 text-white rounded-full bg-primary-200 hover:bg-opacity-80'
            >
              Get started
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className='lg:hidden'>
            <Menu className='w-8 h-8 text-primary-200' />
          </SheetTrigger>
          <SheetContent side='left' className='w-[80%] sm:w-[350px] pt-10'>
            <div className='flex flex-col h-full'>
              <div className='flex items-center justify-between mb-8'>
                <Link href='/' className='flex items-center space-x-2'>
                  <div className='w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600'></div>
                  <span className='text-xl font-semibold'>Proposal AI</span>
                </Link>
              </div>
              <nav className='flex flex-col space-y-6 text-base font-medium'>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <NavItem key={item.href} href={item.href} className='py-1'>
                      {item.label}
                    </NavItem>
                  </SheetClose>
                ))}
              </nav>
              <div className='pt-8 mt-auto'>
                <Link href='/get-started'>
                  <Button className='w-full text-white rounded-full bg-primary-200 hover:bg-opacity-90'>
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
