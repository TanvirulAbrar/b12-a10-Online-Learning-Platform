import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101922] text-gray-400 py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-[#137fec] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#137fec]/20">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-white">
                O-Learn
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              The world's leading educational platform for high-quality,
              professional online courses. Unlock your potential today.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Company</h5>
            <ul className="space-y-3 text-sm">
              {["About Us", "Careers", "Blog", "Partnerships"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/company/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#137fec] transition-colors block"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Legal</h5>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Terms of Service", id: "terms" },
                { label: "Privacy Policy", id: "privacy" },
                { label: "Cookie Policy", id: "cookies" },
                { label: "Refund Policy", id: "refund" },
              ].map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={`/legal/${item.id}`}
                    className="hover:text-[#137fec] transition-colors block"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Get in Touch</h5>
            <p className="text-sm mb-6">Have questions? We're here to help.</p>
            <div className="flex gap-4">
              {[
                { icon: Mail, href: "mailto:support@olearn.com" },
                { icon: Phone, href: "tel:+1234567890" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#137fec] hover:shadow-lg hover:shadow-[#137fec]/30 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
          © {currentYear} O-Learn Education Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
