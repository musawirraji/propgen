import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { jobDescription } = await request.json()

    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 })
    }

    // In a real application, this would call OpenAI or Claude APIs
    // For demo purposes, we'll simulate a delay and return mock data
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const painPoints = [
      "Mobile optimization issues",
      "Declining conversion rates",
      "Slow page load times",
      "Poor SEO performance",
    ]

    const proposal = `
    Dear Hiring Manager,
    
    I noticed your struggle with mobile optimization and declining conversion rates in your job posting. Having helped 12 e-commerce sites increase their mobile conversion rates by an average of 34% in the past year, I believe I can deliver similar results for you.
    
    Your job description mentions challenges with site speed on mobile devices, which is often the primary culprit behind poor conversion rates. In my experience, addressing these three key areas typically yields the most significant improvements:
    
    - Optimizing image delivery and implementing lazy loading (typically reduces load time by 40-60%)
    - Streamlining JavaScript execution and eliminating render-blocking resources
    - Implementing proper caching strategies and CDN configuration
    
    For a recent client facing similar challenges, I reduced their mobile page load time from 6.2s to 1.8s, resulting in a 27% increase in conversions and a 15% decrease in bounce rate within the first month.
    
    I'd be happy to perform a quick audit of your current site and provide specific recommendations before we begin working together. This would give you a clear picture of the improvements we could achieve.
    
    Would you be available for a 15-minute call this week to discuss your specific needs in more detail?
    
    Looking forward to potentially working together,
    Your Name
    `

    return NextResponse.json({
      painPoints,
      proposal,
      success: true,
    })
  } catch (error) {
    console.error("Error in AI route:", error)
    return NextResponse.json({ error: "Failed to process job description" }, { status: 500 })
  }
}

