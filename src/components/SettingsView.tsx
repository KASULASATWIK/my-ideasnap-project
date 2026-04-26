import React from 'react';
import { User, LogOut, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_STARTUPS } from '../types/startup';

export const SettingsView = () => {
  const userStartups = MOCK_STARTUPS.slice(0, 2); // Mocking user's submitted startups

  return (
    <div className="max-w-4xl space-y-8">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <User className="text-cyan-400" /> Account Details
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-gray-500 text-sm">Display Name</label>
            <p className="text-white font-medium">Alex R.</p>
          </div>
          <div>
            <label className="text-gray-500 text-sm">Email Address</label>
            <p className="text-white font-medium">alex.r@ideasnap.io</p>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FileText className="text-indigo-400" /> My Submitted Ideas
        </h2>
        <div className="space-y-4">
          {userStartups.map((startup) => (
            <div key={startup.id} className="flex justify-between items-center p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <h4 className="font-medium">{startup.title}</h4>
                <p className="text-xs text-gray-500">{startup.category}</p>
              </div>
              <span className="text-cyan-400 text-sm font-bold">{startup.votes} votes</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-900/10 border border-red-900/20 p-8 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-400">
          <Shield /> Danger Zone
        </h2>
        <Button variant="destructive" className="gap-2">
          <LogOut size={16} /> Logout
        </Button>
      </div>
    </div>
  );
};
