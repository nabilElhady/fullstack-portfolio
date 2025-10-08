import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, TagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { BlogPost, blogPosts, getPostBySlug } from '../../data/blogPosts';
import ReactMarkdown from 'react-markdown';

type Props = {
  post: BlogPost;
};

export default function BlogPostPage({ post }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white min-h-screen">
      <Head>
        <title>{post.title} | Nabil Elhady Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={post.tags.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:tag" content={post.tags.join(', ')} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.excerpt} />
        <meta property="twitter:image" content={post.image} />
      </Head>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-8">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f7ab0a] transition-colors duration-300 group"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-64 sm:h-80 md:h-96 mt-8 mb-12"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(36,36,36)] via-transparent to-transparent" />
      </motion.div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pb-20">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block bg-[#f7ab0a] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            {post.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          {post.title}
        </motion.h1>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-700"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <CalendarIcon className="w-5 h-5" aria-hidden="true" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <ClockIcon className="w-5 h-5" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span>By {post.author}</span>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          <TagIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-gray-300 bg-[#292929] px-3 py-1 rounded-full hover:bg-[#f7ab0a]/20 hover:text-[#f7ab0a] transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#f7ab0a] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-code:text-[#f7ab0a] prose-code:bg-[#292929] prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-gray-700
            prose-ul:text-gray-300 prose-ul:my-6
            prose-ol:text-gray-300 prose-ol:my-6
            prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#f7ab0a] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400 mb-4">Share this article:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1DA1F2]/80 transition-all duration-300 font-semibold"
              aria-label="Share on Twitter"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/80 transition-all duration-300 font-semibold"
              aria-label="Share on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/#blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#f7ab0a] text-[#1a1a1a] font-bold rounded-full hover:bg-[#f7ab0a]/90 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to All Posts
          </Link>
        </motion.div>
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

