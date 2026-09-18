import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="relative mt-auto horizontal-glow-rtl pt-[3px]">
      <div className="bg-deep-teal-100 light:bg-pale-slate-900 text-pale-slate-400 light:text-deep-teal-400 py-8 transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link 
              to="/" 
              className="text-xl font-bold tracking-tight text-pale-slate-900 light:text-deep-teal-200 hover:opacity-90 transition-opacity"
            >
              josh.<span className="text-pearl-aqua-400 light:text-deep-teal-600">Catala</span>
            </Link>
            <p className="text-xs text-pale-slate-400 light:text-deep-teal-400 mt-1">
              © {new Date().getFullYear()} Joshua Catala. Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Social Media Links */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}