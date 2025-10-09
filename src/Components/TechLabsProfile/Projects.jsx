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
    {
        id: 3,
        title: 'Blog Platform',
        image: 'https://via.placeholder.com/400x250.png?text=Blog+Platform',
        description:
            'A modern blog platform with user authentication and markdown editor.',
        technologies: ['React', 'Firebase', 'TailwindCSS'],
        live: '#',
        github: '#',
        caseStudy: '#',
    },
    {
        id: 4,
        title: 'Task Manager App',
        image: 'https://via.placeholder.com/400x250.png?text=Task+Manager',
        description:
            'A task management app to track daily tasks with notifications.',
        technologies: ['React', 'Node.js', 'Express', 'TailwindCSS'],
        live: '#',
        github: '#',
        caseStudy: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-transparent dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-center lilita-one-regular text-3xl md:text-4xl font-extrabold text-accent mb-4">
                    ~ Products ~
                </h2>
                <p className="text-center text-base md:text-lg text-white dark:text-gray-300 mb-12">
                    Exclusive Premium Projects & Work Showcase
                </p>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-xl"
                            data-aos="fade-right"
                        >
                            <div className="relative group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
                            </div>

                            <div className="p-4 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                        {project.description}
                                    </p>

                                    <div className="mb-3">
                                        <h4 className="font-medium text-gray-700 dark:text-gray-200 text-xs">
                                            Technologies:
                                        </h4>
                                        <ul className="flex flex-wrap gap-1 mt-1">
                                            {project.technologies.map((tech, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full text-xs font-medium"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-2 text-xl">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition-colors"
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
                                            className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-300 transition-colors"
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
                                            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-500 transition-colors"
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
