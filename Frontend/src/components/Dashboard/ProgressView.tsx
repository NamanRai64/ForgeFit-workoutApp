import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, LineChart, Line, AreaChart, Area 
} from 'recharts';
import { consistencyData, muscleDistribution, weightHistory, calorieHistory } from '../../data/dummyData';
import { Calendar, ChevronDown, Activity, Target, TrendingDown, Flame, Plus, Clock, AlertCircle } from 'lucide-react';

const ProgressView: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30 Days');
  const [showLogModal, setShowLogModal] = useState(false);
  const [logType, setLogType] = useState<'weight' | 'calories'>('weight');

  const canEdit = (dateStr: string) => {
    const recordDate = new Date(dateStr);
    const now = new Date();
    const diffInHours = (now.getTime() - recordDate.getTime()) / (1000 * 60 * 60);
    return diffInHours <= 24;
  };

  return (
    <div className="progress-view animate-fade-in">
      <header className="view-header">
        <div>
          <h2 className="title">Progress Overview</h2>
          <p className="subtitle">Track your consistency, nutrition, and body trends</p>
        </div>
        <div className="header-actions">
          <button onClick={() => setShowLogModal(true)} className="glass-btn primary">
            <Plus size={18} />
            <span>Log Stats</span>
          </button>
          <div className="range-selector glass">
            <Calendar size={16} />
            <span>{timeRange}</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </header>

      <div className="tracking-summary grid-auto-fit">
        <div className="glass-card tracking-card">
          <div className="card-info">
            <TrendingDown className="icon-green" />
            <div>
              <p className="label">Current Weight</p>
              <h3 className="stat-value">81.2 kg</h3>
              <p className="trend-down">-1.3 kg this week</p>
            </div>
          </div>
          <div className="chart-mini">
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart data={weightHistory}>
                <Area type="monotone" dataKey="weight" stroke="#4ADE80" fill="#4ADE80" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card tracking-card">
          <div className="card-info">
            <Flame className="icon-orange" />
            <div>
              <p className="label">Avg Calories</p>
              <h3 className="stat-value">2,450 kcal</h3>
              <p className="trend-neutral">Within 2% of target</p>
            </div>
          </div>
          <div className="chart-mini">
            <ResponsiveContainer width="100%" height={60}>
              <BarChart data={calorieHistory}>
                <Bar dataKey="calories" fill="#FB923C" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="glass-card chart-container main-chart">
          <div className="chart-header">
            <TrendingDown size={20} className="icon-green" />
            <h3>Weight Trend</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weightHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="date" stroke="#94A3B8" fontSize={10} tickFormatter={(val) => val.split('-')[2]} />
                <YAxis domain={['dataMin - 1', 'dataMax + 1']} stroke="#94A3B8" fontSize={10} />
                <Tooltip 
                  contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="weight" stroke="#4ADE80" strokeWidth={3} dot={{ fill: '#4ADE80', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card chart-container main-chart">
          <div className="chart-header">
            <Flame size={20} className="icon-orange" />
            <h3>Daily Calories</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={calorieHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="date" stroke="#94A3B8" fontSize={10} />
                <YAxis stroke="#94A3B8" fontSize={10} />
                <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '8px' }} />
                <Bar dataKey="calories" fill="#FB923C" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card chart-container">
          <div className="chart-header">
            <Activity size={20} className="icon-blue" />
            <h3>Training Consistency</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={consistencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '8px' }} />
                <Bar dataKey="volume" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card chart-container">
          <div className="chart-header">
            <Target size={20} className="icon-purple" />
            <h3>Muscle Distribution</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={muscleDistribution} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {muscleDistribution.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {showLogModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-card animate-fade-in">
            <div className="modal-header">
              <h3>Log Daily Statistics</h3>
              <button onClick={() => setShowLogModal(false)} className="close-btn">&times;</button>
            </div>
            
            <div className="log-type-selector">
              <button className={logType === 'weight' ? 'active' : ''} onClick={() => setLogType('weight')}>Weight</button>
              <button className={logType === 'calories' ? 'active' : ''} onClick={() => setLogType('calories')}>Calories</button>
            </div>

            <div className="input-group">
              <label>Amount ({logType === 'weight' ? 'kg' : 'kcal'})</label>
              <input type="number" placeholder={logType === 'weight' ? '75.5' : '2500'} />
            </div>

            <div className="input-group">
              <label>Date</label>
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>

            <div className="restriction-notice">
              <Clock size={16} />
              <p>Locked: Entries older than 24 hours cannot be modified.</p>
            </div>

            <button className="submit-log-btn" onClick={() => setShowLogModal(false)}>
              Save Record
            </button>
          </div>
        </div>
      )}

      <style>{`
        .progress-view { display: flex; flex-direction: column; gap: 2rem; }
        .view-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .header-actions { display: flex; gap: 1rem; }
        .glass-btn { 
          display: flex; align-items: center; gap: 0.5rem; 
          padding: 0.6rem 1.25rem; border-radius: var(--radius-md); 
          border: 1px solid var(--border); background: var(--bg-surface);
          color: var(--text-primary); cursor: pointer; transition: var(--transition);
        }
        .glass-btn.primary { background: var(--color-blue); border: none; font-weight: 600; }
        .glass-btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
        
        .title { font-size: 1.875rem; color: var(--text-primary); }
        .subtitle { color: var(--text-secondary); }
        
        .tracking-summary { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .tracking-card { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem; }
        .card-info { display: flex; gap: 1rem; align-items: center; }
        .label { font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; }
        .trend-down { color: var(--color-green); font-size: 0.75rem; }
        .trend-neutral { color: var(--color-orange); font-size: 0.75rem; }
        .chart-mini { width: 100px; }

        .charts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .chart-container { display: flex; flex-direction: column; gap: 1rem; padding: 1.5rem; }
        .main-chart { grid-column: span 1; }
        
        .icon-green { color: var(--color-green); }
        .icon-orange { color: var(--color-orange); }
        .icon-blue { color: var(--color-blue); }
        .icon-purple { color: var(--color-purple); }

        /* Modal Styles */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.8);
          display: flex; align-items: center; justify-content: center; z-index: 1000;
          backdrop-filter: blur(4px);
        }
        .modal-content { width: 400px; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
        .modal-header { display: flex; justify-content: space-between; align-items: center; }
        .close-btn { background: transparent; border: none; color: var(--text-primary); font-size: 1.5rem; cursor: pointer; }
        
        .log-type-selector { display: flex; background: var(--bg-surface-elevated); border-radius: var(--radius-md); padding: 0.25rem; }
        .log-type-selector button { 
          flex: 1; padding: 0.5rem; border-radius: var(--radius-sm); border: none; 
          background: transparent; color: var(--text-secondary); cursor: pointer;
        }
        .log-type-selector button.active { background: var(--bg-surface); color: var(--text-primary); box-shadow: var(--shadow-sm); }
        
        .input-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .input-group label { font-size: 0.85rem; color: var(--text-secondary); }
        .input-group input { 
          background: var(--bg-surface-elevated); border: 1px solid var(--border); 
          padding: 0.75rem; border-radius: var(--radius-md); color: white;
        }
        
        .restriction-notice { 
          display: flex; gap: 0.75rem; padding: 0.75rem; 
          background: rgba(239, 68, 68, 0.1); border-radius: var(--radius-md);
          color: var(--color-red); font-size: 0.8rem; border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .submit-log-btn { 
          background: var(--color-blue); color: white; border: none; 
          padding: 1rem; border-radius: var(--radius-md); font-weight: 700; cursor: pointer;
        }

        @media (max-width: 1024px) {
          .charts-grid, .tracking-summary { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ProgressView;
