import React from "react";
import { User, Target, Code, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Logical Problem Solver",
      description:
        "I enjoy breaking down real-world problems and solving them with clean, efficient code and algorithmic thinking.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "DSA Enthusiast",
      description:
        "With 500+ problems solved, I thrive on mastering data structures and algorithms to write optimal, scalable solutions.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "System Thinker",
      description:
        "I love building smart, modular systems—whether it's a memory allocation visualizer.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer and 4th-year Computer Science student with hands-on experience building real-world web applications. From solving 500+ DSA problems to developing full-stack projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                My Journey
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              I began my web development journey in college, driven by curiosity about how digital products work behind the scenes. That spark quickly turned into a deep passion for building applications that are not only functional but solve real-world problems.

            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              From personal projects like a memory allocation visualizer to building real-time chat apps and recommendation systems, I've focused on writing clean, efficient code and designing intuitive user experiences. For me, technology isn't just about code—it's about creating tools that are useful, meaningful, and impactful.

            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Real World Project
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                500+ DSA Problem
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
