"use client"
import { PostsResponse } from '@/types/blogs'
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const BlogCards = ({ posts }: PostsResponse) => {
    console.log(posts)
      const categories = [ "React", "Typescript", "Next.js", "AI Integration", "Database", "Case Study"];

    return (
        <section id="blog" className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto max-w-6xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Latest <span className="text-[#E80F88]">Insights</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Sharing knowledge, experiences, and insights from my journey as a full-stack developer
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category,) => (
                        <button
                            key={category}
                            className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:border-pink-500/50 hover:text-pink-300 hover:bg-pink-500/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-pink-500/30 transition-all duration-500 group">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src={posts[0].image}
                                    alt={posts[0].title}
                                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs font-medium">
                                        Featured
                                    </span>
                                    <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                                        {posts[0].category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                                    {posts[0].title}
                                </h3>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {posts[0].description}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center space-x-4">
                                        <span className="flex items-center space-x-1">
                                            <FaCalendarAlt />
                                            <span>{new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </span>
                                        {/* <span className="flex items-center space-x-1">
                      <FaClock />
                      <span>{posts[0].readTime}</span>
                    </span> */}
                                    </div>

                                    {/* <button className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 group/btn">
                    <span>Read More</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-500 group overflow-hidden backdrop-blur-sm"
                        >
                            {/* Post Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gray-900/80 text-gray-300 rounded-full text-xs backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {post.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Post Meta */}
                                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-700/50">
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center space-x-1">
                                            <FaCalendarAlt />
                                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                        </span>
                                        {/* <span className="flex items-center space-x-1">
                      <FaClock />
                      <span>{post.readTime}</span>
                    </span> */}
                                    </div>

                                    {/* <button className="text-pink-400 hover:text-pink-300 transition-colors duration-300">
                    <FaArrowRight />
                  </button> */}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>




            </div>
        </section>
    )
}

export default BlogCards
