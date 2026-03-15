import React, { useState } from 'react';
import './TrainingHub.css';
import { 
  ChevronLeft, ChevronRight, Play, CheckCircle2, Zap, ArrowRight, 
  Flame, Crown, Edit2, Search, Activity, TrendingUp, Lock, Sword, Medal 
} from 'lucide-react';
import { 
  challenges, categorizedTraining, trendingTargets, mmaSection, 
  sportAthlete, trainingCategories, popularGoals, stretchWorkouts 
} from '../../data/dummyData';

interface TrainingHubProps {
  onOpenPlan?: (planId: string) => void;
}

const TrainingHub: React.FC<TrainingHubProps> = ({ onOpenPlan }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  const [showOthers, setShowOthers] = useState(false);
  const [activeCategory, setActiveCategory] = useState(trainingCategories[1]); // Default to 'Arm'
  const [searchQuery, setSearchQuery] = useState('');

  const currentWeekDays = [9, 10, 11, 12, 13, 14, 15];
  const activeDay = 14;

  if (selectedChallenge) {
    return (
      <div className="challenge-detail animate-fade-in premium-layout">
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
            const isLocked = dayNum > 1 && !isRestDay && selectedChallenge.locked;

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

  if (showOthers) {
    return (
      <div className="training-hub animate-fade-in premium-layout">
        <button onClick={() => setShowOthers(false)} className="back-btn">
          <ChevronLeft size={20} />
          Back to Hub
        </button>

        <section className="section">
          <div className="section-header">
            <h3>MMA Mastery</h3>
          </div>
          <div className="carousel hide-scrollbar">
            {mmaSection.map((mma, idx) => (
              <div key={idx} className="glass-card feature-card" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%), ${mma.color}`, backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${mma.image})`, backgroundSize: 'cover', backgroundBlendMode: 'overlay', border: 'none', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '1.25rem', alignItems: 'center', width: '100%' }}>
                  <Sword size={28} className="icon-red" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                  <div className="card-info" style={{ flex: 1 }}>
                    <h4 style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.6)', fontSize: '1.2rem', fontWeight: 800 }}>{mma.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500, margin: '0 0 0.5rem 0' }}>Instructor: {mma.instructor}</p>
                    <span className="tag-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(0,0,0,0.3)', fontWeight: 600 }}>{mma.level}</span>
                  </div>
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
              <div key={idx} className="glass-card feature-card" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%), ${sport.color}`, backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${sport.image})`, backgroundSize: 'cover', backgroundBlendMode: 'overlay', border: 'none', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '1.25rem', alignItems: 'center', width: '100%' }}>
                  <Medal size={28} className="icon-yellow" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                  <div className="card-info" style={{ flex: 1 }}>
                    <h4 style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.6)', fontSize: '1.2rem', fontWeight: 800 }}>{sport.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500, margin: '0 0 0.5rem 0' }}>Focus: {sport.focus} • {sport.duration}</p>
                    <button className="text-link" style={{ color: 'white', fontWeight: 700, padding: 0, marginTop: '0.25rem' }}>View Plan <ArrowRight size={14} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="training-hub animate-fade-in premium-layout">
      {/* 1. Premium Header */}
      <header className="premium-header">
        <div className="header-title">
          <h2>HOME WORKOUT</h2>
          <Flame className="fire-icon icon-orange" size={26} fill="currentColor" />
        </div>
        <div className="pro-badge">
          <Crown size={14} fill="currentColor" />
          PRO+
        </div>
      </header>

      {/* 2. Global Search */}
      <div className="search-bar glass-card">
        <Search size={18} className="icon-muted" />
        <input 
          type="text" 
          placeholder="Search workouts, plans..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 3. Weekly Goal tracking */}
      <section className="weekly-goal-card glass-card">
        <div className="wg-header">
          <h3>Weekly Goal</h3>
          <div className="wg-progress">
            <span className="wg-value">0</span><span className="wg-total">/4</span>
            <Edit2 size={14} className="icon-muted" style={{ marginLeft: '4px', cursor: 'pointer' }} />
          </div>
        </div>
        <div className="wg-days">
          {currentWeekDays.map((d) => (
            <div key={d} className={`wg-day ${d === activeDay ? 'active' : ''}`}>
              {d}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Challenge Carousel */}
      <section className="section">
        <h3>Challenge</h3>
        <div className="challenge-carousel hide-scrollbar">
          {challenges.map((c) => (
            <div key={c.id} className="premium-challenge-card" style={{ 
              background: 
                c.id === 'ch-1' ? 'linear-gradient(135deg, #2563EB, #1D4ED8)' : 
                c.id === 'ch-3' ? 'linear-gradient(135deg, #F97316, #EA580C)' : 
                c.id === 'ch-4' ? 'linear-gradient(135deg, #22C55E, #16A34A)' : 
                'linear-gradient(135deg, #0EA5E9, #0284C7)' 
            }}>
              <div className="pc-content">
                <span className="pc-duration">{c.duration.toUpperCase()}</span>
                <h4 className="pc-title">{c.title.toUpperCase()} CHALLENGE</h4>
                <p className="pc-desc">Start your body-toning journey to target all muscle groups and build your dream body in 4 weeks!</p>
                <button className="pc-start-btn" onClick={() => setSelectedChallenge(c)}>START</button>
              </div>
              {c.id === 'ch-1' && (
                <div className="pc-image-wrapper">
                  <img src="/assets/fitness_expert.png" alt="challenge model" className="pc-model-img" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Body Focus Tabs & List */}
      <section className="section">
        <h3>Body Focus</h3>
        <div className="category-tabs hide-scrollbar">
          {trainingCategories.map((cat) => (
            <button 
              key={cat} 
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="category-list">
          {categorizedTraining.filter(t => t.category === activeCategory).map((item) => (
            <div 
              key={item.id} 
              className="premium-list-card glass-card"
              onClick={() => onOpenPlan && onOpenPlan(item.id)}
              style={{ cursor: onOpenPlan ? 'pointer' : 'default' }}
            >
              <div className="list-card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="list-card-details">
                <h4>{item.name}</h4>
                <p className="list-card-meta">{item.duration} • {item.exercises} Exercises</p>
                <div className="intensity-bolts">
                  {[1, 2, 3].map((bolt) => (
                    <Zap 
                      key={bolt} 
                      size={14} 
                      fill="currentColor" 
                      className={bolt <= item.intensity ? 'bolt-active' : 'bolt-inactive'} 
                    />
                  ))}
                </div>
                {item.lastTime && <span className="last-time-badge">Last time:{item.lastTime}</span>}
              </div>
            </div>
          ))}
          {categorizedTraining.filter(t => t.category === activeCategory).length === 0 && (
            <div className="empty-state">No specific plans found for this category yet.</div>
          )}
        </div>
      </section>

      {/* 6. Custom Workout Pills */}
      <section className="section">
        <div className="pill-grid">
          <button className="filter-pill"><Activity size={16} className="icon-blue" /> Recent</button>
          <button className="filter-pill"><TrendingUp size={16} className="icon-green" /> Stretch</button>
          <button className="filter-pill"><Activity size={16} className="icon-blue" /> Build Muscle</button>
          <button className="filter-pill"><CheckCircle2 size={16} className="icon-blue" /> Keep Fit</button>
          <button className="filter-pill"><Play size={16} className="icon-blue" /> {`>`}15 mins</button>
          <button className="filter-pill"><Zap size={16} className="icon-yellow" /> Warm-Up</button>
        </div>
      </section>

      {/* 7. Just For You (Trending Targets) */}
      <section className="section">
        <div className="section-header">
          <h3>Just For You</h3>
          <button className="text-link">More {`>`}</button>
        </div>
        <div className="just-for-you-carousel hide-scrollbar">
          {trendingTargets.map((t, idx) => (
            <div key={idx} className="small-premium-card glass-card">
              <div className="small-card-image">
                <img src={t.image} alt={t.title} />
              </div>
              <div className="small-card-content">
                <h4>{t.title}</h4>
                <p>{t.time} • {t.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Stretch & Warm Up */}
      <section className="section">
        <div className="section-header">
          <h3>Stretch & Warm Up</h3>
          <button className="text-link">More {`>`}</button>
        </div>
        <div className="stretch-carousel hide-scrollbar">
          {stretchWorkouts.map((s, idx) => (
            <div key={idx} className="stretch-card glass-card">
              <img src={s.image} alt={s.title} className="stretch-img" />
              <div className="stretch-overlay">
                <h4>{s.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Popular Goals */}
      <section className="section">
        <h3>Popular Goals</h3>
        <div className="goal-tabs hide-scrollbar">
          <button className="goal-tab">Build Muscle</button>
          <button className="goal-tab active">Burn Fat</button>
          <button className="goal-tab">Keep Fit</button>
        </div>
        <div className="popular-goals-list">
          {popularGoals.map((g, idx) => (
            <div key={idx} className="popular-goal-card glass-card">
               <div className="pg-image">
                 <img src={g.image} alt={g.title} />
               </div>
               <div className="pg-content">
                 <h4>{g.title}</h4>
                 <p>{g.time} • {g.level}</p>
               </div>
               <button className="pg-action">
                 <ArrowRight size={16} />
               </button>
            </div>
          ))}
        </div>
        
        <div className="explore-more-btn">
          <button className="others-btn glass-btn" onClick={() => setShowOthers(true)}>
            <span>Explore More Sessions (MMA, Sports)</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default TrainingHub;
