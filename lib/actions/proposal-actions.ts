"use server"

import { revalidatePath } from "next/cache"

export async function generateProposal(jobDescription: string): Promise<string> {
  // In a real application, this would call an AI service like OpenAI or Claude
  // For demo purposes, we'll return a mock response
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return `
  <h3>Dear Hiring Manager,</h3>
  
  <p>I noticed your struggle with mobile optimization and declining conversion rates in your job posting. Having helped 12 e-commerce sites increase their mobile conversion rates by an average of 34% in the past year, I believe I can deliver similar results for you.</p>
  
  <p>Your job description mentions challenges with site speed on mobile devices, which is often the primary culprit behind poor conversion rates. In my experience, addressing these three key areas typically yields the most significant improvements:</p>
  
  <ul>
    <li>Optimizing image delivery and implementing lazy loading (typically reduces load time by 40-60%)</li>
    <li>Streamlining JavaScript execution and eliminating render-blocking resources</li>
    <li>Implementing proper caching strategies and CDN configuration</li>
  </ul>
  
  <p>For a recent client facing similar challenges, I reduced their mobile page load time from 6.2s to 1.8s, resulting in a 27% increase in conversions and a 15% decrease in bounce rate within the first month.</p>
  
  <p>I'd be happy to perform a quick audit of your current site and provide specific recommendations before we begin working together. This would give you a clear picture of the improvements we could achieve.</p>
  
  <p>Would you be available for a 15-minute call this week to discuss your specific needs in more detail?</p>
  
  <p>Looking forward to potentially working together,</p>
  <p>Your Name</p>
  `
}

export async function saveProposal(data: {
  jobDescription: string
  proposal: string
  painPoints: string[]
  clientName: string
  title: string
}) {
  // In a real application, this would save to a database
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Revalidate the proposals page to show the new proposal
  revalidatePath("/proposals")

  return { success: true, id: Math.random().toString(36).substring(7) }
}

