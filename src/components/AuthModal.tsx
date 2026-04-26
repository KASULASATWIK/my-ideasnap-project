import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'user' | 'company'>('user');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-black text-white shadow-lg transition-colors duration-200">
          {isLogin ? 'Sign In' : 'Get Started'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] border-blue-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">
            {isLogin ? 'Welcome Back' : `Create ${role === 'company' ? 'Company' : 'User'} Account`}
          </DialogTitle>
        </DialogHeader>

        <Tabs value={role} onValueChange={(v) => setRole(v as 'user' | 'company')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="user" className="data-[state=active]:bg-black data-[state=active]:text-white">User</TabsTrigger>
            <TabsTrigger value="company" className="data-[state=active]:bg-black data-[state=active]:text-white">Company</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-4 py-2">
          {role === 'company' && !isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" placeholder="Acme Corp" className="focus-visible:ring-black" />
            </div>
          )}
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" className="focus-visible:ring-black" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="focus-visible:ring-black" />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-black text-white mt-2 transition-colors duration-200">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>

        <div className="text-center text-sm">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-black hover:underline font-medium transition-colors duration-200"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
