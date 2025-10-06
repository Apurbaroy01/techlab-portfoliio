import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Top Section */}
      <div className="relative container mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10 z-10">
        {/* Company Info */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4 text-accent">TechLabs IT</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            We build digital experiences that empower businesses through cutting-edge technology, design, and innovation.
          </p>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h6 className="text-lg font-semibold mb-4 border-l-4 border-accent pl-3">Services</h6>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-accent transition">Web Development</li>
            <li className="hover:text-accent transition">App Development</li>
            <li className="hover:text-accent transition">UI/UX Design</li>
            <li className="hover:text-accent transition">Cloud Solutions</li>
          </ul>
        </div>

        {/* Company Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h6 className="text-lg font-semibold mb-4 border-l-4 border-accent pl-3">Company</h6>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-accent transition">About Us</li>
            <li className="hover:text-accent transition">Our Team</li>
            <li className="hover:text-accent transition">Careers</li>
            <li className="hover:text-accent transition">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h6 className="text-lg font-semibold mb-4 border-l-4 border-accent pl-3">Contact</h6>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-accent" /> +880 1700-123456
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-accent" /> info@techlabsit.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" /> Khulna, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-6"></div>

      {/* Bottom Section */}
      <div className="relative z-10 container mx-auto px-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-300 text-sm">
        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-accent transition-transform transform hover:scale-110">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-accent transition-transform transform hover:scale-110">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-accent transition-transform transform hover:scale-110">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center md:text-right">
          © {new Date().getFullYear()} <span className="text-accent font-semibold">TechLabs IT</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
