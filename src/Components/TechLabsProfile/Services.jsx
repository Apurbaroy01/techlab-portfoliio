

import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-5xl text-accent" />,
    title: "Web Development",
    description:
      "We craft responsive and scalable web applications using the latest technologies like MERN stack and Next.js.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-accent" />,
    title: "Mobile App Development",
    description:
      "Build high-performance Android and iOS apps with seamless UI and backend integration.",
  },
  {
    icon: <FaPaintBrush className="text-5xl text-accent" />,
    title: "UI/UX Design",
    description:
      "Our creative designers ensure that your products are intuitive, user-friendly, and visually appealing.",
  },
  {
    icon: <FaCloud className="text-5xl text-accent" />,
    title: "Cloud & DevOps",
    description:
      "We offer cloud migration, deployment automation, and CI/CD solutions to streamline your operations.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-accent" />,
    title: "Cyber Security",
    description:
      "Protect your business with our end-to-end cybersecurity audits, firewalls, and encryption solutions.",
  },
  {
    icon: <FaLightbulb className="text-5xl text-accent" />,
    title: "IT Consulting",
    description:
      "Get expert advice on strategy, architecture, and technology stacks that best suit your business.",
  },
];

const Services = () => {

  return (
    <section
      className="py-20 bg-transparent text-white"
      id="services"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="lilita-one-regular text-4xl md:text-5xl font-extrabold text-accent mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We provide a full range of IT services designed to help your
            business grow, innovate, and stay secure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="card bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500  hover:shadow-purple-800/50"
            >
              <div className="card-body items-center text-center">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
