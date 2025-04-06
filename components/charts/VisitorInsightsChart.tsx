import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { InsightsData } from '@/types';

interface VisitorInsightsChartProps {
  data: InsightsData;
}

export function VisitorInsightsChart({ data }: VisitorInsightsChartProps) {
  // Find max value for scaling
  const maxValue = Math.max(...data.values);

  // Function to calculate Y position based on value
  const getYPosition = (value: number) => 36 - (value / maxValue) * 30;

  // Generate the path for the chart
  const generatePath = () => {
    return data.values
      .map((value, index) => {
        const x = index * (100 / (data.values.length - 1));
        const y = getYPosition(value);
        return `${index === 0 ? 'M' : 'L'}${x},${y}`;
      })
      .join(' ');
  };

  return (
    <Card className='bg-[#282A37] border-[#2C2E3B] text-white shadow-none'>
      <CardHeader className='pb-2'>
        <CardTitle>Proposal Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-40 mt-4'>
          <div className='relative w-full h-full'>
            <svg
              viewBox='0 0 100 40'
              preserveAspectRatio='none'
              className='w-full h-full'
            >
              {/* X-axis */}
              <line
                x1='0'
                y1='38'
                x2='100'
                y2='38'
                stroke='#3A3C4A'
                strokeWidth='0.2'
              />

              {/* Chart line */}
              <path
                d={generatePath()}
                fill='none'
                stroke='#6CECB6'
                strokeWidth='0.5'
              />

              {/* Area fill */}
              <path
                d={`${generatePath()} L100,38 L0,38 Z`}
                fill='url(#insightsGradient)'
                fillOpacity='0.3'
                stroke='none'
              />

              {/* Highlight point (if highlight index is provided) */}
              {data.highlightIndex !== undefined && (
                <>
                  <circle
                    cx={data.highlightIndex * (100 / (data.values.length - 1))}
                    cy={getYPosition(data.values[data.highlightIndex])}
                    r='1'
                    fill='#FFCC00'
                  />
                  <line
                    x1={data.highlightIndex * (100 / (data.values.length - 1))}
                    y1={getYPosition(data.values[data.highlightIndex])}
                    x2={data.highlightIndex * (100 / (data.values.length - 1))}
                    y2='38'
                    stroke='#FFCC00'
                    strokeWidth='0.2'
                    strokeDasharray='1,1'
                  />
                </>
              )}

              {/* Gradient definition */}
              <defs>
                <linearGradient
                  id='insightsGradient'
                  x1='0%'
                  y1='0%'
                  x2='0%'
                  y2='100%'
                >
                  <stop offset='0%' stopColor='#6CECB6' stopOpacity='0.4' />
                  <stop offset='100%' stopColor='#6CECB6' stopOpacity='0.1' />
                </linearGradient>
              </defs>
            </svg>

            {/* Y-axis labels */}
            <div className='absolute top-0 left-0 flex flex-col justify-between h-full py-1 text-xs text-gray-400'>
              <span>{Math.round(maxValue)}</span>
              <span>{Math.round(maxValue * 0.8)}</span>
              <span>{Math.round(maxValue * 0.6)}</span>
              <span>{Math.round(maxValue * 0.4)}</span>
              <span>{Math.round(maxValue * 0.2)}</span>
              <span>0</span>
            </div>
          </div>
        </div>

        {/* X-axis month labels */}
        <div className='flex justify-between mt-2 text-xs text-gray-400'>
          {data.labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>

        {/* Legend */}
        <div className='flex items-center gap-2 mt-4'>
          <div className='w-2 h-2 rounded-full bg-[#6CECB6]'></div>
          <span className='text-xs text-gray-400'>New Proposals</span>
          {data.highlightIndex !== undefined && (
            <>
              <div className='w-2 h-2 rounded-full bg-[#FFCC00] ml-4'></div>
              <span className='text-xs text-gray-400'>Current Period</span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
