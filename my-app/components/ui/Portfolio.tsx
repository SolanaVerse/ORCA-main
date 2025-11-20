import React from 'react'

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Built a scalable e-commerce platform with Next.js, handling 10k+ daily transactions",
      tech: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      results: "300% increase in sales"
    },
    {
      title: "SaaS Marketing Campaign", 
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategy for B2B SaaS startup",
      tech: ["SEO", "PPC", "Content Marketing", "Analytics"],
      results: "150% lead generation growth"
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "IT Consulting", 
      description: "Migrated legacy systems to AWS cloud infrastructure for enterprise client",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      results: "60% cost reduction"
    },
    {
      title: "Mobile App Development",
      category: "Web Development",
      description: "Cross-platform mobile app with real-time features and offline capabilities",
      tech: ["React Native", "Firebase", "Redux", "WebRTC"],
      results: "50k+ downloads in 3 months"
    },
    {
      title: "DeFi Trading Platform",
      category: "Web3 Development",
      description: "Decentralized finance platform with automated market making and yield farming",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      results: "$2M+ TVL in first month"
    },
    {
      title: "NFT Marketplace",
      category: "Web3 Development", 
      description: "Full-featured NFT marketplace with minting, trading, and royalty management",
      tech: ["Smart Contracts", "IPFS", "Next.js", "Polygon"],
      results: "10k+ NFTs traded"
    }
  ]

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-lg text-muted-foreground">Recent projects that showcase our expertise</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orca-600/20 text-orca-400 text-sm font-medium">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 rounded bg-neutral-800 text-xs text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400">📈</span>
              <span className="font-medium text-green-400">{project.results}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="#contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-orca-600 to-neon shadow-lg text-lg font-semibold">
          Start Your Project
        </a>
      </div>
    </section>
  )
}