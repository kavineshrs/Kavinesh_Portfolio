import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio with Admin Dashboard",
    description: "A modern, full-stack portfolio website featuring an integrated admin dashboard for seamless content and project management. The platform supports secure authentication with Next-Auth, state management via React Context API. The admin dashboard allows easy updates to portfolio content, project listings, and blog posts, all within a responsive and visually engaging UI.",
    image: "/lovable-uploads/Portfolio_Image.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "Mongo"],
    demoUrl: "https://kavinesh-portfolio.vercel.app/",
    githubUrl: "https://github.com/kavineshrs/Kavinesh_Portfolio"
  },
  {
    id: 2,
    title: "AI-Powered Flood Risk Assessment System",
    description: "AI-Powered Flood Risk Assessment System is a full-stack application that evaluates flood risks using geographic coordinates or terrain images. Powered by Google Gemini AI, it analyzes elevation, proximity to water bodies, and historical data to deliver actionable risk insights.",
    image: "/lovable-uploads/Flood_Risk.jpg",
    tags: ["Next.js", "Node.js", "Fast API", "Tailwind CSS", "TypeScript","Gemini API", "Google Maps API"],
    demoUrl: "https://ai-flood-risk-assessment-frontend.vercel.app/",
    githubUrl: "https://github.com/kavineshrs/AI--Flood-Risk-Assessment-Frontend"
  },
  {
    id: 3,
    title: "Role-Validator : XML to PDF Job Role Comparison Tool",
    description: "An AI-powered Streamlit app that validates job roles by comparing structured XML definitions with roles extracted from unstructured PDFs. Combines Google Gemini, RAG (via Pinecone), and fuzzy string matching for intelligent role comparison and PDF report generation. Automates validation, detects mismatches, and saves hours of manual effort.",
    image: "/lovable-uploads/Role.jpg",
    tags: ["Python", "Gemini API", "Streamlit", "Next.js", "PyMuPDF", "Pinecone", "TheFuzz", "LangChain"],
    //demoUrl: "https://role-validator-xml-to-pdf-job-role-comparison-tool-by-kavinesh.streamlit.app/",
    githubUrl: "https://github.com/kavineshrs/Role-Validator-XML-to-PDF-Job-Role-Comparison-Tool"
  },
  {
    id: 4,
    title: "Intelligent SQL Assistant : Natural Language to Database Query System",
    description: "An AI-powered Streamlit app that converts natural language questions into SQL queries. It supports live database querying, result display, and uses LLMs for intelligent SQL generation—making data access seamless for non-technical users.",
    image: "/lovable-uploads/NLP-SQL.jpg",
    tags: ["Streamlit", "Python", "SQLite", "NLP", "Large Language Model", "Open AI API"],
    demoUrl: "https://intelligent-sql-assistant-by-kavinesh.streamlit.app/", // Replace with actual live link if available
    githubUrl: "https://github.com/kavineshrs/Intelligent-SQL-Assistant-Natural-Language-to-Database-Query-System"
  },
  {
    id: 5,
    title: "AI-Powered Smart Waste Management System",
    description: "An AI-powered waste management platform designed to incentivize and streamline waste reporting and collection. Our goal is to create a community-driven approach to waste management, rewarding users for their eco-friendly actions.",
    image: "/lovable-uploads/smartwaste.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Gemini API", "Web3Auth"],
    githubUrl: "https://github.com/kavineshrs/Smart-Waste-Management-System"
  },
  {
    id: 6,
    title: "Gold Price Forecaster",
    description: "A Python, Django-based web application that analyzes and visualizes historical gold price data and predicts gold price for the next 3 and 9 days . It features interactive charts, real-time updates, and predictive analytics to help users make informed investment decisions.",
    image: "/lovable-uploads/Gold.jpg",
    tags: ["Python", "Django", "Machine Learning", "Plotly", "Linear Regression", "Yahoo Finance", "Gold API"],
    githubUrl: "https://github.com/kavineshrs/Gold-Price-Forecaster",
    
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI/ML and Web Development. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      
    </section>
  );
};

export default Projects;
