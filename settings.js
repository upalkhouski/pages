// Site structure and navigation settings
window.siteSettings = {
  // Site metadata
  siteTitle: "Vladimir's AI Demos",
  siteDescription: "A collection of Vladimir's AI Demos created in everyday's life and work",
  
  // Tags for categorizing content
  tags: ["AI", "UX", "Daniel", "Physics", "Math", "AWS"],
  
  // List of sub-pages
  pages: [
    {
      title: "Linear Functions Explorer",
      url: "pages/linear-functions/",
      tags: ["Math", "Daniel"],
      description: "Interactive visualization of linear functions with adjustable parameters"
    },
    {
      title: "Introduction to AI",
      url: "pages/ai-intro/",
      tags: ["AI"],
      description: "An overview of artificial intelligence concepts"
    },
    {
      title: "IT Schulpraktikum in Frankfurt",
      url: "pages/schulpraktikum-guide/",
      tags: ["School"],
      description: "Guide for 9-10th grade students seeking IT internships in Frankfurt"
    },
    {
      title: "CloudWatch Metrics Streaming",
      url: "pages/cloudwatch-metrics/",
      tags: ["AWS", "AI"],
      description: "Interactive demo of CloudWatch metrics being streamed to S3 and analyzed with Athena"
    }
  ],
  
  // Optional: Define featured or highlighted content
  featuredPages: ["pages/ai-intro/", "pages/linear-functions/", "pages/cloudwatch-metrics/"]
};