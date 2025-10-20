import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useForm } from "react-hook-form"
import axios from "axios";
import Swal from "sweetalert2";

const contactInfo = [
    {
        icon: <MdEmail className="text-blue-500 text-3xl md:text-4xl" />,
        title: "Email",
        value: "techlabs@gmail.com",
        link: "mailto:techlabs@gmail.com",
    },
    {
        icon: <MdPhone className="text-green-500 text-3xl md:text-4xl" />,
        title: "Phone",
        value: "+880 1311 xxxx610",
        link: "tel:+8801311xxxx610",
    },
    {
        icon: <MdLocationOn className="text-purple-500 text-3xl md:text-4xl" />,
        title: "Location",
        value: "Khanjahan Nagar, Khulna University Ln, Khulna, Bangladesh",
    },
];

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const message={
            name: data.name,
            email: data.email,
            message: data.message,
            timestamp: new Date().toISOString()
        }
        console.log(message);

        try{
            axios.post('http://localhost:5000/contactMessage', message)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent',
                    });
                    reset();
                }
            })
        }
        catch(error){
            console.error("❌ Submission error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Failed to send message. Please try again later.',
            });
        }
    };

    return (
        <section
            id="contact"
            className="py-16 px-5 sm:px-10 md:px-20 bg-transparent text-white relative overflow-hidden"
        >
            {/* Title */}
            <h2
                className="lilita-one-regular text-4xl md:text-5xl font-extrabold text-accent mb-6 sm:mb-8 text-center"
                data-aos="slide-up"
            >
                Get In Touch
            </h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start justify-center">
                {/* Contact Cards */}
                <div
                    className="w-full md:w-1/2 space-y-4 sm:space-y-6"
                    data-aos="zoom-in-down"
                >
                    <div className="space-y-4 sm:space-y-6 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 shadow-xl backdrop-blur-md">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 sm:gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-lg backdrop-blur-lg hover:scale-[1.03] hover:border-white/20 transition-all"
                            >
                                <div className="bg-white/20 p-2 sm:p-3 rounded-full shadow-inner">
                                    {info.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        {info.title}
                                    </h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-blue-300 hover:text-blue-500 text-xs sm:text-sm break-words transition"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-300 text-xs sm:text-sm">
                                            {info.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div
                    className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 shadow-xl backdrop-blur-md"
                    data-aos="zoom-in-up"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 text-sm sm:text-base">
                        <input
                            {...register("name")}
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <textarea
                            {...register("message")}
                            placeholder="Your Message"
                            rows="4"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-2 sm:py-3 font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:opacity-90 transition text-sm sm:text-base"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
