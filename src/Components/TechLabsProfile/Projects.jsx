import { useQuery } from '@tanstack/react-query';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import useAxois from '../../Hooks/useAxois';

const Projects = () => {
    const axiosInstance = useAxois();

    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axiosInstance.get('/projects');
            return res.data;
        },
    });
    console.log(projects);

    return (
        <section id="projects" className="py-20 bg-transparen">
            <div className="container mx-auto px-4">
                {/* 🔹 Section Header */}
                <div className="text-center mb-12">
                    <h2 className="lilita-one-regular text-4xl md:text-5xl font-extrabold text-accent mb-4">
                        Projects
                    </h2>
                    <p className="text-white text-lg mt-3">
                        Some of my best works — creative, responsive & performance optimized.
                    </p>
                </div>

                {/* 🔹 Project Grid */}
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            className="relative group bg-white/10 rounded-2xl border border-gray-300  backdrop-blur-md shadow-xl hover:shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-2 duration-300"
                            data-aos="fade-up"
                        >
                            {/* 🔸 Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.url}
                                    alt={project.title}
                                    className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* 🔸 Project Content */}
                            <div className="p-6 flex flex-col justify-between h-full bg-white/5 backdrop-blur-md">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-white dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* 🔸 Links */}
                                    <div className="flex gap-3 mt-auto">

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-pink-500 to-amber-500 hover:opacity-90 transition"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-400 dark:border-gray-600 rounded-full hover:bg-gray-800 hover:text-white transition"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                    </div>



                                    {/* 🔸 Tech Stack */}
                                    {/* {project.tech && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-gradient-to-r from-amber-500/20 to-pink-500/20 text-amber-400 px-2 py-1 rounded-full font-medium border border-amber-400/20"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )} */}
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
