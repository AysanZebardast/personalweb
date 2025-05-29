import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <section className="container mx-auto px-6 py-20 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Aysan Zebardast
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-400">
            Frontend Developer
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            I'm a passionate Frontend Developer with one year of experience,
            specializing in React and Next.js. I honed my skills in a bootcamp,
            where I developed a strong foundation in modern web development.
            Curious, fast learner, and highly motivated, I thrive in team
            environments and constantly seek opportunities to grow and become
            the best in my field.
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg">
            <img
              src="https://i.postimg.cc/kMpnp96h/photo-2025-05-28-20-57-06.jpg"
              alt="Aysan Zebardast"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
