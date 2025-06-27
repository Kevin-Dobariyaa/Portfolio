import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Chatty - Real time Chat App",
      description: "A full-stack chat application with real-time messaging, 32+ themes, image sharing, and authentication. Uses Zustand for state management and Cloudinary for media storage.",
      image: "https://cdn.scopicsoftware.com/wp-content/uploads/2019/04/chat-app-1.jpg",
      tags: ["React", "WebSocket", "MongoDB", "WebSocket", "Zustand"],
      demoUrl: "https://chattz.up.railway.app/",
      githubUrl: "https://github.com/Kevin-Dobariyaa/Chat-App",
      date: "2025"
    },
    {
      title: "MemVisual - Memory Allocation Visualizer",
      description: "A dynamic educational tool that visualizes memory management using fixed and dynamic partitioning. Supports first fit, best fit, next fit, and worst fit algorithms, with fragmentation calculations",
      image: "https://ownwebservers.com/wp-content/uploads/2021/04/servers-management.png",
      tags: ["React", "Node.js", "Tailwind", "OS"],
      demoUrl: "https://mem-visual.vercel.app",
      githubUrl: "https://github.com/Kevin-Dobariyaa/MemVisual",
      date: "2024"
    },
    {
      title: "AI Resume Builder - SaaS Application",
      description: "A modern, full-stack AI-powered resume builder SaaS application built with Next.js 15. It features intelligent resume generation with ChatGPT API integration, subscription-based access via Stripe Checkout, and a fully responsive UI powered by Tailwind CSS and shadcn/ui components.",
      image: "https://jobbloghq.com/wp-content/uploads/2024/05/ai-resume-builder-future.jpg.webp",
      tags: ["Next.js", "AI", "Stripe", "Vercel Blob","Tailwind"],
      demoUrl: "https://ai-resume-builder-chi-plum.vercel.app",
      githubUrl: "https://github.com/Kevin-Dobariyaa/AI-Resume-Builder",
      date: "2025"
    },
    {
      title: "TravelRoot - Explore & Share Destinations ",
      description: "TravelRoot is a full-stack travel destination listing platform designed to help users discover and explore beautiful locations across the world. It features an interactive map powered by MapBox, allowing users to visually browse destinations.",
      image: "https://w0.peakpx.com/wallpaper/127/736/HD-wallpaper-most-beautiful-places-in-the-world.jpg",
      tags: ["EJS", "Node.js", "Cloudinary", "Mapbox", "MongoDB"],
      demoUrl: "https://travel-root.onrender.com",
      githubUrl: "https://github.com/Kevin-Dobariyaa/Travel-Root",
      date: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;