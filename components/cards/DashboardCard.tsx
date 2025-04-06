import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface DashboardCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function DashboardCard({
  title,
  children,
  className = '',
}: DashboardCardProps) {
  return (
    <Card
      className={`bg-dark-100 border-dark-200 text-white shadow-none ${className}`}
    >
      <CardHeader className='pb-2'>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
