
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../../assets/images/rafi.png";
import "animate.css";
import { motion } from "framer-motion";
import './Banner.css'
import { Button } from "../ui/button";
import Image from "next/image";
import TypeWriterEffect from 'react-typewriter-effect';

const Banner = () => {
    return (
        <div
            id="banner"
            className="container mx-auto px-4 py-8"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[50vh]">

                {/* Left Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
                >
                    <div className="space-y-1 md:space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E80F88] leading-tight"
                        >
                            Rafi Ahmed
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-300"
                        >
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Red Hat Display',
                                    color: '#3F3D56',
                                    fontWeight: 500,
                                    fontSize: '1.5em',
                                }}
                                startDelay={2000}
                                cursorColor="#3F3D56"
                                multiText={[
                                    'Hey there, This is a type writer animation package',
                                    'it consist of two types...',
                                    'Single text display and multi text display',
                                    'Fonts can be customized.',
                                    'The type speed can be customized as well',
                                ]}
                                multiTextDelay={1000}
                                typeSpeed={30}
                            />
                        </motion.div>
                    </div>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center lg:justify-start gap-6 text-2xl md:text-3xl"
                    >
                        {[
                            { href: "https://www.facebook.com/rafiahmed.rabby.3/", icon: FaFacebook, color: "hover:text-blue-500" },
                            { href: "https://github.com/rafirabby13", icon: FaGithub, color: "hover:text-gray-400" },
                            { href: "https://www.linkedin.com/in/rafi-ahmed-rabby-1669b52b3/", icon: FaLinkedin, color: "hover:text-blue-600" },
                            { href: "https://www.instagram.com/rafiahmedrabby/", icon: FaInstagram, color: "hover:text-pink-500" }
                        ].map(({ href, icon: Icon, color }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-gray-400 ${color} transition-all duration-300 transform hover:shadow-lg`}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Download Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex justify-center lg:justify-start pt-4"
                    >
                        <Button >Download Resume</Button>
                    </motion.div>
                </motion.div>

                {/* Right Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center lg:justify-end order-1 lg:order-2"
                >
                    <div className="relative group">

                        {/* Animated Background Elements */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#E80F88] via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

                        {/* Secondary Glow Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#E80F88]/50 to-purple-600/50 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                        {/* Main Image Container */}
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                rotateY: 5,
                                rotateX: 5,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className="relative z-10 transform-gpu"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Image Border/Frame */}
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E80F88] via-purple-600 to-blue-600 p-1 shadow-2xl">
                                <div className="relative overflow-hidden rounded-xl bg-black">

                                    {/* Professional Image */}
                                    <Image
                                        className="object-cover object-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] transition-transform duration-700 group-hover:scale-105"
                                        src={img}
                                        alt="Rafi Ahmed - Professional Frontend Developer"
                                        loading="lazy"
                                    />

                                    {/* Overlay Gradient for Professional Look */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Professional Badge/Watermark */}
                                    <div className="absolute bottom-4 right-4 bg-[#E80F88]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        TypeScript Expert
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E80F88] rounded-full opacity-80 animate-bounce delay-100"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-bounce delay-300"></div>
                        </motion.div>

                        {/* Professional Skills Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="absolute -left-8 top-1/2 transform -translate-y-1/2 space-y-2 hidden lg:block"
                        >

                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Banner;