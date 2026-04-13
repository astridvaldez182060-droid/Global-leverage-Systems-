import React, { useState } from 'react';
import { Shield, Lock, ArrowRight, CheckCircle } from 'lucide-react';

interface SovereigntyTestProps {
  onSubscribe: () => void;
  onPublicAccess: () => void;
  subscriptionPrice: number;
}

const QUESTIONS = [
  {
    question: "When a crisis occurs in your industry, do you:",
    options: [
      { text: "React immediately to mitigate damage.", score: 0 },
      { text: "Observe the fallout and restructure your approach.", score: 1 },
      { text: "Capitalize on the newly created vacuum.", score: 2 }
    ]
  },
  {
    question: "Your time allocation is primarily:",
    options: [
      { text: "Managed by a strict calendar of meetings.", score: 0 },
      { text: "Managed by assistants filtering requests.", score: 1 },
      { text: "Unstructured, focused only on high-leverage decisions.", score: 2 }
    ]
  },
  {
    question: "Your primary information diet consists of:",
    options: [
      { text: "Broad news and industry publications.", score: 0 },
      { text: "Curated newsletters and expert summaries.", score: 1 },
      { text: "Direct raw data and private network intelligence.", score: 2 }
    ]
  },
  {
    question: "When facing a systemic bottleneck, you:",
    options: [
      { text: "Work harder to push through it.", score: 0 },
      { text: "Hire someone to manage it.", score: 1 },
      { text: "Eliminate the process entirely.", score: 2 }
    ]
  },
  {
    question: "The true value of your network is determined by:",
    options: [
      { text: "How many people you know.", score: 0 },
      { text: "Who you know.", score: 1 },
      { text: "Who relies on your infrastructure.", score: 2 }
    ]
  }
];

export function SovereigntyTest({ onSubscribe, onPublicAccess, subscriptionPrice }: SovereigntyTestProps) {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [inBriefingRoom, setInBriefingRoom] = useState(false);

  const handleStart = () => setStarted(true);

  const handleAnswer = (points: number) => {
    setScore(prev => prev + points);
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetTest = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
    setInBriefingRoom(false);
    onPublicAccess();
  };

  const maxScore = QUESTIONS.length * 2;
  const passed = score >= 6; // 6 out of 10 is the passing score

  if (!started) {
    return (
      <section className="py-32 px-6 max-w-4xl mx-auto text-center" id="assessment">
        <Shield className="w-16 h-16 text-[var(--copper)] mx-auto mb-8" />
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">The Sovereignty Assessment</h2>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-12 max-w-2xl mx-auto">
          Access to The Inner Circle is not purchased. It is verified. This assessment determines if your operational reality aligns with sovereign principles.
        </p>
        <button 
          onClick={handleStart}
          className="bg-[var(--copper)] text-white px-12 py-4 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors text-lg tracking-widest uppercase"
        >
          Begin Assessment
        </button>
      </section>
    );
  }

  if (completed) {
    return (
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--copper)] to-transparent opacity-50"></div>
          
          {passed ? (
            inBriefingRoom ? (
              <>
                <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">The Briefing Room</h2>
                <p className="text-[var(--copper)] font-mono tracking-widest uppercase mb-8">Status: Pending Subscription</p>
                
                <div className="text-left bg-[#111111] p-8 rounded border border-[var(--border)] mb-8">
                  <h3 className="font-heading text-xl mb-4 text-white">Executive Briefing</h3>
                  <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                    Welcome to the threshold. The strategies discussed within the Inner Circle are not for public consumption. They are architectural blueprints for market dominance. To proceed beyond this briefing room and access the live intelligence network, a monthly subscription is required.
                  </p>
                  
                  <h3 className="font-heading text-xl mb-4 text-white mt-8">The Inner Circle: Rules of Engagement</h3>
                  <ul className="space-y-4 text-[var(--text-muted)] font-mono text-sm">
                    <li className="flex gap-3"><span className="text-[var(--copper)]">01.</span> Value creation is mandatory. Consumers are purged.</li>
                    <li className="flex gap-3"><span className="text-[var(--copper)]">02.</span> Discretion is absolute. Leaks result in permanent exile.</li>
                    <li className="flex gap-3"><span className="text-[var(--copper)]">03.</span> No soliciting. This is a strategic nexus, not a marketplace.</li>
                  </ul>
                </div>

                <button 
                  onClick={onSubscribe}
                  className="w-full bg-[var(--copper)] text-white px-8 py-4 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors text-lg flex items-center justify-center gap-3"
                >
                  <Lock size={20} />
                  Subscribe to Inner Circle (${subscriptionPrice}/mo)
                </button>
              </>
            ) : (
              <>
                <CheckCircle className="w-16 h-16 text-[var(--copper)] mx-auto mb-8" />
                <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">Verification Complete</h2>
                <p className="text-[var(--copper)] font-mono tracking-widest uppercase mb-8">Score: {score}/{maxScore} — Sovereign Alignment Detected</p>
                
                <p className="text-[var(--text-muted)] text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
                  You have demonstrated the required strategic alignment. You are hereby invited to enter The Briefing Room to receive your orientation.
                </p>

                <button 
                  onClick={() => setInBriefingRoom(true)}
                  className="w-full bg-[var(--copper)] text-white px-8 py-4 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors text-lg flex items-center justify-center gap-3"
                >
                  Enter The Briefing Room <ArrowRight size={20} />
                </button>
              </>
            )
          ) : (
            <>
              <Lock className="w-16 h-16 text-zinc-600 mx-auto mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">Access Restricted</h2>
              <p className="text-zinc-500 font-mono tracking-widest uppercase mb-8">Score: {score}/{maxScore} — Alignment Insufficient</p>
              
              <p className="text-[var(--text-muted)] text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
                Your current operational reality relies too heavily on reaction and existing structures. The Inner Circle is reserved for those who design systems.
              </p>
              
              <button 
                onClick={resetTest}
                className="border border-[var(--copper)] text-[var(--copper)] px-8 py-3 rounded font-medium hover:bg-[var(--copper)] hover:text-white transition-colors"
              >
                Enter Public Network
              </button>
            </>
          )}
        </div>
      </section>
    );
  }

  const q = QUESTIONS[currentQuestion];

  return (
    <section className="py-32 px-6 max-w-3xl mx-auto">
      <div className="mb-12 flex justify-between items-center font-mono text-sm text-[var(--text-muted)] uppercase tracking-widest">
        <span>Assessment</span>
        <span>{currentQuestion + 1} / {QUESTIONS.length}</span>
      </div>
      
      <h3 className="font-heading text-3xl md:text-4xl font-light mb-12 leading-snug">
        {q.question}
      </h3>
      
      <div className="space-y-4">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt.score)}
            className="w-full text-left p-6 bg-[var(--card)] border border-[var(--border)] rounded hover:border-[var(--copper)] transition-colors group flex items-center justify-between"
          >
            <span className="text-lg text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">{opt.text}</span>
            <ArrowRight className="text-[var(--copper)] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
          </button>
        ))}
      </div>
    </section>
  );
}
