'use client';

import type React from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavItem({ href, children, className, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary text-xl hover:text-primary-200',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
