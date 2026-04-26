import React from 'react';
import { MessageSquare, Clock, ThumbsUp, ThumbsDown } from 'lucide-react';

const MOCK_FEEDBACK_HISTORY = [
  { id: 1, startup: 'NeuralLink Pro', action: 'Liked', date: '2 hours ago' },
  { id: 2, startup: 'EcoGrid', action: 'Commented', text: 'This is a game changer!', date: '5 hours ago' },
  { id: 3, startup: 'QuantumPay', action: 'Disliked', date: '1 day ago' },
  { id: 4, startup: 'SolarFlow', action: 'Commented', text: 'How does the scaling work?', date: '2 days ago' },
];

export const FeedbackView = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-cyan-400">
            <MessageSquare size={20} /> Recent Comments
          </h3>
          <div className="space-y-4">
            {MOCK_FEEDBACK_HISTORY.filter(h => h.action === 'Commented').map(item => (
              <div key={item.id} className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-sm text-gray-300 italic">"{item.text}"</p>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                  <span>on {item.startup}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-indigo-400">
            <Clock size={20} /> Interaction History
          </h3>
          <div className="space-y-3">
            {MOCK_FEEDBACK_HISTORY.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="flex items-center gap-3">
                  {item.action === 'Liked' && <ThumbsUp size={16} className="text-cyan-400" />}
                  {item.action === 'Disliked' && <ThumbsDown size={16} className="text-red-400" />}
                  {item.action === 'Commented' && <MessageSquare size={16} className="text-indigo-400" />}
                  <span className="text-sm text-gray-200">{item.action} on {item.startup}</span>
                </div>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
