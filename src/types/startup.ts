export interface Startup {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  votes: number;
  author: string;
}

export interface CelebrityComment {
  name: string;
  avatar: string;
  comment: string;
}

export const CELEBRITY_COMMENTS: Record<string, CelebrityComment[]> = {
  '1': [
    { name: 'Elon Musk', avatar: '🚀', comment: 'First principles thinking here. If the latency is low enough, this could actually work.' },
    { name: 'Bill Gates', avatar: '💡', comment: 'Automation is key to the future of productivity. Very promising.' }
  ],
  '2': [
    { name: 'Elon Musk', avatar: '🚀', comment: 'Sustainable energy is the only path forward. Scaling this is the hard part.' }
  ],
  '3': [
    { name: 'Bill Gates', avatar: '💡', comment: 'This is exactly the kind of innovation we need to improve global health outcomes.' }
  ]
};

export const MOCK_STARTUPS: Startup[] = [
  { id: '1', title: 'NeuralFlow', description: 'AI-driven workflow automation for remote teams.', category: 'AI', tags: ['SaaS', 'Productivity'], votes: 1240, author: 'Alex R.' },
  { id: '2', title: 'EcoGrid', description: 'Decentralized energy trading platform for residential solar.', category: 'Energy', tags: ['GreenTech', 'Blockchain'], votes: 890, author: 'Sarah K.' },
  { id: '3', title: 'HealthSync', description: 'Real-time biometric monitoring for elderly care.', category: 'Health', tags: ['IoT', 'MedTech'], votes: 1560, author: 'Dr. Marcus' },
  { id: '4', title: 'FinPulse', description: 'Predictive analytics for micro-investments.', category: 'Fintech', tags: ['Finance', 'AI'], votes: 720, author: 'Elena V.' },
  { id: '5', title: 'EduVerse', description: 'Immersive VR classrooms for global education.', category: 'EdTech', tags: ['VR', 'Education'], votes: 2100, author: 'James L.' },
  { id: '6', title: 'AquaPure', description: 'Smart water filtration systems for urban homes.', category: 'Hardware', tags: ['Sustainability', 'IoT'], votes: 450, author: 'Chloe M.' },
];
