'use client';

import { useState, useEffect } from 'react';
import { Box, FileText, Send, Users } from 'lucide-react';
import { StatsCard } from '@/components/cards/StatsCard';
import { ProposalMetrics } from '@/components/metrics/ProposalMetrics';
import { SuccessRateChart } from '@/components/charts/SuccessRateChart';
import { ProposalList } from '@/components/dashboard/ProposalList';
import { ProfileCompleteness } from '@/components/profile/ProfileCompleteness';
import { CustomerFulfillmentChart } from '@/components/charts/CustomerFulfillmentChart';
import { VisitorInsightsChart } from '@/components/charts/VisitorInsightsChart';
import { DashboardData, ProposalStatus } from '@/types';

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    stats: {
      totalProposals: 0,
      successRate: 0,
      avgResponseTime: 0,
      conversionRate: 0,
    },
    recentProposals: [],
    topProposals: [],
    successRateByCategory: [],
    profileProgress: {
      completedItems: [],
      totalItems: [],
      percentage: 0,
    },
    performance: {
      successRate: [],
      conversionRate: [],
      totalSuccess: 0,
      totalConversion: 0,
    },
    insights: {
      values: [],
      labels: [],
      highlightIndex: 0,
    },
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      const data: DashboardData = {
        stats: {
          totalProposals: 24,
          successRate: 68,
          avgResponseTime: 14,
          conversionRate: 22,
        },
        recentProposals: [
          {
            id: '1',
            title: 'E-commerce Website Redesign',
            client: 'ABC Company',
            date: '2023-10-15',
            status: 'Accepted' as ProposalStatus,
          },
          {
            id: '2',
            title: 'Mobile App Development',
            client: 'XYZ Startup',
            date: '2023-10-12',
            status: 'Pending' as ProposalStatus,
          },
          {
            id: '3',
            title: 'SEO Optimization Project',
            client: '123 Marketing',
            date: '2023-10-08',
            status: 'Rejected' as ProposalStatus,
          },
        ],
        topProposals: [
          {
            id: '01',
            title: 'E-commerce Website Redesign',
            category: 'web',
            successRate: 75,
          },
          {
            id: '02',
            title: 'Mobile App Development',
            category: 'mobile',
            successRate: 62,
          },
          {
            id: '03',
            title: 'SEO Optimization Project',
            category: 'seo',
            successRate: 48,
          },
          {
            id: '04',
            title: 'Brand Identity Redesign',
            category: 'design',
            successRate: 55,
          },
        ],
        successRateByCategory: [
          { label: 'Web', value: 75 },
          { label: 'Mobile', value: 85 },
          { label: 'SEO', value: 55 },
          { label: 'Content', value: 30 },
          { label: 'Design', value: 45 },
          { label: 'Dev', value: 70 },
        ],
        profileProgress: {
          completedItems: [
            'Basic information',
            'Skills & expertise',
            'Work experience',
          ],
          totalItems: [
            'Basic information',
            'Skills & expertise',
            'Work experience',
            'Portfolio links',
          ],
          percentage: 75,
        },
        performance: {
          successRate: [65, 68, 72, 75, 70, 68],
          conversionRate: [20, 22, 25, 28, 24, 22],
          totalSuccess: 68,
          totalConversion: 22,
        },
        insights: {
          values: [10, 15, 25, 35, 50, 40, 60, 80, 70, 90, 75, 65],
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          highlightIndex: 6,
        },
      };

      setDashboardData(data);
    };

    fetchDashboardData();
  }, []);

  return (
    <>
      {/* Today's Stats Section */}
      <div className='mb-8'>
        <div className='flex flex-col mb-4'>
          <h2 className='text-xl font-bold'>Proposal Statistics</h2>
          <p className='text-sm text-gray-400'>Overall Performance Summary</p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <StatsCard
            icon={<FileText size={20} />}
            value={dashboardData.stats.totalProposals}
            label='Total Proposals'
            trend='+'
            trendValue='8 from last month'
            iconColor='text-yellow-500'
          />

          <StatsCard
            icon={<Box size={20} />}
            value={`${dashboardData.stats.successRate}%`}
            label='Success Rate'
            trend='+'
            trendValue='12% from last month'
            iconColor='text-blue-400'
          />

          <StatsCard
            icon={<Send size={20} />}
            value={`${dashboardData.stats.avgResponseTime}h`}
            label='Avg. Response Time'
            trend='-'
            trendValue='3h from last month'
            iconColor='text-purple-400'
          />

          <StatsCard
            icon={<Users size={20} />}
            value={`${dashboardData.stats.conversionRate}%`}
            label='Conversion Rate'
            trend='+'
            trendValue='5% from last month'
            iconColor='text-cyan-400'
          />
        </div>
      </div>

      {/* Metrics and Charts Section */}
      <div className='grid grid-cols-1 gap-6 mb-8 lg:grid-cols-7'>
        {/* Top Proposals Section - 4 cols */}
        <div className='lg:col-span-4'>
          <ProposalMetrics topProposals={dashboardData.topProposals} />
        </div>

        {/* Success Rate Chart - 3 cols */}
        <div className='lg:col-span-3'>
          <SuccessRateChart data={dashboardData.successRateByCategory} />
        </div>
      </div>

      {/* Recent Proposals and Profile Section */}
      <div className='grid grid-cols-1 gap-6 mb-8 lg:grid-cols-7'>
        {/* Recent Proposals - 4 cols */}
        <div className='lg:col-span-4'>
          <ProposalList proposals={dashboardData.recentProposals} />
        </div>

        {/* Profile Completeness - 3 cols */}
        <div className='lg:col-span-3'>
          <ProfileCompleteness
            completedItems={dashboardData.profileProgress.completedItems}
            totalItems={dashboardData.profileProgress.totalItems}
            percentage={dashboardData.profileProgress.percentage}
          />
        </div>
      </div>

      {/* Performance and Insights Section */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-7'>
        {/* Customer Fulfillment - 4 cols */}
        <div className='lg:col-span-4'>
          <CustomerFulfillmentChart data={dashboardData.performance} />
        </div>

        {/* Visitor Insights - 3 cols */}
        <div className='lg:col-span-3'>
          <VisitorInsightsChart data={dashboardData.insights} />
        </div>
      </div>
    </>
  );
}
