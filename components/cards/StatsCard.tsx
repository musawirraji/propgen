import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  trend?: string;
  trendValue?: string | number;
  iconColor?: string;
}

export function StatsCard({
  icon,
  value,
  label,
  trend,
  trendValue,
  iconColor = 'text-yellow-500',
}: StatsCardProps) {
  return (
    <Card className='text-white shadow-none bg-dark-100 border-dark-200'>
      <CardContent className='p-4'>
        <div className='flex items-start justify-between'>
          <div
            className={`p-3 rounded-full bg-dark-100 border-dark-200 border  ${iconColor}`}
          >
            {icon}
          </div>
        </div>
        <div className='mt-4'>
          <p className='text-2xl font-bold'>{value}</p>
          <p className='text-sm text-gray-400'>{label}</p>
          {trend && trendValue && (
            <p className={`text-xs ${iconColor} mt-1`}>
              {trend} {trendValue}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
