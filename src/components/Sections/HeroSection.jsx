import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

import PROFILE_PIC from "../../assets/images/profile-img1.JPG";
import { containerVariants, itemVariants } from "../../utils/helper";
import { useEffect, useState } from "react";

const roles = ["Web Developer 💻", "Frontend Engineer ⚡", "UI/UX Enthusiast 🎨"];

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -120]);

  // Typewriter effect
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 120;
    const role = roles[index % roles.length];

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? role.substring(0, prev.length - 1) : role.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-25 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-15%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-25 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative px-6 pt-20 lg:pt-0 gap-12"
      >
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center lg:text-left max-w-2xl z-10"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Jitendra Kumar
            </span>
          </motion.h1>

          {/* Professional Typewriter */}
          <motion.div
            variants={itemVariants}
            className="mb-6 text-2xl md:text-3xl font-semibold min-h-[40px]"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed`}
          >
            I craft modern, responsive, and user-focused digital experiences.
            Clean design, smooth animations, and performance-driven code are my
            specialties.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("work")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold shadow-lg hover:shadow-purple-500/40 transition-all"
            >
              View Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold border backdrop-blur-md ${
                isDarkMode
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800/40"
                  : "border-gray-300 text-gray-700 hover:bg-gray-200/60"
              }`}
            >
              Contact Me
            </motion.button>

            {/* Resume Download Button */}
            <motion.a
              href="/resume/Jitendra_Kumar_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold shadow-lg transition-all ${
                isDarkMode
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-4 mt-10"
          >
            {[{ icon: FiGithub, href: "#" }, { icon: FiLinkedin, href: "#" }, { icon: Mail, href: "#" }].map(
              (social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium shadow-md transition-colors ${
                    isDarkMode
                      ? "bg-gray-900 text-gray-300 hover:text-white"
                      : "bg-white text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <social.icon size={18} />
                  {social.icon === Mail ? "Email" : social.icon === FiGithub ? "GitHub" : "LinkedIn"}
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 ${
              isDarkMode ? "border-gray-800" : "border-gray-300"
            } shadow-2xl relative`}
          >
            <img src={PROFILE_PIC} alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          {/* Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border-2 border-purple-500/40"
          />
        </motion.div>
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={22} className={isDarkMode ? "text-gray-500" : "text-gray-400"} />
      </motion.div>
    </div>
  );
};

export default HeroSection;
