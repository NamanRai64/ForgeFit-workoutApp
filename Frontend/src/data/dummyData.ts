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
  },
  {
    id: 'ch-3',
    title: 'Boxing Course',
    duration: '30 Days',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80',
    days: 30,
    locked: false,
  },
  {
    id: 'ch-4',
    title: 'Marathon',
    duration: '12 Weeks',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80',
    days: 84,
    locked: false,
  }
];

export const mmaSection = [
  { title: 'BJJ Fundamentals', instructor: 'Rickson G.', level: 'Beginner', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80', color: 'linear-gradient(135deg, rgba(220, 38, 38, 0.8), rgba(153, 27, 27, 0.9))' },
  { title: 'Muay Thai Striking', instructor: 'Samart P.', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1599552375620-1e5630d7b219?w=400&q=80', color: 'linear-gradient(135deg, rgba(234, 88, 12, 0.8), rgba(194, 65, 12, 0.9))' },
  { title: 'Wrestling for MMA', instructor: 'Jordan B.', level: 'Advanced', image: 'https://images.unsplash.com/photo-1614088921102-181827b5e43a?w=400&q=80', color: 'linear-gradient(135deg, rgba(79, 70, 229, 0.8), rgba(55, 48, 163, 0.9))' },
];

export const sportAthlete = [
  { title: 'Explosive Sprinting', focus: 'Speed', duration: '45m', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80', color: 'linear-gradient(135deg, rgba(202, 138, 4, 0.8), rgba(161, 98, 7, 0.9))' },
  { title: 'Vertical Leap Boost', focus: 'Power', duration: '60m', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80', color: 'linear-gradient(135deg, rgba(14, 165, 233, 0.8), rgba(3, 105, 161, 0.9))' },
  { title: 'Agility Ladder pro', focus: 'Coordination', duration: '30m', image: 'https://images.unsplash.com/photo-1581009137142-f8d2cc6af6c0?w=400&q=80', color: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(4, 120, 87, 0.9))' },
];

export const trainingCategories = ['Abs', 'Arm', 'Chest', 'Leg', 'Shoulder'];

export const categorizedTraining = [
  // Abs
  { id: 'abs-b', name: 'Abs Beginner', category: 'Abs', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '15 mins', exercises: 12, intensity: 1, lastTime: 'Feb 15, 2025' },
  { id: 'abs-i', name: 'Abs Intermediate', category: 'Abs', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '20 mins', exercises: 16, intensity: 2, lastTime: 'Feb 10, 2025' },
  { id: 'abs-e', name: 'Abs Expert', category: 'Abs', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '30 mins', exercises: 22, intensity: 3, lastTime: 'Jan 28, 2025' },
  
  // Arm
  { id: 'arm-b', name: 'Arm Beginner', category: 'Arm', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '16 mins', exercises: 14, intensity: 1, lastTime: 'Feb 18, 2025' },
  { id: 'arm-i', name: 'Arm Intermediate', category: 'Arm', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '22 mins', exercises: 20, intensity: 2, lastTime: 'Feb 12, 2025' },
  { id: 'arm-e', name: 'Arm Expert', category: 'Arm', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '35 mins', exercises: 28, intensity: 3, lastTime: 'Feb 05, 2025' },

  // Chest
  { id: 'chest-b', name: 'Chest Beginner', category: 'Chest', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '18 mins', exercises: 15, intensity: 1, lastTime: 'Feb 20, 2025' },
  { id: 'chest-i', name: 'Chest Intermediate', category: 'Chest', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '25 mins', exercises: 22, intensity: 2, lastTime: 'Jan 15, 2025' },
  { id: 'chest-e', name: 'Chest Expert', category: 'Chest', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '40 mins', exercises: 30, intensity: 3, lastTime: 'Dec 10, 2024' },

  // Leg
  { id: 'leg-b', name: 'Leg Beginner', category: 'Leg', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '20 mins', exercises: 16, intensity: 1, lastTime: 'Feb 22, 2025' },
  { id: 'leg-i', name: 'Leg Intermediate', category: 'Leg', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '30 mins', exercises: 24, intensity: 2, lastTime: 'Feb 02, 2025' },
  { id: 'leg-e', name: 'Leg Expert', category: 'Leg', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '45 mins', exercises: 35, intensity: 3, lastTime: 'Nov 05, 2024' },

  // Shoulder
  { id: 'shoulder-b', name: 'Shoulder Beginner', category: 'Shoulder', difficulty: 'Beginner', image: '/assets/beginner_training.png', duration: '15 mins', exercises: 12, intensity: 1, lastTime: 'Feb 25, 2025' },
  { id: 'shoulder-i', name: 'Shoulder Intermediate', category: 'Shoulder', difficulty: 'Intermediate', image: '/assets/intermediate_training.png', duration: '22 mins', exercises: 18, intensity: 2, lastTime: 'Jan 20, 2025' },
  { id: 'shoulder-e', name: 'Shoulder Expert', category: 'Shoulder', difficulty: 'Expert', image: '/assets/expert_training.png', duration: '35 mins', exercises: 25, intensity: 3, lastTime: 'Oct 12, 2024' },
];

export const trendingTargets = [
  { title: '7 Min Classic', time: '7m', level: 'Beginner', image: '/assets/beginner_training.png' },
  { title: 'Killer Core HIIT', time: '15m', level: 'Intermediate', image: '/assets/intermediate_training.png' },
  { title: '7 Min HIIT Fat Burning', time: '7m', level: 'Beginner', image: '/assets/beginner_training.png' },
];

export const leaderboardData = [
  { id: '1', rank: 1, name: 'Sarah Connor', score: 3450, avatar: 'https://i.pravatar.cc/150?u=sarah', trend: 'up', isUser: false },
  { id: '2', rank: 2, name: 'Alex Athlete', score: 3120, avatar: 'https://i.pravatar.cc/150?u=alex', trend: 'same', isUser: true },
  { id: '3', rank: 3, name: 'Marcus D.', score: 2980, avatar: 'https://i.pravatar.cc/150?u=marcus', trend: 'up', isUser: false },
  { id: '4', rank: 4, name: 'Elena R.', score: 2850, avatar: 'https://i.pravatar.cc/150?u=elena', trend: 'down', isUser: false },
  { id: '5', rank: 5, name: 'David Kim', score: 2700, avatar: 'https://i.pravatar.cc/150?u=david', trend: 'same', isUser: false }
];

export const activityFeedData = [
  { 
    id: 'act1', 
    user: 'Sarah Connor', 
    avatar: 'https://i.pravatar.cc/150?u=sarah', 
    action: 'completed', 
    target: 'Killer Core HIIT', 
    timeAgo: '2h ago', 
    likes: 12, 
    comments: 3,
    type: 'workout'
  },
  { 
    id: 'act2', 
    user: 'Marcus D.', 
    avatar: 'https://i.pravatar.cc/150?u=marcus', 
    action: 'unlocked an achievement', 
    target: '7-Day Streak', 
    timeAgo: '5h ago', 
    likes: 24, 
    comments: 5,
    type: 'achievement'
  },
  { 
    id: 'act3', 
    user: 'Elena R.', 
    avatar: 'https://i.pravatar.cc/150?u=elena', 
    action: 'started a new challenge', 
    target: '30 Day Six Pack', 
    timeAgo: '1d ago', 
    likes: 8, 
    comments: 1,
    type: 'challenge'
  }
];

export const teamChallengesData = [
  { id: 'tc1', title: '1 Million Pushups in May', progress: 450000, target: 1000000, daysLeft: 14, participants: 12450 },
  { id: 'tc2', title: 'Global 5K Run Challenge', progress: 12000, target: 50000, daysLeft: 5, participants: 8300 }
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

export const workoutPlanDetails: Record<string, any> = {
  'abs-b': {
    id: 'abs-b',
    title: 'Abs Beginner',
    duration: '4 Weeks',
    difficulty: 'Beginner',
    image: '/assets/beginner_training.png',
    weeks: [
      {
        weekNumber: 1,
        days: [
          {
            dayNumber: 1,
            title: 'Core Foundation',
            exercises: [
              { name: 'Jumping Jacks', sets: 1, reps: '30s', gif: 'https://i.pinimg.com/originals/23/e4/20/23e420b92e078a0f5df7decc7fb892cf.gif' },
              { name: 'Abdominal Crunches', sets: 3, reps: '15', gif: 'https://i.pinimg.com/originals/8c/81/25/8c81255af6e341bfff8fd7ad9bed35ce.gif' },
              { name: 'Plank', sets: 3, reps: '30s', gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plank-1457045133.gif' },
              { name: 'Mountain Climber', sets: 3, reps: '20', gif: 'https://i.pinimg.com/originals/18/27/be/1827be178c019bce4b64ed16ff858a75.gif' }
            ]
          },
          {
            dayNumber: 2,
            title: 'Lower Abs Focus',
            exercises: [
              { name: 'High Stepping', sets: 1, reps: '30s', gif: 'https://i.pinimg.com/originals/5c/d9/3c/5cd93c99df3d85ee196ece7b4d13ba58.gif' },
              { name: 'Leg Raises', sets: 3, reps: '12', gif: 'https://i.pinimg.com/originals/44/2c/3e/442c3e1e915474fedd3b036bebd4800b.gif' },
              { name: 'Flutter Kicks', sets: 3, reps: '20', gif: 'https://i.pinimg.com/originals/c9/bd/28/c9bd284fbf35c24abf04ea2aaee1c181.gif' },
              { name: 'Cobra Stretch', sets: 1, reps: '30s', gif: 'https://i.pinimg.com/originals/10/a5/d8/10a5d8f6cc79e7bbbb42010882e3b2e5.gif' }
            ]
          },
          {
            dayNumber: 3,
            title: 'Rest Day',
            isRestDay: true
          },
          {
            dayNumber: 4,
            title: 'Oblique Burn',
            exercises: [
              { name: 'Russian Twist', sets: 3, reps: '20', gif: 'https://i.pinimg.com/originals/87/40/64/8740643775eaedbd9ee3da13eb61dbd7.gif' },
              { name: 'Heel Touch', sets: 3, reps: '20', gif: 'https://i.pinimg.com/originals/6c/fb/b0/6cfbb02446f2549aae28ad2a7ab2c103.gif' },
              { name: 'Side Plank', sets: 3, reps: '30s (each side)', gif: 'https://i.pinimg.com/originals/ce/dd/a1/cedda174ab798eb4903cc3adff3bdfd8.gif' }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        days: [
          {
            dayNumber: 8,
            title: 'Core Stability',
            exercises: [
              { name: 'Plank', sets: 3, reps: '45s', gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plank-1457045133.gif' },
              { name: 'Bird Dog', sets: 3, reps: '10 (each side)', gif: 'https://i.pinimg.com/originals/dc/8e/3c/dc8e3cf34015f8d95155f9f60f4e1d50.gif' }
            ]
          }
        ]
      }
    ]
  }
};
