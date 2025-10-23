
const teamMembers = [
    {
        name: "ABS Shamim",
        title: "Founder of TechLabs",
        role: "Founder",
        image: "https://i.ibb.co.com/VpB5GR0q/7561.jpg",
    },
    {
        name: "MD. Mohosin",
        title: "Co-Founder of TechLabs",
        role: "Co-Founder",
        image: "https://i.ibb.co.com/s9W3Pth9/7562.jpg",
    },
];

const TeamLider = () => {

    return (
        <section className="py-16 bg-transparent text-white font-[Poppins]">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-8">
                {/* Header */}
                <h2
                    data-aos="fade-up"
                    className="text-2xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400"
                >
                    Our Management Team
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-sm md:text-base text-indigo-100 max-w-2xl mx-auto mb-10"
                >
                    To help you build your career and achieve your goals, we offer 4-year
                    Diploma in Engineering courses in 15 technologies.
                </p>

                {/* Team Cards */}
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 150}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center 
              shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] 
              transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
              w-[80%] sm:w-[45%] md:w-[40%] lg:w-[35%]"
                        >
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-teal-400 shadow-md mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-base sm:text-xl font-semibold text-white">
                                {member.name}
                            </h3>
                            <p className="text-teal-300 text-sm font-medium mt-1">
                                {member.role}
                            </p>
                            <p className="text-indigo-100 text-xs sm:text-sm mt-2 opacity-90 leading-relaxed">
                                {member.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamLider;
