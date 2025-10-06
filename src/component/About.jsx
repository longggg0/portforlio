import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    { name: 'HTML/CSS', percentage: 85 },
    { name: 'Tailwind', percentage: 85 },
    { name: 'bootstrap', percentage: 70 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'ReactJS', percentage: 70 },
    { name: 'Figma', percentage: 75 }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 text-white flex flex-col md:flex-row justify-between gap-12 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* About Me Text */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400">
          I'm Horn Bunlong, a Software Development student with a passion for frontend 
          development. I specialize in building modern, user-friendly web
          applications and transforming designs into high-performance, responsive
          interfaces using cutting-edge technologies. Currently, I'm focused on:
          Developing full-stack web development skills, Creating stable responsive
          interfaces with React, Mastering both frontend and backend technologies.
          I'm eager to gain hands-on experience, contribute to innovative projects,
          and continuously improve my technical expertise in web development.
        </p>
      </div>

      {/* Skills */}
      <div className="min-w-[300px]">
        <h1 className="text-3xl font-bold text-white mb-8">Skills</h1>
        <div className="space-y-6 w-96 max-w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-400">{skill.name}</span>
                <span className="text-sm font-medium text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-emerald-400 h-1 rounded-full" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
