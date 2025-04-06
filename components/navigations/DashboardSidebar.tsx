'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  FileText,
  BarChart3,
  MessageSquare,
  Settings,
  Star,
  History,
  LogOut,
} from 'lucide-react';

export function DashboardSidebar() {
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
      label: 'Proposal',
      href: '/proposal',
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
    <aside className='hidden md:flex flex-col w-[60px] xl:w-[200px] bg-[#1B1D29] border-r border-[#2C2E3B] py-4'>
      {/* Traffic Light Dots */}
      <div className='flex items-center gap-1 px-4 mb-8'>
        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
      </div>

      {/* Navigation Links */}
      <nav className='flex flex-col gap-2 px-2 mt-6'>
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
              item.active
                ? 'bg-[#6CECB6] text-[#0D1015]'
                : 'text-gray-400 hover:bg-[#2C2E3B]'
            } ${i === navItems.length - 1 ? 'mt-auto' : ''}`}
          >
            {item.icon}
            <span className='hidden xl:inline'>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
