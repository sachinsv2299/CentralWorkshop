import React, { useEffect } from 'react';
import { ArrowLeft, ChevronsDown } from 'lucide-react';
import machineImg from '../img/machine/Hydraulics.png';

const machinesData = [
  {
    id: 1,
    name: 'Pneumatics & Hydraulics Setup',
    description: 'Make FESTO. A comprehensive training system for hands-on experience with fluid power. This setup allows students to design and build circuits for various industrial applications, developing practical skills in system control, troubleshooting, and automation.',
    features: [
      'Pneumatics: Allocating device, separating parcel post',
      'Pneumatics: Edge folding device, marking machine',
      'Pneumatics: Pressing machine, multi actuator systems',
      'Hydraulics: Pressing machine, bending machine',
      'Focus on electro-pneumatics and industrial automation'
    ],
    image: machineImg,
    imageAlt: 'FESTO Pneumatics & Hydraulics Setup'
  }
];

const Hydraulics = ({ onBack, Navbar, Footer, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-900 selection:bg-orange-200 selection:text-orange-900 font-sans">
      <Navbar onNavigate={onNavigate} />
      
      <div className="pt-32 pb-16">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          {/* Back Button */}
          <div className="flex justify-start w-full mb-8 lg:mb-12">
            <button 
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-bold transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Facilities</span>
            </button>
          </div>

          {/* Page Header with Background */}
          <div className="mb-16 rounded-2xl bg-gradient-to-r from-orange-100 via-orange-50 to-white p-6 sm:p-8 lg:p-12 shadow-xl border border-orange-200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-4">
              Hydraulics and Pneumatics
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-4xl font-semi-medium">
              Your One-Stop Learning Hub for Hydraulic & Pneumatic Systems. We focus on the study and application of technologies that generate, control, and transmit power using pressurized fluids—from steering and braking automobiles to controlling aircraft and powering heavy industrial equipment.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mt-8 rounded-full mx-auto"></div>
            <div className="mt-6 flex items-center justify-center text-sm text-slate-500 space-x-2">
              <ChevronsDown className="w-5 h-5 text-orange-500 animate-bounce" />
              <span>Scroll down to explore facilities</span>
            </div>
          </div>

          {/* Machines List */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-lg">
            {machinesData.map((machine, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={machine.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image/Visual Section */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-slate-50 rounded-2xl h-80 flex flex-col items-center justify-center p-8 border border-slate-100 hover:border-orange-200 transition-all group">
                      <div className="relative flex items-center justify-center w-full h-32">
                         <div className="absolute -inset-4 bg-orange-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <img src={machine.image} alt={machine.imageAlt} className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <p className="mt-6 text-slate-400 font-medium uppercase tracking-widest text-xs">Equipment</p>
                      <p className="text-slate-800 font-bold text-center mt-1">{machine.imageAlt}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">{machine.name}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {machine.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-600">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Lab Experiments</h3>
                      <ul className="space-y-3">
                        {machine.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  </div>

                  {index < machinesData.length - 1 && (
                    <hr className="my-10 border-t-2 border-orange-500" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Booking Section */}
          <div className="mt-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Learn Fluid Power?</h3>
            <p className="text-orange-100 mb-8 text-lg">
              Book a training session or reserve time on the FESTO setup for your automation projects.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://cws.iith.ac.in/form/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors text-center"
              >
                Book a Session
              </a>
              <a
                href="mailto:office.cw@iith.ac.in"
                className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-colors text-center border border-white/20"
              >
                Contact for Training
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Custom Styles for Page */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Hydraulics;