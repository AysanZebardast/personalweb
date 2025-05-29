import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    { icon: <FaGithub size={20} />, url: "https://github.com/AysanZebardast" },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/aysan-zebardast-b958812b3/",
    },
    {
      icon: <FaEnvelope size={20} />,
      url: "mailto:aysan83zebardast@gmail.com",
    },
  ];

  return (
    <div className="flex space-x-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
