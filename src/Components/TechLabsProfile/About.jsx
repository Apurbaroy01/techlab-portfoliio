import { FaBullseye, FaEye, FaUsers, FaClock } from "react-icons/fa";
import TeamMember from "./TeamMember";
import TecLabs from "./TecLabs";
import TeamLider from "./TeamLider";

const About = () => {
    // const teamMembers = [
    //     {
    //         name: "Rohan Kazi",
    //         role: "Laravel Developer",
    //         image: "https://i.ibb.co.com/dYf5M5n/037de061-8c0c-40b3-885f-297f46b2ce48.jpg",
    //     },
    //     {
    //         name: "Sophie Blake",
    //         role: "UI/UX Designer",
    //         image: "https://randomuser.me/api/portraits/women/44.jpg",
    //     },
    //     {
    //         name: "Ethan Brooks",
    //         role: "Project Manager",
    //         image: "https://randomuser.me/api/portraits/men/45.jpg",
    //     },
    //     {
    //         name: "Olivia White",
    //         role: "Marketing Specialist",
    //         image: "https://randomuser.me/api/portraits/women/65.jpg",
    //     },
    //     {
    //         name: "Noah Martinez",
    //         role: "Mobile App Developer",
    //         image: "https://randomuser.me/api/portraits/men/53.jpg",
    //     },
    //     {
    //         name: "Emma Johnson",
    //         role: "Quality Assurance Engineer",
    //         image: "https://randomuser.me/api/portraits/women/50.jpg",
    //     },
    //     {
    //         name: "Liam Nguyen",
    //         role: "DevOps Engineer",
    //         image: "https://randomuser.me/api/portraits/men/36.jpg",
    //     },
    //     {
    //         name: "Chloe Smith",
    //         role: "Business Analyst",
    //         image: "https://randomuser.me/api/portraits/women/72.jpg",
    //     },
    // ];
    return (
        <section  className="py-20 bg-transparent text-white" id="about">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="lilita-one-regular text-4xl md:text-5xl font-extrabold text-accent mb-4 flex justify-center items-center gap-3">
                        <p>About</p>
                        <TecLabs></TecLabs>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        At TechLab IT, we combine innovative technology, expertise, and a customer-centric approach to deliver cutting-edge digital solutions. Our team of dedicated professionals is here to help you grow and evolve in the ever-changing digital landscape.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <div
                        className="card bg-white/10 backdrop-blur-md border border-white/10 shadow-xl"
                        data-aos="fade-right"
                    >
                        <div className="card-body">
                            <h3 className="card-title flex items-center gap-3 text-accent text-xl">
                                <FaBullseye /> Our Mission
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our mission is to enable businesses to thrive by offering state-of-the-art technology solutions that drive efficiency, scalability, and growth. We are committed to delivering excellence in every project we undertake.
                            </p>
                        </div>
                    </div>

                    <div
                        className="card bg-white/10 backdrop-blur-md border border-white/10 shadow-xl"
                        data-aos="fade-left"
                    >
                        <div className="card-body">
                            <h3 className="card-title flex items-center gap-3 text-accent text-xl">
                                <FaEye /> Our Vision
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our vision is to be at the forefront of digital innovation, helping businesses worldwide adopt and harness the power of technology. We aim to shape the future with sustainable and impactful digital solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Experience & Core Values */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4" data-aos="zoom-in-up">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <FaClock className="text-accent text-3xl" /> Over 7 Years of Excellence
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            With over <span className="font-semibold text-primary">7 years</span> of experience in the IT industry, we have successfully completed over <span className="text-primary font-semibold">150+ projects</span> globally, transforming ideas into reality and creating scalable, impactful solutions for our clients.
                        </p>
                    </div>

                    <div data-aos="zoom-in-up">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-4">
                            <FaUsers className="text-accent text-3xl" /> Our Core Values
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Innovation and creativity at the heart of every solution</li>
                            <li>Transparent and trust-based client relationships</li>
                            <li>Collaboration and teamwork driving results</li>
                            <li>Continuous learning and constant improvement</li>
                        </ul>
                    </div>
                </div>

                {/* Team Section */}
                <TeamLider></TeamLider>
                <TeamMember></TeamMember>
            </div>
        </section>
    );
};

export default About;
