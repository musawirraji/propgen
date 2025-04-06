export type ProposalStatus = 'Pending' | 'Accepted' | 'Rejected';

export type ProposalCategory =
  | 'web'
  | 'mobile'
  | 'seo'
  | 'content'
  | 'design'
  | 'dev';

export interface Proposal {
  id: string;
  title: string;
  client: string;
  date: string;
  status: ProposalStatus;
  category?: ProposalCategory;
  successRate?: number;
  content?: string;
  painPoints?: string[];
}

export interface StatsData {
  totalProposals: number;
  successRate: number;
  avgResponseTime: number; // in hours
  conversionRate: number; // percentage
}

export interface TopProposal {
  id: string;
  title: string;
  category: ProposalCategory;
  successRate: number;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ProfileProgressData {
  completedItems: string[];
  totalItems: string[];
  percentage: number;
}

export interface PerformanceData {
  successRate: number[]; // Array of percentages over time
  conversionRate: number[]; // Array of percentages over time
  totalSuccess: number; // Current overall success rate
  totalConversion: number; // Current overall conversion rate
}

export interface InsightsData {
  values: number[]; // Values for each time period
  labels: string[]; // Labels for each time period (e.g., months)
  highlightIndex?: number; // Index to highlight (e.g., current month)
}

export interface DashboardData {
  stats: StatsData;
  recentProposals: Proposal[];
  topProposals: TopProposal[];
  successRateByCategory: ChartDataPoint[];
  profileProgress: ProfileProgressData;
  performance: PerformanceData;
  insights: InsightsData;
}

// src/types/proposal.ts
// Types specific to the proposal generation process

export type ProposalTone = 'formal' | 'conversational' | 'friendly';
export type ProposalStyle = 'problem-solver' | 'storyteller' | 'expert';

export interface ProposalGenerationOptions {
  tone: ProposalTone;
  style: ProposalStyle;
}

export interface ProposalGenerationState {
  jobDescription: string;
  proposal: string;
  painPoints: string[];
  isGenerating: boolean;
  generationStep: number;
  options: ProposalGenerationOptions;
}

// src/types/api.ts
// Types for API responses and requests

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface CreateProposalRequest {
  jobDescription: string;
  options: ProposalGenerationOptions;
}

export interface CreateProposalResponse {
  proposal: string;
  painPoints: string[];
  id: string;
}

export interface UpdateProposalStatusRequest {
  id: string;
  status: ProposalStatus;
}

export interface GetDashboardDataResponse {
  dashboardData: DashboardData;
}
