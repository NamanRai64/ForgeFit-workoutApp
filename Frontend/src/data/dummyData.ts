export const consistencyData = [
  { name: 'Week 1', volume: 4500 },
  { name: 'Week 2', volume: 7200 },
  { name: 'Week 3', volume: 4800 },
  { name: 'Week 4', volume: 6100 },
  { name: 'Week 5', volume: 5500 },
  { name: 'Week 6', volume: 7200 },
];

export const muscleDistribution = [
  { name: 'Chest', value: 25, color: '#3B82F6' },
  { name: 'Back', value: 20, color: '#4ADE80' },
  { name: 'Legs', value: 30, color: '#FACC15' },
  { name: 'Shoulders', value: 15, color: '#FB923C' },
  { name: 'Arms', value: 10, color: '#EF4444' },
];

export const expertCards = [
  {
    type: 'Nutrition Expert',
    title: 'Expert Nutritionist',
    features: [
      'Weekly 1:1 online Nutrition consultations & plans',
      'Homely meal plans, No fad diets',
      'Adapts to your lifestyle & budget'
    ],
    image: '/assets/nutrition_expert.png',
    color: 'linear-gradient(135deg, #1E293B, #0F172A)'
  },
  {
    type: 'Fitness Expert',
    title: 'Expert Trainer',
    features: [
      '1:1 online consultations, assessment & Progressive workout plans for you'
    ],
    image: '/assets/fitness_expert.png',
    color: 'linear-gradient(135deg, #44104d, #0F172A)'
  }
];

export const performanceData = [
  { subject: 'Cardio', A: 85, fullMark: 100 },
  { subject: 'Strength', A: 95, fullMark: 100 },
  { subject: 'Endurance', A: 70, fullMark: 100 },
  { subject: 'Consistency', A: 90, fullMark: 100 },
  { subject: 'Full Body', A: 80, fullMark: 100 },
];

export const weightHistory = [
  { date: '2024-03-08', weight: 82.5 },
  { date: '2024-03-09', weight: 81.3 },
  { date: '2024-03-10', weight: 80.6 },
  { date: '2024-03-11', weight: 79.1 },
  { date: '2024-03-12', weight: 78.8 },
  { date: '2024-03-13', weight: 78.5 },
  { date: '2024-03-14', weight: 78.2 },
];

export const calorieHistory = [
  { date: 'Mar 08', calories: 2450, target: 2500 },
  { date: 'Mar 09', calories: 2600, target: 2500 },
  { date: 'Mar 10', calories: 2300, target: 2500 },
  { date: 'Mar 11', calories: 2550, target: 2500 },
  { date: 'Mar 12', calories: 2100, target: 2500 },
  { date: 'Mar 13', calories: 2480, target: 2500 },
  { date: 'Mar 14', calories: 2520, target: 2500 },
];

export const challenges = [
  {
    id: 'ch-1',
    title: '30 Day Six Pack',
    duration: '30 Days',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    days: 30,
    locked: false,
  },
  {
    id: 'ch-2',
    title: '28 Day Fullbody',
    duration: '28 Days',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
    days: 28,
    locked: false,
  }
];

export const mmaSection = [
  { title: 'BJJ Fundamentals', instructor: 'Rickson G.', level: 'Beginner' },
  { title: 'Muay Thai Striking', instructor: 'Samart P.', level: 'Intermediate' },
  { title: 'Wrestling for MMA', instructor: 'Jordan B.', level: 'Advanced' },
];

export const sportAthlete = [
  { title: 'Explosive Sprinting', focus: 'Speed', duration: '45m' },
  { title: 'Vertical Leap Boost', focus: 'Power', duration: '60m' },
  { title: 'Agility Ladder pro', focus: 'Coordination', duration: '30m' },
];

export const trainingCategories = ['Abs', 'Arm', 'Chest', 'Leg', 'Shoulder'];

export const categorizedTraining = [
  // Arm
  { id: 'arm-b', name: 'Arm Beginner', category: 'Arm', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '16 mins', exercises: 19, intensity: 1, lastTime: 'Feb 18, 2025' },
  { id: 'arm-i', name: 'Arm Intermediate', category: 'Arm', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '22 mins', exercises: 25, intensity: 2, lastTime: 'Feb 10, 2025' },
  { id: 'arm-a', name: 'Arm Advanced', category: 'Arm', difficulty: 'Advanced', image: '/assets/expert_training.png', duration: '30 mins', exercises: 28, intensity: 3, lastTime: 'Feb 05, 2025' },
  // Abs
  { id: 'abs-b', name: 'Abs Beginner', category: 'Abs', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '15 mins', exercises: 12, intensity: 1, lastTime: 'Feb 15, 2025' },
  // Chest
  { id: 'chest-b', name: 'Chest Beginner', category: 'Chest', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '20 mins', exercises: 15, intensity: 1, lastTime: 'Feb 12, 2025' },
];

export const trendingTargets = [
  { title: '7 Min Classic', time: '7m', level: 'Beginner', image: '/assets/beginner_training.png' },
  { title: 'Killer Core HIIT', time: '15m', level: 'Intermediate', image: '/assets/intermediate_training.png' },
  { title: '7 Min HIIT Fat Burning', time: '7m', level: 'Beginner', image: '/assets/beginner_training.png' },
];

export const stretchWorkouts = [
  { title: 'Back Stretching 7 Min', duration: '7 min', image: '/assets/mobility_training.png' },
  { title: 'Upper Body Stretching', duration: '12 min', image: '/assets/mobility_training.png' },
];

export const popularGoals = [
  { title: '7 Min Lose Arm Fat', time: '7 min', level: 'Beginner', image: '/assets/beginner_training.png', category: 'Burn Fat' },
  { title: 'Get Rid of Armpit Fat', time: '6 min', level: 'Beginner', image: '/assets/beginner_training.png', category: 'Burn Fat' },
  { title: 'Build Massive Chest', time: '25 min', level: 'Intermediate', image: '/assets/intermediate_training.png', category: 'Build Muscle' },
];
