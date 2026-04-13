import React, { useState } from 'react';
import { Lock, Unlock, Activity, Briefcase, MessageSquare, ShieldAlert, ChevronRight, Eye } from 'lucide-react';

export function CommunityView() {
  // For demonstration purposes, we allow the owner to toggle between views
  const [viewTier, setViewTier] = useState<'public' | 'private'>('private');

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Admin Toggle (Only visible to owner/admin for previewing) */}
      <div className="flex items-center justify-between mb-12 p-4 bg-[#111111] border border-zinc-800 rounded-lg">
        <div className="flex items-center gap-3">
          <Eye className="text-[var(--copper)]" size={20} />
          <span className="font-mono text-sm uppercase tracking-widest text-zinc-400">Preview Mode</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setViewTier('public')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded transition-colors ${viewTier === 'public' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Public Tier
          </button>
          <button 
            onClick={() => setViewTier('private')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded transition-colors ${viewTier === 'private' ? 'bg-[var(--copper)] text-white' : 'text-zinc-500 hover:text-[var(--copper)]'}`}
          >
            Inner Circle (Paid)
          </button>
        </div>
      </div>

      {viewTier === 'public' ? <PublicCommunity /> : <PrivateCommunity />}
    </div>
  );
}

function PublicCommunity() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-16">
        <h1 className="font-heading text-4xl md:text-6xl font-light mb-4">The Public Network</h1>
        <p className="text-xl text-[var(--text-muted)] max-w-2xl">
          General intelligence and public dispatches. Advanced strategic discussions are restricted to verified operators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--copper)] mb-6">Recent Public Dispatches</h2>
          
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-lg hover:border-zinc-700 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-2xl group-hover:text-[var(--copper)] transition-colors">The Architecture of Boring</h3>
                <span className="font-mono text-xs text-zinc-500">2h ago</span>
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Excitement attracts competition. Boring repels it. Why the most powerful systems in business are the ones no one wants to talk about...
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--copper)]">
                Read Dispatch <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-[#0a0a0a] border border-zinc-800 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800"></div>
            <Lock className="text-zinc-600 mb-6" size={32} />
            <h3 className="font-heading text-2xl mb-3">Inner Circle Discussions</h3>
            <p className="text-[var(--text-muted)] mb-8 text-sm leading-relaxed">
              Live intelligence, deal flow, and private network access are restricted. You must pass the Sovereignty Assessment to request entry.
            </p>
            <button className="w-full border border-[var(--copper)] text-[var(--copper)] px-6 py-3 rounded font-medium hover:bg-[var(--copper)] hover:text-white transition-colors text-sm uppercase tracking-widest">
              Take Assessment
            </button>
          </div>

          <div className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-lg">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">Network Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-[var(--text-muted)]">Public Members</span>
                <span className="font-mono">14,205</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-[var(--text-muted)]">Verified Operators</span>
                <span className="font-mono text-[var(--copper)]">Restricted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivateCommunity() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-16 border-b border-zinc-800 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--copper)]/10 border border-[var(--copper)]/30 rounded text-[var(--copper)] font-mono text-xs uppercase tracking-widest mb-6">
          <Unlock size={14} /> Verified Access Granted
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-medium mb-4 text-white">The Inner Circle</h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          Welcome to the nexus. Live intelligence, unfiltered strategy, and sovereign network access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--copper)] flex items-center gap-2">
              <Activity size={16} /> Live Intelligence Feed
            </h2>
            <button className="text-sm text-zinc-400 hover:text-white transition-colors">Filter</button>
          </div>
          
          {/* Intelligence Post 1 */}
          <div className="p-8 bg-[#111111] border border-zinc-800 rounded-lg hover:border-[var(--copper)]/50 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-heading text-lg text-[var(--copper)]">
                  BR
                </div>
                <div>
                  <div className="font-medium text-white">Sloane Prescott</div>
                  <div className="font-mono text-xs text-[var(--copper)]">Architect</div>
                </div>
              </div>
              <span className="font-mono text-xs text-zinc-500">12m ago</span>
            </div>
            <h3 className="text-xl font-heading font-medium text-white mb-3">EU Logistics Anomaly Detected</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We are tracking a significant regulatory shift in European cross-border logistics that will create a 14-day bottleneck starting next month. Operators in the e-commerce space should immediately restructure their routing through the Baltic corridors. Full blueprint attached below.
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-zinc-800/50">
              <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--copper)] transition-colors">
                <MessageSquare size={16} /> 14 Insights
              </button>
              <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--copper)] transition-colors">
                <Briefcase size={16} /> View Blueprint
              </button>
            </div>
          </div>

          {/* Intelligence Post 2 */}
          <div className="p-8 bg-[#111111] border border-zinc-800 rounded-lg hover:border-[var(--copper)]/50 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center font-mono text-xs text-zinc-400">
                  OP-7
                </div>
                <div>
                  <div className="font-medium text-white">Operator 742</div>
                  <div className="font-mono text-xs text-zinc-500">Logistics / Supply Chain</div>
                </div>
              </div>
              <span className="font-mono text-xs text-zinc-500">3h ago</span>
            </div>
            <h3 className="text-xl font-heading font-medium text-white mb-3">Capitalizing on the EU Shift</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Following Sloane's dispatch, we've already secured three secondary warehouses in Estonia. If anyone in the network needs overflow capacity during the 14-day bottleneck, DM me. Priority given to Inner Circle members.
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-zinc-800/50">
              <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--copper)] transition-colors">
                <MessageSquare size={16} /> 8 Insights
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Action Center */}
          <div className="p-6 bg-gradient-to-br from-[#1a1311] to-[#0a0a0a] border border-[var(--copper)]/30 rounded-lg">
            <h3 className="font-heading text-xl mb-6 text-white flex items-center gap-2">
              <ShieldAlert size={20} className="text-[var(--copper)]" />
              Strategic Directives
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left p-4 bg-black/40 border border-[var(--copper)]/20 rounded hover:border-[var(--copper)] transition-colors group">
                <div className="text-sm font-medium text-white group-hover:text-[var(--copper)] transition-colors">Submit Deal Flow</div>
                <div className="text-xs text-zinc-500 mt-1">Share opportunities with the network</div>
              </button>
              <button className="w-full text-left p-4 bg-black/40 border border-[var(--copper)]/20 rounded hover:border-[var(--copper)] transition-colors group">
                <div className="text-sm font-medium text-white group-hover:text-[var(--copper)] transition-colors">Direct Line to Sloane</div>
                <div className="text-xs text-zinc-500 mt-1">Request architectural review</div>
              </button>
            </div>
          </div>

          {/* Network Directory */}
          <div className="p-6 bg-[#111111] border border-zinc-800 rounded-lg">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">Verified Network (Online)</h3>
            <div className="space-y-4">
              {[
                { id: 'OP-112', sector: 'Fintech / Dubai', active: true },
                { id: 'OP-409', sector: 'Real Estate / NY', active: true },
                { id: 'OP-881', sector: 'SaaS / London', active: false },
                { id: 'OP-234', sector: 'Manufacturing / Tokyo', active: true },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center font-mono text-[10px] text-zinc-400">
                        {member.id.split('-')[1]}
                      </div>
                      {member.active && <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--copper)] rounded-full border border-[#111111]"></div>}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{member.id}</div>
                      <div className="text-xs text-zinc-600">{member.sector}</div>
                    </div>
                  </div>
                  <MessageSquare size={14} className="text-zinc-700 group-hover:text-[var(--copper)] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
