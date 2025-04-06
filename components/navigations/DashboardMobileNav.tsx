'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Home,
  FileText,
  BarChart3,
  MessageSquare,
  Settings,
  Star,
  History,
  LogOut,
} from 'lucide-react';

export function DashboardMobileNav() {
  const pathname = usePathname();

  const navItems = [
    {
      icon: <Home className='w-5 h-5' />,
      label: 'Dashboard',
      href: '/dashboard',
      active: pathname === '/dashboard',
    },
    {
      icon: <FileText className='w-5 h-5' />,
      label: 'Proposals',
      href: '/proposals',
      active: pathname === '/proposals' || pathname.startsWith('/proposals/'),
    },
    {
      icon: <BarChart3 className='w-5 h-5' />,
      label: 'Analytics',
      href: '/analytics',
      active: pathname === '/analytics',
    },
    {
      icon: <MessageSquare className='w-5 h-5' />,
      label: 'Messages',
      href: '/messages',
      active: pathname === '/messages',
    },
    {
      icon: <Settings className='w-5 h-5' />,
      label: 'Settings',
      href: '/settings',
      active: pathname === '/settings',
    },
    {
      icon: <Star className='w-5 h-5' />,
      label: 'Favourite',
      href: '/favourite',
      active: pathname === '/favourite',
    },
    {
      icon: <History className='w-5 h-5' />,
      label: 'History',
      href: '/history',
      active: pathname === '/history',
    },
    {
      icon: <LogOut className='w-5 h-5' />,
      label: 'Signout',
      href: '/signout',
      active: false,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='absolute z-50 md:hidden top-4 left-4'
        >
          <Menu className='w-5 h-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='p-0 bg-[#1B1D29] border-r border-[#2C2E3B] max-w-[250px]'
      >
        <div className='flex items-center gap-1 px-4 py-5'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>
        <nav className='flex flex-col gap-2 py-4'>
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg mx-2 px-3 py-2 text-sm ${
                item.active
                  ? 'bg-[#6CECB6] text-[#0D1015]'
                  : 'text-gray-400 hover:bg-[#2C2E3B]'
              } ${i === navItems.length - 1 ? 'mt-auto' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
