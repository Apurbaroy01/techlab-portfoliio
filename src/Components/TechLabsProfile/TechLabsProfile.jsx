import React from "react";
import { FaLaptopCode, FaUsers, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { motion } from "framer-motion";

const TechLabsProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-4">

        
        {/* Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-700 flex justify-center items-center gap-2">
            <FaUsers className="text-green-600" /> Meet Our Team
          </h2>
          <p className="text-gray-600 mt-2">A passionate team of developers, designers, and innovators.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {[
              { name: "Apurba Roy", role: "Full Stack Developer" },
              { name: "Nusrat Jahan", role: "UI/UX Designer" },
              { name: "Rifat Hasan", role: "Backend Engineer" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechLabsProfile;
