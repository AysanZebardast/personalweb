import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Easy Recipes",
    description:
      "A modern, responsive web application built with Next.js that allows users to discover, search, and save their favorite recipes.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-icon-2-design-template-b7f020f0195178f74a0a241024343dd3_screen.jpg?ts=1627156857",
    link: "https://foodrecipe-delta.vercel.app/",
    github: "https://github.com/AysanZebardast/foodrecipe",
  },
  {
    id: 2,
    title: "Library",
    description:
      "Developed a library web application using React and Redux with JWT-based authentication. Users can register, log in, and manage books with full CRUD functionality.",
    tags: ["sass", "React", "JavaScript"],
    image: "https://angelapingel.com/wp-content/uploads/2022/12/45750-6.jpg",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Personal Website",
    description:
      "A personal portfolio website with React to showcase my skills and projects. The site features a responsive design and includes sections for experience, technologies, and project highlights",
    tags: ["React", "tailwind"],
    image:
      "https://static.vecteezy.com/system/resources/previews/049/979/644/non_2x/girl-icon-symbol-illustration-isolated-on-white-background-vector.jpg",
    link: "https://personalweb-zeta-beryl.vercel.app/",
    github: "https://github.com/AysanZebardast/personalweb",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
