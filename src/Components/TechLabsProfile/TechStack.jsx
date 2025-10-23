import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaPython,
    FaGitAlt, FaGithub, FaGitlab, FaDocker, FaAws,
} from 'react-icons/fa';
import {
    SiNextdotjs, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiOracle, SiRedis,
    SiKubernetes, SiFirebase, SiBitbucket, SiNginx, SiNetlify, SiVercel
} from 'react-icons/si';

const techData = [
    {
        title: 'Front-End',
        description:
            'Crafting intuitive and responsive user interfaces with modern frameworks and libraries to ensure seamless user experiences.',
        icons: [FaHtml5, FaCss3Alt, FaJs, SiNextdotjs, FaReact, FaBootstrap],
    },
    {
        title: 'Back-End',
        description:
            'Building robust and scalable server-side applications that power your business logic and data processing efficiently.',
        icons: [FaNodeJs, SiDjango, FaPhp, FaPython, SiFirebase, SiVercel],
    },
    {
        title: 'Version Control',
        description:
            'Utilizing industry-standard tools to manage code changes, enable collaboration, and maintain project integrity.',
        icons: [SiBitbucket, FaGitAlt, FaGithub, SiNetlify, SiNginx, FaGitlab],
    },
    {
        title: 'Databases',
        description:
            'Implementing reliable and high-performance data storage solutions to securely manage and retrieve your critical information.',
        icons: [SiMongodb, SiMysql, SiPostgresql, SiOracle, SiRedis],
    },
    {
        title: 'DevOps And Hosting',
        description:
            'Ensuring smooth deployment, continuous integration, and reliable hosting for optimal application performance and uptime.',
        icons: [FaDocker, SiFirebase, SiKubernetes, SiNetlify, SiVercel, FaAws],
    },
];

const TechStack = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-4 text-center">
                {/* <p className="lilita-one-regular text-purple-400 mb-3">~ TECH STACK ~</p> */}
                <h2 className="lilita-one-regular text-4xl font-bold mb-12  text-accent"> Technologies We Use </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {techData.map((section, idx) => (
                        <div
                            key={idx}
                            data-aos="zoom-in"
                            className=" bg-white/10 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-purple-800/50"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-white">{section.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{section.description}</p>
                            <div className="flex flex-wrap justify-center gap-4 mt-4">
                                {section.icons.map((Icon, i) => (
                                    <Icon
                                        key={i}
                                        className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
