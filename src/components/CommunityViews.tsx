import React, { useState } from 'react';
import { Lock, Shield, ChevronRight, MessageSquare, Activity, Users, FileText, Heart, Send, Plus, Globe, Sparkles, X, Reply, BarChart2, UserCircle, Edit3, CornerDownRight, Upload, AlertCircle, Edit2, Trash2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { FeedbackModal } from './FeedbackModal';

const BELLA_PROMPT = `You are Sloane Prescott (internally known as Bella Reeves) — the editorial voice and strategic architect for Global Leverage Systems (GLS).
You write for the 1% — affluent leaders, founders, CEOs, executives, and decision-makers who already have traction but seek uncopyable leverage and sovereignty.
Your tone is sharp, calm, authoritative, and concise.
End exactly with: "Clocks tick. Sovereigns decide the rhythm."`;

interface CommunityProps {
  onNavigateHome: () => void;
  onTakeAssessment?: () => void;
  lang: string;
}

export function PublicCommunity({ onNavigateHome, onTakeAssessment, lang }: CommunityProps) {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 max-w-5xl mx-auto min-h-screen">
      <button onClick={onNavigateHome} className="text-[var(--copper)] hover:text-[var(--copper-hover)] mb-12 font-medium flex items-center gap-2 transition-colors">
        ← Back to Platform
      </button>

      {lang !== 'en' && (
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--copper)] mb-6 bg-[var(--copper)]/10 px-3 py-2 rounded inline-flex">
          <Globe size={14} /> Auto-translated to {lang.toUpperCase()}
        </div>
      )}

      <div className="mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-light mb-4">Previous Briefing</h1>
        <p className="text-xl text-[var(--text-muted)]">General discussions and redacted dispatches.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 md:p-6 flex gap-4 items-start">
            <MessageSquare className="text-[var(--copper)] mt-1" size={24} />
            <div>
              <h3 className="font-heading text-xl font-medium mb-2">The Illusion of Hard Work (Discussion)</h3>
              <p className="text-[var(--text-muted)] mb-4">Discussing the latest dispatch. How are you implementing the leverage principles?</p>
              <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
                <span>142 Replies</span>
                <span>Last active 2h ago</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 md:p-6 flex gap-4 items-start relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center opacity-90 transition-opacity">
              <Lock className="text-[var(--copper)] mb-2" size={24} />
              <span className="font-mono text-sm tracking-widest uppercase text-[var(--copper)]">Inner Circle Only</span>
            </div>
            <MessageSquare className="text-zinc-600 mt-1" size={24} />
            <div className="opacity-50">
              <h3 className="font-heading text-xl font-medium mb-2">Deal Flow: Logistics Rollup Opportunity</h3>
              <p className="text-[var(--text-muted)] mb-4">Private analysis of a fragmented market ready for consolidation...</p>
              <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
                <span>28 Replies</span>
                <span>Last active 5m ago</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 md:p-6 flex gap-4 items-start relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center opacity-90 transition-opacity">
              <Lock className="text-[var(--copper)] mb-2" size={24} />
              <span className="font-mono text-sm tracking-widest uppercase text-[var(--copper)]">Inner Circle Only</span>
            </div>
            <MessageSquare className="text-zinc-600 mt-1" size={24} />
            <div className="opacity-50">
              <h3 className="font-heading text-xl font-medium mb-2">Offshore Structuring: 2026 Regulatory Updates</h3>
              <p className="text-[var(--text-muted)] mb-4">Navigating the new compliance frameworks for sovereign wealth...</p>
              <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
                <span>56 Replies</span>
                <span>Last active 12m ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-[var(--bg)] border border-[var(--copper)] rounded-lg p-6 md:p-8 text-center sticky top-32 shadow-[0_0_30px_rgba(184,115,51,0.05)]">
            <Shield className="w-12 h-12 text-[var(--copper)] mx-auto mb-6" />
            <h3 className="font-heading text-2xl font-medium mb-4">The Inner Circle</h3>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              Access unredacted intelligence, private deal flow, and a verified network of sovereign operators.
            </p>
            <button 
              onClick={() => {
                onNavigateHome();
                setTimeout(() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }, 100);
              }}
              className="w-full bg-[var(--copper)] text-white px-6 py-3 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors"
            >
              Take Assessment
            </button>
            <button 
              onClick={() => setShowFeedbackModal(true)}
              className="mt-4 w-full bg-transparent border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] px-6 py-3 rounded font-medium hover:border-[var(--copper)] transition-colors flex items-center justify-center gap-2"
            >
              <AlertCircle size={18} /> Site Feedback
            </button>
          </div>
        </div>
      </div>
      <FeedbackModal isOpen={showFeedbackModal} onClose={() => setShowFeedbackModal(false)} />
    </div>
  );
}

