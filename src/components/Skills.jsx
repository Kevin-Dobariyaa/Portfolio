import React from 'react';
import { Code, Database, Globe, Smartphone, Zap, Bug } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "Java", level: 80 },
      ]
    },
    
  ];

  const tools = [
    { icon: <Smartphone className="w-6 h-6" />, name: "Mobile First" },
    { icon: <Zap className="w-6 h-6" />, name: "Performance" },
    { icon: <Globe className="w-6 h-6" />, name: "SEO" },
    { icon: <Bug className="w-6 h-6" />, name: "Testing & Debugging" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-200 mb-3">
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                    {tool.icon}
                  </div>
                </div>
                <span className="text-gray-700 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;