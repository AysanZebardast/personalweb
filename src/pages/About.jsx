import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 85 },
  { name: "CSS/Tailwind", level: 85 },
  { name: "Git", level: 80 },
  { name: "Python", level: 75 },
];

const About = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I am a curious individual with a deep passion for understanding the
            "why" and "how" behind the world around us. My journey in physics
            reflects my commitment to learning and exploring complex concepts,
            all in pursuit of my dreams. In addition to my academic interests, I
            have a strong affinity for coding and programming. I have chosen to
            focus on front-end development, as I enjoy creating visually
            appealing and user-friendly interfaces that enhance the digital
            experience. Art plays a significant role in my life, providing me
            with tranquility and inspiration. I believe that creativity and
            technical skills go hand in hand, and I strive to integrate both
            into my work. I am always eager to learn more and connect with
            like-minded individuals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
