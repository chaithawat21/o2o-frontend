"use client";

import { motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },

  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  }
};

const ShinyButton = ({ text = "shiny-button" }) => {
  return (
    (<motion.button
      {...animationProps}
      className="relative rounded-[30px] w-[500px] px-6 py-[1rem] font-bold bg-white transition-[box-shadow] duration-300 ease-in-out hover:opacity-50 dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]">
      <span
        className="relative block h-full w-full text-[1rem] uppercase tracking-wide text-[rgb(0,0,0,100%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}>
        {text}
      </span>
      <span
        style={{
          padding: "3px",
          backgroundColor: "rgba(0,0,0,80%)",
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[30px] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"></span>
    </motion.button>)
  );
};

export default ShinyButton;
