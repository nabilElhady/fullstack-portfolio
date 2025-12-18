import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { blogPosts } from '../data/blogPosts';

type Props = {};

function Blog({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen h-auto py-24 md:py-32 flex relative flex-col text-center md:text-left max-w-7xl px-4 sm:px-6 md:px-10 justify-start mx-auto items-center"
    >
      {/* Section Title */}
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl mb-6">
        Blog
      </h3>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl text-center"
      >
        Sharing my journey, insights, and lessons learned in web development.
        <br className="hidden sm:block" />
        Join me as I explore the ever-evolving world of technology.
      </motion.p>

      {/* Blog Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* View All Posts Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#f7ab0a] text-[#1a1a1a] font-bold rounded-full hover:bg-[#f7ab0a]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7ab0a]/50"
          aria-label="View all blog posts"
        >
          View All Posts
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#f7ab0a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#f7ab0a]/5 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}

export default Blog;

