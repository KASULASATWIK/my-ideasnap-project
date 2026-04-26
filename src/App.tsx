import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, TrendingUp, LayoutDashboard, MessageSquare, Settings, ThumbsUp, ThumbsDown, Send, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MOCK_STARTUPS, Startup, CELEBRITY_COMMENTS } from './types/startup';
import { SettingsView } from './components/SettingsView';
import { AuthModal } from './components/AuthModal';
import { FeedbackView } from './components/FeedbackView';
import { StartupIdeaModal } from './components/StartupIdeaModal';
import { ChatModal } from './components/ChatModal';

const Sidebar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => (
  <div className="w-64 h-screen bg-[#0a0a0a] border-r border-white/10 p-6 flex flex-col gap-8 fixed left-0 top-0">
    <div className="flex items-center gap-2 text-indigo-400 font-bold text-xl">
      <Zap className="fill-indigo-400" /> IDEASNAP
    </div>
    <nav className="flex flex-col gap-4">
      {[
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: TrendingUp, label: 'Trending' },
        { icon: MessageSquare, label: 'Feedback' },
        { icon: Settings, label: 'Settings' },
      ].map((item, i) => (
        <button 
          key={i} 
          onClick={() => setActivePage(item.label)}
          className={`flex items-center gap-3 transition-colors ${activePage === item.label ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
        >
          <item.icon size={20} /> {item.label}
        </button>
      ))}
    </nav>
  </div>
);

const StartupDetailModal = ({ startup }: { startup: Startup }) => {
  const [likes, setLikes] = useState(startup.votes);
  const [dislikes, setDislikes] = useState(Math.floor(startup.votes / 10));
  const [comments, setComments] = useState([
    { user: 'Alex', text: 'This is a game changer!' },
    { user: 'Sarah', text: 'How does the scaling work?' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const celebrityComments = CELEBRITY_COMMENTS[startup.id] || [];

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { user: 'You', text: newComment }]);
    setNewComment('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <motion.div 
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl h-full"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{startup.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{startup.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {startup.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px]">{tag}</span>
                ))}
              </div>
              <span className="text-cyan-400 text-xs font-bold flex items-center gap-1"><ThumbsUp size={12} /> {likes}</span>
            </div>
          </motion.div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#111] border-white/10 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">{startup.title}</DialogTitle>
        </DialogHeader>
        <div className="py-6 space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">Author: <span className="text-indigo-400 font-bold">{startup.author}</span></p>
            <Button onClick={() => setIsChatOpen(true)} variant="outline" className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/20 gap-2">
              <MessageCircle size={16} /> Message Author
            </Button>
          </div>
          
          {celebrityComments.length > 0 && (
            <div className="bg-gradient-to-r from-indigo-900/20 to-cyan-900/20 p-4 rounded-xl border border-indigo-500/30">
              <h4 className="text-indigo-300 font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wider">
                <Star size={14} className="fill-indigo-400" /> Expert Insights
              </h4>
              {celebrityComments.map((c, i) => (
                <div key={i} className="flex gap-3 mb-3 last:mb-0">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg">{c.avatar}</div>
                  <div>
                    <p className="text-xs font-bold text-white">{c.name}</p>
                    <p className="text-xs text-gray-300 italic">"{c.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>{startup.description}</p>
          </div>
          
          <div className="flex gap-6 items-center border-y border-white/10 py-4">
            <button onClick={() => setLikes(l => l + 1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ThumbsUp size={20} /> <span>{likes}</span>
            </button>
            <button onClick={() => setDislikes(d => d + 1)} className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
              <ThumbsDown size={20} /> <span>{dislikes}</span>
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Discussion</h4>
            <div className="space-y-3">
              {comments.map((c, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg text-sm">
                  <span className="text-indigo-400 font-bold">{c.user}: </span>
                  <span className="text-gray-300">{c.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="bg-white/5 border-white/10" 
                placeholder="Add a comment..." 
              />
              <Button onClick={handleAddComment} className="bg-blue-600 hover:bg-blue-500"><Send size={16} /></Button>
            </div>
          </div>
        </div>
        <ChatModal author={startup.author} isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  const filteredStartups = activePage === 'Trending' 
    ? [...MOCK_STARTUPS].sort((a, b) => b.votes - a.votes)
    : MOCK_STARTUPS;

  const renderContent = () => {
    switch(activePage) {
      case 'Settings': return <SettingsView />;
      case 'Feedback': return <FeedbackView />;
      default: return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <StartupDetailModal key={startup.id} startup={startup} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
            <Input 
              className="pl-10 bg-transparent border-indigo-500/50 focus:border-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]" 
              placeholder="Search for innovations..." 
            />
          </div>
          <div className="flex gap-3">
            <AuthModal />
            <StartupIdeaModal />
          </div>
        </header>

        {activePage === 'Dashboard' && (
          <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-white/10 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 uppercase tracking-tight">THE FUTURE IS HERE.</h1>
              <p className="text-gray-400">Validate your next big idea with the world's brightest minds.</p>
            </div>
            <Zap size={64} className="text-cyan-400/20" />
          </div>
        )}

        <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
          {activePage === 'Settings' ? 'Account Settings' : activePage === 'Trending' ? 'Trending Innovations' : activePage === 'Feedback' ? 'Your Feedback & History' : 'Latest Ideas'}
        </h2>

        {renderContent()}
      </main>
    </div>
  );
}
