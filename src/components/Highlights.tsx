import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const highlights = [
  {
    id: 1,
    title: 'Skills',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
    content: 'Full-stack development expertise'
  },
  {
    id: 2,
    title: 'Projects',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop',
    content: 'Latest tech projects showcase'
  },
  {
    id: 3,
    title: 'Blogs',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    content: 'Technical writing and insights'
  },
  {
    id: 4,
    title: 'Certificates',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=400&h=400&fit=crop',
    content: 'Professional certifications'
  }
];

export default function Highlights() {
  const [activeStory, setActiveStory] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (activeStory !== null) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveStory(null);
            return 0;
          }
          return prev + 1;
        });
      }, 100); // 10 seconds total duration
    }
    return () => clearInterval(timer);
  }, [activeStory]);

  return (
    <div className="flex gap-4 mt-8 overflow-x-auto pb-4">
      {highlights.map((highlight) => (
        <button
          key={highlight.id}
          onClick={() => setActiveStory(highlight)}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
          <span className="text-xs">{highlight.title}</span>
        </button>
      ))}

      {/* Story Modal */}
      {activeStory && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-900 h-1 mb-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <img
              src={activeStory.image}
              alt={activeStory.title}
              className="w-full h-[70vh] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-xl font-semibold mb-2">{activeStory.title}</h3>
              <p>{activeStory.content}</p>
            </div>
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}