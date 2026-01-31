import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import LogoButton from "./LogoButton";
import { toast } from "react-toastify";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-left">
          <div className="space-y-4">
            <span className="text-3xl font-extrabold text-white">Olearn</span>
            <p className="text-sm leading-relaxed">
              Empowering learners worldwide through high-quality, accessible
              education. Master the skills of tomorrow, today.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/company/about"
                  className="hover:text-purple-400 transition-colors block py-1"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/company/contact"
                  className="hover:text-purple-400 transition-colors block py-1"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/company/blog"
                  className="hover:text-purple-400 transition-colors block py-1"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/company/careers"
                  className="hover:text-purple-400 transition-colors block py-1"
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/legal/terms"
                  className="hover:text-purple-400 transition-colors block py-1"
                >
                  Terms of Use
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/legal/privacy"
                  className="hover:text-purple-400 transition-colors block py-1"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Contact</h5>
            <p className="text-sm mb-4">
              Questions or feedback? We'd love to hear from you.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                href="#"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                href="#"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} Olearn Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
