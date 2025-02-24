"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export const BackgroundGradient = () => {
  const { theme } = useTheme()

  return (
    <motion.div className="absolute inset-0 z-0">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://a.d-cd.net/487d548s-960.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "#54a3c1",
          mixBlendMode: "color",
        }}
      />
      <motion.div
        className="absolute inset-0 z-20 transition-opacity duration-300 ease-in-out"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          opacity: theme === "dark" ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute inset-0 z-30"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)"
              : "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 80%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute inset-0 z-40"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.1), transparent 50%)"
              : "radial-gradient(circle at 70% 30%, rgba(244, 114, 182, 0.1), transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}

