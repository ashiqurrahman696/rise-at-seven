import React from 'react';
import { motion } from "framer-motion";

const AnimatedOverlay = () => {
    return (
        <motion.div
            initial={{ height: "100vh" }}
            animate={{ height: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-screen bg-[#b0f3e0] z-100 pointer-events-none"
        />
    );
};

export default AnimatedOverlay;