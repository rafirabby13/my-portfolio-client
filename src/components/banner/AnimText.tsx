"use client"
import {  useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";



export default function AnimText({ delay }) {
  const [done, setDone] = useState(false);
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
 
  useEffect(() => {
    const controls = animate(count, {
      type: "tween",
      delay: delay,
      duration: 4,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      }
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="">
    
      {done && (
        <>
          <br /> <br />
        </>
      )}
      
    </span>
  );
}