"use client"
import { useEffect, useState, useRef } from "react";
import { motion,  useAnimation, useInView } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";
interface ProjectComponentProps {
    projects: Project[];  // 👈 expect an array of projects
}
const ProjectComponent = ({ projects }: ProjectComponentProps) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);
    return (
        <div id="projects" className="py-20 bg-gray-900 text-white" ref={ref}>
            <div className="container mx-auto px-4">
                {/* Header with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "2.5rem" } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-[#E80F88]"
                        ></motion.div>
                        <h3 className="text-xl font-medium text-[#E80F88] tracking-wide">MY WORK</h3>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "2.5rem" } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-[#E80F88]"
                        ></motion.div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
                        Projects
                        <motion.span
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "6rem" } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-[#E80F88]"
                        ></motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-2xl mx-auto text-gray-400 mt-6"
                    >
                        A showcase of my recent projects, highlighting my skills in web development, problem-solving, and creative thinking.
                    </motion.p>
                </motion.div>



                {/* Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-black rounded-xl overflow-hidden border border-gray-700 hover:border-[#E80F88] transition-all duration-300 h-full flex flex-col shadow-lg"
                        >
                            <div className="relative overflow-hidden h-64">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover object-center"
                                />

                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.description || project.details?.substring(0, 120) + "..."}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.stack?.split(", ").slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.stack?.split(", ").length > 3 && (
                                        <span className="text-xs text-gray-500 px-1 py-1">
                                            + {project.stack.split(", ").length - 3} more
                                        </span>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setSelectedProject(project)}
                                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 group mt-auto border-l-4 border-[#E80F88]"
                                >
                                    <span>View Details</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* No projects message */}
                {/* {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500">No projects found in this category.</p>
                    </motion.div>
                )} */}

                {/* Project Details Modal */}
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="bg-gray-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <div className="h-80 overflow-hidden">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        width={1000}
                                        height={1000}
                                        // className="object-cover object-center"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: "#E80F88" }}
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                                >
                                    <FaTimes />
                                </motion.button>
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    {selectedProject.name}
                                </h2>

                                <div className="mb-4">
                                    <h3 className="text-sm font-semibold text-[#E80F88] uppercase mb-2">About this project</h3>
                                    <p className="text-gray-300">{selectedProject.details}</p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-sm font-semibold text-[#E80F88] uppercase mb-2">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.stack?.split(", ").map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {selectedProject.challenges && (
                                    <div className="mb-4">
                                        <h3 className="text-sm font-semibold text-[#E80F88] uppercase mb-2">Challenges</h3>
                                        <p className="text-gray-300">{selectedProject.challenges}</p>
                                    </div>
                                )}

                                {selectedProject.futurePlans && (
                                    <div className="mb-6">
                                        <h3 className="text-sm font-semibold text-[#E80F88] uppercase mb-2">Future Plans</h3>
                                        <p className="text-gray-300">{selectedProject.futurePlans}</p>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {selectedProject.liveLink && (
                                        <Link
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 overflow-hidden font-medium rounded-lg group"
                                        >
                                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-600 via-[#E80F88] to-pink-500"></span>
                                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                            <FaExternalLinkAlt size={14} className="relative" />
                                            <span className="relative">Live Demo</span>
                                        </Link>
                                    )}

                                    {selectedProject.github && (
                                        <Link
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg transition-all duration-200 border border-gray-700"
                                        >
                                            <FaGithub size={16} />
                                            <span>GitHub Repo</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default ProjectComponent
