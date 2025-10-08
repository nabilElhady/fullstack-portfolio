export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications: Lessons from the Trenches",
    excerpt: "After building dozens of React apps, I've learned what truly matters for scalability. Here are the architectural patterns that saved my projects.",
    content: `
# Building Scalable React Applications: Lessons from the Trenches

Over the past few years, I've had the opportunity to work on various React projects, from small startups to enterprise-level applications. Through trial and error, I've discovered patterns that consistently lead to maintainable, scalable codebases.

## The Problem with Traditional Approaches

Many developers start with a simple component structure that works perfectly for small apps. But as the application grows, they find themselves tangled in prop-drilling hell, scattered state management, and components that are impossible to test.

## Key Principles I Follow

### 1. Component Composition Over Configuration
Instead of creating monolithic components with dozens of props, I break them down into smaller, composable pieces. This makes testing easier and reusability actually achievable.

### 2. Co-locate Related Code
Keep your component logic, styles, and tests together. This dramatically reduces the mental overhead when working on features.

### 3. Smart State Management Decisions
Not everything needs Redux or Zustand. Sometimes React Context is perfect, and other times local state is all you need.

## The Architecture That Works

I've settled on a feature-based architecture where each feature has its own:
- Components
- Hooks
- Utils
- Types
- Tests

This approach scales beautifully and makes onboarding new developers much smoother.

## Conclusion

Remember, the best architecture is the one that your team can understand and maintain. Don't over-engineer, but don't under-invest in structure either.
    `,
    author: "Nabil Elhady",
    date: "2025-10-05",
    readTime: "5 min read",
    category: "React",
    tags: ["React", "Architecture", "Best Practices", "Scalability"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "building-scalable-react-applications"
  },
  {
    id: "2",
    title: "TypeScript: Beyond the Basics - Advanced Patterns That Matter",
    excerpt: "TypeScript is more than just adding types to JavaScript. Discover advanced patterns that will make your code safer and more maintainable.",
    content: `
# TypeScript: Beyond the Basics - Advanced Patterns That Matter

TypeScript has become the de facto standard for professional JavaScript development, and for good reason. But many developers only scratch the surface of what's possible.

## Why Most Developers Stop Too Early

I see many teams add TypeScript to their projects, add some basic types, and call it a day. They're missing out on the real power of TypeScript's type system.

## Advanced Patterns I Use Daily

### Discriminated Unions
These are game-changers for handling different states in your application. No more checking for undefined at every corner.

### Template Literal Types
Introduced in TypeScript 4.1, these allow you to create incredibly precise string types. Perfect for route definitions and API endpoints.

### Conditional Types
Want your types to be smart and adapt to different scenarios? Conditional types are your friend.

## Real-World Example

I recently refactored an API client using these patterns, and the number of runtime errors dropped to nearly zero. The IDE autocomplete became so good that documentation was barely necessary.

## The Learning Curve is Worth It

Yes, advanced TypeScript can be challenging. But the investment pays dividends in reduced bugs, better refactoring, and improved developer experience.

## Resources to Level Up

- The TypeScript handbook (read it fully, not just skim)
- Matt Pocock's TypeScript tips
- Build your own type challenges

Start small, but keep pushing your understanding forward.
    `,
    author: "Nabil Elhady",
    date: "2025-10-02",
    readTime: "7 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Advanced", "Type Safety", "Best Practices"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    slug: "typescript-beyond-basics"
  },
  {
    id: "3",
    title: "Next.js 14: Why Server Components Changed Everything",
    excerpt: "Server Components aren't just a new feature - they're a fundamental shift in how we think about React applications. Here's what you need to know.",
    content: `
# Next.js 14: Why Server Components Changed Everything

When Next.js 13 introduced Server Components, I was skeptical. Just another React feature to learn, right? But after using them in production for months, I'm convinced they're the future.

## The Mental Model Shift

The hardest part about Server Components isn't the API - it's changing how you think about your application. We've been trained to think "client-first" for so long.

## What Server Components Solve

### 1. The JavaScript Bundle Problem
Your components render on the server, so their code never reaches the client. Instant performance wins.

### 2. Data Fetching Simplicity
No more useEffect with loading states. Fetch data right in your component with async/await.

### 3. Security by Default
API keys and sensitive logic stay on the server where they belong.

## Real Project Impact

I recently converted a dashboard application to use Server Components. The results:
- 40% reduction in JavaScript bundle size
- Faster initial page loads
- Simpler codebase with less state management

## When NOT to Use Them

Server Components aren't silver bullets. Interactive features still need client components, and that's perfectly fine.

## The Future is Hybrid

The best applications will mix server and client components strategically. Understanding when to use each is the new essential skill.

## Getting Started

Start with one page. Convert static parts to server components. Feel the difference. Then expand from there.
    `,
    author: "Nabil Elhady",
    date: "2025-09-28",
    readTime: "6 min read",
    category: "Next.js",
    tags: ["Next.js", "Server Components", "React", "Performance"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    slug: "nextjs-server-components"
  },
  {
    id: "4",
    title: "The Art of Writing Clean Code: Practical Tips from Real Projects",
    excerpt: "Clean code isn't about following rules blindly. It's about writing code that your future self will thank you for.",
    content: `
# The Art of Writing Clean Code: Practical Tips from Real Projects

"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler

This quote has guided my career, and I want to share practical lessons I've learned.

## What is Clean Code, Really?

Clean code isn't about being fancy or clever. It's about being clear. When I review code (including my own from 6 months ago), I ask: "Can I understand this in 30 seconds?"

## My Top 5 Rules

### 1. Names Should Tell Stories
Variable names like 'data' or 'temp' are lazy. Use 'userProfile' or 'temporaryAuthToken' instead.

### 2. Functions Should Do One Thing
If you can't describe what a function does in one sentence without using "and", it does too much.

### 3. Comments Explain Why, Not What
Your code should explain what it does. Comments should explain why you did it that way.

### 4. Keep It Simple
The simplest solution that works is usually the best. Resist the urge to show off.

### 5. Consistent Style Matters
Pick a style guide (I use Airbnb's) and stick to it. Consistency reduces cognitive load.

## Real Example: Before and After

I once inherited a codebase where a single function was 300 lines long. After refactoring into smaller, well-named functions, bugs were easier to find, and new features took half the time to implement.

## The ROI of Clean Code

Yes, writing clean code takes more time upfront. But you save exponentially more time in debugging, onboarding, and maintenance.

## Start Today

Pick one file in your current project. Refactor it using these principles. Feel the difference.

Clean code is a habit, not a destination.
    `,
    author: "Nabil Elhady",
    date: "2025-09-25",
    readTime: "5 min read",
    category: "Best Practices",
    tags: ["Clean Code", "Best Practices", "Software Engineering", "Code Quality"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    slug: "art-of-clean-code"
  },
  {
    id: "5",
    title: "Full Stack Development in 2025: The Skills That Actually Matter",
    excerpt: "The full stack landscape keeps evolving. Here's what you should focus on to stay relevant and build amazing products.",
    content: `
# Full Stack Development in 2025: The Skills That Actually Matter

The term "full stack developer" has evolved dramatically. Gone are the days when knowing HTML, CSS, jQuery, and PHP made you full stack.

## The Modern Full Stack

Today's full stack developer needs to be a generalist who can specialize when needed. But which skills should you prioritize?

## Frontend Essentials

### React/Next.js Ecosystem
This is non-negotiable. Most modern apps are built with React or its frameworks. Understanding React deeply (not just copying from tutorials) sets you apart.

### TypeScript
Not optional anymore. TypeScript has won, and every serious project uses it.

### Modern CSS
Tailwind CSS has changed the game. Learn utility-first CSS, but understand the fundamentals too.

## Backend Fundamentals

### Node.js/Express or NestJS
JavaScript on the backend means you can move between frontend and backend seamlessly.

### Database Knowledge
Both SQL (PostgreSQL) and NoSQL (MongoDB). Know when to use each.

### API Design
RESTful APIs are still relevant, but GraphQL and tRPC are gaining ground. Learn all three.

## The Skills People Forget

### DevOps Basics
Docker, CI/CD, basic cloud deployment (Vercel, AWS, or Railway). You don't need to be an expert, but you should deploy your own projects.

### Security
NEVER store passwords in plain text. Understand JWT, OAuth, and basic security principles.

### Performance Optimization
Lighthouse scores matter. Learn to profile, debug, and optimize.

## My Learning Strategy

1. Build projects that force you to learn
2. Read documentation, not just tutorials
3. Contribute to open source
4. Stay curious but focused

## The Truth Nobody Tells You

You don't need to know everything. Master the fundamentals, then specialize based on your projects.

## What to Focus on Next

Pick one thing from this list you're weak at. Spend the next month mastering it. Then move to the next.

The best full stack developers are continuous learners who know their gaps and actively work to fill them.
    `,
    author: "Nabil Elhady",
    date: "2025-09-20",
    readTime: "8 min read",
    category: "Career",
    tags: ["Full Stack", "Career Advice", "Web Development", "Learning"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    slug: "full-stack-development-2025"
  },
  {
    id: "6",
    title: "Debugging Like a Pro: Strategies That Save Hours",
    excerpt: "Debugging is an art and a science. Learn the systematic approach that helps me solve bugs faster and prevent them from happening.",
    content: `
# Debugging Like a Pro: Strategies That Save Hours

I've spent countless hours debugging, and I've learned that having a system makes all the difference. Here's my battle-tested approach.

## The Wrong Way to Debug

Don't do what I used to do:
- Random console.logs everywhere
- Changing things and hoping it works
- Asking for help before investigating
- Giving up too quickly

## My Debugging Framework

### 1. Reproduce Consistently
If you can't reproduce it reliably, you can't fix it. Spend time nailing down the exact steps.

### 2. Isolate the Problem
Use binary search. Comment out half your code. Does it still break? You've eliminated half the possibilities.

### 3. Read the Error Messages
Seriously. Read them carefully. They're usually telling you exactly what's wrong.

### 4. Check Your Assumptions
The bug is often in the line you're 100% sure is correct.

## Tools I Use Daily

### React DevTools
Not just for viewing props. The profiler is amazing for performance issues.

### Browser DevTools
Master the Sources tab. Learn to use breakpoints and watch expressions.

### Network Tab
50% of bugs are related to API calls. Check requests and responses first.

## The Rubber Duck Method

Explain the problem out loud (to a rubber duck, if necessary). You'll often solve it while explaining.

## Prevention is Better Than Cure

### Write Tests
Yes, they take time. But they save more time than they cost.

### Use TypeScript
Catch bugs at compile time, not runtime.

### Code Reviews
Four eyes are better than two.

## Real Story

I once spent 4 hours debugging a React component. The issue? I was mutating state directly. TypeScript would have caught it. Tests would have caught it. Code review would have caught it.

Now I use all three.

## Your Debugging Checklist

1. Can you reproduce it?
2. What's the error message saying?
3. What changed since it last worked?
4. What are you assuming that might be wrong?
5. Have you tried the simplest solution?

## Conclusion

Great developers aren't those who don't create bugs - they're those who can fix them efficiently.

Build your debugging toolkit. Future you will thank present you.
    `,
    author: "Nabil Elhady",
    date: "2025-09-15",
    readTime: "6 min read",
    category: "Debugging",
    tags: ["Debugging", "Best Practices", "Development", "Problem Solving"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    slug: "debugging-like-a-pro"
  }
];

// Helper function to get a single post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

// Helper function to get posts by tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

// Helper function to get recent posts
export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get all unique categories
export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  blogPosts.forEach(post => categories.add(post.category));
  return Array.from(categories);
};

// Helper function to get all unique tags
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
};

