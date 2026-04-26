import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const StartupIdeaModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log('Submitting:', { title, description });
    // Logic for submission would go here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2">
          <Plus size={18} /> Startup Idea
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#111] border-white/10 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Submit Your Startup Idea
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Title</label>
            <Input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white/5 border-white/10"
              placeholder="Enter a catchy title..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Description</label>
            <Textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white/5 border-white/10 min-h-[150px]"
              placeholder="Describe your vision..."
            />
          </div>
          <Button onClick={handleSubmit} className="w-full bg-cyan-600 hover:bg-cyan-500">
            Submit Idea
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
