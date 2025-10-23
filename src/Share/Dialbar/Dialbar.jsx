import React, { useState } from "react";
import { MdAddCall, MdOutlineWatchLater, MdClose } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Dialbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300"
                >
                    {open ? (
                        <MdClose size={28} />
                    ) : (
                        <MdAddCall size={28} className="animate-pulse" />
                    )}
                </button>
            </div>

            {/* Animated Card Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl text-white p-5 z-50"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-3">
                            <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent">
                                TechLabs Support
                            </h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                            >
                                <MdClose size={22} />
                            </button>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-indigo-100 mb-3">
                            কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করো! 🚀
                        </p>

                        {/* Contacts */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <FaUserTie className="text-teal-300" />
                                <p className="font-medium">ABS Shamim</p>
                            </div>
                            <a
                                href="tel:+8801311271610"
                                className="block bg-gradient-to-r from-teal-500/80 to-blue-500/80 rounded-xl py-2 text-center text-sm hover:from-teal-400 hover:to-blue-400 transition-all duration-300"
                            >
                                📞 Call Now: +8801311271610
                            </a>

                            <div className="flex items-center gap-2 mt-2">
                                <FaUserTie className="text-teal-300" />
                                <p className="font-medium">MD. Mohosin</p>
                            </div>
                            <a
                                href="tel:+8801311271610"
                                className="block bg-gradient-to-r from-pink-500/80 to-purple-500/80 rounded-xl py-2 text-center text-sm hover:from-pink-400 hover:to-purple-400 transition-all duration-300"
                            >
                                📞 Call Now: +8801311271610
                            </a>
                        </div>

                        {/* Working Hours */}
                        <div className="mt-5 flex items-center gap-2 text-xs text-gray-300">
                            <MdOutlineWatchLater size={18} className="text-teal-300" />
                            <p>Available: Sat - Thu, 10:00 AM - 7:00 PM</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Dialbar;