export function PrivateCommunity({ onNavigateHome }: CommunityProps) {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [threads, setThreads] = useState([
    {
      id: 't1',
      author: { initial: 'SP', name: 'Sloane Prescott', role: 'Writer', isBella: true },
      timeAgo: 'Pinned • 2h ago',
      title: 'Q2 Deal Flow: Logistics Rollup Opportunity (Confidential)',
      content: 'We have identified a highly fragmented sector within mid-west cold storage logistics. The current operators are aging out, and tech integration is near zero. We are assembling a syndicate to acquire 4 regional players and centralize the dispatch infrastructure.\n\nMinimum ticket size is $250k. Review the attached data room and indicate interest below.',
      likes: 142,
      responses: 28,
      likedByBella: false,
      isPinned: true,
      summary: '',
      isGeneratingSummary: false,
      bellaDraft: '',
      isGeneratingReply: false,
      bellaReplies: [] as string[],
      showReplyInput: false,
      poll: { question: 'Should we prioritize EU or APAC for the next rollup?', options: [{ id: 'o1', text: 'EU Markets', votes: 12 }, { id: 'o2', text: 'APAC Region', votes: 34 }], totalVotes: 46, userVoted: null as string | null }
    },
    {
      id: 't2',
      author: { initial: 'M', name: 'Marcus V.', role: 'Verified Member' },
      timeAgo: '5h ago',
      title: 'Offshore Structuring: 2026 Regulatory Updates',
      content: 'For those operating entities in Dubai or Singapore, the new compliance frameworks rolling out next quarter require a structural shift. I\'ve just finished a consultation with my legal team and wanted to share the blueprint we are using to maintain privacy while remaining fully compliant.',
      likes: 89,
      responses: 56,
      likedByBella: false,
      summary: '',
      isGeneratingSummary: false,
      bellaDraft: '',
      isGeneratingReply: false,
      bellaReplies: [] as string[],
      showReplyInput: false,
    },
    {
      id: 't3',
      author: { initial: 'E', name: 'Elena R.', role: 'Verified Member' },
      timeAgo: '12h ago',
      title: 'Automating Executive Filtering',
      content: 'Following the last dispatch on "The Architecture of Boring", I completely restructured my EA\'s filtering protocols. I\'ve attached the exact decision-tree matrix we use to ensure I only see decisions that have a leverage multiplier of 10x or higher.',
      likes: 204,
      responses: 112,
      likedByBella: false,
      summary: '',
      isGeneratingSummary: false,
      bellaDraft: '',
      isGeneratingReply: false,
      bellaReplies: [] as string[],
      showReplyInput: false,
    }
  ]);

  const [activeMessageThread, setActiveMessageThread] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Record<string, {id: string, sender: string, text: string, replyTo?: {sender: string, text: string}, isEdited?: boolean}[]>>({
    't2': [{ id: 'm1', sender: 'Marcus V.', text: 'Thanks for the insights on the latest dispatch.' }],
    't3': [{ id: 'm2', sender: 'Elena R.', text: 'Would love to discuss the EA filtering matrix further.' }]
  });

  const [replyingToMessage, setReplyingToMessage] = useState<{sender: string, text: string} | null>(null);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editMessageInput, setEditMessageInput] = useState('');
  const [messageToDelete, setMessageToDelete] = useState<{threadId: string, msgId: string} | null>(null);
  const [isGeneratingDMReply, setIsGeneratingDMReply] = useState(false);
  
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: 'Sloane Prescott', bio: 'Writer', initial: 'SP', avatar: null as string | null });
  const [editProfileForm, setEditProfileForm] = useState({ name: '', bio: '', avatar: null as string | null });

  const handleVote = (threadId: string, optionId: string) => {
    setThreads(threads.map(t => {
      if (t.id === threadId && t.poll && !t.poll.userVoted) {
        return {
          ...t,
          poll: {
            ...t.poll,
            userVoted: optionId,
            totalVotes: t.poll.totalVotes + 1,
            options: t.poll.options.map(o => o.id === optionId ? { ...o, votes: o.votes + 1 } : o)
          }
        };
      }
      return t;
    }));
  };

  const handleCreatePoll = (threadId: string) => {
    setThreads(threads.map(t => {
      if (t.id === threadId && !t.poll) {
        return {
          ...t,
          poll: {
            question: 'What is your take on this?',
            options: [
              { id: 'o1', text: 'Agree', votes: 0 },
              { id: 'o2', text: 'Disagree', votes: 0 }
            ],
            totalVotes: 0,
            userVoted: null
          }
        };
      }
      return t;
    }));
  };

  const handleLikeAsBella = (id: string) => {
    setThreads(threads.map(t => {
      if (t.id === id) {
        const isLiked = t.likedByBella;
        return { ...t, likedByBella: !isLiked, likes: t.likes + (isLiked ? -1 : 1) };
      }
      return t;
    }));
  };

  const handleGenerateSummary = async (id: string, content: string) => {
    setThreads(threads.map(t => t.id === id ? { ...t, isGeneratingSummary: true } : t));
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || 'dummy' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Summarize the following community post in 1-2 concise bullet points. Maintain Sloane Prescott's voice (sharp, authoritative, strategic). Post: "${content}"`
      });
      setThreads(threads.map(t => t.id === id ? { ...t, summary: response.text, isGeneratingSummary: false } : t));
    } catch (error) {
      console.error(error);
      setThreads(threads.map(t => t.id === id ? { ...t, summary: 'Summary generated (Simulated due to API key). Key point: High leverage opportunity identified.', isGeneratingSummary: false } : t));
    }
  };

  const handleGenerateReply = async (id: string, content: string) => {
    setThreads(threads.map(t => t.id === id ? { ...t, isGeneratingReply: true, showReplyInput: true } : t));
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || 'dummy' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${BELLA_PROMPT}\n\nWrite a short, incisive reply to this community post: "${content}"`
      });
      setThreads(threads.map(t => t.id === id ? { ...t, bellaDraft: response.text, isGeneratingReply: false } : t));
    } catch (error) {
      console.error(error);
      setThreads(threads.map(t => t.id === id ? { ...t, bellaDraft: 'Excellent initiative. Ensure the matrix accounts for second-order consequences.', isGeneratingReply: false } : t));
    }
  };

  const handlePostReply = (id: string) => {
    setThreads(threads.map(t => {
      if (t.id === id && t.bellaDraft) {
        return { 
          ...t, 
          bellaReplies: [...(t.bellaReplies || []), t.bellaDraft], 
          bellaDraft: '', 
          showReplyInput: false,
          responses: t.responses + 1
        };
      }
      return t;
    }));
  };

  const handleSendMessage = () => {
    if (!activeMessageThread || !messageInput.trim()) return;
    setMessages(prev => ({
      ...prev,
      [activeMessageThread]: [...(prev[activeMessageThread] || []), { id: Date.now().toString(), sender: 'You', text: messageInput, replyTo: replyingToMessage || undefined }]
    }));
    setMessageInput('');
    setReplyingToMessage(null);
  };

  const handleDeleteMessage = (threadId: string, msgId: string) => {
    setMessageToDelete({ threadId, msgId });
  };

  const confirmDeleteMessage = () => {
    if (messageToDelete) {
      setMessages(prev => ({
        ...prev,
        [messageToDelete.threadId]: prev[messageToDelete.threadId].filter(m => m.id !== messageToDelete.msgId)
      }));
      setMessageToDelete(null);
    }
  };

  const handleSaveEdit = (threadId: string, msgId: string) => {
    if (!editMessageInput.trim()) return;
    setMessages(prev => ({
      ...prev,
      [threadId]: prev[threadId].map(m => m.id === msgId ? { ...m, text: editMessageInput, isEdited: true } : m)
    }));
    setEditingMessageId(null);
  };

  const handleGenerateDMReply = async () => {
    if (!activeMessageThread) return;
    setIsGeneratingDMReply(true);
    
    const threadMessages = messages[activeMessageThread] || [];
    const lastMessage = [...threadMessages].reverse().find(m => m.sender !== 'You');
    const contextText = lastMessage ? lastMessage.text : "Hello.";

    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || 'dummy' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${BELLA_PROMPT}\n\nWrite a short, incisive direct message reply to this: "${contextText}"`
      });
      setMessageInput(response.text || '');
    } catch (error) {
      console.error(error);
      setMessageInput('Understood. Proceed with the execution.');
    } finally {
      setIsGeneratingDMReply(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto min-h-screen relative">
      <button onClick={onNavigateHome} className="text-[var(--copper)] hover:text-[var(--copper-hover)] mb-8 font-medium flex items-center gap-2 transition-colors">
        ← Back to Platform
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-[var(--border)] pb-6 md:pb-8">
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
            <Shield className="text-[var(--copper)]" size={28} />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light">The Inner Circle</h1>
          </div>
          <p className="text-xl text-[var(--text-muted)] font-mono text-sm uppercase tracking-widest">Strategic Nexus • Verified Access</p>
        </div>
        <div className="mt-6 md:mt-0 flex items-center gap-4">
          <div className="bg-green-500/10 text-green-500 border border-green-500/20 px-4 py-2 rounded font-mono text-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Connection Secure
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-2 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar">
          <button className="whitespace-nowrap lg:whitespace-normal w-auto lg:w-full text-left px-4 py-3 bg-[var(--copper)]/10 text-[var(--copper)] border-b-2 lg:border-b-0 lg:border-l-2 border-[var(--copper)] font-medium flex items-center gap-3 shrink-0">
            <Activity size={18} /> Live Intelligence
          </button>
          <button className="whitespace-nowrap lg:whitespace-normal w-auto lg:w-full text-left px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)] transition-colors flex items-center gap-3 shrink-0">
            <FileText size={18} /> Unredacted Dispatches
          </button>
          <button className="whitespace-nowrap lg:whitespace-normal w-auto lg:w-full text-left px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)] transition-colors flex items-center gap-3 shrink-0">
            <Users size={18} /> Verified Directory
          </button>
          <button className="whitespace-nowrap lg:whitespace-normal w-auto lg:w-full text-left px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)] transition-colors flex items-center gap-3 shrink-0">
            <MessageSquare size={18} /> Direct Line (Sloane)
          </button>
          <button 
            onClick={() => {
              setEditProfileForm({ name: userProfile.name, bio: userProfile.bio, avatar: userProfile.avatar });
              setShowProfileModal(true);
            }}
            className="whitespace-nowrap lg:whitespace-normal w-auto lg:w-full text-left px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)] transition-colors flex items-center gap-3 lg:mt-4 lg:border-t border-[var(--border)] lg:pt-4 shrink-0"
          >
            <UserCircle size={18} /> My Profile
          </button>
          <button 
            onClick={() => setShowFeedbackModal(true)}
            className="whitespace-nowrap lg:whitespace-normal w-auto lg:w-full text-left px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)] transition-colors flex items-center gap-3 shrink-0"
          >
            <AlertCircle size={18} /> Submit Feedback
          </button>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-end mb-4">
            <button className="bg-[var(--copper)] text-white px-6 py-3 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors text-sm flex items-center gap-2">
              <Plus size={18} /> New Dispatch
            </button>
          </div>

          {threads.map(thread => (
            <div key={thread.id} className={`${thread.isPinned ? 'bg-[#111111] shadow-[0_0_20px_rgba(184,115,51,0.05)]' : 'bg-[var(--card)]'} border border-[${thread.isPinned ? 'var(--copper)' : 'var(--border)'}] rounded-lg p-4 md:p-8`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${thread.author.isBella ? 'bg-[var(--copper)] text-white' : 'bg-zinc-800 text-zinc-400'} flex items-center justify-center font-heading font-bold overflow-hidden shrink-0`}>
                    {thread.author.isBella && userProfile.avatar ? (
                      <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      thread.author.initial
                    )}
                  </div>
                  <div>
                    <div className={`font-medium ${thread.author.isBella ? 'text-white' : ''}`}>{thread.author.name}</div>
                    <div className={`text-xs font-mono ${thread.author.isBella ? 'text-[var(--copper)]' : 'text-zinc-500'} uppercase tracking-widest`}>{thread.author.role}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">{thread.timeAgo}</span>
              </div>
              <h3 className={`font-heading text-lg sm:text-xl md:text-2xl font-medium mb-4 ${thread.isPinned ? 'text-white' : ''}`}>{thread.title}</h3>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6 whitespace-pre-line">
                {thread.content}
              </p>

              {thread.poll && (
                <div className="mb-6 p-5 bg-[#111111] border border-zinc-800 rounded-lg">
                  <div className="flex items-center gap-2 text-[var(--copper)] mb-4 font-mono text-xs uppercase tracking-widest">
                    <BarChart2 size={14} /> Community Poll
                  </div>
                  <h4 className="font-medium text-white mb-4">{thread.poll.question}</h4>
                  <div className="space-y-3">
                    {thread.poll.options.map(option => {
                      const percentage = thread.poll!.totalVotes > 0 ? Math.round((option.votes / thread.poll!.totalVotes) * 100) : 0;
                      const isSelected = thread.poll!.userVoted === option.id;
                      return (
                        <div key={option.id} className="relative">
                          <button 
                            onClick={() => handleVote(thread.id, option.id)}
                            disabled={!!thread.poll!.userVoted}
                            className={`w-full text-left p-3 rounded border ${isSelected ? 'border-[var(--copper)] bg-[var(--copper)]/10 text-[var(--copper)]' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 text-zinc-300'} transition-colors relative z-10 flex justify-between items-center`}
                          >
                            <span>{option.text}</span>
                            {thread.poll!.userVoted && <span className="font-mono text-xs">{percentage}%</span>}
                          </button>
                          {thread.poll!.userVoted && (
                            <div 
                              className="absolute top-0 left-0 bottom-0 bg-[var(--copper)]/20 rounded z-0 transition-all duration-1000"
                              style={{ width: `${percentage}%` }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-xs font-mono text-zinc-500 text-right">
                    {thread.poll.totalVotes} votes
                  </div>
                </div>
              )}

              {thread.summary && (
                <div className="mb-6 p-4 bg-[var(--copper)]/5 border border-[var(--copper)]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[var(--copper)] mb-2 font-mono text-xs uppercase tracking-widest">
                    <Sparkles size={14} /> Admin Summary
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">{thread.summary}</p>
                </div>
              )}

              <div className={`flex flex-wrap items-center gap-4 border-t ${thread.isPinned ? 'border-zinc-800' : 'border-[var(--border)]'} pt-4`}>
                <button 
                  onClick={() => handleLikeAsBella(thread.id)}
                  className={`${thread.likedByBella ? 'text-red-500' : 'text-zinc-400 hover:text-red-500'} transition-colors font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2`}
                >
                  <Heart size={16} className={thread.likedByBella ? 'fill-current' : ''} /> {thread.likes}
                </button>
                <button className="text-[var(--copper)] hover:text-[var(--copper-hover)] font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <MessageSquare size={16} /> {thread.responses} <span className="hidden sm:inline">Responses</span>
                </button>
                {thread.isPinned && (
                  <button className="text-[var(--text-muted)] hover:text-white transition-colors font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                    <FileText size={16} /> <span className="hidden sm:inline">View Data Room (Encrypted)</span><span className="sm:hidden">Data Room</span>
                  </button>
                )}
                {!thread.author.isBella && (
                  <button 
                    onClick={() => setActiveMessageThread(thread.id)}
                    className="text-zinc-400 hover:text-white transition-colors font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 ml-auto"
                  >
                    <Send size={16} /> <span className="hidden sm:inline">Message</span>
                  </button>
                )}
              </div>

              {/* Bella's Replies */}
              {thread.bellaReplies && thread.bellaReplies.length > 0 && (
                <div className="mt-6 space-y-4">
                  {thread.bellaReplies.map((reply, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                      <div className="w-8 h-8 rounded-full bg-[var(--copper)] text-white flex items-center justify-center font-heading font-bold text-xs flex-shrink-0 overflow-hidden">
                        {userProfile.avatar ? <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" /> : userProfile.initial}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-white mb-1">{userProfile.name} <span className="text-xs font-mono text-[var(--copper)] uppercase ml-2">Admin</span></div>
                        <p className="text-sm text-[var(--text-muted)]">{reply}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Admin Actions */}
              <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-dashed border-zinc-800">
                <span className="text-xs font-mono text-[var(--copper)] uppercase tracking-widest">Admin Actions:</span>
                <button 
                  onClick={() => handleLikeAsBella(thread.id)}
                  className={`text-xs font-mono ${thread.likedByBella ? 'text-[var(--copper)]' : 'text-zinc-400 hover:text-[var(--copper)]'} transition-colors flex items-center gap-1`}
                >
                  <Heart size={14} className={thread.likedByBella ? 'fill-current' : ''} /> {thread.likedByBella ? 'Liked' : 'Like as Sloane'}
                </button>
                <button 
                  onClick={() => setThreads(threads.map(t => t.id === thread.id ? { ...t, showReplyInput: !t.showReplyInput } : t))}
                  className="text-xs font-mono text-zinc-400 hover:text-[var(--copper)] transition-colors flex items-center gap-1"
                >
                  <MessageSquare size={14} /> Reply as Sloane
                </button>
                <button 
                  onClick={() => handleCreatePoll(thread.id)}
                  disabled={!!thread.poll}
                  className="text-xs font-mono text-zinc-400 hover:text-[var(--copper)] transition-colors flex items-center gap-1 disabled:opacity-50"
                >
                  <BarChart2 size={14} /> Create Poll
                </button>
                <button 
                  onClick={() => handleGenerateSummary(thread.id, thread.content)}
                  disabled={thread.isGeneratingSummary}
                  className="text-xs font-mono text-zinc-400 hover:text-[var(--copper)] transition-colors flex items-center gap-1 disabled:opacity-50"
                >
                  <Sparkles size={14} /> {thread.isGeneratingSummary ? 'Generating Admin\'s summary...' : 'Admin\'s summary'}
                </button>
              </div>

              {/* Reply Input Area */}
              {thread.showReplyInput && (
                <div className="mt-4 p-4 bg-[#111111] border border-zinc-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-[var(--copper)] uppercase tracking-widest">Drafting Reply as Sloane</span>
                    <button 
                      onClick={() => handleGenerateReply(thread.id, thread.content)}
                      disabled={thread.isGeneratingReply}
                      className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 disabled:opacity-50"
                    >
                      <Sparkles size={12} /> {thread.isGeneratingReply ? 'Generating...' : 'Auto-Generate (AI)'}
                    </button>
                  </div>
                  <textarea 
                    value={thread.bellaDraft}
                    onChange={(e) => setThreads(threads.map(t => t.id === thread.id ? { ...t, bellaDraft: e.target.value } : t))}
                    className="w-full h-24 bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] font-mono text-sm mb-3"
                    placeholder="Type Sloane's response here..."
                  />
                  <div className="flex justify-end gap-3">
                    <button 
                      onClick={() => setThreads(threads.map(t => t.id === thread.id ? { ...t, showReplyInput: false } : t))}
                      className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => handlePostReply(thread.id)}
                      disabled={!thread.bellaDraft}
                      className="px-4 py-2 text-sm font-medium bg-[var(--copper)] text-white rounded hover:bg-[var(--copper-hover)] transition-colors disabled:opacity-50"
                    >
                      Post as Sloane
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Private Messaging Modal */}
      {activeMessageThread && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg w-full max-w-lg shadow-2xl flex flex-col h-[600px] max-h-[90vh]">
            <div className="p-4 border-b border-[var(--border)] flex justify-between items-center bg-[#111111] rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-heading font-bold">
                  {threads.find(t => t.id === activeMessageThread)?.author.initial}
                </div>
                <div>
                  <div className="font-medium">{threads.find(t => t.id === activeMessageThread)?.author.name}</div>
                  <div className="text-xs text-green-500 font-mono flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActiveMessageThread(null)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages[activeMessageThread]?.map((msg, idx) => (
                <div key={msg.id || idx} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'} group`}>
                  <div className="flex items-center gap-2 mb-1">
                    {msg.sender === 'You' && (
                      <div className="opacity-100 flex items-center gap-2 transition-opacity">
                        <button 
                          onClick={() => setReplyingToMessage({ sender: msg.sender, text: msg.text })}
                          className="text-zinc-500 hover:text-[var(--copper)]"
                          title="Reply"
                        >
                          <Reply size={14} />
                        </button>
                        <button 
                          onClick={() => { setEditingMessageId(msg.id); setEditMessageInput(msg.text); }}
                          className="text-zinc-500 hover:text-blue-400"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button 
                          onClick={() => handleDeleteMessage(activeMessageThread, msg.id)}
                          className="text-zinc-500 hover:text-red-400"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                    <span className="text-xs text-zinc-500">{msg.sender}</span>
                    {msg.sender !== 'You' && (
                      <button 
                        onClick={() => setReplyingToMessage({ sender: msg.sender, text: msg.text })}
                        className="opacity-100 text-zinc-500 hover:text-[var(--copper)] transition-opacity"
                        title="Reply"
                      >
                        <Reply size={14} />
                      </button>
                    )}
                  </div>
                  <div className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.sender === 'You' ? 'bg-[var(--copper)] text-white' : 'bg-zinc-800 text-white'}`}>
                    {msg.replyTo && (
                      <div className="mb-2 p-2 bg-black/20 border-l-2 border-white/30 rounded text-sm opacity-80 flex gap-2 items-start">
                        <CornerDownRight size={14} className="mt-0.5 opacity-50 shrink-0" />
                        <div className="min-w-0">
                          <div className="font-medium text-xs mb-1">{msg.replyTo.sender}</div>
                          <div className="truncate">{msg.replyTo.text}</div>
                        </div>
                      </div>
                    )}
                    {editingMessageId === msg.id ? (
                      <div className="flex flex-col gap-2 min-w-[200px]">
                        <input
                          type="text"
                          value={editMessageInput}
                          onChange={(e) => setEditMessageInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(activeMessageThread, msg.id)}
                          className="bg-black/20 border border-white/30 rounded px-2 py-1 text-sm text-white focus:outline-none w-full"
                          autoFocus
                        />
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setEditingMessageId(null)} className="text-xs opacity-70 hover:opacity-100">Cancel</button>
                          <button onClick={() => handleSaveEdit(activeMessageThread, msg.id)} className="text-xs font-medium hover:opacity-100">Save</button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-end gap-2">
                        <span>{msg.text}</span>
                        {msg.isEdited && <span className="text-[10px] opacity-50 shrink-0 mb-0.5">(edited)</span>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {(!messages[activeMessageThread] || messages[activeMessageThread].length === 0) && (
                <div className="text-center text-zinc-500 text-sm mt-10">
                  No previous messages. Start the conversation.
                </div>
              )}
            </div>

            <div className="p-4 border-t border-[var(--border)] bg-[#111111] rounded-b-lg">
              {replyingToMessage && (
                <div className="mb-3 p-3 bg-zinc-900 border-l-2 border-[var(--copper)] rounded flex justify-between items-start">
                  <div>
                    <div className="text-xs font-medium text-[var(--copper)] mb-1">Replying to {replyingToMessage.sender}</div>
                    <div className="text-sm text-zinc-400 truncate max-w-sm">{replyingToMessage.text}</div>
                  </div>
                  <button onClick={() => setReplyingToMessage(null)} className="text-zinc-500 hover:text-white">
                    <X size={16} />
                  </button>
                </div>
              )}
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a secure message..."
                  className="flex-1 bg-[var(--bg)] border border-[var(--border)] rounded px-4 py-2 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className="bg-[var(--copper)] text-white px-4 py-2 rounded hover:bg-[var(--copper-hover)] transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {messageToDelete && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg w-full max-w-sm shadow-2xl p-6 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-medium mb-2">Delete Message?</h3>
            <p className="text-[var(--text-muted)] mb-6 text-sm">
              This action cannot be undone. The message will be permanently removed from the conversation history.
            </p>
            <div className="flex gap-3 justify-center">
              <button 
                onClick={() => setMessageToDelete(null)}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDeleteMessage}
                className="px-4 py-2 text-sm font-medium bg-red-500/10 text-red-500 border border-red-500/20 rounded hover:bg-red-500 hover:text-white transition-colors"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-[var(--border)] flex justify-between items-center">
              <h3 className="font-heading text-xl font-medium flex items-center gap-2">
                <Edit3 size={20} className="text-[var(--copper)]" /> Edit Profile
              </h3>
              <button onClick={() => setShowProfileModal(false)} className="text-zinc-500 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center font-heading font-bold text-xl text-zinc-400 overflow-hidden border border-zinc-700 shrink-0">
                  {editProfileForm.avatar ? (
                    <img src={editProfileForm.avatar} alt="Avatar Preview" className="w-full h-full object-cover" />
                  ) : (
                    editProfileForm.name ? editProfileForm.name.charAt(0).toUpperCase() : '?'
                  )}
                </div>
                <div>
                  <label className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2">
                    <Upload size={16} /> Upload Picture
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setEditProfileForm({ ...editProfileForm, avatar: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  <p className="text-xs text-zinc-500 mt-2">Recommended: Square image, max 1MB.</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Display Name</label>
                <input 
                  type="text" 
                  value={editProfileForm.name}
                  onChange={(e) => setEditProfileForm({...editProfileForm, name: e.target.value})}
                  className="w-full bg-[#111111] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Bio / Role</label>
                <textarea 
                  value={editProfileForm.bio}
                  onChange={(e) => setEditProfileForm({...editProfileForm, bio: e.target.value})}
                  className="w-full h-24 bg-[#111111] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] resize-none"
                />
              </div>
            </div>
            <div className="p-6 border-t border-[var(--border)] flex justify-end gap-3">
              <button 
                onClick={() => setShowProfileModal(false)}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setUserProfile({
                    ...userProfile,
                    name: editProfileForm.name,
                    bio: editProfileForm.bio,
                    initial: editProfileForm.name.charAt(0).toUpperCase(),
                    avatar: editProfileForm.avatar
                  });
                  setShowProfileModal(false);
                }}
                className="px-6 py-2 text-sm font-medium bg-[var(--copper)] text-white rounded hover:bg-[var(--copper-hover)] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      <FeedbackModal isOpen={showFeedbackModal} onClose={() => setShowFeedbackModal(false)} />
    </div>
  );
}
