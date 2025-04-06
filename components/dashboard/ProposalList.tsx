import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Proposal } from '@/types';
import { DashboardCard } from '../cards/DashboardCard';

interface ProposalListProps {
  proposals: Proposal[];
}

export function ProposalList({ proposals }: ProposalListProps) {
  return (
    <DashboardCard title='Recent Proposals'>
      <div className='space-y-4'>
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className='flex items-center justify-between rounded-lg border border-[#2C2E3B] p-4 flex-wrap gap-2'
          >
            <div className='grid gap-1'>
              <div className='font-medium'>{proposal.title}</div>
              <div className='text-sm text-gray-400'>
                {proposal.client} •{' '}
                {new Date(proposal.date).toLocaleDateString()}
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full ${
                  proposal.status === 'Accepted'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : proposal.status === 'Rejected'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {proposal.status}
              </span>
              <Button variant='ghost' size='icon'>
                <ArrowUpRight className='w-4 h-4' />
                <span className='sr-only'>View</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <svg
                      width='15'
                      height='3'
                      viewBox='0 0 15 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4'
                    >
                      <path
                        d='M1.5 1.5C1.5 1.89782 1.65804 2.27936 1.93934 2.56066C2.22064 2.84196 2.60218 3 3 3C3.39782 3 3.77936 2.84196 4.06066 2.56066C4.34196 2.27936 4.5 1.89782 4.5 1.5C4.5 1.10218 4.34196 0.720644 4.06066 0.43934C3.77936 0.158035 3.39782 0 3 0C2.60218 0 2.22064 0.158035 1.93934 0.43934C1.65804 0.720644 1.5 1.10218 1.5 1.5ZM6 1.5C6 1.89782 6.15804 2.27936 6.43934 2.56066C6.72064 2.84196 7.10218 3 7.5 3C7.89782 3 8.27936 2.84196 8.56066 2.56066C8.84196 2.27936 9 1.89782 9 1.5C9 1.10218 8.84196 0.720644 8.56066 0.43934C8.27936 0.158035 7.89782 0 7.5 0C7.10218 0 6.72064 0.158035 6.43934 0.43934C6.15804 0.720644 6 1.10218 6 1.5ZM10.5 1.5C10.5 1.89782 10.658 2.27936 10.9393 2.56066C11.2206 2.84196 11.6022 3 12 3C12.3978 3 12.7794 2.84196 13.0607 2.56066C13.342 2.27936 13.5 1.89782 13.5 1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0C11.6022 0 11.2206 0.158035 10.9393 0.43934C10.658 0.720644 10.5 1.10218 10.5 1.5Z'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='sr-only'>More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align='end'
                  className='bg-[#282A37] border-[#2C2E3B] text-white'
                >
                  <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                    Mark as Accepted
                  </DropdownMenuItem>
                  <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                    Mark as Rejected
                  </DropdownMenuItem>
                  <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
