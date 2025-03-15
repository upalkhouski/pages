// Site structure and navigation settings
const siteSettings = {
  // Site metadata
  siteTitle: "My GitHub Pages",
  siteDescription: "A collection of notes and articles",
  
  // Tags for categorizing content
  tags: ["AI", "UX", "Daniel", "Physics"],
  
  // List of sub-pages
  pages: [
    {
      title: "Introduction to AI",
      url: "ai-intro/",
      tags: ["AI"],
      description: "An overview of artificial intelligence concepts"
    },
    {
      title: "UX Design Principles",
      url: "ux-principles/",
      tags: ["UX"],
      description: "Key principles for effective user experience design"
    },
    {
      title: "Daniel's Notes on AI",
      url: "daniel-ai-notes/",
      tags: ["AI", "Daniel"],
      description: "Daniel's personal insights on artificial intelligence"
    },
    {
      title: "Quantum Physics Basics",
      url: "quantum-physics/",
      tags: ["Physics"],
      description: "Introduction to fundamental concepts in quantum physics"
    },
    {
      title: "AI in UX Research",
      url: "ai-in-ux/",
      tags: ["AI", "UX"],
      description: "How AI is transforming user experience research"
    }
  ],
  
  // Optional: Define featured or highlighted content
  featuredPages: ["ai-intro/", "quantum-physics/"]
};