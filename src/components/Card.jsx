
import React from "react";
import { motion } from "framer-motion";

export function Card({ index, bgColor, src }) {
  return (
    <motion.div
      className={`card p-40 pb-72  sm:p-80 md:w-28 rounded-xl shadow-lg bg-cover`}
      style={{
        backgroundImage: `url(${src})`,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
        overflow: "hidden",
        position: "relative",
      }}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    ></motion.div>
  );
}
