
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamMember = () => {
    const teamMembers = [
        { name: "Rohan Kazi", role: "Laravel Developer", image: "https://i.ibb.co.com/dYf5M5n/037de061-8c0c-40b3-885f-297f46b2ce48.jpg" },
        { name: "Sophie Blake", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Ethan Brooks", role: "Project Manager", image: "https://randomuser.me/api/portraits/men/45.jpg" },
        { name: "Olivia White", role: "Marketing Specialist", image: "https://randomuser.me/api/portraits/women/65.jpg" },
        { name: "Noah Martinez", role: "Mobile App Developer", image: "https://randomuser.me/api/portraits/men/53.jpg" },
        { name: "Emma Johnson", role: "QA Engineer", image: "https://randomuser.me/api/portraits/women/50.jpg" },
        { name: "Liam Nguyen", role: "DevOps Engineer", image: "https://randomuser.me/api/portraits/men/36.jpg" },
        { name: "Chloe Smith", role: "Business Analyst", image: "https://randomuser.me/api/portraits/women/72.jpg" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="mt-24 relative" data-aos="fade-up">
            {/* Title */}
            <h3 className="lilita-one-regular text-4xl md:text-5xl font-bold text-center mb-20 
                 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                ✨ Meet Our Expert Team ✨
            </h3>

            <section className="py-16 relative overflow-hidden">
                {/* ❄️ Soft White Frost Blur Edges */}
                <div className="absolute left-0 top-0 h-full w-40 bg-accent/40 to-transparent blur-2xl rounded-r-full z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-40 bg-accent/40 to-transparent blur-2xl rounded-l-full z-20 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative">
                    <Slider {...settings}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="px-5">
                                <div className="group relative bg-white/10 backdrop-blur-2xl 
                                        border border-white/30 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.15)] 
                                        hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] transition-all duration-500 
                                        hover:-translate-y-3 hover:scale-[1.04]">

                                    {/* 🌆 Image */}
                                    <div className="relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* top overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-80"></div>
                                    </div>

                                    {/* 🧊 Text Content */}
                                    <div className="p-6 text-center">
                                        <h4 className="text-xl font-semibold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm text-purple-200 mt-2 font-medium tracking-wider">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* 🌈 Animated Glow Border */}
                                    <div className="absolute inset-0 rounded-3xl border border-transparent 
                                        group-hover:border-white/60 transition-all duration-700">
                                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 bg-gradient-to-r from-purple-400/40 via-white/20 to-blue-400/40 blur-lg"></div>
                                    </div>

                                    {/* 💡 Glow Circle Behind Card */}
                                    <div className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-30 
                                      bg-gradient-to-br from-purple-300 via-white/20 to-blue-400 blur-3xl transition-all duration-700"></div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default TeamMember;
