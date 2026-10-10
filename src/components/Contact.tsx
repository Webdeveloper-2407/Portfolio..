import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief send feedback then allow opening email client
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Rana Ahmad,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#2A1A1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C5222E] font-mono mb-1">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-[#F7EFE6]">
            LET'S COLLABORATE
          </h2>
          <div className="w-12 h-0.5 bg-[#C5222E] mt-2 mb-4"></div>
          <p className="text-xs sm:text-sm text-[#A39B94] max-w-xl leading-relaxed">
            Have a website idea or a project in mind? I'd love to hear about it. Let's create something thoughtful, useful, and visually memorable.
          </p>
        </div>

        {/* 2-Column Grid: Info & QR codes on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Contact & Scan To Connect (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="p-6 rounded-xl border border-[#2A1A1E] bg-[#140E10]/90 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A39B94] mb-2">
                Direct Channels
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-[#2A1A1E] bg-[#181012] group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 overflow-hidden"
                >
                  <div className="w-9 h-9 rounded-md bg-[#1E090D] border border-[#680E18] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#C5222E]" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] uppercase tracking-wider text-[#A39B94]">Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#F7EFE6] truncate group-hover:text-[#C5222E] transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded text-[#A39B94] hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phoneDial}`}
                className="flex items-center gap-3 p-3 rounded-lg border border-[#2A1A1E] bg-[#181012] hover:border-[#680E18] transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-[#1E090D] border border-[#680E18] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C5222E]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A39B94]">Phone / WhatsApp</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F7EFE6] group-hover:text-[#C5222E] transition-colors">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg border border-[#2A1A1E] bg-[#181012]">
                <div className="w-9 h-9 rounded-md bg-[#1E090D] border border-[#680E18] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C5222E]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A39B94]">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F7EFE6]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2 border-t border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-[#A39B94] font-mono mb-2">
                  Social Profiles
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded bg-[#181012] border border-[#2A1A1E] hover:border-[#C5222E] text-xs font-medium text-[#F7EFE6] transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A39B94]" />
                  </a>
                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded bg-[#181012] border border-[#2A1A1E] hover:border-[#C5222E] text-xs font-medium text-[#F7EFE6] transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A39B94]" />
                  </a>
                  <a
                    href={PERSONAL_INFO.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded bg-[#181012] border border-[#2A1A1E] hover:border-[#C5222E] text-xs font-medium text-[#F7EFE6] transition-colors"
                  >
                    <span>Discord</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A39B94]" />
                  </a>
                </div>
              </div>
            </div>

            {/* SCAN TO CONNECT (Inspired directly by Reference Poster) */}
            <div className="p-5 rounded-xl border border-[#2A1A1E] bg-[#140E10]/90">
              <div className="text-xs font-mono uppercase tracking-wider text-[#F7EFE6] mb-3 flex items-center justify-between">
                <span>SCAN TO CONNECT</span>
                <span className="text-[10px] text-[#C5222E]">Quick Mobile Scan</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* QR 1: GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[#2A1A1E] bg-[#F7EFE6] text-black hover:scale-[1.02] transition-transform flex flex-col items-center text-center group"
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
                      PERSONAL_INFO.github
                    )}&color=0B0708&bgcolor=F7EFE6`}
                    alt="Scan GitHub QR Code"
                    className="w-24 h-24 object-contain rounded"
                    loading="lazy"
                  />
                  <div className="mt-2 text-[11px] font-bold font-mono tracking-wider uppercase text-black flex items-center gap-1">
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>

                {/* QR 2: Instagram */}
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[#2A1A1E] bg-[#F7EFE6] text-black hover:scale-[1.02] transition-transform flex flex-col items-center text-center group"
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
                      PERSONAL_INFO.instagram
                    )}&color=0B0708&bgcolor=F7EFE6`}
                    alt="Scan Instagram QR Code"
                    className="w-24 h-24 object-contain rounded"
                    loading="lazy"
                  />
                  <div className="mt-2 text-[11px] font-bold font-mono tracking-wider uppercase text-black flex items-center gap-1">
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-[#2A1A1E] bg-[#140E10]/90">
              <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#F7EFE6] mb-1">
                SEND A MESSAGE
              </h3>
              <p className="text-xs text-[#A39B94] mb-6">
                Fill in the details below to discuss a new project, freelance collaboration, or design inquiry.
              </p>

              {submitted ? (
                <div className="p-6 rounded-lg border border-[#680E18] bg-[#1E090D] space-y-4 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#C5222E]/20 text-[#C5222E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl uppercase text-[#F7EFE6]">
                      Thank you for reaching out!
                    </h4>
                    <p className="text-xs text-[#A39B94] mt-1 max-w-sm mx-auto">
                      Your message details have been prepared. You can also open your default email app to send it directly to Rana Ahmad.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleOpenMailto}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C5222E] hover:bg-[#9B1622] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Open in Email App</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-lg border border-white/10 text-xs text-[#A39B94] hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded bg-red-950/40 border border-red-800 text-red-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A39B94] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181012] border border-[#2A1A1E] text-xs text-[#F7EFE6] placeholder-[#5A5355] focus:outline-none focus:border-[#C5222E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A39B94] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181012] border border-[#2A1A1E] text-xs text-[#F7EFE6] placeholder-[#5A5355] focus:outline-none focus:border-[#C5222E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A39B94] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project Inquiry / Web Development"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181012] border border-[#2A1A1E] text-xs text-[#F7EFE6] placeholder-[#5A5355] focus:outline-none focus:border-[#C5222E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A39B94] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, timeline, and design expectations..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181012] border border-[#2A1A1E] text-xs text-[#F7EFE6] placeholder-[#5A5355] focus:outline-none focus:border-[#C5222E] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#A39B94]">
                      Fast turnaround within 24 hours
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C5222E] hover:bg-[#9B1622] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-50 shadow-lg shadow-[#C5222E]/20"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
