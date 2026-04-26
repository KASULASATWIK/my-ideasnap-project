import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ChatModalProps {
  author: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ChatModal = ({ author, isOpen, onClose }: ChatModalProps) => {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([
    { sender: author, text: `Hi! Thanks for your interest in my startup. How can I help?` }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'You', text: input }]);
    setInput('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#111] border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg text-cyan-400">Chat with {author}</DialogTitle>
        </DialogHeader>
        <div className="h-64 overflow-y-auto space-y-3 py-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-xl max-w-[80%] text-sm ${m.sender === 'You' ? 'bg-indigo-600' : 'bg-white/10'}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-white/5 border-white/10"
            placeholder="Type a message..."
          />
          <Button onClick={handleSend} className="bg-cyan-600 hover:bg-cyan-500"><Send size={16} /></Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
