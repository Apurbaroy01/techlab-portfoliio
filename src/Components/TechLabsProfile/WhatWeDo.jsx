import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatWeDo = () => {
    const services = [
        {
            icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
            title: "MERN Stack Web Applications",
            desc: "We build dynamic, scalable, and high-performance web apps using MongoDB, Express, React, and Node.js.",
        },
        {
            icon: <FaMobileAlt className="text-green-600 text-4xl" />,
            title: "Android & iOS App Development",
            desc: "Our mobile team crafts smooth, intuitive, and powerful native & hybrid apps for all devices.",
        },
        {
            icon: <FaCloud className="text-sky-500 text-4xl" />,
            title: "Cloud Integration & API Services",
            desc: "We help businesses move to the cloud with secure APIs and seamless integrations.",
        },
        {
            icon: <FaBrain className="text-purple-600 text-4xl" />,
            title: "AI & Data Analytics Solutions",
            desc: "Using cutting-edge AI and ML tools to deliver intelligent insights and smart automation.",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-green-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-blue-700 mb-4"
                >
                    What We Do
                </motion.h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    At <span className="text-green-600 font-semibold">TechLabs IT</span>, we provide end-to-end digital
                    solutions designed to help businesses innovate, automate, and grow in the modern world.
                </p>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
