
import SkillComponents from "@/components/skillComponent/SkillComponents";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
// import "./Skills.css";

const Skill = async () => {


console.log("object", process.env.NEXT_PUBLIC_BACKEND_URL)

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skill`, {
    next: { revalidate: 3600 }, // refresh every 1 hour
  });
  const skills = await res.json();

  console.log(skills)
  return (
    <SkillComponents skills={skills} />
    // <section id="skill" className="py-16 bg-black text-white">
    //   <div className="container mx-auto px-4">

    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       className="mb-12 text-center"
    //     >
    //       <div className="flex items-center justify-center gap-3 mb-4">
    //         <div className="h-1 w-10 bg-pink-600"></div>
    //         <h3 className="text-xl font-medium text-pink-600">EXPERTISE</h3>
    //         <div className="h-1 w-10 bg-pink-600"></div>
    //       </div>
    //       <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
    //         My Skills
    //         <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-pink-600"></span>
    //       </h2>
    //       <p className="max-w-2xl mx-auto text-gray-400 mt-6">
    //         I've developed expertise in various technologies through hands-on experience and continuous learning
    //       </p>
    //     </motion.div>


    //     <div className="mb-20 overflow-x-hidden">
    //       <Marquee
    //         className="py-12"
    //         speed={100}
    //         gradient={true}
    //         gradientColor={[0, 0, 0]}
    //         gradientWidth={50}
    //         style={{ overflow: 'hidden' }}
    //       >
    //         {skills.map((skill, index) => (
    //           <motion.div
    //             key={index}
    //             className="mx-6 skill-card"
    //             whileHover={{
    //               scale: 1.05,
    //               transition: { duration: 0.2 }
    //             }}

    //           >
    //             <div className="bg-gray-900 p-5 rounded-lg flex flex-col items-center shadow-lg skill border border-gray-800 hover:border-pink-600 transition-all duration-300">
    //               <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center ">
    //                 <img
    //                   src={skill.image}
    //                   alt={skill.skill}
    //                   className="max-h-full max-w-full object-contain "
    //                 />
    //               </div>
    //               <h3 className="text-lg font-medium text-center">{skill.skill}</h3>
    //             </div>
    //           </motion.div>
    //         ))}
    //       </Marquee>
    //     </div>



    //   </div>
    // </section>
  );
};

export default Skill;