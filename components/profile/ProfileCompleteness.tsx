import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ProfileProgressData } from '@/types';

export function ProfileCompleteness({
  completedItems,
  totalItems,
  percentage,
}: ProfileProgressData) {
  return (
    <Card className='`bg-dark-100 border-dark-200 text-white shadow-none'>
      <CardHeader className='pb-2'>
        <CardTitle>Profile Completeness</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between text-sm'>
            <div>Profile Completion</div>
            <div className='font-medium'>{percentage}%</div>
          </div>
          <Progress
            value={percentage}
            className='h-2 bg-[#3A3C4A]'
            style={
              {
                '--tw-progress-fill': '#6CECB6',
              } as React.CSSProperties
            }
          />
        </div>
        <ul className='space-y-2 text-sm'>
          {completedItems.map((item, index) => (
            <li key={index} className='flex items-center'>
              <div className='w-2 h-2 mr-2 bg-[#6CECB6] rounded-full' />
              <span>{item}</span>
            </li>
          ))}
          {totalItems
            .filter((item) => !completedItems.includes(item))
            .map((item, index) => (
              <li key={index} className='flex items-center'>
                <div className='w-2 h-2 mr-2 bg-red-500 rounded-full' />
                <span>{item}</span>
              </li>
            ))}
        </ul>
        <Button
          variant='outline'
          className='w-full border-[#2C2E3B] hover:bg-[#2C2E3B] hover:text-white'
        >
          Complete Profile
        </Button>
      </CardContent>
    </Card>
  );
}
