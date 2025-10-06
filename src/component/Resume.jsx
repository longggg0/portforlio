import React from 'react';
import { motion } from 'framer-motion';
export default function Resume() {
  const experiences = [
    {
      company: "",
      position: "",
      period: "",
      description: ""
    },
    {
      company: "",
      position: "",
      period: "",
      description: ""
    }
  ];

  const education = [
    {
      institution: "Norton University",
      degree: "Bachelor in Software Development",
      period: "2023 — Present",
      description: ""
    },
    {
      institution: "Bun Rani HunSen Memot High School",
      degree: "",
      period: "2020 - 2022",
      description: "2021-2022 Graduated High Shcool At Bun Rani HunSen Memot High School"
    }
  ];

  const TimelineItem = ({ item, isExperience = false }) => (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-yellow-500 rounded-full shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-500 rounded-full animate-pulse opacity-50"></div>
      </div>
      <div className="absolute left-1.5 top-5 w-0.5 bg-gradient-to-b from-gray-600 to-transparent h-full"></div>
      
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-bold text-white">
            {isExperience ? item.company : item.institution}
          </h3>
          <span className="text-sm text-emerald-400 font-medium bg-orange-400/10 px-3 py-1 rounded-full mt-1 sm:mt-0">
            {item.period}
          </span>
        </div>
        
        <h4 className="text-gray-300 font-medium mb-3">
          {isExperience ? item.position : item.degree}
        </h4>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
   <motion.section
      id="resume"
      className="py-20 text-white flex flex-col md:flex-row justify-between gap-12 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration:1, ease: "easeOut" }}
    >
      <div className="max-w-6xl ">
        {/* Section Header */}
        <div className=" mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl ">
            A timeline of my educational background and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} isExperience={false} />
              ))}
            </div>
          </div>
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zm4 4H6v7h8V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="relative">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} isExperience={true} />
              ))}
            </div>
          </div>

          
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-orange-400/25 transition-all duration-300 cursor-pointer">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            Download Full Resume
          </div>
        </div> */}
      </div>
    </motion.section  >
  );
}