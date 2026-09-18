import { useState } from 'react';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

export default function Contact() {
  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // UI status state: 'idle' | 'submitting' | 'success'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate an API network call (e.g., Formspree or EmailJS)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section className="py-8 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-pale-slate-900 light:text-dark-khaki-100">
          Get in <span className="text-pearl-aqua-400 light:text-deep-teal-600">Touch</span>
        </h1>
        <p className="text-base sm:text-lg text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
          Have a project in mind, a job opportunity, or just want to connect? Send me a message below or reach out via email or LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Contact Form (3 Cols on Desktop) */}
        <div className="lg:col-span-3 glow-card">
          <div className="glow-card-inner light:bg-white light:text-dark-khaki-100 space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-pale-slate-900 light:text-dark-khaki-100">
              Send a Message
            </h2>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-deep-teal-200/60 light:bg-pale-slate-800 border border-pearl-aqua-400/40 text-center space-y-3">
                <FaCheckCircle className="w-10 h-10 mx-auto text-pearl-aqua-400 light:text-deep-teal-600" />
                <h3 className="text-lg font-bold text-pale-slate-900 light:text-dark-khaki-100">
                  Message Sent!
                </h3>
                <p className="text-sm text-pale-slate-400 light:text-deep-teal-400">
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-4 py-2 text-xs font-semibold rounded-lg bg-pearl-aqua-400 light:bg-deep-teal-600 text-dark-khaki-100 hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-pale-slate-300 light:text-deep-teal-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-900 light:text-dark-khaki-100 border border-deep-teal-300/50 light:border-pale-slate-700 focus:outline-none focus:border-pearl-aqua-400 light:focus:border-deep-teal-600 text-sm transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-pale-slate-300 light:text-deep-teal-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-900 light:text-dark-khaki-100 border border-deep-teal-300/50 light:border-pale-slate-700 focus:outline-none focus:border-pearl-aqua-400 light:focus:border-deep-teal-600 text-sm transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-pale-slate-300 light:text-deep-teal-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-900 light:text-dark-khaki-100 border border-deep-teal-300/50 light:border-pale-slate-700 focus:outline-none focus:border-pearl-aqua-400 light:focus:border-deep-teal-600 text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-dark-khaki-100 bg-pearl-aqua-400 light:bg-deep-teal-600 hover:bg-pearl-aqua-300 light:hover:bg-deep-teal-500 active:scale-[0.99] transition-all shadow-md disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info Sidebar (2 Cols on Desktop) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glow-card">
            <div className="glow-card-inner light:bg-white light:text-dark-khaki-100 space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-pale-slate-900 light:text-dark-khaki-100">
                Direct Channels
              </h2>

              <div className="space-y-4 text-sm">
                {/* Email Direct Link */}
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-3.5 p-3 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 hover:text-pearl-aqua-400 light:hover:text-deep-teal-600 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-deep-teal-100 light:bg-pale-slate-900 text-pearl-aqua-400 light:text-deep-teal-600">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-pale-slate-400 light:text-deep-teal-400">Email</span>
                    <span className="font-semibold text-pale-slate-900 light:text-dark-khaki-100">jls.catala@gmail.com</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800">
                  <div className="p-2.5 rounded-lg bg-deep-teal-100 light:bg-pale-slate-900 text-pearl-aqua-400 light:text-deep-teal-600">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-pale-slate-400 light:text-deep-teal-400">Location</span>
                    <span className="font-semibold text-pale-slate-900 light:text-dark-khaki-100">Available Remote / Hybrid</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-deep-teal-300/40 light:border-pale-slate-700/40 space-y-3">
                <span className="block text-xs font-semibold uppercase tracking-wider text-pale-slate-300 light:text-deep-teal-300">
                  Social Channels
                </span>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/josh-catala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-900 light:text-dark-khaki-100 hover:text-pearl-aqua-400 light:hover:text-deep-teal-600 transition-colors text-xs font-semibold"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/joshua-catala-34042a209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-900 light:text-dark-khaki-100 hover:text-pearl-aqua-400 light:hover:text-deep-teal-600 transition-colors text-xs font-semibold"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
}