import React, { useState, useEffect } from 'react';
import Sidebar from './components/Common/Sidebar';
import Navbar from './components/Common/Navbar';
import ProgressView from './components/Dashboard/ProgressView';
import TrainingHub from './components/Training/TrainingHub';
import Onboarding from './components/Common/Onboarding';
import { BarChart3, Dumbbell, Trophy, Users, Settings } from 'lucide-react';

function App() {
  const [currentView, setView] = useState('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const onboarded = localStorage.getItem('forgefit_onboarded');
    if (!onboarded) {
      setShowOnboarding(true);
    }
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <ProgressView />;
      case 'training':
        return <TrainingHub />;
      default:
        return (
          <div className="placeholder-view glass-card">
            <h2>{currentView.charAt(0).toUpperCase() + currentView.slice(1)}</h2>
            <p>This module is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      {showOnboarding && <Onboarding onComplete={() => setShowOnboarding(false)} />}
      
      <Sidebar currentView={currentView} setView={setView} />
      
      <div className="main-wrapper">
        <Navbar />
        <main className="main-content">
          {renderView()}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav glass">
        <button onClick={() => setView('dashboard')} className={currentView === 'dashboard' ? 'active' : ''}>
          <BarChart3 size={20} />
          <span>Progress</span>
        </button>
        <button onClick={() => setView('training')} className={currentView === 'training' ? 'active' : ''}>
          <Dumbbell size={20} />
          <span>Training</span>
        </button>
        <button onClick={() => setView('challenges')} className={currentView === 'challenges' ? 'active' : ''}>
          <Trophy size={20} />
          <span>Challenges</span>
        </button>
        <button onClick={() => setView('community')} className={currentView === 'community' ? 'active' : ''}>
          <Users size={20} />
          <span>Social</span>
        </button>
      </nav>

      <style>{`
        .main-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow-y: auto;
        }
        .placeholder-view {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }
        .placeholder-view h2 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .mobile-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 70px;
          justify-content: space-around;
          align-items: center;
          padding: 0 1rem;
          z-index: 1000;
          border-top: 1px solid var(--border);
        }
        .mobile-nav button {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-weight: 500;
          padding: 8px;
          transition: var(--transition);
        }
        .mobile-nav button.active {
          color: var(--color-blue);
        }

        @media (max-width: 1024px) {
          .mobile-nav {
            display: flex;
          }
          .main-content {
            padding-bottom: 90px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
