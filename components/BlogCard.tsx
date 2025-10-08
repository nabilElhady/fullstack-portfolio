import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import { BlogPost } from '../data/blogPosts';

type Props = {
  post: BlogPost;
  index: number;
};

function BlogCard({ post, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#292929] rounded-2xl overflow-hidden hover:bg-[#2c2c2c] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#f7ab0a]/20 border border-[#3a3a3a] hover:border-[#f7ab0a]/50"
    >
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-[#1a1a1a]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292929] via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-[#f7ab0a] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" aria-hidden="true" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#f7ab0a] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <TagIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded-md hover:bg-[#f7ab0a]/20 hover:text-[#f7ab0a] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#f7ab0a] font-semibold group-hover:gap-3 transition-all duration-300"
          aria-label={`Read more about ${post.title}`}
        >
          Read Full Article
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </div>

      {/* Decorative Corner */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#f7ab0a]/5 rounded-full blur-2xl group-hover:bg-[#f7ab0a]/10 transition-all duration-500" />
    </motion.article>
  );
}

export default BlogCard;

