"Use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div className="bg-gray-200 my-36 h-24 w-1 rounded-full hidden sm:block"></motion.div>
  );
}
