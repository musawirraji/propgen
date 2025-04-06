import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PerformanceData } from '@/types';
import { DashboardCard } from '../cards/DashboardCard';

interface CustomerFulfillmentChartProps {
  data: PerformanceData;
}

export function CustomerFulfillmentChart({
  data,
}: CustomerFulfillmentChartProps) {
  return (
    <DashboardCard title='Proposal Performance'>
      <div className='h-32 mt-4'>
        {/* Area chart - would use recharts in real implementation */}
        <div className='w-full h-full rounded-md overflow-hidden relative bg-[#1B1D29]'>
          <svg
            viewBox='0 0 100 30'
            preserveAspectRatio='none'
            className='w-full h-full'
          >
            {/* First line - Success rate */}
            <path
              d={`M0,${30 - (data.successRate[0] * 30) / 100} ${data.successRate
                .slice(1)
                .map(
                  (value, index) =>
                    `L${((index + 1) * 100) / (data.successRate.length - 1)},${30 - (value * 30) / 100}`
                )
                .join(' ')}`}
              fill='none'
              stroke='#6CECB6'
              strokeWidth='0.5'
            ></path>

            {/* Second line - Conversion rate */}
            <path
              d={`M0,${30 - (data.conversionRate[0] * 30) / 100} ${data.conversionRate
                .slice(1)
                .map(
                  (value, index) =>
                    `L${((index + 1) * 100) / (data.conversionRate.length - 1)},${30 - (value * 30) / 100}`
                )
                .join(' ')}`}
              fill='none'
              stroke='#B392F0'
              strokeWidth='0.5'
            ></path>

            {/* Area fill for success rate */}
            <path
              d={`M0,${30 - (data.successRate[0] * 30) / 100} ${data.successRate
                .slice(1)
                .map(
                  (value, index) =>
                    `L${((index + 1) * 100) / (data.successRate.length - 1)},${30 - (value * 30) / 100}`
                )
                .join(' ')} L100,30 L0,30 Z`}
              fill='url(#successGradient)'
              fillOpacity='0.1'
              stroke='none'
            ></path>

            {/* Area fill for conversion rate */}
            <path
              d={`M0,${30 - (data.conversionRate[0] * 30) / 100} ${data.conversionRate
                .slice(1)
                .map(
                  (value, index) =>
                    `L${((index + 1) * 100) / (data.conversionRate.length - 1)},${30 - (value * 30) / 100}`
                )
                .join(' ')} L100,30 L0,30 Z`}
              fill='url(#conversionGradient)'
              fillOpacity='0.1'
              stroke='none'
            ></path>

            {/* Gradient definitions */}
            <defs>
              <linearGradient
                id='successGradient'
                x1='0%'
                y1='0%'
                x2='0%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#6CECB6' stopOpacity='0.4' />
                <stop offset='100%' stopColor='#6CECB6' stopOpacity='0.1' />
              </linearGradient>
              <linearGradient
                id='conversionGradient'
                x1='0%'
                y1='0%'
                x2='0%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#B392F0' stopOpacity='0.4' />
                <stop offset='100%' stopColor='#B392F0' stopOpacity='0.1' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#6CECB6]'></div>
            <span className='text-xs text-gray-400'>Success Rate</span>
          </div>
          <p className='mt-1 text-sm font-semibold'>{data.totalSuccess}%</p>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#B392F0]'></div>
            <span className='text-xs text-gray-400'>Conversion Rate</span>
          </div>
          <p className='mt-1 text-sm font-semibold'>{data.totalConversion}%</p>
        </div>
      </div>
    </DashboardCard>
  );
}
