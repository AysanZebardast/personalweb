import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

// Add this line before the Contact component
emailjs.init("22vZMLLCR46ClBuJ2");

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_pwchdv9",
        "template_cmntxrb",
        form.current,
        "22vZMLLCR46ClBuJ2"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          console.error("Error details:", error);
        }
      );
  };

  return (
    <motion.section
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600 dark:text-blue-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Tehran, Iran</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600 dark:text-blue-400">
                <FaPhone size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  +98 910 073 4576
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600 dark:text-blue-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  aysan83zebardast@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
