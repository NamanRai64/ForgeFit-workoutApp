import React from 'react';
import { LayoutDashboard, Dumbbell, Trophy, Settings, BarChart3, Users } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Progress', icon: BarChart3 },
    { id: 'training', label: 'Training', icon: Dumbbell },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <h1 style={{ color: 'var(--color-blue)', fontSize: '1.5rem' }}>Forge<span style={{ color: 'var(--text-primary)' }}>Fit</span></h1>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`nav-btn ${currentView === item.id ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <style>{`
        .sidebar {
          padding: 2rem 1rem;
        }
        .logo-section {
          margin-bottom: 3rem;
          padding-left: 0.75rem;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: none;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition);
          width: 100%;
          text-align: left;
          font-weight: 500;
        }
        .nav-btn:hover {
          background: var(--bg-surface-elevated);
          color: var(--text-primary);
        }
        .nav-btn.active {
          background: var(--bg-surface-elevated);
          color: var(--color-blue);
          border-right: 3px solid var(--color-blue);
          border-radius: var(--radius-md) 0 0 var(--radius-md);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
