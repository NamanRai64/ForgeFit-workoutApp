import React from 'react';
import { Trophy, Clock, Flame, ArrowRight } from 'lucide-react';
import { challenges } from '../../data/dummyData';

const ChallengesView: React.FC = () => {
  return (
    <div className="challenges-view animate-fade-in premium-layout">
      {/* Header */}
      <header className="premium-header auth-header">
        <div className="header-title">
          <h2>CHALLENGES</h2>
          <Trophy className="icon-yellow" size={26} fill="currentColor" />
        </div>
        <p className="section-desc">Push your limits with structured multi-week programs.</p>
      </header>

      {/* Recommended Challenge */}
      <section className="section">
        <h3>Featured Course</h3>
        <div className="featured-challenge-card glass-card">
          <img src={challenges[2].image} alt={challenges[2].title} className="featured-bg" />
          <div className="featured-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.9) 20%, transparent 100%)' }}>
            <span className="featured-badge">TRENDING</span>
            <h2 className="featured-title">{challenges[2].title}</h2>
            <p className="featured-desc">Master the fundamentals of boxing, improve agility, and build explosive power in this {challenges[2].duration} intensive course.</p>
            
            <div className="featured-stats">
              <div className="f-stat"><Clock size={16} /> {challenges[2].duration}</div>
              <div className="f-stat"><Flame size={16} className="icon-orange" /> {challenges[2].intensity} Intensity</div>
            </div>
            
            <button className="join-btn" style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}>
              Join Course <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* All Challenges Grid */}
      <section className="section">
        <h3>All Programs</h3>
        <div className="challenges-grid">
          {challenges.map((challenge) => {
            const bgGradient = 
              challenge.id === 'ch-1' ? 'linear-gradient(135deg, #2563EB, #1D4ED8)' : 
              challenge.id === 'ch-3' ? 'linear-gradient(135deg, #F97316, #EA580C)' : 
              challenge.id === 'ch-4' ? 'linear-gradient(135deg, #22C55E, #16A34A)' : 
              'linear-gradient(135deg, #0EA5E9, #0284C7)';

            return (
              <div key={challenge.id} className="challenge-grid-card glass-card">
                <div className="c-card-image">
                  <img src={challenge.image} alt={challenge.title} />
                  <div className="c-card-overlay" style={{ background: bgGradient, opacity: 0.85 }}></div>
                  <div className="c-card-content">
                    <span className="c-duration">{challenge.duration.toUpperCase()}</span>
                    <h4 className="c-title">{challenge.title.toUpperCase()}</h4>
                    <button className="c-start-btn">View Details</button>
                  </div>
                </div>
                <div className="c-card-footer">
                  <div className="c-progress">
                    <div className="c-progress-header">
                      <span className="c-progress-text">Progress</span>
                      <span className="c-progress-pct">{challenge.id === 'ch-1' ? '30%' : '0%'}</span>
                    </div>
                    <div className="c-progress-bar-bg">
                      <div className="c-progress-bar-fill" style={{ width: challenge.id === 'ch-1' ? '30%' : '0%', background: bgGradient }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <style>{`
        .premium-layout { display: flex; flex-direction: column; gap: 2.5rem; padding-bottom: 2rem; max-width: 800px; margin: 0 auto; width: 100%; }
        .section h3 { margin-bottom: 1rem; font-size: 1.25rem; font-weight: 700; }
        .section-desc { font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem; }
        .premium-header { margin-bottom: -1rem; margin-top: 1rem; }
        .header-title { display: flex; align-items: center; gap: 0.5rem; }
        .header-title h2 { font-size: 1.6rem; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase; margin: 0; }
        
        .icon-yellow { color: var(--color-yellow); }
        .icon-orange { color: var(--color-orange); }
        
        /* Featured Card */
        .featured-challenge-card { position: relative; border-radius: var(--radius-xl); overflow: hidden; height: 320px; box-shadow: var(--shadow-lg); border: 1px solid rgba(255,255,255,0.1); }
        .featured-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; z-index: 1; }
        .featured-overlay { position: absolute; inset: 0; z-index: 2; padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
        
        .featured-badge { background: rgba(255,255,255,0.15); backdrop-filter: blur(4px); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; letter-spacing: 1px; color: white; margin-bottom: 0.75rem; border: 1px solid rgba(255,255,255,0.2); }
        .featured-title { font-size: 2.5rem; font-weight: 900; color: white; margin: 0 0 0.5rem 0; line-height: 1.1; text-transform: uppercase; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
        .featured-desc { color: rgba(255,255,255,0.9); font-size: 0.95rem; max-width: 60%; line-height: 1.5; margin-bottom: 1.5rem; }
        
        .featured-stats { display: flex; gap: 1.5rem; margin-bottom: 2rem; }
        .f-stat { display: flex; align-items: center; gap: 0.4rem; color: white; font-weight: 600; font-size: 0.9rem; background: rgba(0,0,0,0.3); padding: 6px 14px; border-radius: 20px; backdrop-filter: blur(4px); }
        
        .join-btn { border: none; color: white; padding: 0.85rem 2rem; border-radius: 30px; font-weight: 800; font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4); }
        .join-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6); }

        /* Grid */
        .challenges-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        
        .challenge-grid-card { border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s; cursor: pointer; }
        .challenge-grid-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.2); }
        
        .c-card-image { position: relative; height: 180px; width: 100%; }
        .c-card-image img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; z-index: 1; filter: grayscale(50%); mix-blend-mode: overlay; }
        .c-card-overlay { position: absolute; inset: 0; z-index: 2; transition: opacity 0.3s; }
        .challenge-grid-card:hover .c-card-overlay { opacity: 0.9 !important; }
        
        .c-card-content { position: absolute; inset: 0; z-index: 3; padding: 1.5rem; display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start; }
        .c-duration { font-size: 0.75rem; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 0.25rem; letter-spacing: 0.5px; }
        .c-title { font-size: 1.4rem; font-weight: 800; color: white; margin: 0 0 1rem 0; line-height: 1.1; }
        .c-start-btn { background: white; color: var(--bg-base); border: none; padding: 0.5rem 1.25rem; border-radius: 20px; font-weight: 700; font-size: 0.8rem; cursor: pointer; }
        
        .c-card-footer { padding: 1rem 1.25rem; background: var(--bg-surface); }
        .c-progress { display: flex; flex-direction: column; gap: 0.4rem; }
        .c-progress-header { display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); }
        .c-progress-bar-bg { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
        .c-progress-bar-fill { height: 100%; border-radius: 3px; transition: width 1s ease-out; }

        @media (max-width: 768px) {
          .challenges-grid { grid-template-columns: 1fr; }
          .featured-title { font-size: 2rem; }
          .featured-desc { max-width: 90%; }
        }
      `}</style>
    </div>
  );
};

export default ChallengesView;
