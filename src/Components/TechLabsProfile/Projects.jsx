
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        image: 'https://via.placeholder.com/400x250.png?text=Portfolio+Website',
        description:
            'A responsive personal portfolio website built with React and TailwindCSS.',
        technologies: ['React', 'TailwindCSS', 'AOS'],
        live: 'https://your-live-link.com',
        github: 'https://github.com/your-repo',
        caseStudy: '#',
    },
    {
        id: 2,
        title: 'E-commerce App',
        image: 'https://via.placeholder.com/400x250.png?text=E-commerce+App',
        description:
            'A full-stack e-commerce web application with product listings, cart, and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
        live: 'https://ecommerce-demo.com',
        github: 'https://github.com/your-repo',
        caseStudy: '#',
    },
];

const Projects = () => {
    

    return (
        <section id="projects" className="py-20 bg-transparent dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="lilita-one-regular text-center text-4xl md:text-5xl font-extrabold text-accent  dark:text-white mb-12">
                  ~ Products ~
                </h2>
                <h2 className=" text-center text-2xl md:text-3xl font-extrabold text-accent  dark:text-white mb-12">
                    Exclusive Premium Products
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 duration-300"
                            data-aos="fade-up"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover rounded-t-xl"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="font-medium text-gray-700 dark:text-gray-200">Technologies:</h4>
                                    <ul className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((tech, index) => (
                                            <li
                                                key={index}
                                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-5 mt-6">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 text-2xl transition-colors"
                                            title="Live Demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-300 text-2xl transition-colors"
                                            title="GitHub"
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.caseStudy && (
                                        <a
                                            href={project.caseStudy}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-500 text-2xl transition-colors"
                                            title="Case Study"
                                        >
                                            <FaFileAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
