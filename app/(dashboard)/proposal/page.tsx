'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { generateProposal } from '@/lib/actions/proposal-actions';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function NewProposalPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [proposal, setProposal] = useState('');
  const [painPoints, setPainPoints] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [activeTab, setActiveTab] = useState('input');

  const handleGenerate = async () => {
    if (!jobDescription.trim()) return;

    setIsGenerating(true);
    setGenerationStep(1);
    setActiveTab('preview');

    try {
      // Step 1: Analyzing job description
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setGenerationStep(2);

      // Step 2: Identifying pain points
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const detectedPainPoints = [
        'Mobile optimization issues',
        'Declining conversion rates',
        'Slow page load times',
        'Poor SEO performance',
      ];
      setPainPoints(detectedPainPoints);
      setGenerationStep(3);

      // Step 3: Creating proposal
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const result = await generateProposal(jobDescription);
      setProposal(result);
      setGenerationStep(4);
    } catch (error) {
      console.error('Error generating proposal:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold tracking-tight text-white'>
          New Proposal
        </h1>
        <p className='text-sm text-gray-400'>
          Generate a personalized proposal based on a job description.
        </p>
      </div>

      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
              <TabsList className='bg-[#282A37] border-[#2C2E3B]'>
                <TabsTrigger
                  value='input'
                  className='data-[state=active]:bg-[#6CECB6] data-[state=active]:text-[#0D1015] text-gray-400'
                >
                  Input
                </TabsTrigger>
                <TabsTrigger
                  value='preview'
                  className='data-[state=active]:bg-[#6CECB6] data-[state=active]:text-[#0D1015] text-gray-400'
                >
                  Preview
                </TabsTrigger>
              </TabsList>
              <div className='flex items-center gap-2'>
                <Select defaultValue='formal'>
                  <SelectTrigger className='w-[120px] bg-[#282A37] border-[#2C2E3B] text-white'>
                    <SelectValue placeholder='Tone' />
                  </SelectTrigger>
                  <SelectContent className='bg-[#282A37] border-[#2C2E3B] text-white'>
                    <SelectItem value='formal'>Formal</SelectItem>
                    <SelectItem value='conversational'>
                      Conversational
                    </SelectItem>
                    <SelectItem value='friendly'>Friendly</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue='problem-solver'>
                  <SelectTrigger className='w-[150px] bg-[#282A37] border-[#2C2E3B] text-white'>
                    <SelectValue placeholder='Style' />
                  </SelectTrigger>
                  <SelectContent className='bg-[#282A37] border-[#2C2E3B] text-white'>
                    <SelectItem value='problem-solver'>
                      Problem-Solver
                    </SelectItem>
                    <SelectItem value='storyteller'>Storyteller</SelectItem>
                    <SelectItem value='expert'>Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <TabsContent value='input' className='mt-4'>
              <div className='grid gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='job-description' className='text-white'>
                    Job Description
                  </Label>
                  <Textarea
                    id='job-description'
                    placeholder='Paste the job description here...'
                    className='min-h-[300px] bg-[#282A37] border-[#2C2E3B] text-white placeholder:text-gray-500'
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleGenerate}
                  disabled={!jobDescription.trim() || isGenerating}
                  className='w-full bg-[#6CECB6] text-[#0D1015] hover:bg-[#5BD9A3]'
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                      Generating Proposal...
                    </>
                  ) : (
                    'Generate Proposal'
                  )}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value='preview' className='mt-4'>
              {isGenerating ? (
                <Card className='bg-[#282A37] border-[#2C2E3B] text-white'>
                  <CardContent className='pt-6'>
                    <div className='space-y-4'>
                      <div className='space-y-2'>
                        <h3 className='text-lg font-medium'>
                          Generating Your Proposal...
                        </h3>
                        <div className='space-y-2'>
                          <div className='flex items-center gap-2'>
                            <div
                              className={`h-2 w-2 rounded-full ${generationStep >= 1 ? 'bg-[#6CECB6]' : 'bg-[#3A3C4A]'}`}
                            />
                            <span
                              className={
                                generationStep >= 1
                                  ? 'text-white'
                                  : 'text-gray-400'
                              }
                            >
                              Analyzing job description
                              {generationStep === 1 && '...'}
                              {generationStep > 1 && ' ✓'}
                            </span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <div
                              className={`h-2 w-2 rounded-full ${generationStep >= 2 ? 'bg-[#6CECB6]' : 'bg-[#3A3C4A]'}`}
                            />
                            <span
                              className={
                                generationStep >= 2
                                  ? 'text-white'
                                  : 'text-gray-400'
                              }
                            >
                              Identifying client pain points
                              {generationStep === 2 && '...'}
                              {generationStep > 2 && ' ✓'}
                            </span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <div
                              className={`h-2 w-2 rounded-full ${generationStep >= 3 ? 'bg-[#6CECB6]' : 'bg-[#3A3C4A]'}`}
                            />
                            <span
                              className={
                                generationStep >= 3
                                  ? 'text-white'
                                  : 'text-gray-400'
                              }
                            >
                              Creating conversational proposal
                              {generationStep === 3 && '...'}
                              {generationStep > 3 && ' ✓'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {generationStep >= 2 && (
                        <div className='pt-4 space-y-2'>
                          <h3 className='text-lg font-medium'>AI Insights</h3>
                          <div className='space-y-1'>
                            {painPoints.map((point, index) => (
                              <div
                                key={index}
                                className='flex items-center gap-2'
                              >
                                <div className='h-1.5 w-1.5 rounded-full bg-[#6CECB6]' />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : proposal ? (
                <div className='space-y-4'>
                  <div className='flex flex-wrap gap-2'>
                    {painPoints.map((point, index) => (
                      <Badge
                        key={index}
                        variant='outline'
                        className='bg-transparent border-[#2C2E3B] text-gray-300'
                      >
                        {point}
                      </Badge>
                    ))}
                  </div>
                  <Card className='bg-[#282A37] border-[#2C2E3B] text-white'>
                    <CardContent className='pt-6'>
                      <div className='prose max-w-none prose-invert'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: proposal.replace(/\n/g, '<br />'),
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <div className='flex justify-end gap-2'>
                    <Button
                      variant='outline'
                      className='border-[#2C2E3B] text-white hover:bg-[#2C2E3B]'
                    >
                      Edit
                    </Button>
                    <Button className='bg-[#6CECB6] text-[#0D1015] hover:bg-[#5BD9A3]'>
                      Save Proposal
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='flex h-[400px] items-center justify-center rounded-md border border-dashed border-[#2C2E3B]'>
                  <div className='text-center'>
                    <h3 className='text-lg font-medium text-white'>
                      No Preview Available
                    </h3>
                    <p className='text-sm text-gray-400'>
                      Generate a proposal to see the preview here.
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
