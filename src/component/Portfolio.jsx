import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      category: "Website",
      title: "Movie",
      link: "https://movies-projects-seven.vercel.app/",
      externalLink: false,
      image: "",
      description: "A responsive movie browsing web app built with React, featuring real-time search, detailed movie info, and a sleek, user-friendly interface."
    },
    {
      category: "Website",
      title: "real-estate",
      link: "https://real-estate-dusky-nine.vercel.app/",
      externalLink: false,
      image: "",
      description: "A responsive eCommerce web app built with React, and a sleek, user-friendly interface."
    }
  ];

  const ProjectCard = ({ project }) => {
    const CardWrapper = ({ children }) => {
      return project.externalLink ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {children}
        </a>
      ) : (
        <Link to={project.link} className="block h-full">
          {children}
        </Link>
      );
    };

    return (
      <motion.div
        id='portfolio'
        className="h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <CardWrapper>
          <div className="flex md:flex-row items-stretch gap-6">
            {/* Text Content */}
            <div className="flex justify-between bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10">
              <div>
              <span className="inline-block text-sm font-medium text-emerald-400 mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="mt-auto">
  {project.externalLink ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden sm:inline-block px-6 py-2 rounded-md text-white bg-emerald-400 hover:bg-emerald-400 transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      View Project →
    </a>
  ) : (
    <Link
      to={project.link}
      className="hidden sm:inline-block px-6 py-2 rounded-md text-white bg-emerald-400 hover:bg-emerald-400 transition-colors"
    >
      View Project →
    </Link>
  )}
</div>
              </div>
              {project.image && (
              <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            </div> 
          </div>
        </CardWrapper>
      </motion.div>
    );
  };

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">RECENT WORKS</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Here are some of my favorite projects I have done lately. Feel free to check them out.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
