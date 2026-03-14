import React, { useState } from 'react';
import { ChevronRight, Zap, Target, Trophy, ArrowRight } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: "Welcome to ForgeFit",
      description: "Forge your ultimate physique with high-performance tracking and cinematic data insights.",
      icon: Zap,
      color: "var(--color-blue)",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
    },
    {
      title: "Master Your Progress",
      description: "Log your workouts, track your weight, and visualize your evolution using advanced analytics.",
      icon: Target,
      color: "var(--color-green)",
      image: "https://images.unsplash.com/photo-1541534741688-6078c64b5903?w=800&q=80"
    },
    {
      title: "Conquer Challenges",
      description: "Join curated plans, unlock daily achievements, and push your limits in specialized combat and sport tracks.",
      icon: Trophy,
      color: "var(--color-orange)",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    }
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem('forgefit_onboarded', 'true');
      onComplete();
    }
  };

  const currentSlide = slides[step];

  return (
    <div className="onboarding-overlay animate-fade-in">
      <div className="onboarding-card glass-card">
        <div className="onboarding-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), var(--bg-surface)), url(${currentSlide.image})`, backgroundSize: 'cover' }}>
          <div className="step-indicator">
            {slides.map((_, i) => (
              <div key={i} className={`dot ${i === step ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        <div className="onboarding-content">
          <div className="icon-badge" style={{ backgroundColor: `rgba(${currentSlide.color === 'var(--color-blue)' ? '59, 130, 246' : currentSlide.color === 'var(--color-green)' ? '74, 222, 128' : '251, 146, 60'}, 0.2)` }}>
            <currentSlide.icon size={32} style={{ color: currentSlide.color }} />
          </div>
          <h2>{currentSlide.title}</h2>
          <p>{currentSlide.description}</p>
          
          <button className="next-btn" onClick={handleNext} style={{ backgroundColor: currentSlide.color }}>
            {step === slides.length - 1 ? 'Start Your Journey' : 'Next Step'}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .onboarding-overlay {
          position: fixed; inset: 0; background: var(--bg-main);
          display: flex; align-items: center; justify-content: center; z-index: 2000;
          padding: 1rem;
        }
        .onboarding-card {
          width: 100%; max-width: 480px; padding: 0; overflow: hidden;
          display: flex; flex-direction: column;
        }
        .onboarding-hero { height: 320px; position: relative; display: flex; align-items: flex-end; padding: 2rem; }
        .step-indicator {
          display: flex; gap: 8px; position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
        }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.3); transition: var(--transition); }
        .dot.active { width: 24px; border-radius: 4px; background: white; }

        .onboarding-content { padding: 3rem 2rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.5rem; }
        .icon-badge { width: 64px; height: 64px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; }
        .onboarding-content h2 { font-size: 2rem; font-weight: 800; color: var(--text-primary); }
        .onboarding-content p { color: var(--text-secondary); line-height: 1.6; font-size: 1.1rem; }

        .next-btn {
          width: 100%; margin-top: 1rem; padding: 1.25rem; border-radius: var(--radius-lg);
          border: none; color: white; font-weight: 700; font-size: 1.1rem;
          display: flex; align-items: center; justify-content: center; gap: 0.75rem;
          cursor: pointer; transition: var(--transition); box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        .next-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
      `}</style>
    </div>
  );
};

export default Onboarding;
