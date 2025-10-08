import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import BlogCard from '../../components/BlogCard';
import { blogPosts, getAllCategories } from '../../data/blogPosts';
import { useState } from 'react';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...getAllCategories()];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-[rgb(36,36,36)] text-white min-h-screen">
      <Head>
        <title>Blog | Nabil Elhady - Full Stack Developer</title>
        <meta name="description" content="Explore articles about web development, React, Next.js, TypeScript, and more. Learn from real-world experiences and best practices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Web Development Blog, React, Next.js, TypeScript, Full Stack Development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Nabil Elhady" />
        <meta property="og:description" content="Explore articles about web development, React, Next.js, TypeScript, and more." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Blog | Nabil Elhady" />
        <meta property="twitter:description" content="Explore articles about web development, React, Next.js, TypeScript, and more." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f7ab0a] transition-colors duration-300 group mb-12"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, software engineering, and technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#f7ab0a] text-[#1a1a1a] scale-105'
                  : 'bg-[#292929] text-gray-300 hover:bg-[#3a3a3a] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Posts Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-gray-400 text-center mb-8"
        >
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </motion.p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">No articles found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-6 px-8 py-3 bg-[#f7ab0a] text-[#1a1a1a] font-bold rounded-full hover:bg-[#f7ab0a]/90 transition-all duration-300"
            >
              View All Articles
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

