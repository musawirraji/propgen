import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChartDataPoint } from '@/types';

interface SuccessRateChartProps {
  data: ChartDataPoint[];
}

export function SuccessRateChart({ data }: SuccessRateChartProps) {
  // Calculate max height for bars
  const maxHeight = 36; // max height in rems

  return (
    <Card className='bg-[#282A37] border-[#2C2E3B] text-white shadow-none'>
      <CardHeader className='pb-2'>
        <CardTitle>Success Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-end justify-between mt-4 h-36'>
          {/* Bar Chart */}
          <div className='flex items-end space-x-2'>
            {data.map((item, index) => (
              <div
                key={index}
                className='bg-[#6CECB6] w-6 rounded-t-md'
                style={{ height: `${(item.value / 100) * maxHeight}rem` }}
                title={`${item.label}: ${item.value}%`}
              ></div>
            ))}
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#6CECB6]'></div>
            <span className='text-sm text-gray-400'>Success Rate</span>
          </div>
          {data.length > 0 && (
            <div className='flex items-center gap-2'>
              <span className='text-sm text-gray-400'>
                Average:{' '}
                {data.reduce((acc, curr) => acc + curr.value, 0) / data.length}%
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
