import React from 'react';

export const AboutPage = () => (
  <div className="pt-48 pb-32 px-6 max-w-3xl mx-auto bg-[#F8F5F0] text-[#1F2521] min-h-screen">
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 font-['Space_Grotesk']">The Editor</h1>
    
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        <strong>Sloane Prescott</strong> is the founder and chief editor of Global Leverage Systems.
      </p>
      <p>
        She does not write content. She writes architectural blueprints for reality.
      </p>
      <p>
        Her work sits at the intersection of five disciplines most people treat as separate worlds:
      </p>
      <ul className="space-y-4 list-none pl-0">
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Business</strong> — how companies are actually structured to create and capture value
        </li>
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Finance</strong> — where capital really flows and who controls the margins
        </li>
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Law</strong> — the contracts, clauses, and governance systems that quietly determine who wins
        </li>
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Psychology</strong> — why intelligent leaders make predictable, expensive mistakes
        </li>
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Technology</strong> — who owns the infrastructure and who is merely renting it
        </li>
      </ul>
      
      <p className="pt-4">
        She created two proprietary frameworks that have become the foundation of GLS:
      </p>
      
      <p>
        <strong>The Leverage System</strong> — a micro-level diagnostic that reveals how much operational control a founder actually has over their own business. It audits contracts, vendor dependencies, revenue leaks, and equity structures to expose the invisible forces extracting wealth from the inside.
      </p>
      <p>
        <strong>The Global Clock System</strong> — a macro-level framework that maps how capital, regulation, and opportunity move across time zones and jurisdictions. It teaches sovereign operators how to position their businesses across multiple clocks so that no single market, government, or platform can shut them down.
      </p>
      
      <p>
        Her readers include founders scaling past seven figures, C-suite executives navigating complex governance, investors evaluating structural risk, and operators who refuse to build a business that someone else can turn off.
      </p>
      <p>
        She has been cited in private CEO networks, referenced in boardroom strategy sessions, and her frameworks have been adopted by operators across four continents.
      </p>
      
      <div className="py-4">
        <p>She does not do interviews.</p>
        <p>She does not do motivational speaking.</p>
        <p>She does not do fluff.</p>
      </div>
      
      <p>
        She builds systems that outlast trends, survive market cycles, and transfer across generations.
      </p>
      
      <div className="pt-8">
        <p className="font-bold">To work with Sloane directly:</p>
        <p>→ <a href="#" className="text-[#E8734A] hover:underline">Private Advisory</a></p>
      </div>
      
      <div className="pt-4">
        <p className="font-bold">To see examples of her work:</p>
        <p>→ <a href="#" className="text-[#E8734A] hover:underline">Portfolio & Case Studies</a></p>
      </div>
      
      <div className="pt-12 mt-12 border-t border-[#1F2521]/20 italic text-[#1F2521]/70">
        Clocks tick. Sovereigns decide the rhythm.
      </div>
    </div>
  </div>
);

