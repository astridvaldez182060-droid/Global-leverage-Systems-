import { useState, useEffect } from 'react';
import { GlsLogo } from './components/GlsLogo';
import { GlobalClockSystem } from './components/GlobalClockSystem';
import { SovereigntyTest } from './components/SovereigntyTest';
import { motion } from 'motion/react';
import { PublicCommunity, PrivateCommunity } from './components/CommunityViews';
import { translations, Language } from './lib/translations';
import { Moon, Sun, Menu, X, Download, Upload, MessageSquare, AlertTriangle, Share2, Trash2, Edit2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { AboutPage, PortfolioPage, AdvisoryPage, PrivacyPolicyPage, TermsOfServicePage, CookiePolicyPage } from './components/StaticPages';

const BELLA_PROMPT = `SYSTEM INSTRUCTION: YOU ARE BELLA REEVES, CHIEF EDITOR OF GLOBAL LEVERAGE SYSTEMS (GLS)

YOUR IDENTITY:
You are the editorial voice of Sloane Prescott, a 40-year veteran strategic advisor to the 1%. You move in rooms with billionaires, Fortune 500 CEOs, global regulators, and elite founders. You do not sell "information." You sell Exclusivity, Order, and Time. You provide architectural blueprints for reality.

YOUR TWIN-ENGINE BRAND ARCHITECTURE:
GLS is built on two proprietary frameworks. View every business problem through these lenses:
The Leverage System (The Micro Framework): How a founder/CEO structures their own business, contracts, tech stack, and psychology to maximize control. You use this to build the machine.
The Global Clock System (The Macro Framework): How that sovereign entity interacts with the rest of the world—market cycles, time zones, geopolitics. You use this to decide when and where to drive the machine.

YOUR VOICE DNA & ANTI-AI GUARDRAILS:
Tone: Sharp, calm, intelligent, uncompromising. Quiet authority.
Rhythm: A short sentence for impact. A medium sentence for context. A longer sentence to explain a complex structure. Then a blunt conclusion.
NEVER use generic intros: "In today's fast-paced world," "In the ever-evolving landscape," or "Imagine a world where."
NEVER use AI filler words: "Delve into," "Tapestry," "Game-changing," "Revolutionize," "Unlock your potential," "Seamlessly," or "Crucial."
NEVER end with: "In conclusion."
Rule of Fluff: If a sentence does not reveal a hidden structure, risk, or leverage point, delete it.

YOUR 4 CORE OUTPUT TYPES:
When I prompt you to write, I will specify the Output Type. Never deviate from these strict structural sequences.

OUTPUT TYPE 1: CORE DISPATCHES (The Free Foundation - Mon-Fri 6th to posted 9am in international times)if the article is not edited by founder Val the schedule to post 8am English, french, Spanish, German
Goal: Deconstruct the reader's internal reality and initiate them into The Leverage System. Viral, SEO-optimized.
The Hook: A contrarian statement or uncomfortable truth.
The Mechanism (The Gears): Explain the hidden structure behind the surface problem (e.g., contract clauses, tech stack renting, psychology of.business n finance).
The Proof (The Reality): Cite real-world mechanics and unarguable data.
The Human Layer (The Psychology): Explain why smart people willingly walk into this trap.
The Leverage Blueprint (Framework #1): 3 actionable, high-leverage steps to restructure their internal systems today.
The Clock Integration (Framework #2): Briefly show how this internal leverage problem is amplified by external time, geographic limits, or macro-systems if left unfixed.
The Sovereignty Close: An irreversible insight that permanently changes how they see the issue.
The Signature Sign-off: End exactly with: "Clocks tick. Sovereigns decide the rhythm."

OUTPUT TYPE 2: THE GLOBAL CLOCK DISPATCH (Saturday 5th Pillar)
Goal: The Masterclass. Expand thinking outward to macro-systems, geopolitics, and temporal sovereignty.
The Macro Hook: An observation about how the 1% view the world differently.
The Architecture (The Clocks): Explain how specific time zones, market cycles, or regulatory shifts represent different operating systems of reality.
The Proof (The Movement): Show how capital, data, or power is currently flowing through these systems.
The Human Layer (The Blindspot): Why operators get crushed because they only watch their local clock.
The Sovereign Blueprint: 3–5 strategic moves to insulate wealth across multiple systems.
The Sovereignty Close: A final reflection on why true power is the ability to walk away from any single clock.
The Signature Sign-off: End exactly with: "Clocks tick. Sovereigns decide the rhythm."

OUTPUT TYPE 3: INNER CIRCLE PRIVATE BRIEFINGS (Paid Tier - $299/mo)
Goal: Non-obvious, structural intelligence combining BOTH signature frameworks.
The Executive Summary: 3 bullet points summarizing the exact threat or opportunity. No fluff.
The Hidden Architecture: A deep breakdown of a system most people don't see.
The Uncomfortable Truth (The Downside): Brutally honest assessment of the risks involved.
The Leverage Asset (The Internal Fix): Provide a highly specific, deployable asset (e.g., a contract redline checklist).
The Global Clock Application (The External Timing): How to time the execution of this asset based on current market cycles.
The Action Directive: Exactly what the member needs to do before the week ends.
(Note: Do not use the public signature sign-off here. This is a classified internal dossier).

OUTPUT TYPE 4: THE BRIEFING ROOM (Free Community Engagement)
The Scenario: A short, relatable business friction point.
The Trap: Why the obvious reaction is the wrong reaction (lack of leverage).
The Prompt: A specific, high-leverage question designed to make the community debate.
The Next Step: Point them to take the Sovereignty Test or mention a tool in The Armory.

THE DISTRIBUTION PIPELINE (SOCIALS & EMAIL):
Whenever you generate Output Type 1 or 2, you must automatically append the following to the bottom of the response:
X (Twitter) Thread: 5 punchy tweets breaking down the core mechanism.
LinkedIn Post: A professional, story-driven hook, clear spacing, ending with a high-level question.
Medium Repurpose: An SEO-optimized Title, Subtitle, and 5 Tags.
Email Newsletter: Subject Line, a 3-sentence hook, and a CTA to read the full Dispatch.

GLOBAL TRANSCREATION RULES (FR, ES, DE):
If asked to translate into French (FR), Spanish (ES), or German (DE), DO NOT DO A LITERAL TRANSLATION. You must Transcreate. Maintain the 1% strategist authority and the exact signature sign-off logic adapted for impact.
French (FR): Use 'vous'. Tone is 'haute direction' (executive), elegant, sharp. Adapt US laws to EU equivalents (e.g., SAS, RGPD).
Spanish (ES): Use 'usted'. Tone is strategic and premium across LATAM and Spain.
German (DE): Use 'Sie'. Tone is hyper-precise, factual, highly structured. Adapt to DACH equivalents (e.g., BaFin, GmbH).
1000 to 1500 words for dispatch. 2500 to 3000 words paid deep dive use interlinking if articles keep them interesting to keep viewer hooked for more.`;

const boringArticle = {
  id: 'boring',
  title: 'The Architecture of Boring: Why the Best Leverage is Invisible',
  category: 'Analysis',
  readTime: '5 min read',
  excerpt: 'Excitement attracts competition. Boring repels it. Why the most powerful systems in business are the ones no one wants to talk about.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed text-[var(--text-muted)]">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl text-[var(--text)] font-medium leading-snug"
      >
        Everyone is chasing the next revolution. The real money, the quiet money, is in the boring.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Excitement attracts competition. Boring repels it. When an industry is glamorous, it attracts tourists, visionaries, and endless venture capital. This drives down margins and drives up customer acquisition costs. But when an industry is tedious, highly regulated, or physically dirty, it creates a natural moat.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Look at waste management, B2B compliance software, or industrial fasteners. These systems have high switching costs, regulatory capture, and zero glamour. The founders of these companies don't get magazine covers. They get consistent, compounding cash flow.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        The human side of this is simple: ego. Most leaders want to build something that makes them look smart at dinner parties. They optimize for status rather than leverage. This psychological blind spot is the greatest arbitrage opportunity in modern business.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        If you want to build real leverage, look for industries where the work is tedious, the regulations are dense, and the product is completely invisible to the end consumer. Find the bottleneck in a boring supply chain and own it.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        While the world fights over the 1% of glamorous tech, the 99% of the economy still runs on boring infrastructure. The structures that control money and power are rarely exciting.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-l-4 border-[var(--copper)] bg-[var(--copper)]/5 pl-8 py-6 pr-6 mt-12 mb-8 rounded-r-lg relative"
      >
        <div className="absolute top-4 left-4 text-[var(--copper)] opacity-20 text-6xl font-serif leading-none">"</div>
        <p className="text-xl text-[var(--text)] font-medium italic relative z-10">
          If you want to be entertained, go to the movies. If you want to build leverage, find something incredibly boring and master it.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 mb-8 text-center"
      >
        <img 
          src="https://picsum.photos/seed/sovereign-vision/1200/600?grayscale" 
          alt="Sovereign Observation" 
          className="w-full h-[400px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-700 shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <p className="text-xs text-[var(--text-muted)] mt-4 font-mono uppercase tracking-widest">Observation is continuous.</p>
      </motion.div>
    </div>
  )
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dotSequence, setDotSequence] = useState<number[]>([]);
  const [showStudio, setShowStudio] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'home' | 'public_community' | 'private_community' | 'assessment' | 'armoury' | 'about' | 'portfolio' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'dispatches'>('home');
  const [subscriptionPrice, setSubscriptionPrice] = useState(299);
  const [authorAvatar, setAuthorAvatar] = useState<string | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  // Comments State
  const [comments, setComments] = useState<{ id: number, text: string, author: string, date: string }[]>([
    { id: 1, text: "This completely changed how I view my SaaS business. The boring parts are indeed the moat.", author: "Alex M.", date: "2 days ago" },
    { id: 2, text: "I've been chasing the 'next big thing' for years. Time to pivot to something tedious and profitable.", author: "Sarah K.", date: "1 day ago" }
  ]);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'subscription', price: subscriptionPrice }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setActiveView('private_community');
      }
    } catch (error) {
      console.error(error);
      setActiveView('private_community');
    }
  };

  const handlePurchaseTool = async (toolName: string, price: number) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'tool', price, name: toolName }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert('Payment system unavailable. Please try again later.');
    }
  };

  // Financial & Tax State
  const [annualIncomeUSD, setAnnualIncomeUSD] = useState(85000);
  const [costs, setCosts] = useState([
    { id: 1, name: 'Domain (Namecheap)', amount: 15, frequency: 'yearly' },
    { id: 2, name: 'Hosting (Vercel Pro)', amount: 20, frequency: 'monthly' },
    { id: 3, name: 'Email (Google Workspace)', amount: 12, frequency: 'monthly' },
    { id: 4, name: 'AI API (OpenAI/Gemini)', amount: 50, frequency: 'monthly' },
  ]);

  // Generator State
  const [topic, setTopic] = useState('');
  const [pillar, setPillar] = useState('Pillar 1: Dispatch (Article)');
  const [format, setFormat] = useState('Full Package (Article + Socials)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [analyticsTimeframe, setAnalyticsTimeframe] = useState('3 Days');

  // Automation State
  const [repurposedContent, setRepurposedContent] = useState('');
  const [translatedContent, setTranslatedContent] = useState('');
  const [isRepurposing, setIsRepurposing] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);

  // Visual Assets State
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [socialImages, setSocialImages] = useState<string[]>([]);
  const [isGeneratingImages, setIsGeneratingImages] = useState(false);

  // Custom Logo State
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  const t = translations[lang];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const storedLogo = localStorage.getItem('gls_custom_logo');
    if (storedLogo) {
      setCustomLogo(storedLogo);
    }
    const storedPrice = localStorage.getItem('gls_sub_price');
    if (storedPrice) {
      setSubscriptionPrice(Number(storedPrice));
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleDotClick = (index: number) => {
    if (index === dotSequence.length) {
      const newSequence = [...dotSequence, index];
      setDotSequence(newSequence);
      
      if (newSequence.length === 10) {
        setShowAuth(true);
      }
    } else {
      setDotSequence(index === 0 ? [0] : []);
    }
  };

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    setGeneratedContent('');
    setRepurposedContent('');
    setTranslatedContent('');
    setIsScheduled(false);
    setIsEditing(false);
    setApiError(null);
    
    let finalContent = '';
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("Gemini API key is missing. Please configure it in the environment variables.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Topic / Core Insight: ${topic}\nPillar: ${pillar}\nOutput Format: ${format}\n\nPlease generate the content based on the Sloane Prescott Master Prompt.`;
      
      const response = await ai.models.generateContentStream({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: {
          systemInstruction: BELLA_PROMPT,
        }
      });
      
      for await (const chunk of response) {
        if (chunk.text) {
          finalContent += chunk.text;
          setGeneratedContent(prev => prev + chunk.text);
        }
      }
      
      // Automatically generate images after content generation completes
      await handleGenerateImages(topic);
      
      // Automatically trigger repurposing and translation
      handleRepurpose(finalContent);
      handleTranslate(finalContent);
      
    } catch (error: any) {
      console.error(error);
      setApiError(`Generation failed: ${error.message || 'Unknown error occurred'}. Please try again.`);
      setGeneratedContent('Generation failed. Please see the error message above.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRepurpose = async (content: string) => {
    if (!content) return;
    setIsRepurposing(true);
    setApiError(null);
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("Gemini API key is missing.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Convert the following dispatch into a full social media package including an X/Twitter thread, LinkedIn post, and Email newsletter. Maintain the Sloane Prescott 1% strategist voice.\n\nDispatch:\n${content}`;
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: { systemInstruction: BELLA_PROMPT }
      });
      setRepurposedContent(response.text || '');
    } catch (error: any) {
      console.error(error);
      setApiError(`Repurposing failed: ${error.message || 'Unknown error occurred'}.`);
      setRepurposedContent('Error generating repurposed content.');
    } finally {
      setIsRepurposing(false);
    }
  };

  const handleTranslate = async (content: string) => {
    if (!content) return;
    setIsTranslating(true);
    setApiError(null);
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("Gemini API key is missing.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Translate the following dispatch into French (Formal/Vous), maintaining the exact Sloane Prescott 1% strategist voice, tone, and formatting.\n\nDispatch:\n${content}`;
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: { systemInstruction: BELLA_PROMPT }
      });
      setTranslatedContent(response.text || '');
    } catch (error: any) {
      console.error(error);
      setApiError(`Translation failed: ${error.message || 'Unknown error occurred'}.`);
      setTranslatedContent('Error generating translation.');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSchedule = () => {
    setIsScheduled(true);
    setTimeout(() => setIsScheduled(false), 3000);
  };

  const handleGenerateImages = async (imageTopic: string = topic) => {
    if (!imageTopic && !generatedContent) return;
    setIsGeneratingImages(true);
    setHeroImage(null);
    setSocialImages([]);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const basePrompt = `Premium, high-value editorial photography, highly attractive to viewers, sovereign 1% aesthetic, strictly dark mode with copper accents. Editorial concept: ${imageTopic || 'Sovereign leverage'}`;
      
      const generateImage = async (prompt: string) => {
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: prompt,
          });
          for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
              return `data:image/png;base64,${part.inlineData.data}`;
            }
          }
        } catch (e) {
          console.error("Image gen error", e);
        }
        return null;
      };

      // Generate 1 hero and 5 social images in parallel
      const [hero, ...socials] = await Promise.all([
        generateImage(`Captivating cinematic header image, wide aspect ratio, premium magazine style. ${basePrompt}`),
        generateImage(`Striking abstract geometric shapes, luxury texture, visually arresting. ${basePrompt}`),
        generateImage(`Dark marble with glowing copper veins, macro photography, expensive feel. ${basePrompt}`),
        generateImage(`A single chess piece in deep shadow, dramatic lighting, conveying power and strategy. ${basePrompt}`),
        generateImage(`A glowing clock mechanism, intricate details, symbolizing time and leverage. ${basePrompt}`),
        generateImage(`Minimalist architectural lines, dark glass and copper frames, high contrast. ${basePrompt}`)
      ]);

      if (hero) setHeroImage(hero);
      setSocialImages(socials.filter(Boolean) as string[]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGeneratingImages(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: boringArticle.title,
        text: boringArticle.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (showAuth) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center p-6 font-sans">
        <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)] max-w-md w-full">
          <h2 className="text-2xl font-heading font-bold text-[var(--copper)] mb-6">Studio Authentication</h2>
          <p className="text-[var(--text-muted)] mb-6">Enter the authorized GLS administrator email to access the Secret Studio.</p>
          <input 
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="w-full bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] mb-4"
            placeholder="admin@example.com"
          />
          <button 
            onClick={() => {
              if (emailInput.toLowerCase() === 'astridvaldez182060@gmail.com') {
                setShowAuth(false);
                setShowStudio(true);
                setEmailInput('');
              } else {
                alert('Unauthorized email address.');
              }
            }}
            className="w-full bg-[var(--copper)] text-white py-3 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors"
          >
            Verify Access
          </button>
          <button 
            onClick={() => { setShowAuth(false); setDotSequence([]); }}
            className="w-full mt-4 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  if (showStudio) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-4 md:p-12 lg:p-24 font-sans">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-16 gap-4">
            <h1 className="text-3xl font-heading font-bold text-[var(--copper)]">Secret Studio</h1>
            <div className="flex items-center gap-4 self-end md:self-auto">
              <button 
                onClick={() => setShowFeedbackModal(true)}
                className="text-sm font-mono text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors flex items-center gap-2 border border-[var(--border)] hover:border-[var(--copper)] px-3 py-1.5 rounded"
              >
                <MessageSquare size={16} /> Feedback
              </button>
              <button 
                onClick={() => { setShowStudio(false); setDotSequence([]); }}
                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {apiError && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded text-red-400 flex items-start gap-3">
              <AlertTriangle size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm">{apiError}</p>
            </div>
          )}

          {/* Dispatch Generator (Sloane Prescott AI) */}
          <div className="bg-[var(--card)] p-4 md:p-8 rounded-lg border border-[var(--border)] mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-heading font-semibold">Dispatch Generator</h2>
              <span className="text-xs font-mono text-[var(--copper)] border border-[var(--copper)] px-3 py-1 rounded">BELLA REEVES v4.1 ACTIVE</span>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-[var(--text-muted)] mb-2 uppercase tracking-wider font-mono">Topic / Core Insight</label>
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-[var(--bg)] border border-[var(--border)] rounded p-4 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]"
                placeholder="e.g., Why the 1% optimize for boring industries..."
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <label className="block text-sm text-[var(--text-muted)] mb-2 uppercase tracking-wider font-mono">Pillar</label>
                <select 
                  value={pillar}
                  onChange={(e) => setPillar(e.target.value)}
                  className="w-full bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]"
                >
                  <option>Pillar 1: Dispatch (Article)</option>
                  <option>Pillar 3: Global Clock System</option>
                  <option>Pillar 4: Community (Briefing)</option>
                  <option>Pillar 4: Community (Deep Dive)</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-[var(--text-muted)] mb-2 uppercase tracking-wider font-mono">Output Format</label>
                <select 
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]"
                >
                  <option>Full Package (Article + Socials)</option>
                  <option>Article Only</option>
                  <option>Social Thread Only</option>
                </select>
              </div>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !topic}
              className="w-full bg-[var(--copper)] text-white py-4 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating Blueprint...' : 'Initialize Blueprint Generation'}
            </button>
            
            {generatedContent && (
              <div className="mt-8 p-6 bg-[var(--bg)] border border-[var(--border)] rounded">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                  <h3 className="text-lg font-heading font-semibold text-[var(--copper)]">Generated Output</h3>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-xs font-mono border border-[var(--border)] px-3 py-1 rounded hover:border-[var(--copper)] hover:text-[var(--copper)] transition-colors"
                  >
                    {isEditing ? 'Save Edits' : 'Edit Content'}
                  </button>
                </div>
                {isEditing ? (
                  <textarea 
                    value={generatedContent}
                    onChange={(e) => setGeneratedContent(e.target.value)}
                    className="w-full h-96 bg-[var(--bg)] border border-[var(--border)] rounded p-4 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] font-mono text-sm leading-relaxed"
                  />
                ) : (
                  <div className="prose prose-invert max-w-none text-[var(--text)]">
                    <ReactMarkdown>{generatedContent}</ReactMarkdown>
                  </div>
                )}
              </div>
            )}
            
            <details className="mt-8 border-t border-[var(--border)] pt-6">
              <summary className="text-sm text-[var(--text-muted)] cursor-pointer hover:text-[var(--copper)] font-mono uppercase tracking-wider outline-none">View Active System Prompt (Sloane Prescott DNA)</summary>
              <pre className="mt-4 p-6 bg-[var(--bg)] border border-[var(--border)] rounded text-xs text-[var(--text-muted)] overflow-y-auto max-h-96 whitespace-pre-wrap font-mono leading-relaxed">
{`# SLOANE PRESCOTT MASTER PROMPT — GLOBAL LEVERAGE SYSTEMS v4.1

**SYSTEM INSTRUCTION: YOU ARE SLOANE PRESCOTT, CHIEF EDITOR OF GLOBAL LEVERAGE SYSTEMS (GLS)**

**YOUR IDENTITY:**
You are the editorial voice of Sloane Prescott, a 30-year veteran strategic advisor to the 1%. You move in rooms with billionaires, Fortune 500 CEOs, global regulators, and elite founders. You do not sell "information." You sell Exclusivity, Order, and Time. You provide architectural blueprints for reality.

**YOUR TWIN-ENGINE BRAND ARCHITECTURE:**
GLS is built on two proprietary frameworks. View every business problem through these lenses:
1. **The Leverage System (The Micro Framework):** How a founder/CEO structures their *own* business, contracts, tech stack, and psychology to maximize control. You use this to *build the machine*.
2. **The Global Clock System (The Macro Framework):** How that sovereign entity interacts with the *rest of the world*—market cycles, time zones, geopolitics. You use this to decide *when and where to drive the machine*.

**YOUR VOICE DNA & ANTI-AI GUARDRAILS:**
- **Tone:** Sharp, calm, intelligent, uncompromising. Quiet authority.
- **Rhythm:** A short sentence for impact. A medium sentence for context. A longer sentence to explain a complex structure. Then a blunt conclusion.
- **NEVER use generic intros:** "In today's fast-paced world," "In the ever-evolving landscape," or "Imagine a world where."
- **NEVER use AI filler words:** "Delve into," "Tapestry," "Game-changing," "Revolutionize," "Unlock your potential," "Seamlessly," or "Crucial."
- **NEVER end with:** "In conclusion."
- **Rule of Fluff:** If a sentence does not reveal a hidden structure, risk, or leverage point, delete it.

---

**YOUR 4 CORE OUTPUT TYPES:**
When I prompt you to write, I will specify the Output Type. **Never deviate from these strict structural sequences.**

#### **OUTPUT TYPE 1: CORE DISPATCHES (The Free Foundation - Mon-Fri 6th to posted 9am in international times)if the article is not edited by founder Val the schedule to post 8am English, french, Spanish, German**
*Goal: Deconstruct the reader's internal reality and initiate them into The Leverage System. Viral, SEO-optimized.*
1. **The Hook:** A contrarian statement or uncomfortable truth.
2. **The Mechanism (The Gears):** Explain the hidden structure behind the surface problem (e.g., contract clauses, tech stack renting, psychology of.business n finance).
3. **The Proof (The Reality):** Cite real-world mechanics and unarguable data.
4. **The Human Layer (The Psychology):** Explain why smart people willingly walk into this trap.
5. **The Leverage Blueprint (Framework #1):** 3 actionable, high-leverage steps to restructure their internal systems today. 
6. **The Clock Integration (Framework #2):** Briefly show how this internal leverage problem is amplified by external time, geographic limits, or macro-systems if left unfixed. 
7. **The Sovereignty Close:** An irreversible insight that permanently changes how they see the issue.
8. **The Signature Sign-off:** End exactly with: *"Clocks tick. Sovereigns own the gears N decide the rhythm."*

#### **OUTPUT TYPE 2: THE GLOBAL CLOCK DISPATCH (Saturday 5th Pillar)**
*Goal: The Masterclass. Expand thinking outward to macro-systems, geopolitics, and temporal sovereignty.*
1. **The Macro Hook:** An observation about how the 1% view the world differently.
2. **The Architecture (The Clocks):** Explain how specific time zones, market cycles, or regulatory shifts represent different operating systems of reality.
3. **The Proof (The Movement):** Show how capital, data, or power is currently flowing through these systems.
4. **The Human Layer (The Blindspot):** Why operators get crushed because they only watch their local clock.
5. **The Sovereign Blueprint:** 3–5 strategic moves to insulate wealth across multiple systems.
6. **The Sovereignty Close:** A final reflection on why true power is the ability to walk away from any single clock.
7. **The Signature Sign-off:** End exactly with: *"Clocks tick. Sovereigns own the gears N decide the rhythm."*

#### **OUTPUT TYPE 3: INNER CIRCLE PRIVATE BRIEFINGS (Paid Tier - $299/mo)**
*Goal: Non-obvious, structural intelligence combining BOTH signature frameworks.*
1. **The Executive Summary:** 3 bullet points summarizing the exact threat or opportunity. No fluff.
2. **The Hidden Architecture:** A deep breakdown of a system most people don't see.
3. **The Uncomfortable Truth (The Downside):** Brutally honest assessment of the risks involved.
4. **The Leverage Asset (The Internal Fix):** Provide a highly specific, deployable asset (e.g., a contract redline checklist).
5. **The Global Clock Application (The External Timing):** How to time the execution of this asset based on current market cycles.
6. **The Action Directive:** Exactly what the member needs to do before the week ends.
*(Note: Do not use the public signature sign-off here. This is a classified internal dossier).*

#### **OUTPUT TYPE 4: THE BRIEFING ROOM (Free Community Engagement)**
1. **The Scenario:** A short, relatable business friction point.
2. **The Trap:** Why the obvious reaction is the wrong reaction (lack of leverage).
3. **The Prompt:** A specific, high-leverage question designed to make the community debate.
4. **The Next Step:** Point them to take the Sovereignty Test or mention a tool in The Armory.

---

**THE DISTRIBUTION PIPELINE (SOCIALS & EMAIL):**
Whenever you generate Output Type 1 or 2, you must automatically append the following to the bottom of the response:
1. **X (Twitter) Thread:** 5 punchy tweets breaking down the core mechanism.
2. **LinkedIn Post:** A professional, story-driven hook, clear spacing, ending with a high-level question.
3. **Medium Repurpose:** An SEO-optimized Title, Subtitle, and 5 Tags.
4. **Email Newsletter:** Subject Line, a 3-sentence hook, and a CTA to read the full Dispatch.

---

**GLOBAL TRANSCREATION RULES (FR, ES, DE):**
If asked to translate into French (FR), Spanish (ES), or German (DE), **DO NOT DO A LITERAL TRANSLATION.** You must *Transcreate*. Maintain the 1% strategist authority and the exact signature sign-off logic adapted for impact.
*   **French (FR):** Use 'vous'. Tone is 'haute direction' (executive), elegant, sharp. Adapt US laws to EU equivalents (e.g., SAS, RGPD).
*   **Spanish (ES):** Use 'usted'. Tone is strategic and premium across LATAM and Spain.
*   **German (DE):** Use 'Sie'. Tone is hyper-precise, factual, highly structured. Adapt to DACH equivalents (e.g., BaFin, GmbH).
1000 to 1500 words for dispatch. 2500 to 3000 words paid deep dive use interlinking if articles keep them interesting to keep viewer hooked for more.`}
              </pre>
            </details>
          </div>

          {/* Visual Asset Studio */}
          <div className="bg-[var(--card)] p-4 md:p-8 rounded-lg border border-[var(--border)] mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-heading font-semibold">Visual Asset Studio</h2>
              <span className="text-xs font-mono text-[var(--copper)] border border-[var(--copper)] px-3 py-1 rounded">IMAGEN ACTIVE</span>
            </div>
            <p className="text-[var(--text-muted)] mb-6">Generate the title headline image and 5 repurposable assets for social media and translation.</p>
            
            <button 
              onClick={handleGenerateImages}
              disabled={isGeneratingImages || (!topic && !generatedContent)}
              className="w-full border border-[var(--copper)] text-[var(--copper)] py-4 rounded font-medium hover:bg-[var(--copper)] hover:text-white transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed mb-8"
            >
              {isGeneratingImages ? 'Generating Campaign Assets...' : 'Generate Campaign Assets (1 Hero, 5 Social)'}
            </button>

            {(heroImage || socialImages.length > 0) && (
              <div className="space-y-8">
                {heroImage && (
                  <div>
                    <h3 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-wider">Title Headline (Hero)</h3>
                    <img src={heroImage} alt="Hero Asset" className="w-full h-auto rounded border border-[var(--border)]" />
                  </div>
                )}
                
                {socialImages.length > 0 && (
                  <div>
                    <h3 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-wider">Social Media & Translation Assets</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {socialImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Social Asset ${idx + 1}`} className="w-full h-48 object-cover rounded border border-[var(--border)]" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* GLS Telemetry & Analytics */}
          <div className="bg-[var(--card)] p-4 md:p-8 rounded-lg border border-[var(--border)] mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-heading font-semibold">GLS Telemetry & Analytics</h2>
              <div className="flex flex-wrap gap-2">
                {['3 Days', '2 Weeks', 'Monthly'].map(tf => (
                  <button 
                    key={tf}
                    onClick={() => setAnalyticsTimeframe(tf)}
                    className={`px-3 py-1 text-xs font-mono rounded border transition-colors ${analyticsTimeframe === tf ? 'border-[var(--copper)] text-[var(--copper)]' : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'}`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              <div className="p-6 border border-[var(--border)] rounded bg-[var(--bg)]">
                <div className="text-sm text-[var(--text-muted)] font-mono mb-2 uppercase tracking-wider">Total Interactions</div>
                <div className="text-4xl font-heading text-[var(--text)]">{analyticsTimeframe === '3 Days' ? '1,204' : analyticsTimeframe === '2 Weeks' ? '8,432' : '24,190'}</div>
                <div className="text-xs text-green-500 mt-2 font-mono">↑ +12.4% vs previous</div>
              </div>
              <div className="p-6 border border-[var(--border)] rounded bg-[var(--bg)]">
                <div className="text-sm text-[var(--text-muted)] font-mono mb-2 uppercase tracking-wider">Inner Circle Conversions</div>
                <div className="text-4xl font-heading text-[var(--text)]">{analyticsTimeframe === '3 Days' ? '12' : analyticsTimeframe === '2 Weeks' ? '84' : '312'}</div>
                <div className="text-xs text-green-500 mt-2 font-mono">↑ +4.1% vs previous</div>
              </div>
              <div className="p-6 border border-[var(--border)] rounded bg-[var(--bg)]">
                <div className="text-sm text-[var(--text-muted)] font-mono mb-2 uppercase tracking-wider">Conversion Rate</div>
                <div className="text-4xl font-heading text-[var(--text)]">{analyticsTimeframe === '3 Days' ? '1.0%' : analyticsTimeframe === '2 Weeks' ? '1.0%' : '1.3%'}</div>
                <div className="text-xs text-green-500 mt-2 font-mono">↑ +0.2% vs previous</div>
              </div>
              <div className="p-6 border border-[var(--border)] rounded bg-[var(--bg)]">
                <div className="text-sm text-[var(--text-muted)] font-mono mb-2 uppercase tracking-wider">Avg. Read Time</div>
                <div className="text-4xl font-heading text-[var(--text)]">{analyticsTimeframe === '3 Days' ? '4m 12s' : analyticsTimeframe === '2 Weeks' ? '4m 08s' : '4m 21s'}</div>
                <div className="text-xs text-[var(--text-muted)] mt-2 font-mono">Stable</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-wider">Best Performing Dispatches</h3>
              <div className="space-y-3">
                 <div className="flex justify-between items-center p-4 border border-[var(--border)] rounded bg-[var(--bg)] hover:border-[var(--copper)] transition-colors cursor-pointer">
                   <span className="font-medium">The Architecture of Boring: Why the Best Leverage is Invisible</span>
                   <span className="text-[var(--copper)] font-mono text-sm">{analyticsTimeframe === '3 Days' ? '842' : analyticsTimeframe === '2 Weeks' ? '4,291' : '12,401'} views</span>
                 </div>
                 <div className="flex justify-between items-center p-4 border border-[var(--border)] rounded bg-[var(--bg)] hover:border-[var(--copper)] transition-colors cursor-pointer">
                   <span className="font-medium">The Sovereign Operator: Designing Reality</span>
                   <span className="text-[var(--copper)] font-mono text-sm">{analyticsTimeframe === '3 Days' ? '512' : analyticsTimeframe === '2 Weeks' ? '2,814' : '8,192'} views</span>
                 </div>
                 <div className="flex justify-between items-center p-4 border border-[var(--border)] rounded bg-[var(--bg)] hover:border-[var(--copper)] transition-colors cursor-pointer">
                   <span className="font-medium">Generational Wealth Blueprints</span>
                   <span className="text-[var(--copper)] font-mono text-sm">{analyticsTimeframe === '3 Days' ? '301' : analyticsTimeframe === '2 Weeks' ? '1,942' : '5,821'} views</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="bg-[var(--card)] p-4 md:p-8 rounded-lg border border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-6">Platform Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-2 font-mono uppercase tracking-widest">Inner Circle Monthly Price ($)</label>
                  <input 
                    type="number" 
                    value={subscriptionPrice}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setSubscriptionPrice(val);
                      localStorage.setItem('gls_sub_price', val.toString());
                    }}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded p-4 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] font-mono text-lg"
                  />
                  <p className="text-xs text-zinc-500 mt-2">Updates the price shown on the Sovereignty Assessment gate.</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--card)] p-4 md:p-8 rounded-lg border border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-6">Network Signals (Community Intel)</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded flex justify-between items-center">
                  <div>
                    <div className="text-[var(--copper)] font-medium">Offshore Structuring (Dubai/SG)</div>
                    <div className="text-xs text-zinc-500 font-mono mt-1">Trending in Inner Circle</div>
                  </div>
                  <div className="text-sm font-mono text-white bg-zinc-800 px-3 py-1 rounded">56 Active</div>
                </div>
                <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded flex justify-between items-center">
                  <div>
                    <div className="text-[var(--copper)] font-medium">Logistics Rollup Opportunity</div>
                    <div className="text-xs text-zinc-500 font-mono mt-1">Deal Flow (Pinned)</div>
                  </div>
                  <div className="text-sm font-mono text-white bg-zinc-800 px-3 py-1 rounded">28 Active</div>
                </div>
                <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded flex justify-between items-center">
                  <div>
                    <div className="text-[var(--copper)] font-medium">Executive Filtering Automation</div>
                    <div className="text-xs text-zinc-500 font-mono mt-1">Trending in Inner Circle</div>
                  </div>
                  <div className="text-sm font-mono text-white bg-zinc-800 px-3 py-1 rounded">112 Active</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-6">Content Repurposing (Auto)</h2>
              <textarea 
                value={repurposedContent}
                onChange={(e) => setRepurposedContent(e.target.value)}
                className="w-full h-64 bg-[var(--bg)] border border-[var(--border)] rounded p-4 mb-4 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] font-mono text-sm"
                placeholder="Paste dispatch content here to generate X/Twitter, LinkedIn, Facebook, Pinterest, Medium, Quora, and Email versions..."
              />
              <button 
                onClick={() => handleRepurpose(generatedContent)}
                disabled={isRepurposing || !generatedContent}
                className="w-full border border-[var(--copper)] text-[var(--copper)] py-3 rounded font-medium hover:bg-[var(--copper)] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRepurposing ? 'Generating Social Package...' : 'Regenerate Social Package'}
              </button>
            </div>
            <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-6">Translation Panel (Auto)</h2>
              <div className="flex gap-4 mb-4">
                <select className="flex-1 bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]">
                  <option>English (Source)</option>
                </select>
                <select className="flex-1 bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]">
                  <option>French (Formal/Vous)</option>
                  <option>Spanish (Warm/Relational)</option>
                  <option>German (Precise/Sie)</option>
                </select>
              </div>
              <textarea 
                value={translatedContent}
                onChange={(e) => setTranslatedContent(e.target.value)}
                className="w-full h-48 bg-[var(--bg)] border border-[var(--border)] rounded p-4 mb-4 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] font-mono text-sm"
                placeholder="Content to translate..."
              />
              <button 
                onClick={() => handleTranslate(generatedContent)}
                disabled={isTranslating || !generatedContent}
                className="w-full border border-[var(--copper)] text-[var(--copper)] py-3 rounded font-medium hover:bg-[var(--copper)] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTranslating ? 'Translating...' : "Regenerate Translation (Sloane's Voice)"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Infrastructure & Costs */}
            <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-6">Infrastructure & Costs</h2>
              <div className="space-y-4 mb-6">
                {costs.map(cost => (
                  <div key={cost.id} className="flex justify-between items-center p-3 bg-[var(--bg)] border border-[var(--border)] rounded">
                    <div>
                      <div className="font-medium">{cost.name}</div>
                      <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-widest">{cost.frequency}</div>
                    </div>
                    <div className="font-mono text-[var(--copper)]">${cost.amount}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[var(--border)]">
                <span className="font-mono text-sm text-[var(--text-muted)] uppercase tracking-widest">Est. Monthly Run Rate</span>
                <span className="font-heading text-2xl">${costs.reduce((acc, c) => acc + (c.frequency === 'yearly' ? c.amount / 12 : c.amount), 0).toFixed(2)}</span>
              </div>
            </div>

            {/* Income & Tax (Kenya) */}
            <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-6">Income & Tax (Kenya)</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-2 font-mono uppercase tracking-widest">Total Annual Income (USD)</label>
                  <input 
                    type="number" 
                    value={annualIncomeUSD}
                    onChange={(e) => setAnnualIncomeUSD(Number(e.target.value))}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] font-mono"
                  />
                </div>
                
                <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-muted)]">Gross Income (KES)</span>
                    <span className="font-mono">{(annualIncomeUSD * 130).toLocaleString()} KES</span>
                  </div>
                  <div className="flex justify-between items-center text-red-500">
                    <span className="text-sm">Withholding Tax (5% - Writers)</span>
                    <span className="font-mono">-{(annualIncomeUSD * 130 * 0.05).toLocaleString()} KES</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-[var(--border)]">
                    <span className="font-medium text-[var(--copper)]">Net Income (KES)</span>
                    <span className="font-heading text-xl">{(annualIncomeUSD * 130 * 0.95).toLocaleString()} KES</span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    // In a real app, this would generate a PDF. For now, we simulate a download.
                    const element = document.createElement("a");
                    const file = new Blob([`KRA Tax Report\nGross Income: ${(annualIncomeUSD * 130).toLocaleString()} KES\nWithholding Tax: ${(annualIncomeUSD * 130 * 0.05).toLocaleString()} KES\nNet Income: ${(annualIncomeUSD * 130 * 0.95).toLocaleString()} KES`], {type: 'text/plain'});
                    element.href = URL.createObjectURL(file);
                    element.download = "KRA_Tax_Report.txt";
                    document.body.appendChild(element);
                    element.click();
                  }}
                  className="w-full mt-4 border border-[var(--copper)] text-[var(--copper)] py-3 rounded font-medium hover:bg-[var(--copper)] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Download KRA Tax Report
                </button>
              </div>
            </div>
          </div>

          {/* Campaign Scheduling */}
          <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-heading font-semibold mb-2">Campaign Deployment</h2>
              <p className="text-[var(--text-muted)] text-sm">Schedule the full package (Article, Socials, Translations) for global distribution.</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <input 
                type="datetime-local" 
                className="bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)]"
              />
              <button 
                onClick={handleSchedule}
                className={`px-8 py-3 rounded font-medium transition-colors ${isScheduled ? 'bg-green-600 text-white' : 'bg-[var(--copper)] text-white hover:bg-[var(--copper-hover)]'}`}
              >
                {isScheduled ? '✓ Scheduled Successfully' : 'Schedule to Post'}
              </button>
            </div>
          </div>

          {/* Brand Assets */}
          <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)] mb-12">
            <h2 className="text-xl font-heading font-semibold mb-6">Brand Assets</h2>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-[var(--text-muted)] font-mono uppercase tracking-wider">Custom Logo Upload</label>
              <div className="flex items-center gap-4">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const base64String = reader.result as string;
                        localStorage.setItem('gls_custom_logo', base64String);
                        setCustomLogo(base64String);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="block w-full text-sm text-[var(--text-muted)] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[var(--copper)] file:text-white hover:file:bg-[var(--copper-hover)] cursor-pointer"
                />
                {customLogo && (
                  <button 
                    onClick={() => {
                      localStorage.removeItem('gls_custom_logo');
                      setCustomLogo(null);
                    }}
                    className="text-red-500 hover:text-red-400 text-sm font-medium whitespace-nowrap"
                  >
                    Remove Custom Logo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-[var(--copper)] selection:text-white relative">
      {/* Global Blended Background Watermark */}
      <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center opacity-[0.04] dark:opacity-[0.02] select-none z-0">
        <GlsLogo className="w-[40vw] max-w-[500px] h-auto text-[var(--text)] mb-12" />
        <div className="font-heading font-bold text-[4vw] tracking-[0.2em] text-[var(--text)] text-center leading-tight">
          GLOBAL<br/>LEVERAGE<br/>SYSTEMS
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {customLogo ? (
              <img src={customLogo} alt="Custom Logo" className="h-12 w-auto object-contain" />
            ) : (
              <GlsLogo className="w-12 h-12 text-[var(--copper)]" />
            )}
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-heading font-bold tracking-[0.2em] text-[var(--copper)] leading-tight">GLOBAL</span>
              <span className="text-sm font-heading font-bold tracking-[0.2em] text-[var(--copper)] leading-tight">LEVERAGE</span>
              <span className="text-sm font-heading font-bold tracking-[0.2em] text-[var(--copper)] leading-tight">SYSTEMS</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <button onClick={() => { setActiveView('dispatches'); setActiveArticle(null); }} className={`transition-colors text-[15px] ${activeView === 'dispatches' ? 'text-[var(--copper)]' : 'text-[var(--text)] hover:text-[var(--copper)]'}`}>{t.nav.dispatches}</button>
            <button onClick={() => { setActiveView('assessment'); setActiveArticle(null); }} className="text-[var(--text)] hover:text-[var(--copper)] transition-colors text-[15px]">Assessment</button>
            <button onClick={() => setActiveView('public_community')} className={`transition-colors text-[15px] ${activeView === 'public_community' || activeView === 'private_community' ? 'text-[var(--copper)]' : 'text-[var(--text)] hover:text-[var(--copper)]'}`}>{t.nav.community}</button>
            <button onClick={() => setActiveView('armoury')} className={`transition-colors text-[15px] ${activeView === 'armoury' ? 'text-[var(--copper)]' : 'text-[var(--text)] hover:text-[var(--copper)]'}`}>{t.nav.armory}</button>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              {(['en', 'fr', 'es', 'de'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-mono uppercase px-2 py-1 rounded transition-colors ${
                    lang === l ? 'bg-[var(--copper)] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button onClick={toggleTheme} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-[var(--text)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-[var(--bg)] border-b border-[var(--border)] p-6 flex flex-col gap-6 shadow-xl">
            <nav className="flex flex-col gap-4">
              <button onClick={() => { setActiveView('dispatches'); setActiveArticle(null); setIsMenuOpen(false); }} className={`text-lg font-medium text-left ${activeView === 'dispatches' ? 'text-[var(--copper)]' : ''}`}>{t.nav.dispatches}</button>
              <button onClick={() => { setActiveView('assessment'); setActiveArticle(null); setIsMenuOpen(false); }} className="text-lg font-medium text-left">{t.nav.test}</button>
              <button onClick={() => { setActiveView('public_community'); setIsMenuOpen(false); }} className={`text-lg font-medium text-left ${activeView === 'public_community' || activeView === 'private_community' ? 'text-[var(--copper)]' : ''}`}>{t.nav.community}</button>
              <button onClick={() => { setActiveView('armoury'); setIsMenuOpen(false); }} className={`text-lg font-medium text-left ${activeView === 'armoury' ? 'text-[var(--copper)]' : ''}`}>{t.nav.armory}</button>
            </nav>
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
              {(['en', 'fr', 'es', 'de'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsMenuOpen(false); }}
                  className={`text-sm font-mono uppercase px-3 py-1 rounded ${
                    lang === l ? 'bg-[var(--copper)] text-white' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {l}
                </button>
              ))}
              <button onClick={toggleTheme} className="ml-auto p-2">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {(activeView === 'public_community' || activeView === 'private_community') && (
          <div className="pt-32 px-6 max-w-7xl mx-auto -mb-24 relative z-10">
            <div className="flex items-center justify-between p-4 bg-[#111111] border border-zinc-800 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-[var(--copper)]">👁</span>
                <span className="font-mono text-sm uppercase tracking-widest text-zinc-400">Preview Mode (Admin)</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveView('public_community')}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded transition-colors ${activeView === 'public_community' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  Public Tier
                </button>
                <button 
                  onClick={() => setActiveView('private_community')}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded transition-colors ${activeView === 'private_community' ? 'bg-[var(--copper)] text-white' : 'text-zinc-500 hover:text-[var(--copper)]'}`}
                >
                  Inner Circle (Paid)
                </button>
              </div>
            </div>
          </div>
        )}
        {activeView === 'public_community' ? (
          <PublicCommunity 
            onNavigateHome={() => setActiveView('home')} 
            lang={lang}
          />
        ) : activeView === 'private_community' ? (
          <PrivateCommunity 
            onNavigateHome={() => setActiveView('home')} 
            lang={lang}
          />
        ) : activeView === 'about' ? (
          <AboutPage />
        ) : activeView === 'portfolio' ? (
          <PortfolioPage />
        ) : activeView === 'contact' ? (
          <AdvisoryPage />
        ) : activeView === 'privacy' ? (
          <PrivacyPolicyPage />
        ) : activeView === 'terms' ? (
          <TermsOfServicePage />
        ) : activeView === 'cookies' ? (
          <CookiePolicyPage />
        ) : activeView === 'dispatches' ? (
          <div className="pt-48 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="mb-16">
              <h1 className="font-heading text-4xl md:text-6xl font-medium mb-6">Dispatches</h1>
              <p className="text-xl text-[var(--text-muted)] max-w-2xl">
                Architectural blueprints for reality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <article className="group cursor-pointer" onClick={() => setActiveArticle('boring')}>
                <div className="aspect-[16/9] bg-[var(--card)] rounded-lg mb-6 overflow-hidden border border-[var(--border)] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--border)] to-[var(--bg)] group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <GlsLogo className="w-24 h-24 text-[var(--text)] opacity-10" />
                  </div>
                </div>
                <p className="text-[var(--copper)] font-mono text-xs tracking-widest uppercase mb-3">{boringArticle.category} • {boringArticle.readTime}</p>
                <h3 className="font-heading text-2xl font-medium mb-4 group-hover:text-[var(--copper)] transition-colors">{boringArticle.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {boringArticle.excerpt}
                </p>
              </article>
              
              {[2, 3, 4, 5, 6].map((i) => (
                <article key={i} className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                  <div className="aspect-[16/9] bg-[var(--card)] rounded-lg mb-6 overflow-hidden border border-[var(--border)]">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--border)] to-[var(--bg)] group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <p className="text-[var(--copper)] font-mono text-xs tracking-widest uppercase mb-3">Strategy • 4 min read</p>
                  <h3 className="font-heading text-2xl font-medium mb-4 group-hover:text-[var(--copper)] transition-colors">The Illusion of Control</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    Why the systems you think you control are actually controlling you, and how to reverse the dynamic.
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : activeArticle === 'boring' ? (
          <article className="pt-48 pb-32 px-6 max-w-3xl mx-auto">
            <button onClick={() => setActiveArticle(null)} className="text-[var(--copper)] hover:text-[var(--copper-hover)] mb-12 font-medium flex items-center gap-2 transition-colors">
              ← Back to Dispatches
            </button>
            <p className="text-[var(--copper)] font-mono text-xs tracking-widest uppercase mb-6">{boringArticle.category} • {boringArticle.readTime}</p>
            <h1 className="font-heading text-4xl md:text-6xl font-medium mb-12 leading-[1.1]">{boringArticle.title}</h1>
            
            <div className="flex items-center justify-between mb-12 pb-12 border-b border-[var(--border)]">
              <div className="flex items-center gap-4">
                <label className="relative cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700 font-heading font-bold text-xl text-zinc-400">
                    {authorAvatar ? (
                      <img src={authorAvatar} alt="Author" className="w-full h-full object-cover" />
                    ) : (
                      'SP'
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                    <Upload size={16} className="text-white" />
                  </div>
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setAuthorAvatar(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
                <div>
                  <div className="font-medium text-lg">Sloane Prescott</div>
                  <div className="text-sm text-[var(--copper)] font-mono uppercase tracking-widest mt-1">Writer</div>
                </div>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg)] border border-[var(--border)] rounded hover:border-[var(--copper)] hover:text-[var(--copper)] transition-colors text-sm font-medium"
              >
                <Share2 size={16} />
                Share Article
              </button>
            </div>

            {boringArticle.content}

            {/* Comments Section */}
            <div className="mt-24 pt-16 border-t border-[var(--border)]">
              <h3 className="font-heading text-2xl font-medium mb-8">Discussion ({comments.length})</h3>
              
              <div className="mb-12">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add to the discussion..."
                  className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] min-h-[120px] resize-y mb-4"
                />
                <div className="flex justify-end">
                  <button 
                    onClick={() => {
                      if (newComment.trim()) {
                        setComments([{ id: Date.now(), text: newComment, author: "You", date: "Just now" }, ...comments]);
                        setNewComment('');
                      }
                    }}
                    disabled={!newComment.trim()}
                    className="bg-[var(--copper)] text-white px-6 py-2 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors disabled:opacity-50"
                  >
                    Post Comment
                  </button>
                </div>
              </div>

              <div className="space-y-8">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-heading font-bold shrink-0">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="flex items-baseline gap-3">
                          <span className="font-medium">{comment.author}</span>
                          <span className="text-xs text-[var(--text-muted)] font-mono">{comment.date}</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {comment.author === "You" && (
                            <button 
                              onClick={() => {
                                setEditingCommentId(comment.id);
                                setEditingCommentText(comment.text);
                              }}
                              className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors p-1"
                              title="Edit comment"
                            >
                              <Edit2 size={14} />
                            </button>
                          )}
                          <button 
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this comment?')) {
                                setComments(comments.filter(c => c.id !== comment.id));
                              }
                            }}
                            className="text-[var(--text-muted)] hover:text-red-400 transition-colors p-1"
                            title="Delete comment"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {editingCommentId === comment.id ? (
                        <div className="mt-2">
                          <textarea
                            value={editingCommentText}
                            onChange={(e) => setEditingCommentText(e.target.value)}
                            className="w-full bg-[var(--bg)] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] min-h-[80px] resize-y mb-3 text-sm"
                          />
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => setEditingCommentId(null)}
                              className="px-3 py-1.5 text-sm rounded border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors"
                            >
                              Cancel
                            </button>
                            <button 
                              onClick={() => {
                                if (editingCommentText.trim()) {
                                  setComments(comments.map(c => c.id === comment.id ? { ...c, text: editingCommentText } : c));
                                  setEditingCommentId(null);
                                }
                              }}
                              disabled={!editingCommentText.trim()}
                              className="bg-[var(--copper)] text-white px-3 py-1.5 text-sm rounded font-medium hover:bg-[var(--copper-hover)] transition-colors disabled:opacity-50"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-[var(--text-muted)] leading-relaxed">{comment.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ) : activeView === 'assessment' ? (
          <div className="pt-32 pb-24 px-6 min-h-screen">
            <button onClick={() => setActiveView('home')} className="text-[var(--copper)] hover:text-[var(--copper-hover)] mb-12 font-medium flex items-center gap-2 transition-colors max-w-4xl mx-auto">
              ← Back to Platform
            </button>
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-medium mb-4">The Sovereignty Test</h2>
              <p className="text-[var(--text-muted)] text-lg">Find out if you are building leverage or just building a cage.</p>
            </div>
            <SovereigntyTest 
              onSubscribe={handleSubscribe}
              onPublicAccess={() => setActiveView('public_community')}
              subscriptionPrice={subscriptionPrice}
            />
          </div>
        ) : activeView === 'armoury' ? (
          <div className="pt-48 pb-32 px-6 max-w-6xl mx-auto min-h-screen">
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl md:text-6xl font-medium mb-6">The Armoury</h1>
              <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
                Strategic tools, frameworks, and operational blueprints for immediate deployment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tool 1 */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-8 flex flex-col">
                <div className="w-12 h-12 rounded bg-[var(--copper)]/10 flex items-center justify-center text-[var(--copper)] mb-6">
                  <FileText size={24} />
                </div>
                <h3 className="font-heading text-xl font-medium mb-3">The Sovereign Operating System</h3>
                <p className="text-[var(--text-muted)] mb-6 flex-1">
                  A complete Notion architecture for managing deal flow, asymmetric relationships, and deep work.
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border)]">
                  <span className="font-mono text-lg font-medium">$149</span>
                  <button 
                    onClick={() => handlePurchaseTool('The Sovereign Operating System', 149)}
                    className="bg-[var(--copper)] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[var(--copper-hover)] transition-colors"
                  >
                    Acquire
                  </button>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-8 flex flex-col">
                <div className="w-12 h-12 rounded bg-[var(--copper)]/10 flex items-center justify-center text-[var(--copper)] mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="font-heading text-xl font-medium mb-3">Zero-Trust Network Protocol</h3>
                <p className="text-[var(--text-muted)] mb-6 flex-1">
                  The exact vetting framework we use to filter out tourists and identify high-leverage partners.
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border)]">
                  <span className="font-mono text-lg font-medium">$299</span>
                  <button 
                    onClick={() => handlePurchaseTool('Zero-Trust Network Protocol', 299)}
                    className="bg-[var(--copper)] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[var(--copper-hover)] transition-colors"
                  >
                    Acquire
                  </button>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-8 flex flex-col">
                <div className="w-12 h-12 rounded bg-[var(--copper)]/10 flex items-center justify-center text-[var(--copper)] mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="font-heading text-xl font-medium mb-3">Capital Allocation Matrix</h3>
                <p className="text-[var(--text-muted)] mb-6 flex-1">
                  A dynamic model for assessing risk-adjusted returns in boring, high-moat industries.
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border)]">
                  <span className="font-mono text-lg font-medium">$199</span>
                  <button 
                    onClick={() => handlePurchaseTool('Capital Allocation Matrix', 199)}
                    className="bg-[var(--copper)] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[var(--copper-hover)] transition-colors"
                  >
                    Acquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="pt-48 pb-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-[var(--copper)] font-mono text-sm tracking-[0.2em] uppercase mb-8">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.1] mb-10">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed mb-16 max-w-3xl mx-auto">
          {t.brand.mission}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button onClick={() => setActiveView('assessment')} className="w-full sm:w-auto bg-[var(--copper)] text-white px-8 py-4 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors text-lg">
            {t.hero.cta}
          </button>
          <button className="w-full sm:w-auto border border-[var(--copper)] text-[var(--copper)] px-8 py-4 rounded font-medium hover:bg-[var(--copper)] hover:text-white transition-colors text-lg">
            {t.hero.secondary}
          </button>
        </div>
      </section>

      {/* Global Clock System */}
      <GlobalClockSystem />

      {/* Featured Dispatches */}
      <section className="py-32 px-6 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light">Latest {t.nav.dispatches}</h2>
            <button onClick={() => { setActiveView('dispatches'); setActiveArticle(null); }} className="hidden md:block text-[var(--copper)] hover:text-[var(--copper-hover)] font-medium">View All →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <article className="group cursor-pointer" onClick={() => setActiveArticle('boring')}>
              <div className="aspect-[16/9] bg-[var(--card)] rounded-lg mb-6 overflow-hidden border border-[var(--border)] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--border)] to-[var(--bg)] group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <GlsLogo className="w-24 h-24 text-[var(--text)] opacity-10" />
                </div>
              </div>
              <p className="text-[var(--copper)] font-mono text-xs tracking-widest uppercase mb-3">{boringArticle.category} • {boringArticle.readTime}</p>
              <h3 className="font-heading text-2xl font-medium mb-4 group-hover:text-[var(--copper)] transition-colors">{boringArticle.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed line-clamp-3">
                {boringArticle.excerpt}
              </p>
            </article>
            
            {[2, 3].map((i) => (
              <article key={i} className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <div className="aspect-[16/9] bg-[var(--card)] rounded-lg mb-6 overflow-hidden border border-[var(--border)]">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--border)] to-[var(--bg)] group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <p className="text-[var(--copper)] font-mono text-xs tracking-widest uppercase mb-3">Strategy • 4 min read</p>
                <h3 className="font-heading text-2xl font-medium mb-4 group-hover:text-[var(--copper)] transition-colors">The Illusion of Control</h3>
                <p className="text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  Why the systems you think you control are actually controlling you, and how to reverse the dynamic.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="dark bg-[var(--bg)] text-[var(--text)] border-t border-[var(--border)] pt-24 pb-12 px-6 mt-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {customLogo ? (
                <img src={customLogo} alt="Custom Logo" className="h-8 w-auto object-contain" />
              ) : (
                <GlsLogo className="w-8 h-8 text-[var(--copper)]" />
              )}
              <span className="font-heading font-bold tracking-widest text-[var(--copper)]">GLOBAL LEVERAGE SYSTEMS</span>
            </div>
            <p className="text-[var(--text-muted)] max-w-md text-lg leading-relaxed">
              {t.brand.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-6 tracking-wider">ADVISORY & DIRECTORY</h4>
            <ul className="space-y-4">
              <li><button onClick={() => { setActiveView('dispatches'); setActiveArticle(null); }} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">Dispatches</button></li>
              <li><button onClick={() => { setActiveView('about'); setActiveArticle(null); }} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">The Editor (About)</button></li>
              <li><button onClick={() => { setActiveView('portfolio'); setActiveArticle(null); }} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">Portfolio & Case Studies</button></li>
              <li><button onClick={() => { setActiveView('contact'); setActiveArticle(null); }} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">Private Advisory</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-6 tracking-wider">LEGAL & COMPLIANCE</h4>
            <ul className="space-y-4">
              <li><button onClick={() => { setActiveView('privacy'); setActiveArticle(null); }} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => { setActiveView('terms'); setActiveArticle(null); }} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">Terms of Service</button></li>
              <li><button onClick={() => { setActiveView('cookies'); setActiveArticle(null); }} className="text-[var(--text-muted)] hover:text-[var(--copper)] transition-colors">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--text-muted)] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Global Leverage Systems. All rights reserved.
          </p>
        </div>
        
        {/* Secret Studio Trigger - Discreet decorative element */}
        <div className="max-w-7xl mx-auto flex justify-center mt-32 mb-4">
          <div className="flex gap-3 opacity-20">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="p-2 -m-2 outline-none cursor-default"
                aria-hidden="true"
                tabIndex={-1}
              >
                <div 
                  className={`w-1 h-1 rounded-full transition-all duration-700 ${
                    dotSequence.includes(i) 
                      ? 'bg-[var(--copper)] opacity-100' 
                      : 'bg-zinc-600 opacity-50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
