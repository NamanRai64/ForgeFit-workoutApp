import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Lock, CheckCircle2, Dumbbell, Zap, Flame, Move, ArrowRight, Sword, Medal } from 'lucide-react';
import { challenges, bodyFocus, trendingTargets, mmaSection, sportAthlete } from '../../data/dummyData';

const TrainingHub: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);

  const weekDays = [
    { day: 'Mon', date: 11, status: 'completed' },
    { day: 'Tue', date: 12, status: 'completed' },
    { day: 'Wed', date: 13, status: 'active' },
    { day: 'Thu', date: 14, status: 'pending' },
    { day: 'Fri', date: 15, status: 'pending' },
    { day: 'Sat', date: 16, status: 'pending' },
    { day: 'Sun', date: 17, status: 'pending' },
  ];

  if (selectedChallenge) {
    return (
      <div className="challenge-detail animate-fade-in">
        <button onClick={() => setSelectedChallenge(null)} className="back-btn">
          <ChevronLeft size={20} />
          Back to Training
        </button>
        
        <div className="challenge-hero glass-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${selectedChallenge.image})`, backgroundSize: 'cover' }}>
          <h2 className="stat-value">{selectedChallenge.title}</h2>
          <div className="tags">
            <span className="tag green">{selectedChallenge.duration}</span>
            <span className="tag orange">{selectedChallenge.intensity} Intensity</span>
          </div>
        </div>

        <div className="days-list">
          {Array.from({ length: selectedChallenge.days }).map((_, i) => {
            const dayNum = i + 1;
            const isRestDay = dayNum % 7 === 0;
            const isLocked = dayNum > 1 && !isRestDay;

            return (
              <div key={dayNum} className={`day-card glass-card ${isLocked ? 'locked' : ''}`}>
                <div className="day-info">
                  <span className="day-label">Day {dayNum}</span>
                  <h4 className="day-title">{isRestDay ? 'Rest & Recovery' : 'Active Workout'}</h4>
                </div>
                {isRestDay ? (
                  <CheckCircle2 size={24} className="icon-green" />
                ) : isLocked ? (
                  <Lock size={20} className="icon-muted" />
                ) : (
                  <button className="start-session-btn">
                    <Play size={16} fill="currentColor" />
                    Start
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="training-hub animate-fade-in">
      <section className="weekly-calendar glass-card">
        <div className="calendar-header">
          <h3>Weekly Goals</h3>
          <div className="nav-arrows">
            <ChevronLeft size={18} />
            <ChevronRight size={18} />
          </div>
        </div>
        <div className="days-strip">
          {weekDays.map((d) => (
            <div key={d.date} className={`day-item ${d.status}`}>
              <span className="day-name">{d.day}</span>
              <div className="date-circle">{d.date}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Challenges</h3>
        </div>
        <div className="carousel hide-scrollbar">
          {challenges.map((c) => (
            <div key={c.id} className="challenge-card glass-card">
              <img src={c.image} alt={c.title} className="card-bg" />
              <div className="card-overlay">
                <div className="card-content">
                  <h4>{c.title}</h4>
                  <p>{c.duration} • {c.intensity}</p>
                  <button onClick={() => setSelectedChallenge(c)} className="start-btn">
                    {c.locked ? <Lock size={16} /> : <Play size={16} fill="currentColor" />}
                    {c.locked ? 'Locked' : 'Start'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>MMA Mastery</h3>
        </div>
        <div className="carousel hide-scrollbar">
          {mmaSection.map((mma, idx) => (
            <div key={idx} className="glass-card feature-card">
              <Sword size={24} className="icon-red" />
              <div className="card-info">
                <h4>{mma.title}</h4>
                <p>Instructor: {mma.instructor}</p>
                <span className="tag-outline">{mma.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Sport Athlete</h3>
        </div>
        <div className="carousel hide-scrollbar">
          {sportAthlete.map((sport, idx) => (
            <div key={idx} className="glass-card feature-card">
              <Medal size={24} className="icon-yellow" />
              <div className="card-info">
                <h4>{sport.title}</h4>
                <p>Focus: {sport.focus} • {sport.duration}</p>
                <button className="text-link">View Plan <ArrowRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="training-grid">
        <section className="section">
          <h3>Body Focus</h3>
          <div className="focus-grid">
            {bodyFocus.map((f) => (
              <div key={f.name} className={`focus-card ${f.color}`}>
                <span className="focus-icon">
                  <Dumbbell size={20} />
                </span>
                <span>{f.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>Just For You</h3>
          <div className="discover-list">
            {trendingTargets.map((t) => (
              <div key={t.title} className="discover-item glass-card">
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.time} • {t.level}</p>
                </div>
                <Zap size={20} className="icon-yellow" />
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .training-hub { display: flex; flex-direction: column; gap: 2.5rem; }
        .weekly-calendar { padding: 1.25rem; }
        .calendar-header { display: flex; justify-content: space-between; margin-bottom: 1.5rem; }
        .days-strip { display: flex; justify-content: space-between; gap: 0.5rem; }
        .day-item { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; flex: 1; }
        .day-name { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
        .date-circle { 
          width: 36px; height: 36px; border-radius: 50%; 
          display: flex; align-items: center; justify-content: center; 
          font-weight: 600; transition: var(--transition); background: var(--bg-surface-elevated);
        }
        .day-item.active .date-circle { background: var(--color-blue); color: white; box-shadow: 0 0 15px rgba(59, 130, 246, 0.4); }
        .day-item.completed .date-circle { color: var(--color-green); }

        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        
        .carousel { display: flex; gap: 1.25rem; overflow-x: auto; padding-bottom: 0.5rem; -webkit-overflow-scrolling: touch; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .challenge-card { min-width: 280px; height: 180px; padding: 0; position: relative; overflow: hidden; }
        .card-bg { width: 100%; height: 100%; object-fit: cover; }
        .card-overlay { position: absolute; inset: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); display: flex; align-items: flex-end; padding: 1.25rem; }
        
        .feature-card { min-width: 240px; display: flex; gap: 1rem; align-items: center; padding: 1.25rem; }
        .icon-red { color: var(--color-red); }
        .icon-yellow { color: var(--color-yellow); }
        .tag-outline { font-size: 0.7rem; border: 1px solid var(--border); padding: 0.1rem 0.5rem; border-radius: var(--radius-full); }
        .text-link { background: transparent; border: none; color: var(--color-blue); font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 4px; padding: 0; margin-top: 4px; }

        .start-btn { 
          background: var(--color-blue); color: white; border: none; padding: 0.4rem 1rem; 
          border-radius: var(--radius-sm); font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
        }

        .training-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .focus-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem; }
        .focus-card { 
          background: var(--bg-surface); border: 1px solid var(--border); padding: 1rem; 
          border-radius: var(--radius-md); display: flex; align-items: center; gap: 0.75rem; cursor: pointer; transition: var(--transition);
        }
        .focus-card:hover { border-color: var(--text-muted); }

        .discover-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
        .discover-item { display: flex; justify-content: space-between; align-items: center; padding: 1rem; }

        /* Challenge Detail */
        .challenge-detail { display: flex; flex-direction: column; gap: 2rem; }
        .back-btn { background: transparent; border: none; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
        .challenge-hero { height: 250px; display: flex; flex-direction: column; justify-content: flex-end; gap: 1rem; padding: 2rem; }
        .challenge-hero h2 { font-size: 2.5rem; }
        .tags { display: flex; gap: 0.75rem; }
        .tag { padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 600; }
        .tag.green { background: rgba(74, 222, 128, 0.2); color: var(--color-green); }
        .tag.orange { background: rgba(251, 146, 60, 0.2); color: var(--color-orange); }

        .days-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.25rem; }
        .day-card { display: flex; justify-content: space-between; align-items: center; }
        .day-card.locked { opacity: 0.5; }
        .day-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
        
        @media (max-width: 768px) { .training-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
};

export default TrainingHub;
