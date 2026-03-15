import React, { useState } from 'react';
import { ChevronLeft, Calendar, Flame, Play } from 'lucide-react';
import { workoutPlanDetails } from '../../data/dummyData';

interface WorkoutPlanViewProps {
  planId: string;
  onBack: () => void;
}

const WorkoutPlanView: React.FC<WorkoutPlanViewProps> = ({ planId, onBack }) => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeDay, setActiveDay] = useState(1);
  
  // In a real app, you'd fetch this based on planId. We use 'abs-b' as a fallback if not found.
  const plan = workoutPlanDetails[planId] || workoutPlanDetails['abs-b'];
  
  const currentWeekData = plan.weeks.find((w: any) => w.weekNumber === activeWeek) || plan.weeks[0];
  const currentDayData = currentWeekData.days.find((d: any) => d.dayNumber === activeDay) || currentWeekData.days[0];

  return (
    <div className="workout-plan-view animate-fade-in">
      {/* Header Section */}
      <div className="plan-hero" style={{ backgroundImage: `url(${plan.image})` }}>
        <div className="plan-hero-overlay" />
        <button className="back-btn glass-btn" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <div className="plan-hero-content">
          <h2>{plan.title}</h2>
          <div className="plan-meta">
            <span className="glass-pill"><Calendar size={14} /> {plan.duration}</span>
            <span className="glass-pill"><Flame size={14} className="icon-orange" /> {plan.difficulty}</span>
          </div>
        </div>
      </div>

      <div className="plan-content-wrapper premium-layout">
        
        {/* Week & Day Selector */}
        <section className="timeline-section">
          <div className="week-selector hide-scrollbar">
            {plan.weeks.map((week: any) => (
              <button 
                key={week.weekNumber}
                className={`week-tab ${activeWeek === week.weekNumber ? 'active' : ''}`}
                onClick={() => {
                  setActiveWeek(week.weekNumber);
                  setActiveDay(week.days[0].dayNumber);
                }}
              >
                Week {week.weekNumber}
              </button>
            ))}
          </div>
          
          <div className="day-selector hide-scrollbar">
            {currentWeekData.days.map((day: any) => (
              <button
                key={day.dayNumber}
                className={`day-tab ${activeDay === day.dayNumber ? 'active' : ''}`}
                onClick={() => setActiveDay(day.dayNumber)}
              >
                <div className="day-label">Day</div>
                <div className="day-number">{day.dayNumber}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Exercises List */}
        <section className="exercises-section">
          <div className="day-header">
            <h3>{currentDayData.title}</h3>
            {!currentDayData.isRestDay && (
              <button className="glass-btn primary start-workout-btn">
                <Play size={16} fill="currentColor" /> Let's Go
              </button>
            )}
          </div>

          {currentDayData.isRestDay ? (
            <div className="rest-day-card glass-card">
              <div className="rest-icon">🧘‍♂️</div>
              <h4>Recovery Day</h4>
              <p>Rest is just as important as the workout. Let your muscles recover.</p>
            </div>
          ) : (
            <div className="exercise-list">
              {currentDayData.exercises.map((exercise: any, index: number) => (
                <div key={index} className="exercise-card glass-card">
                  <div className="ex-gif-wrapper">
                    <img src={exercise.gif} alt={exercise.name} className="ex-gif" loading="lazy" />
                    <div className="ex-number">{index + 1}</div>
                  </div>
                  <div className="ex-details">
                    <h4 className="ex-title">{exercise.name}</h4>
                    <div className="ex-stats">
                      <span className="ex-stat">
                        <span className="ex-stat-label">Sets</span>
                        <span className="ex-stat-value">{exercise.sets}</span>
                      </span>
                      <span className="ex-stat">
                        <span className="ex-stat-label">Reps/Time</span>
                        <span className="ex-stat-value">{exercise.reps}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <style>{`
        .workout-plan-view { display: flex; flex-direction: column; min-height: 100vh; margin: -2rem; /* Negate main-content padding */ }
        
        .plan-hero { height: 35vh; min-height: 250px; position: relative; background-size: cover; background-position: center; display: flex; flex-direction: column; justify-content: space-between; padding: 2rem; border-bottom: 1px solid var(--border); }
        .plan-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(15,23,42,0.2), var(--bg-main)); z-index: 1; }
        
        .back-btn { position: relative; z-index: 2; width: 44px; height: 44px; padding: 0; border-radius: 50%; }
        
        .plan-hero-content { position: relative; z-index: 2; display: flex; flex-direction: column; gap: 0.75rem; }
        .plan-hero-content h2 { font-size: 2.5rem; font-family: var(--font-stat); letter-spacing: 1px; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.5); margin: 0; line-height: 1; }
        .plan-meta { display: flex; gap: 0.75rem; }
        .glass-pill { display: flex; align-items: center; gap: 0.4rem; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; color: white; }

        .plan-content-wrapper { padding: 2rem; max-width: 800px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 2rem; }

        /* Timeline Selector */
        .timeline-section { display: flex; flex-direction: column; gap: 1rem; }
        .week-selector { display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.5rem; }
        .week-tab { display: flex; align-items: center; justify-content: center; padding: 0.6rem 1.25rem; font-weight: 700; font-size: 0.9rem; color: var(--text-secondary); background: transparent; border: 1px solid var(--border); border-radius: 24px; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
        .week-tab.active { background: var(--bg-surface-elevated); color: var(--text-primary); border-color: var(--color-blue); }
        
        .day-selector { display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom: 0.5rem; }
        .day-tab { display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 64px; height: 72px; border-radius: 16px; background: var(--bg-surface); border: 1px solid var(--border); color: var(--text-secondary); cursor: pointer; transition: all 0.2s; }
        .day-tab.active { background: var(--color-blue); border-color: var(--color-blue); color: white; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transform: translateY(-2px); }
        .day-label { font-size: 0.7rem; text-transform: uppercase; font-weight: 600; opacity: 0.8; }
        .day-number { font-size: 1.25rem; font-weight: 700; }

        /* Exercises */
        .exercises-section { display: flex; flex-direction: column; gap: 1.5rem; }
        .day-header { display: flex; justify-content: space-between; align-items: center; }
        .day-header h3 { font-size: 1.5rem; margin: 0; }
        .start-workout-btn { padding: 0.6rem 1.25rem; border-radius: 24px; font-size: 0.9rem; }

        .rest-day-card { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 4rem 2rem; gap: 1rem; border: 1px dashed var(--border); }
        .rest-icon { font-size: 3rem; }
        
        .exercise-list { display: flex; flex-direction: column; gap: 1rem; }
        .exercise-card { display: flex; gap: 1rem; padding: 1rem; }
        
        .ex-gif-wrapper { position: relative; width: 100px; height: 100px; border-radius: var(--radius-md); overflow: hidden; flex-shrink: 0; background: var(--bg-main); border: 1px solid var(--border); }
        .ex-gif { width: 100%; height: 100%; object-fit: cover; }
        .ex-number { position: absolute; top: 0; left: 0; background: rgba(0,0,0,0.6); color: white; font-size: 0.7rem; font-weight: 700; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-bottom-right-radius: var(--radius-md); backdrop-filter: blur(4px); }
        
        .ex-details { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 0.75rem; }
        .ex-title { font-size: 1.1rem; margin: 0; }
        .ex-stats { display: flex; gap: 1.5rem; }
        .ex-stat { display: flex; flex-direction: column; gap: 0.15rem; }
        .ex-stat-label { font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; }
        .ex-stat-value { font-size: 1rem; font-weight: 700; color: var(--text-primary); }

        @media (max-width: 768px) {
          .workout-plan-view { margin: -1rem; }
          .plan-content-wrapper { padding: 1rem; }
          .exercise-card { flex-direction: column; }
          .ex-gif-wrapper { width: 100%; height: 200px; }
        }
      `}</style>
    </div>
  );
};

export default WorkoutPlanView;
