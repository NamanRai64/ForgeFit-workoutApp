import React, { useState, useEffect } from 'react';
import { User, Mail, Shield, Crown, Moon, Sun, Bell, LogOut, ChevronRight } from 'lucide-react';

const SettingsView: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Initialize theme from document
  useEffect(() => {
    const isLight = document.documentElement.classList.contains('light-theme');
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const toggleTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('forgefit_theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('forgefit_theme', 'dark');
    }
  };

  return (
    <div className="settings-view animate-fade-in premium-layout">
      <header className="settings-header">
        <div>
          <h2 className="title">Settings</h2>
          <p className="subtitle">Manage your account and preferences</p>
        </div>
      </header>

      {/* Account Profile Section */}
      <section className="settings-section">
        <h3>Account Settings</h3>
        <div className="settings-card glass-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <User size={32} className="icon-blue" />
            </div>
            <div className="profile-info">
              <h4>Alex Athlete</h4>
              <p className="text-secondary">alex@forgefit.app</p>
              <div className="pro-badge-small">
                <Crown size={12} fill="currentColor" /> PRO+ Active
              </div>
            </div>
            <button className="edit-profile-btn glass-btn">Edit Profile</button>
          </div>
          
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-icon-wrapper"><Mail size={18} /></div>
              <div className="setting-details">
                <h5>Email Address</h5>
                <p>alex@forgefit.app</p>
              </div>
              <ChevronRight size={18} className="icon-muted" />
            </div>
            <div className="setting-item">
              <div className="setting-icon-wrapper"><Shield size={18} /></div>
              <div className="setting-details">
                <h5>Password & Security</h5>
                <p>Last changed 3 months ago</p>
              </div>
              <ChevronRight size={18} className="icon-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="settings-section">
        <h3>App Preferences</h3>
        <div className="settings-card glass-card">
          
          {/* Theme Setting */}
          <div className="setting-item">
            <div className="setting-icon-wrapper">
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </div>
            <div className="setting-details">
              <h5>Theme Appearance</h5>
              <p>Choose light or dark mode</p>
            </div>
            <div className="theme-toggle">
              <button 
                className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => toggleTheme('light')}
              >
                <Sun size={16} /> Light
              </button>
              <button 
                className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => toggleTheme('dark')}
              >
                <Moon size={16} /> Dark
              </button>
            </div>
          </div>

          {/* Notifications Setting */}
          <div className="setting-item">
            <div className="setting-icon-wrapper"><Bell size={18} /></div>
            <div className="setting-details">
              <h5>Push Notifications</h5>
              <p>Workout reminders and updates</p>
            </div>
            <button 
              className={`toggle-switch ${notificationsEnabled ? 'active' : ''}`}
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            >
              <div className="toggle-thumb" />
            </button>
          </div>

        </div>
      </section>

      <div className="settings-footer">
        <button className="logout-btn glass-card">
          <LogOut size={18} className="icon-red" />
          <span>Log Out</span>
        </button>
      </div>

      <style>{`
        .settings-view { display: flex; flex-direction: column; gap: 2rem; max-width: 800px; margin: 0 auto; width: 100%; padding-bottom: 2rem; }
        .settings-header { margin-bottom: 1rem; }
        
        .settings-section { display: flex; flex-direction: column; gap: 1rem; }
        .settings-section h3 { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-left: 0.5rem; }
        
        .settings-card { padding: 0; overflow: hidden; display: flex; flex-direction: column; }
        
        /* Profile Header */
        .profile-header { display: flex; align-items: center; gap: 1.25rem; padding: 1.5rem; border-bottom: 1px solid var(--border); }
        .profile-avatar { width: 64px; height: 64px; border-radius: 50%; background: rgba(59, 130, 246, 0.1); display: flex; align-items: center; justify-content: center; border: 2px solid var(--border); }
        .profile-info { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
        .profile-info h4 { font-size: 1.25rem; margin: 0; }
        .profile-info p { margin: 0; font-size: 0.9rem; }
        .pro-badge-small { display: inline-flex; align-items: center; gap: 0.25rem; background: linear-gradient(135deg, #FDE047, #F59E0B); color: #451A03; padding: 0.2rem 0.6rem; border-radius: 12px; font-weight: 800; font-size: 0.7rem; width: fit-content; margin-top: 0.25rem; border: 1px solid rgba(255,255,255,0.2); }
        .edit-profile-btn { font-size: 0.85rem; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; cursor: pointer; color: var(--text-primary); border: 1px solid var(--border); background: var(--bg-surface-elevated); transition: all 0.2s; }
        .edit-profile-btn:hover { background: var(--text-primary); color: var(--bg-main); }
        
        /* Settings List */
        .settings-list { display: flex; flex-direction: column; }
        .setting-item { display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem; transition: background 0.2s; cursor: pointer; border-bottom: 1px solid var(--border); }
        .setting-item:last-child { border-bottom: none; }
        .setting-item:hover { background: rgba(255, 255, 255, 0.02); }
        
        .setting-icon-wrapper { width: 36px; height: 36px; border-radius: 10px; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); }
        .setting-details { flex: 1; display: flex; flex-direction: column; gap: 0.15rem; }
        .setting-details h5 { font-size: 1rem; margin: 0; font-weight: 600; }
        .setting-details p { font-size: 0.85rem; margin: 0; color: var(--text-secondary); }
        
        /* Theme Toggles */
        .theme-toggle { display: flex; background: var(--bg-surface-elevated); padding: 0.25rem; border-radius: 20px; gap: 0.25rem; border: 1px solid var(--border); }
        .theme-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: transparent; border: none; padding: 0.5rem 1rem; border-radius: 16px; color: var(--text-secondary); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .theme-btn.active { background: var(--bg-surface); color: var(--text-primary); box-shadow: var(--shadow-sm); border: 1px solid var(--border); }
        
        /* Switch */
        .toggle-switch { width: 44px; height: 24px; border-radius: 12px; background: var(--bg-surface-elevated); border: 1px solid var(--border); position: relative; cursor: pointer; transition: background 0.3s; }
        .toggle-switch.active { background: var(--color-blue); border-color: var(--color-blue); }
        .toggle-thumb { width: 18px; height: 18px; border-radius: 50%; background: white; margin: 2px; transition: transform 0.3s; transform: translateX(0); }
        .toggle-switch.active .toggle-thumb { transform: translateX(20px); }

        /* Footer */
        .settings-footer { margin-top: 1rem; }
        .logout-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 1.25rem; border: 1px solid var(--border); background: var(--bg-surface); cursor: pointer; color: var(--color-red); font-weight: 700; font-size: 1rem; border-radius: var(--radius-lg); transition: background 0.2s; }
        .logout-btn:hover { background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); }

        @media (max-width: 768px) {
          .profile-header { flex-direction: column; text-align: center; }
          .pro-badge-small { margin: 0.5rem auto 0; }
        }
      `}</style>
    </div>
  );
};

export default SettingsView;
