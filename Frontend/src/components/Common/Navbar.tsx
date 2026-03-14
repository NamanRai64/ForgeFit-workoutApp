import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar glass">
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search exercises, routines..." className="search-input" />
      </div>

      <div className="nav-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <div className="user-info">
            <p className="user-name">Alex Thorne</p>
            <p className="user-level">Diamond Tier</p>
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 2rem;
          height: 64px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--border);
        }
        .search-container {
          position: relative;
          width: 300px;
        }
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .search-input {
          width: 100%;
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 0.5rem 1rem 0.5rem 2.5rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          outline: none;
          transition: var(--transition);
        }
        .search-input:focus {
          border-color: var(--color-blue);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .icon-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          position: relative;
          padding: 4px;
        }
        .notification-dot {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 8px;
          height: 8px;
          background: var(--color-red);
          border-radius: 50%;
          border: 2px solid var(--bg-surface);
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-surface-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-green);
          border: 1px solid var(--border);
        }
        .user-info .user-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .user-info .user-level {
          font-size: 0.75rem;
          color: var(--color-yellow);
        }
        @media (max-width: 768px) {
          .search-container {
            display: none;
          }
          .user-info {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
