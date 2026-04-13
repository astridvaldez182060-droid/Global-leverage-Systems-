import { useState } from 'react';
import { X, MessageSquare, AlertCircle } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [type, setType] = useState<'suggestion' | 'issue'>('suggestion');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setMessage('');
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg w-full max-w-md shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-[var(--border)] flex justify-between items-center">
          <h3 className="font-heading text-xl font-medium flex items-center gap-2">
            {type === 'suggestion' ? <MessageSquare size={20} className="text-[var(--copper)]" /> : <AlertCircle size={20} className="text-[var(--copper)]" />}
            Submit Feedback
          </h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[var(--copper)]/20 text-[var(--copper)] rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={32} />
            </div>
            <h4 className="text-xl font-heading font-medium mb-2">Feedback Received</h4>
            <p className="text-[var(--text-muted)]">Thank you for your input. Our team will review it shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Feedback Type</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setType('suggestion')}
                  className={`flex-1 py-2 px-4 rounded border text-sm font-medium transition-colors ${type === 'suggestion' ? 'border-[var(--copper)] bg-[var(--copper)]/10 text-[var(--copper)]' : 'border-[var(--border)] text-[var(--text-muted)] hover:text-white'}`}
                >
                  Suggestion
                </button>
                <button
                  type="button"
                  onClick={() => setType('issue')}
                  className={`flex-1 py-2 px-4 rounded border text-sm font-medium transition-colors ${type === 'issue' ? 'border-[var(--copper)] bg-[var(--copper)]/10 text-[var(--copper)]' : 'border-[var(--border)] text-[var(--text-muted)] hover:text-white'}`}
                >
                  Report Issue
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Message</label>
              <textarea 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={type === 'suggestion' ? "How can we improve the experience?" : "Describe the issue you encountered..."}
                className="w-full h-32 bg-[#111111] border border-[var(--border)] rounded p-3 text-[var(--text)] focus:outline-none focus:border-[var(--copper)] resize-none"
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                disabled={!message.trim() || isSubmitting}
                className="w-full bg-[var(--copper)] text-white py-3 rounded font-medium hover:bg-[var(--copper-hover)] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