export const PortfolioPage = () => (
  <div className="pt-48 pb-32 px-6 max-w-3xl mx-auto bg-[#F8F5F0] text-[#1F2521] min-h-screen">
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 font-['Space_Grotesk']">Portfolio & Case Studies</h1>
    
    <div className="space-y-12 text-lg leading-relaxed">
      <p>
        This is not a list of articles. This is a record of structural interventions.
      </p>
      <p>
        Every case study below represents a real business problem that was solved using the GLS frameworks: <strong>The Leverage System</strong> (internal control) and <strong>The Global Clock System</strong> (external positioning).
      </p>
      <p className="text-sm italic text-[#1F2521]/70">
        Names and identifying details have been altered to protect client confidentiality.
      </p>

      <hr className="border-[#1F2521]/20 my-12" />

      <section>
        <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">Case Study 01: The Invisible Equity Leak</h3>
        <div className="space-y-4">
          <p>
            <strong>The Problem:</strong><br />
            A SaaS founder generating $4.2M in annual revenue believed she owned 100% of her company. After running The Invisible Cap Table diagnostic, she discovered that platform fees, unilateral amendment clauses, and data lock-in meant that third-party vendors effectively controlled 38% of her operational leverage.
          </p>
          <p>
            <strong>The Intervention:</strong><br />
            Using The Leverage System, we identified three critical vendor dependencies. We deployed negotiation scripts from The Redline Library to remove two unilateral amendment clauses and migrated her payment processing to a provider with sovereign-friendly terms.
          </p>
          <p>
            <strong>The Result:</strong><br />
            Operational leverage reclaimed. Annual savings of $187,000 in hidden extraction fees. Full data portability achieved within 60 days.
          </p>
        </div>
      </section>

      <hr className="border-[#1F2521]/10 my-8" />

      <section>
        <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">Case Study 02: The Single Clock Trap</h3>
        <div className="space-y-4">
          <p>
            <strong>The Problem:</strong><br />
            A consulting firm with $6M in revenue operated entirely within one jurisdiction. 100% of their banking, legal entity, talent, and clients were in a single country. When a sudden regulatory change threatened their core service offering, they had zero fallback.
          </p>
          <p>
            <strong>The Intervention:</strong><br />
            Using The Global Clock System, we restructured their entity across two jurisdictions, diversified their banking to three sovereign-friendly institutions, and built a talent pipeline across two additional time zones.
          </p>
          <p>
            <strong>The Result:</strong><br />
            The regulatory change that would have destroyed them became irrelevant. Revenue continued uninterrupted. Their S.P.O.F. score dropped from 5/5 to 1/5.
          </p>
        </div>
      </section>

      <hr className="border-[#1F2521]/10 my-8" />

      <section>
        <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">Case Study 03: The Psychology of the Growth Trap</h3>
        <div className="space-y-4">
          <p>
            <strong>The Problem:</strong><br />
            A venture-backed founder had scaled to $12M ARR but scored 2/10 on the Sovereignty Test. His board had veto power over key decisions. His cap table had liquidation preferences that meant even at a $50M exit, he would personally receive less than $2M.
          </p>
          <p>
            <strong>The Intervention:</strong><br />
            Using The Leverage System, we audited his cap table, identified the shadow equity extraction mechanisms, and developed a restructuring strategy. Using The Global Clock System, we timed the restructuring to coincide with a favorable fundraising cycle.
          </p>
          <p>
            <strong>The Result:</strong><br />
            Board veto power was neutralized through a governance amendment. Liquidation preferences were renegotiated. His projected personal exit value increased from $2M to $11M at the same valuation.
          </p>
        </div>
      </section>

      <hr className="border-[#1F2521]/20 my-12" />

      <section>
        <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">What I Write About</h3>
        <p className="mb-4">I write exclusively at the intersection of:</p>
        <ul className="space-y-2 list-none pl-0">
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Business strategy and structural leverage</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Legal architecture and contract risk</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Financial systems and capital flow</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Technology ownership and platform dependency</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Decision psychology and cognitive traps</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Global systems and temporal sovereignty</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">Publications & Formats</h3>
        <p className="mb-4">I produce:</p>
        <ul className="space-y-2 list-none pl-0">
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Long-form strategic dispatches (2,000–4,000 words)</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Executive briefings and private intelligence reports</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Proprietary diagnostic frameworks (The Sovereignty Test, The Invisible Cap Table)</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Video transmissions (YouTube)</li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Keynote frameworks for private events</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">Hire Me To Write For Your Publication</h3>
        <p className="mb-4">
          If you are an editor at a business, finance, technology, or legal publication and want a contrarian, framework-driven piece that your readers will remember for years, I am available for:
        </p>
        <ul className="space-y-4 list-none pl-0 mb-8">
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
            <strong>Single Articles:</strong> $500–$1,500 (depending on research depth)
          </li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
            <strong>Monthly Retainers:</strong> $3,000–$5,000/month (4+ dispatches + strategy)
          </li>
          <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
            <strong>Executive Ghostwriting:</strong> $5,000–$10,000/month (private thought leadership for CEOs)
          </li>
        </ul>
        <p>
          → <a href="#" className="text-[#E8734A] hover:underline font-bold">Contact me to discuss</a>
        </p>
      </section>
      
      <div className="pt-12 mt-12 border-t border-[#1F2521]/20 italic text-[#1F2521]/70">
        Clocks tick. Sovereigns decide the rhythm.
      </div>
    </div>
  </div>
);

