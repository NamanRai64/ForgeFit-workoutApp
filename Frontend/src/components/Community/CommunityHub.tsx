import React, { useState } from 'react';
import { Trophy, Users, Activity, Flame, MessageSquare, Heart, ArrowUpRight, ArrowDownRight, Minus, ChevronRight, Target } from 'lucide-react';
import { leaderboardData, activityFeedData, teamChallengesData } from '../../data/dummyData';

const CommunityHub: React.FC = () => {
  const [leaderboardTab, setLeaderboardTab] = useState<'global' | 'friends'>('global');

  return (
    <div className="community-hub animate-fade-in premium-layout">
      {/* Header */}
      <header className="premium-header">
        <div className="header-title">
          <h2>COMMUNITY</h2>
          <Users className="icon-blue" size={26} />
        </div>
        <div className="pro-badge" style={{ background: 'var(--bg-surface-elevated)', color: 'var(--text-primary)' }}>
          <Trophy size={14} className="icon-yellow" />
          Global Rank: #4,291
        </div>
      </header>

      {/* 1. Team Challenges */}
      <section className="section">
        <h3>Team Challenges</h3>
        <p className="section-desc">Join global goals and earn exclusive badges.</p>
        <div className="team-challenges-carousel hide-scrollbar">
          {teamChallengesData.map((challenge) => {
            const progressPercent = Math.min(100, Math.round((challenge.progress / challenge.target) * 100));
            return (
              <div key={challenge.id} className="team-challenge-card glass-card">
                <div className="tc-header">
                  <div className="tc-icon-wrapper">
                    <Target size={20} className="icon-red" />
                  </div>
                  <span className="tc-days-left">{challenge.daysLeft} days left</span>
                </div>
                <h4 className="tc-title">{challenge.title}</h4>
                <div className="tc-stats">
                  <div className="tc-stat">
                    <span className="tc-label">Participants</span>
                    <span className="tc-value">{challenge.participants.toLocaleString()}</span>
                  </div>
                </div>
                <div className="tc-progress-container">
                  <div className="tc-progress-labels">
                    <span>{challenge.progress.toLocaleString()}</span>
                    <span>{challenge.target.toLocaleString()}</span>
                  </div>
                  <div className="tc-progress-bar-bg">
                    <div className="tc-progress-bar-fill" style={{ width: `${progressPercent}%` }} />
                  </div>
                </div>
                <button className="tc-join-btn glass-btn">Join Challenge</button>
              </div>
            );
          })}
        </div>
      </section>

      <div className="community-grid">
        {/* 2. Leaderboard */}
        <section className="section leaderboard-section">
          <div className="section-header">
            <h3>Leaderboard</h3>
            <div className="goal-tabs hide-scrollbar">
              <button 
                className={`goal-tab ${leaderboardTab === 'global' ? 'active' : ''}`}
                onClick={() => setLeaderboardTab('global')}
              >
                Global
              </button>
              <button 
                className={`goal-tab ${leaderboardTab === 'friends' ? 'active' : ''}`}
                onClick={() => setLeaderboardTab('friends')}
              >
                Friends
              </button>
            </div>
          </div>
          <div className="leaderboard-list glass-card">
            {leaderboardData.map((user) => (
              <div key={user.id} className={`lb-row ${user.isUser ? 'lb-current-user' : ''}`}>
                <div className="lb-rank">
                  {user.rank <= 3 ? (
                    <Trophy size={18} className={user.rank === 1 ? 'icon-yellow' : user.rank === 2 ? 'icon-gray' : 'icon-orange'} />
                  ) : (
                    <span>{user.rank}</span>
                  )}
                </div>
                <img src={user.avatar} alt={user.name} className="lb-avatar" />
                <div className="lb-info">
                  <span className="lb-name">{user.name}</span>
                  <span className="lb-score">{user.score.toLocaleString()} pts</span>
                </div>
                <div className="lb-trend">
                  {user.trend === 'up' && <ArrowUpRight size={16} className="icon-green" />}
                  {user.trend === 'down' && <ArrowDownRight size={16} className="icon-red" />}
                  {user.trend === 'same' && <Minus size={16} className="icon-muted" />}
                </div>
              </div>
            ))}
            <button className="view-all-btn">View Full Ranking <ChevronRight size={14} /></button>
          </div>
        </section>

        {/* 3. Activity Feed */}
        <section className="section feed-section">
          <h3>Friend Activity</h3>
          <div className="feed-list">
            {activityFeedData.map((activity) => (
              <div key={activity.id} className="feed-card glass-card">
                <div className="feed-header">
                  <img src={activity.avatar} alt={activity.user} className="feed-avatar" />
                  <div className="feed-meta">
                    <span className="feed-user">{activity.user}</span>
                    <span className="feed-time">{activity.timeAgo}</span>
                  </div>
                </div>
                <div className="feed-body">
                  <p>
                    <span className="feed-action">{activity.action}</span>
                    <br/>
                    <span className="feed-target">{activity.target}</span>
                  </p>
                  {activity.type === 'workout' && <Flame size={24} className="feed-icon icon-orange" />}
                  {activity.type === 'achievement' && <Trophy size={24} className="feed-icon icon-yellow" />}
                  {activity.type === 'challenge' && <Activity size={24} className="feed-icon icon-blue" />}
                </div>
                <div className="feed-actions">
                  <button className="feed-action-btn">
                    <Heart size={16} /> {activity.likes} High Fives
                  </button>
                  <button className="feed-action-btn">
                    <MessageSquare size={16} /> {activity.comments}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        /* General Layout */
        .premium-layout { display: flex; flex-direction: column; gap: 2.5rem; padding-bottom: 2rem; max-width: 800px; margin: 0 auto; width: 100%; }
        .section h3 { margin-bottom: 0.25rem; font-size: 1.25rem; font-weight: 700; }
        .section-desc { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; }
        
        .community-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }

        /* Icons */
        .icon-blue { color: var(--color-blue); }
        .icon-yellow { color: var(--color-yellow); }
        .icon-orange { color: var(--color-orange); }
        .icon-red { color: var(--color-red); }
        .icon-green { color: var(--color-green); }
        .icon-gray { color: #94A3B8; } /* Silver */
        .icon-muted { color: var(--text-muted); }

        /* 1. Team Challenges */
        .team-challenges-carousel { display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 0.5rem; }
        .team-challenge-card { min-width: 300px; width: 85%; scroll-snap-align: start; display: flex; flex-direction: column; gap: 1rem; }
        .tc-header { display: flex; justify-content: space-between; align-items: center; }
        .tc-icon-wrapper { width: 36px; height: 36px; border-radius: 10px; background: rgba(239, 68, 68, 0.1); display: flex; align-items: center; justify-content: center; }
        .tc-days-left { font-size: 0.75rem; font-weight: 700; color: var(--color-red); background: rgba(239, 68, 68, 0.1); padding: 4px 8px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.2); }
        .tc-title { font-size: 1.1rem; line-height: 1.2; }
        .tc-stats { display: flex; justify-content: space-between; }
        .tc-stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .tc-label { font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; }
        .tc-value { font-size: 0.95rem; font-weight: 700; }
        
        .tc-progress-container { display: flex; flex-direction: column; gap: 0.4rem; }
        .tc-progress-labels { display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-stat); letter-spacing: 1px; }
        .tc-progress-bar-bg { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
        .tc-progress-bar-fill { height: 100%; background: linear-gradient(90deg, var(--color-red), var(--color-orange)); border-radius: 3px; transition: width 1s ease-out; }
        
        .tc-join-btn { width: 100%; padding: 0.75rem; font-weight: 700; background: var(--bg-surface-elevated); color: var(--text-primary); border-radius: var(--radius-md); border: 1px solid var(--border); transition: all 0.2s; }
        .tc-join-btn:hover { background: var(--color-blue); border-color: var(--color-blue); }

        /* 2. Leaderboard */
        .leaderboard-list { display: flex; flex-direction: column; padding: 0.5rem; gap: 0.25rem; }
        .lb-row { display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem; border-radius: var(--radius-md); transition: background 0.2s; }
        .lb-row:hover { background: rgba(255,255,255,0.03); }
        .lb-current-user { background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); }
        .lb-current-user:hover { background: rgba(59, 130, 246, 0.15); }
        .lb-rank { width: 24px; display: flex; justify-content: center; font-weight: 700; color: var(--text-secondary); font-size: 0.9rem; }
        .lb-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(255,255,255,0.1); }
        .lb-info { flex: 1; display: flex; flex-direction: column; }
        .lb-name { font-weight: 600; font-size: 0.95rem; }
        .lb-score { font-size: 0.8rem; color: var(--text-secondary); font-variant-numeric: tabular-nums; }
        .lb-trend { width: 24px; display: flex; justify-content: center; align-items: center; }
        
        .view-all-btn { background: transparent; border: none; color: var(--text-secondary); font-size: 0.85rem; font-weight: 600; padding: 1rem; display: flex; justify-content: center; align-items: center; gap: 0.25rem; cursor: pointer; transition: color 0.2s; }
        .view-all-btn:hover { color: var(--text-primary); }

        /* 3. Activity Feed */
        .feed-list { display: flex; flex-direction: column; gap: 1rem; }
        .feed-card { display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; }
        .feed-header { display: flex; align-items: center; gap: 0.75rem; }
        .feed-avatar { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); }
        .feed-meta { display: flex; flex-direction: column; }
        .feed-user { font-weight: 700; font-size: 0.9rem; }
        .feed-time { font-size: 0.75rem; color: var(--text-muted); }
        
        .feed-body { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(0,0,0,0.1); border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.02); }
        .feed-body p { margin: 0; line-height: 1.4; }
        .feed-action { font-size: 0.85rem; color: var(--text-secondary); }
        .feed-target { font-size: 1.05rem; font-weight: 700; color: var(--text-primary); }
        .feed-icon { opacity: 0.8; }
        
        .feed-actions { display: flex; gap: 1rem; padding-top: 0.5rem; border-top: 1px solid var(--border); }
        .feed-action-btn { background: transparent; border: none; color: var(--text-secondary); display: flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: color 0.2s; }
        .feed-action-btn:hover { color: var(--text-primary); }
        .feed-action-btn:hover svg { fill: rgba(255,255,255,0.1); }

        @media (max-width: 768px) {
          .community-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default CommunityHub;
