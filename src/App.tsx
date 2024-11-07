import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Home, 
  Briefcase, 
  Code2, 
  User, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  CheckCircle,
  BookOpen,
  Award,
  X
} from 'lucide-react';
import ProfilePicture from './assets/profilesquare.png'; 
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import Certificates from './components/Certificates';

function App() {
  const [activeTab, setActiveTab] = useState('posts');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return <Timeline />;
      case 'skills':
        return <Skills />;
      case 'posts':
        return <Gallery />;
      case 'certificates':
        return <Certificates />;
      default:
        return <Gallery />;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Instagram-style Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-serif">@spnarkhede</h1>
          <div className="flex gap-4">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="pt-6 pb-8 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                <img
                  src={ProfilePicture}
                  alt="Shubham Narkhede"
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-xl font-semibold">@spnarkhede</h2>
                <CheckCircle className="w-5 h-5 text-blue-500 fill-current" />
                <button className="px-6 py-1.5 bg-gray-100 rounded-lg text-sm font-medium">
                  Edit profile
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-6 text-sm mb-4">
                <div><span className="font-semibold">50+</span> Projects</div>
                <div><span className="font-semibold">12</span> Certificates</div>
                <div><span className="font-semibold">25</span> Articles</div>
              </div>
              <div className="text-sm">
                <p className="font-medium">Shubham Narkhede</p>
                <p className="text-gray-600">DevOps Engineer @Robert Bosch GmbH</p>
                <p className="text-gray-600">Building scalable applications • Open source contributor</p>
                <p className="text-blue-900"> <a href="https://github.com/spnarkhede" target='_blank'>github/@spnarkhede</a></p>
                <p className="text-blue-900"> <a href="https://guide-book.vercel.app/" target='_blank'>@guide-book</a></p>
              </div>
            </div>
          </div>

          {/* Story Highlights */}
          <Highlights />

          {/* Tabs */}
          <div className="flex justify-center gap-12 mt-8 border-t">
            {[
              { id: 'posts', label: 'Posts', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
              { id: 'skills', label: 'Skills', icon: <Code2 className="w-4 h-4" /> },
              { id: 'certificates', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-t-2 -mt-[2px] transition-colors ${
                  activeTab === tab.id
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500'
                }`}
              >
                {tab.icon}
                <span className="text-xs uppercase font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto">
        {renderContent()}
      </main>

      {/* Instagram-style Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2">
        <div className="max-w-2xl mx-auto flex justify-around">
          {[
            { icon: <Home className="w-6 h-6" />, label: 'Home', id: 'posts' },
            { icon: <Briefcase className="w-6 h-6" />, label: 'Experience', id: 'experience' },
            { icon: <Code2 className="w-6 h-6" />, label: 'Skills', id: 'skills' },
            { icon: <Award className="w-6 h-6" />, label: 'Certificates', id: 'certificates' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-2 rounded-full ${activeTab === item.id ? 'text-pink-500' : 'text-gray-600'}`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </nav>

      {/* Social Links */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {[
          { icon: <Github className="w-5 h-5" />, href: "https://github.com" },
          { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
          { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
          { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@shubham.dev" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-pink-500"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;