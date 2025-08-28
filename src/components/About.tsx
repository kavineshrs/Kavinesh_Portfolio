import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2022 – 2026",
    title: "Bachelor of Technology in Computer Science & Engineering, SRM Institute of Science and Technology, Ramapuram",
    description: "Pursuing B.Tech in Computer Science & Engineering with a focus on Full Stack Development, Artificial Intelligence, and Machine Learning. Engaged in multiple academic and personal projects, including AI-powered applications, scalable web platforms, and intelligent automation systems.",
    type: "education"
  },
  {
    id: 2,
    year: "2023 – 2025",
    title: "Technical Lead, Intellects Club – SRM Ramapuram",
    description: "Leading the technical division of Intellects Club by mentoring peers, organizing hackathons, and guiding members in projects spanning Full Stack Development, AI/ML, and cloud computing. Spearheading workshops and technical sessions that enhance innovation, problem-solving, and collaborative learning among 200+ students.",
    type: "experience"
  },
  {
    id: 3,
    year: "2022",
    title: "Higher Secondary Education – Sir Sivaswami Kalalaya Higher Secondary School, Mylapore, Chennai",
    description: "Achieved 92.6% in Higher Secondary with a strong academic foundation in Computer Science, Physics, Chemistry, and Mathematics, building the groundwork for advanced studies in engineering and technology.",
    type: "education"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
              I'm a <span className="font-semibold text-blue-400">Full Stack & Machine Learning Engineer</span> passionate about buildingintelligent, scalable applications that bridge modern web technologies with AI.</p>
              <p className="text-muted-foreground mb-4">With experience across <span className="font-semibold text-blue-400">frontend, backend, and AI/ML systems</span>, I specialize in delivering seamless user experiences powered by data-driven insights and resilient architectures.</p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.coursera.org/account/accomplishments/verify/2VUM7WNF5JCF" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Python for Data Science, AI & Development Professional Certificate</div>
                    <div className="text-xs text-muted-foreground">Python & Data Science Focus</div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/verify/4RHWX59L9B6U" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Introduction to Containers w/ Docker, Kubernetes & OpenShift Certificate</div>
                    <div className="text-xs text-muted-foreground">Containers & App Deployment Focus</div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/H77KVZVP4V8Z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">IBM Full Stack Software Developer Professional Certificate</div>
                    <div className="text-xs text-muted-foreground">Full Stack Web-Development Focus</div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/verify/TT3LF3LA896N?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Getting Started with Git & Github Certificate</div>
                    <div className="text-xs text-muted-foreground">Version Control Focus</div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
