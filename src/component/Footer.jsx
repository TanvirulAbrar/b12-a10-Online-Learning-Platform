import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";
const Footer = () => {
  const navigate = useNavigate();
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="bg-[#001931]"
    >
      <div className="flex gap-10 justify-between p-8 text-white max-sm:flex-col max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          className="w-[200px] flex flex-col gap-2.5"
        >
          <a
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-ghost text-xl"
          >
            <img src={logo} className="h-full" alt="" />
            O-
            <span className="text-[#4e2ea5]">Learning</span>
          </a>
          <p>an online learning platform</p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
          <h1 className="font-bold">Company</h1>
          <p>About Us</p>
          <p>Our Mission</p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
          <h1 className="font-bold">Services</h1>
          <p>Products</p>
          <p>Customer Stories</p>
          <p>Download Apps</p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
          <h1 className="font-bold">Information</h1>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Join Us</p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
          <h1 className="font-bold">Social Links</h1>
          <div className="flex gap-3">
            <Facebook className="h-5 w-5 hover:text-[#169750] transition-colors" />
            <Twitter className="h-5 w-5 hover:text-[#169750] transition-colors" />
            <Instagram className="h-5 w-5 hover:text-[#169750] transition-colors" />
            <Linkedin className="h-5 w-5 hover:text-[#169750] transition-colors" />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        className="p-8 text-white text-center border-t border-white/10"
      >
        © 2025 All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
