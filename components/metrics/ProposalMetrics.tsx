import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TopProposal } from '@/types';
import { DashboardCard } from '../cards/DashboardCard';

interface ProposalMetricsProps {
  topProposals: TopProposal[];
}

export function ProposalMetrics({ topProposals }: ProposalMetricsProps) {
  return (
    <DashboardCard title='Top Proposals'>
      <div className='space-y-4'>
        {topProposals.map((proposal) => (
          <div key={proposal.id} className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='text-sm text-gray-400'>{proposal.id}</div>
              <div className='text-sm'>{proposal.title}</div>
            </div>
            <div className='flex items-center gap-4'>
              {/* Success rate bar */}
              <div className='flex-1 hidden w-32 sm:block'>
                <div className='h-2 overflow-hidden rounded-full bg-dark-300'>
                  <div
                    className={`h-full rounded-full ${
                      proposal.category === 'web'
                        ? 'bg-yellow-500'
                        : proposal.category === 'mobile'
                          ? 'bg-cyan-400'
                          : proposal.category === 'seo'
                            ? 'bg-blue-400'
                            : 'bg-pink-400'
                    }`}
                    style={{ width: `${proposal.successRate}%` }}
                  ></div>
                </div>
              </div>
              <div className='text-sm py-1 px-2 rounded bg-[#3A3C4A] text-center min-w-[50px]'>
                {proposal.successRate}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