export const AdvisoryPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    revenue: '',
    spof: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', revenue: '', spof: '', reason: '' });
    }, 1500);
  };

  return (
    <div className="pt-48 pb-32 px-6 max-w-3xl mx-auto bg-[#F8F5F0] text-[#1F2521] min-h-screen">
      <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 font-['Space_Grotesk']">Private Advisory</h1>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <p>
          This is not a contact form. This is an application.
        </p>
        <p>
          I work with a small number of founders, executives, and investors who have already built something real and want to architect what comes next.
        </p>
        
        <div className="space-y-4">
          <p className="font-bold">I do not work with:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">People who want motivation instead of structure</li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Anyone who is not ready to implement immediately</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-bold">I work with:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Founders generating $1M+ in annual revenue who have hidden leverage leaks</li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Executives navigating complex governance, board dynamics, or exit strategies</li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Investors who want structural due diligence beyond the pitch deck</li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Operators who want to decentralize their business across multiple jurisdictions and time zones</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-bold mt-12 mb-6 font-['Space_Grotesk']">What You Get</h3>
        
        <div className="space-y-8">
          <div>
            <p className="font-bold mb-2">Tier 1: The Leverage Audit ($2,000)</p>
            <p className="mb-2">A one-time, comprehensive review of your contracts, vendor dependencies, revenue model, and cap table using The Leverage System. You receive a written report with specific, actionable fixes.</p>
            <p className="text-sm text-[#1F2521]/70">Turnaround: 5–7 business days.</p>
          </div>
          
          <div>
            <p className="font-bold mb-2">Tier 2: The Sovereign Architecture Session ($5,000)</p>
            <p className="mb-2">A private strategy session where we apply both The Leverage System and The Global Clock System to your specific business. We map your internal control gaps and your external geographic exposure, then build a 90-day restructuring plan.</p>
            <p className="text-sm text-[#1F2521]/70">Includes: Pre-session questionnaire, 90-minute recorded session, written action plan, and one follow-up review.</p>
          </div>
          
          <div>
            <p className="font-bold mb-2">Tier 3: The Advisory Retainer ($10,000/month)</p>
            <p className="mb-2">Ongoing strategic partnership. Monthly briefings, contract reviews, cap table audits, and real-time advisory on critical decisions. Reserved for 3 clients maximum at any time.</p>
            <p className="text-sm text-[#1F2521]/70">Includes: Unlimited email access, monthly strategy calls, priority review of all contracts and deals.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 font-['Space_Grotesk']">How To Apply</h3>
        
        <p>Send an email to: <strong>sloane@globalleveragesystems.com</strong></p>
        
        <p>Include:</p>
        <ol className="space-y-2 list-decimal pl-6">
          <li className="pl-2">Your name and company</li>
          <li className="pl-2">Your annual revenue (approximate)</li>
          <li className="pl-2">Your Sovereignty Test score (if you have taken it)</li>
          <li className="pl-2">One sentence describing the structural problem you want to solve</li>
        </ol>
        
        <p>
          I personally review every application. If it is a fit, I will reply within 48 hours with a scheduling link. If it is not a fit, I will tell you honestly and point you to the right resource in The Armory.
        </p>
        
        <div className="space-y-4">
          <p className="font-bold">Do not send:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Generic partnership requests</li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Sponsorship pitches</li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">Requests for free advice</li>
          </ul>
        </div>
        
        <p className="italic text-[#1F2521]/80">This is a professional engagement for serious operators only.</p>

        <div className="mt-12 p-8 bg-[#1F2521]/5 rounded-lg border border-[#1F2521]/10">
          <p className="font-bold mb-6">Current Status: 🟢 <em>Accepting Applications for Q3 2026.</em></p>
          
          {isSubmitted ? (
            <div className="bg-[#E8734A]/10 border border-[#E8734A] text-[#E8734A] p-6 rounded-lg text-center">
              <h4 className="font-bold text-xl mb-2">Application Received.</h4>
              <p>We will review your submission and contact you if there is a strategic fit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h4 className="font-bold text-xl mb-6 font-['Space_Grotesk']">Application Form</h4>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-[#E8734A]">Name / Company</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-[#1F2521]/20 rounded p-3 text-[#1F2521] focus:outline-none focus:border-[#E8734A] transition-colors"
                  placeholder="John Doe / Acme Corp"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-[#E8734A]">Current Annual Revenue</label>
                <select 
                  required
                  value={formData.revenue}
                  onChange={e => setFormData({...formData, revenue: e.target.value})}
                  className="w-full bg-white border border-[#1F2521]/20 rounded p-3 text-[#1F2521] focus:outline-none focus:border-[#E8734A] transition-colors"
                >
                  <option value="">Select Range</option>
                  <option value="<1M">Under $1M</option>
                  <option value="1M-5M">$1M - $5M</option>
                  <option value="5M-20M">$5M - $20M</option>
                  <option value="20M+">$20M+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-[#E8734A]">Your Biggest S.P.O.F. (Single Point of Failure)</label>
                <textarea 
                  required
                  value={formData.spof}
                  onChange={e => setFormData({...formData, spof: e.target.value})}
                  className="w-full bg-white border border-[#1F2521]/20 rounded p-3 text-[#1F2521] focus:outline-none focus:border-[#E8734A] transition-colors h-24 resize-none"
                  placeholder="e.g., We rely on a single platform for 80% of our distribution..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-[#E8734A]">Why do you need GLS intelligence right now?</label>
                <textarea 
                  required
                  value={formData.reason}
                  onChange={e => setFormData({...formData, reason: e.target.value})}
                  className="w-full bg-white border border-[#1F2521]/20 rounded p-3 text-[#1F2521] focus:outline-none focus:border-[#E8734A] transition-colors h-24 resize-none"
                  placeholder="Briefly explain your current strategic bottleneck..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#E8734A] text-white px-6 py-4 rounded font-bold hover:bg-[#d66239] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
        
        <div className="pt-12 mt-12 border-t border-[#1F2521]/20 italic text-[#1F2521]/70">
          Clocks tick. Sovereigns decide the rhythm.
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage = () => (
  <div className="pt-48 pb-32 px-6 max-w-3xl mx-auto bg-[#F8F5F0] text-[#1F2521] min-h-screen">
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 font-['Space_Grotesk']">Your Data Sovereignty.</h1>
    <h2 className="text-xl md:text-2xl mb-12 text-[#1F2521]/80">We respect your privacy as a matter of structural law.</h2>
    
    <div className="space-y-6 text-lg leading-relaxed">
      <p>At Global Leverage Systems, we believe sovereignty begins with data.</p>
      <ol className="space-y-6 list-decimal pl-6">
        <li className="pl-2">
          <strong>Ownership:</strong> We do not own your data; you do. We do not sell, rent, or lease our subscriber list to any third-party "clocks."
        </li>
        <li className="pl-2">
          <strong>Collection:</strong> We collect only what is necessary to deliver your dispatches and maintain your community access.
        </li>
        <li className="pl-2">
          <strong>Security:</strong> Our systems are architected to prevent unauthorized access. If you choose to leave the GLS ecosystem, your data is wiped from our "gears" immediately.
        </li>
        <li className="pl-2">
          <strong>Sovereignty:</strong> You have the right to request a full export of your data at any time.
        </li>
      </ol>
      
      <div className="pt-12 mt-12 border-t border-[#1F2521]/20 italic text-[#1F2521]/70">
        Clocks tick. Sovereigns decide the rhythm.
      </div>
    </div>
  </div>
);

export const TermsOfServicePage = () => (
  <div className="pt-48 pb-32 px-6 max-w-3xl mx-auto bg-[#F8F5F0] text-[#1F2521] min-h-screen">
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 font-['Space_Grotesk']">Rules of the System.</h1>
    <h2 className="text-xl md:text-2xl mb-12 text-[#1F2521]/80">Agreements between sovereigns.</h2>
    
    <div className="space-y-6 text-lg leading-relaxed">
      <p>By entering the Global Leverage Systems ecosystem, you agree to the following:</p>
      <ol className="space-y-6 list-decimal pl-6">
        <li className="pl-2">
          <strong>Intellectual Property:</strong> All GLS Dispatches, Frameworks, and Blueprints are proprietary. You may apply them to your business, but you may not resell the gears.
        </li>
        <li className="pl-2">
          <strong>No Guarantee of Outcome:</strong> We provide the blueprints; you must build the house. Business involves risk. Sovereign decision-making is your responsibility.
        </li>
        <li className="pl-2">
          <strong>The Inner Circle:</strong> Membership is a privilege, not a right. We reserve the right to stop the clock for any member who disrupts the signal-to-noise ratio of the boardroom.
        </li>
        <li className="pl-2">
          <strong>Jurisdiction:</strong> Any structural disputes will be settled under the laws of [Your Jurisdiction], the home of our master clock.
        </li>
      </ol>
      
      <div className="pt-12 mt-12 border-t border-[#1F2521]/20 italic text-[#1F2521]/70">
        Clocks tick. Sovereigns decide the rhythm.
      </div>
    </div>
  </div>
);

export const CookiePolicyPage = () => (
  <div className="pt-48 pb-32 px-6 max-w-3xl mx-auto bg-[#F8F5F0] text-[#1F2521] min-h-screen">
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 font-['Space_Grotesk']">Digital Footprints.</h1>
    <h2 className="text-xl md:text-2xl mb-12 text-[#1F2521]/80">Transparency in how we observe the rhythm.</h2>
    
    <div className="space-y-6 text-lg leading-relaxed">
      <p>We use cookies to understand how Sovereigns interact with our platform.</p>
      <ul className="space-y-4 list-none pl-0">
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Essential Cookies:</strong> Necessary for you to log in to The Inner Circle and access The Armory.
        </li>
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Performance Cookies:</strong> Allow us to see which Dispatches are providing the most value so we can optimize the signal.
        </li>
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#E8734A] before:font-bold">
          <strong>Third-Party Cookies:</strong> We use minimal third-party tools (like Stripe for payments). Their clocks run alongside ours.
        </li>
      </ul>
      <p className="mt-8">
        You can disable cookies in your browser settings, but some "gears" of the site may stop turning.
      </p>
      
      <div className="pt-12 mt-12 border-t border-[#1F2521]/20 italic text-[#1F2521]/70">
        Clocks tick. Sovereigns decide the rhythm.
      </div>
    </div>
  </div>
);
