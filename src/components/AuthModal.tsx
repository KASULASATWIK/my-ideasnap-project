import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Building2, User as UserIcon } from 'lucide-react';

export const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [accountType, setAccountType] = useState<'user' | 'company'>('user');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#111] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex p-1 bg-black/40 rounded-lg mb-4 border border-white/5">
          <button 
            onClick={() => setAccountType('user')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm transition-all ${accountType === 'user' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}
          >
            <UserIcon size={14} /> User
          </button>
          <button 
            onClick={() => setAccountType('company')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm transition-all ${accountType === 'company' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}
          >
            <Building2 size={14} /> Company
          </button>
        </div>

        <div className="space-y-4 py-2">
          {!isLogin && (
            <div className="space-y-2">
              <Label>{accountType === 'user' ? 'Full Name' : 'Company Name'}</Label>
              <Input className="bg-black/20 border-white/10" placeholder={accountType === 'user' ? 'John Doe' : 'Acme Corp'} />
            </div>
          )}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input className="bg-black/20 border-white/10" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" className="bg-black/20 border-white/10" placeholder="••••••••" />
          </div>
          {accountType === 'company' && !isLogin && (
            <div className="space-y-2">
              <Label>Company Website</Label>
              <Input className="bg-black/20 border-white/10" placeholder="https://acme.com" />
            </div>
          )}
          <Button className="w-full bg-blue-600 hover:bg-blue-500 mt-4">
            {isLogin ? 'Sign In' : 'Get Started'}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-cyan-400 hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
