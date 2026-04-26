export interface Startup {
  id: string;
  title: string;
  description: string;
  author: string;
  votes: number;
  tags: string[];
}

export const MOCK_STARTUPS: Startup[] = [
  {
    id: '1',
    title: 'EcoFlow',
    description: 'AI-powered energy management for smart homes.',
    author: 'Jane Doe',
    votes: 1240,
    tags: ['AI', 'Energy', 'Sustainability']
  },
  {
    id: '2',
    title: 'NeuroLink Pro',
    description: 'Advanced neural interface for productivity.',
    author: 'John Smith',
    votes: 890,
    tags: ['Hardware', 'Health']
  },
  {
    id: '3',
    title: 'AquaPure',
    description: 'Nanotech-based water filtration for remote areas.',
    author: 'Alice Wong',
    votes: 1560,
    tags: ['Water', 'Tech', 'Global']
  },
  {
    id: '4',
    title: 'SkyCargo',
    description: 'Autonomous drone logistics for urban delivery.',
    author: 'Mark Chen',
    votes: 720,
    tags: ['Logistics', 'Drones', 'Urban']
  },
  {
    id: '5',
    title: 'BioPrint',
    description: '3D printing of organic tissues for medical research.',
    author: 'Dr. Elena Rossi',
    votes: 2100,
    tags: ['Biotech', 'Health', '3D Printing']
  },
  {
    id: '6',
    title: 'SolarSkin',
    description: 'Transparent solar panels for skyscraper windows.',
    author: 'Kevin Park',
    votes: 940,
    tags: ['Energy', 'Construction', 'Green']
  },
  {
    id: '7',
    title: 'MindMap AI',
    description: 'Visualizing complex data structures in real-time.',
    author: 'Sarah Jenkins',
    votes: 450,
    tags: ['AI', 'Data', 'Productivity']
  },
  {
    id: '8',
    title: 'OceanClean',
    description: 'Autonomous robots for microplastic removal.',
    author: 'David Miller',
    votes: 1890,
    tags: ['Environment', 'Robotics', 'Ocean']
  }
];

export const CELEBRITY_COMMENTS: Record<string, { name: string, comment: string, avatar: string }[]> = {
  '1': [{ name: 'Elon Musk', comment: 'Interesting approach to grid efficiency.', avatar: '🚀' }],
  '5': [{ name: 'Bill Gates', comment: 'This could revolutionize organ transplants.', avatar: '💡' }]
};
