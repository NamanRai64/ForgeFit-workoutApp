import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { consistencyData, muscleDistribution } from '../../data/dummyData';
import { Calendar, ChevronDown, Activity, Target } from 'lucide-react';

const ProgressView: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30 Days');

  return (
    <div className="progress-view animate-fade-in">
      <header className="view-header">
        <div>
          <h2 className="title">Progress Overview</h2>
          <p className="subtitle">Track your consistency and training balance</p>
        </div>
        <div className="range-selector glass">
          <Calendar size={16} />
          <span>{timeRange}</span>
          <ChevronDown size={16} />
        </div>
      </header>

      <div className="charts-grid">
        <div className="glass-card chart-container">
          <div className="chart-header">
            <Activity size={20} className="icon-blue" />
            <h3>Training Consistency</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={consistencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#94A3B8" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#94A3B8" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(val) => `${val/1000}k`}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ 
                    background: '#1E293B', 
                    border: '1px solid #334155',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="volume" 
                  fill="url(#colorVolume)" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                />
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card chart-container">
          <div className="chart-header">
            <Target size={20} className="icon-orange" />
            <h3>Muscle Distribution</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={muscleDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {muscleDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: '#1E293B', 
                    border: '1px solid #334155',
                    borderRadius: '8px'
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  formatter={(value) => <span style={{ color: '#94A3B8', fontSize: '12px' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <style>{`
        .progress-view {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .view-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .title {
          font-size: 1.875rem;
          color: var(--text-primary);
        }
        .subtitle {
          color: var(--text-secondary);
        }
        .range-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .range-selector:hover {
          background: var(--bg-surface-elevated);
          color: var(--text-primary);
        }
        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }
        .chart-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .chart-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .chart-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .icon-blue { color: var(--color-blue); }
        .icon-orange { color: var(--color-orange); }
        
        @media (max-width: 1024px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressView;
