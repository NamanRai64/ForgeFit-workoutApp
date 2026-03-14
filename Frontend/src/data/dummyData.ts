export const consistencyData = [
  { name: 'Week 1', volume: 4500 },
  { name: 'Week 2', volume: 5200 },
  { name: 'Week 3', volume: 4800 },
  { name: 'Week 4', volume: 6100 },
  { name: 'Week 5', volume: 5900 },
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
  },
  {
    id: 'ch-3',
    title: '30 Days Lose Weight',
    duration: '30 Days',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80',
    days: 30,
    locked: false,
  },
  {
    id: 'ch-4',
    title: '14 Day Kegel Power',
    duration: '14 Days',
    intensity: 'Easy',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&q=80',
    days: 14,
    locked: false,
  },
  {
    id: 'ch-5',
    title: '28 Day Lowerbody',
    duration: '28 Days',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&q=80',
    days: 28,
    locked: true,
  },
  {
    id: 'ch-6',
    title: '30 Day Get Ripped',
    duration: '30 Days',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa29e588?w=400&q=80',
    days: 30,
    locked: true,
  },
  {
    id: 'ch-7',
    title: '14 Day Belly Burn',
    duration: '14 Days',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c64b5903?w=400&q=80',
    days: 14,
    locked: false,
  },
  {
    id: 'ch-8',
    title: '28 Day Calisthenics',
    duration: '28 Days',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80',
    days: 28,
    locked: true,
  },
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

export const categorizedTraining = [
  // Beginner Row
  { id: 'b1', name: 'Abs', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '15 min', exercises: 8 },
  { id: 'b2', name: 'Arms', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '20 min', exercises: 10 },
  { id: 'b3', name: 'Legs', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '25 min', exercises: 12 },
  { id: 'b4', name: 'Mobility', difficulty: 'Beginner', image: '/assets/mobility_training.png', duration: '10 min', exercises: 6 },
  { id: 'b5', name: 'Back', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '20 min', exercises: 9 },
  // Intermediate Row
  { id: 'i1', name: 'Chest', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '35 min', exercises: 14 },
  { id: 'i2', name: 'Glutes', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '30 min', exercises: 12 },
  { id: 'i3', name: 'Full Body', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '45 min', exercises: 18 },
  { id: 'i4', name: 'Calisthenics', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '40 min', exercises: 15 },
  { id: 'i5', name: 'Shoulders', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '30 min', exercises: 11 },
  // Expert Row
  { id: 'e1', name: 'Cross Fit', difficulty: 'Expert', image: '/assets/crossfit_training.png', duration: '50 min', exercises: 22 },
  { id: 'e2', name: 'Master Abs', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '30 min', exercises: 15 },
  { id: 'e3', name: 'Heavy Legs', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '60 min', exercises: 20 },
  { id: 'e4', name: 'Atlas Back', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '55 min', exercises: 19 },
  { id: 'e5', name: 'Master Arms', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '45 min', exercises: 16 },
];

export const popularGoals = [
  { title: 'Intense Leg Workout', type: 'Strength' },
  { title: 'Lose Arm Fat', type: 'Steady State' },
  { title: 'Strong Arms', type: 'Hypertrophy' },
];

export const trendingTargets = [
  { title: '7 Min Classic', time: '7m', level: 'Beginner' },
  { title: 'Killer Core HIIT', time: '15m', level: 'Intermediate' },
];
