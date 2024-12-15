import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mb-6 lg:mb-0 lg:mr-10 relative group"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {/* Image without scale effect */}
                <img
                  src={project.image}
                  width={400}
                  height={400}
                  alt={project.title}
                  className="rounded-lg cursor-pointer shadow-lg"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    Click for more details
                  </p>
                </div>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <h6 className="mb-4 text-2xl font-semibold">{project.title}</h6>
              <p className="mb-6 text-neutral-400 text-lg">
                {project.description}
              </p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
