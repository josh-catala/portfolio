import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageModal from '../components/imageModal';

export default function Internship() {
  const navigate = useNavigate();

  // State to manage modal visibility and active image metadata
  const [modalState, setModalState] = useState({
    isOpen: false,
    src: '',
    alt: '',
  });

  const openModal = (src, alt) => {
    setModalState({ isOpen: true, src, alt });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, src: '', alt: '' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-4 md:py-6">
      {/* Lightbox Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        imageSrc={modalState.src}
        imageAlt={modalState.alt}
        onClose={closeModal}
      />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-pearl-aqua-400 hover:bg-pearl-aqua-300 text-dark-khaki-100 light:text-deep-teal-200 transition-colors cursor-pointer mb-6"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      {/* Main Content Area - Left Aligned */}
      <div className="text-left space-y-12">
        {/* Hero / Overview Header */}
        <header className="space-y-3 border-b border-pearl-aqua-200 pb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-pearl-aqua-500 light:text-deep-teal-600">
            Software Engineering Internship
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-pale-slate-900 light:text-deep-teal-200">
            BH, Inc. 
          </h1>
          <p className="max-w-3xl text-base text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
            BHI is a construction company that is characterized by their diverse work, which can be broken down into building, energy, infrastructure, and mining. <br/><br/>
            During my internship I was able to contribute to different apps used across the company, from the corporate department to divisions and their jobsites. 
          </p>
        </header>

        {/* Section 1: Submissions Management */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 space-y-3 md:order-1">
            <h2 className="text-2xl font-bold text-pale-slate-900 light:text-deep-teal-200">
              HR Department: Verbal Counsels
            </h2>
            <p className="text-sm text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
              This was a simple app that used form submition to submit verbal interactions to be reviewed by HR.   
            </p>
            <p className="text-sm text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
                Tasks Performed:
                <ul className="list-disc list-outside pl-6 space-y-2">
                    <li>Updated the styles to the dev shop's newer theme.</li>
                    <li>Refactored tile component to display employee images.</li>
                    <li>Added file export feature for individual and bulk selection in both ZIP and PDF formats (including PDF build using SVG with jsPDF library).</li>
                    <li>Added date filtering.</li>
                    <li>Added status attribute for reviewed and soft-deleted counsels including status filter, review/delete buttons on counsel tiles.</li>
                </ul>  
            </p>
          </div>
          <div
            onClick={() => openModal('./public/images/verbal-counsel-submissions-desktop.png', 'Verbal Counsel Submissions Grid View')}
            className="md:w-1/2 w-full md:order-2 rounded-xl overflow-hidden border-[2px] border-pearl-aqua-300 shadow-lg bg-card-dark cursor-pointer group relative"
          >
            <img
              src="./public/images/verbal-counsel-submissions-desktop.png"
              alt="Verbal Counsel Submissions Grid View"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs font-medium text-pearl-aqua-400 bg-black/60 px-3 py-1.5 rounded-full border border-pearl-aqua-400/30">
                Click to expand
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Daily Production Logs */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 space-y-3 md:order-2">
            <h2 className="text-2xl font-bold text-pale-slate-900 light:text-deep-teal-200">
              C&E Division: Aggregates
            </h2>
            <p className="text-sm text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
                This app allowed each aggregate plant to input their daily logs, so the manager of each plant could track daily production as well as retrieve data
                related to the plant's performance and export it into a report for internal use.
            </p>
            <p className="text-sm text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
                I participated in continuous development of new features, bugs, and other fixes by participating in bi-weekly meetings with the focus group that was testing the MVP.
            </p>
          </div>
          <div
            onClick={() => openModal('./public/images/production-log-history.png', 'Daily Production Log Data Table')}
            className="md:w-1/2 w-full md:order-1 rounded-xl overflow-hidden border-[2px] border-pearl-aqua-300 shadow-lg bg-card-dark cursor-pointer group relative"
          >
            <img
              src="./public/images/production-log-history.png"
              alt="Daily Production Log Data Table"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs font-medium text-pearl-aqua-400 bg-black/60 px-3 py-1.5 rounded-full border border-pearl-aqua-400/30">
                Click to expand
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Reports & Analytics Dashboard */}
        <section className="flex flex-col md:flex-row items-center gap-6 pb-8">
          <div className="md:w-1/2 space-y-3 md:order-1">
            <h2 className="text-2xl font-bold text-pale-slate-900 light:text-deep-teal-200">
              Aggregates: Features added
            </h2>
            <p className="text-sm text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
                <ul className="list-disc list-outside pl-6 space-y-2">
                    <li>Admins Settings for plant creation, product mode, fail codes, etc.</li>
                    <li>Hourly production table to input tons of material per hour</li>
                    <li>KPI tracker based on goals set by division leader.</li>
                    <li>Report dashboard with filters for plants, and dates.</li>
                    <li>Export into a PDF report with data broken down by Plant (month, week, day)</li>
                    <li>Live shifts so PMs could view live data from each Plant as production was being logged using polling checks.</li>
                    <li>Refactored several UI components for improved data access and app navigation.</li>
                </ul>  
            </p>
          </div>
          <div
            onClick={() => openModal('./public/images/production-log-reports.png', 'Production Analytics and Reports Dashboard')}
            className="md:w-1/2 w-full md:order-2 rounded-xl overflow-hidden border-[2px] border-pearl-aqua-300 shadow-lg bg-card-dark cursor-pointer group relative"
          >
            <img
              src="./public/images/production-log-reports.png"
              alt="Production Analytics and Reports Dashboard"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs font-medium text-pearl-aqua-400 bg-black/60 px-3 py-1.5 rounded-full border border-pearl-aqua-400">
                Click to expand
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}