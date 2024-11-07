import { useState } from 'react';
import { BookOpen, Heart, MessageCircle, Share2, X, Github } from 'lucide-react';
import type { Post } from '../types';

const posts: Post[] = [
  {
    title: 'Building Scalable Microservices',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    date: 'Mar 15, 2024',
    likes: 234,
    description: 'Exploring the architecture of modern microservices using Node.js and Docker.',
    techStack: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
    githubLink: 'https://github.com/shubham/microservices'
  },
  {
    title: 'The Future of Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    date: 'Mar 10, 2024',
    likes: 189,
    description: 'Discussing upcoming trends in web development and new technologies.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    githubLink: 'https://github.com/shubham/future-web'
  },
  {
    title: 'Advanced TypeScript Patterns',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    date: 'Mar 5, 2024',
    likes: 156,
    description: 'Deep dive into advanced TypeScript patterns and best practices.',
    techStack: ['TypeScript', 'React', 'Design Patterns'],
    githubLink: 'https://github.com/shubham/ts-patterns'
  },
];

export default function Gallery() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});

  const toggleLike = (index: number) => {
    setLikedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="gallery" className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-gray-600" />
          Latest Posts
        </h2>
        <div className="grid grid-cols-3 gap-1">
          {posts.map((post, index) => (
            <div
              key={index}
              onClick={() => setSelectedPost(post)}
              className="aspect-square cursor-pointer relative group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-4">
                <span className="flex items-center gap-1">
                  <Heart 
                    className="w-5 h-5" 
                    fill={likedPosts[index] ? "white" : "none"}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(index);
                    }}
                  />
                  {post.likes + (likedPosts[index] ? 1 : 0)}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-5 h-5" fill="white" /> 12
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">{selectedPost.title}</h3>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid md:grid-cols-2">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 mb-4">{selectedPost.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MessageCircle className="w-6 h-6" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                  <a
                    href={selectedPost.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}