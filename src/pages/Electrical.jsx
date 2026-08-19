import React, { useEffect } from 'react';
import { ArrowLeft, Zap, ChevronsDown } from 'lucide-react';
import clampMeterImg from '../img/machine/clamp.jpg';
import multimeterImg from '../img/machine/multimeter.jpg';
import tachometerImg from '../img/machine/tacho.jpg';

const equipmentData = [
  {
    id: 1,
    name: 'Clamp Meter',
    description: 'Make Fluke 323. A professional-grade diagnostic tool used for measuring AC current without breaking the circuit. Ideal for electrical troubleshooting in industrial and domestic environments.',
    features: [
      'AC Voltage: up to 600V',
      'AC Current: up to 400A',
      'True-RMS measurements for accuracy',
      'Slim, ergonomic design for easy handling'
    ],
    image: clampMeterImg,
    imageAlt: 'Fluke 323 Clamp Meter'
  },
  {
    id: 2,
    name: 'Multimeter',
    description: 'A versatile electronic measuring instrument that combines several measurement functions in one unit. Essential for circuit testing, maintenance, and repair.',
    features: [
      'Measure AC and DC Voltage',
      'Measure AC and DC Current',
      'Resistance and Continuity testing',
      'Diode and Capacitance testing support'
    ],
    image: multimeterImg,
    imageAlt: 'Digital Multimeter Setup'
  },
  {
    id: 3,
    name: 'Tacho Meter',
    description: 'Model DT-2236. A high-precision instrument used for measuring the rotation speed of a shaft or disk, as in a motor or other machine.',
    features: [
      'Photo Tachometer: 5 to 99,999 RPM',
      'Contact Tachometer: 0.5 to 19,999 RPM',
      'Surface Speed measurement capabilities',
      'Memory storage for last/max/min values'
    ],
    image: tachometerImg,
    imageAlt: 'Contact and Photo Tachometer'
  }
];

const Electrical = ({ onBack, Navbar, Footer, onNavigate }) => {
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

          {/* Page Header */}
          <div className="mb-16 rounded-2xl bg-gradient-to-r from-orange-100 via-orange-50 to-white p-6 sm:p-8 lg:p-12 shadow-xl border border-orange-200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-4 uppercase tracking-tight">
              Electrical Section
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-4xl font-semi-medium leading-relaxed">
              Your One-Stop Learning Hub for Electrical Fundamentals & Practical Applications. We provide hands-on training in wiring, circuit design, and safe electrical practices for real-world use.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mt-8 rounded-full mx-auto"></div>
            <div className="mt-6 flex items-center justify-center text-sm text-slate-500 space-x-2">
              <ChevronsDown className="w-5 h-5 text-orange-500 animate-bounce" />
              <span>Scroll to view diagnostic equipment</span>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-16 bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Foundation in Fundamentals</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We provide students with a strong foundation in electrical techniques and real-world applications of electricity. The program is designed to help learners understand electrical components, their functions, and safe operating procedures through guided instruction.
                </p>
                <div className="flex items-center gap-4 text-orange-500 font-semibold">
                  <div className="p-2 bg-orange-500/10 rounded-lg"><Zap size={24} /></div>
                  <span>Practical Circuit Building & Testing</span>
                </div>
              </div>
              <div className="text-slate-300 border-l border-slate-700 pl-8">
                <p className="italic">
                  "Emphasis is placed on both theoretical knowledge and practical implementation, enabling learners to confidently design, install, and troubleshoot basic electrical systems used in everyday life."
                </p>
              </div>
            </div>
          </div>

          {/* Equipment Inventory */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-orange-500 pb-2 inline-block">Our Facilities</h3>
            </div>
            
            {equipmentData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-4">
                    {/* Visual Section */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="bg-slate-50 rounded-2xl h-80 flex flex-col items-center justify-center p-8 border border-slate-100 hover:border-orange-200 transition-all group">
                        <div className="relative flex items-center justify-center w-full h-32">
                           <div className="absolute -inset-4 bg-orange-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <img src={item.image} alt={item.imageAlt} className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <p className="mt-6 text-slate-400 font-medium uppercase tracking-widest text-xs">Diagnostic Tool</p>
                        <p className="text-slate-800 font-bold text-center mt-1">{item.imageAlt}</p>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-4">
                        FEATURED EQUIPMENT
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{item.name}</h2>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {item.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                            <span className="text-slate-700 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < equipmentData.length - 1 && (
                    <hr className="my-10 border-t-2 border-orange-500" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Safety & Booking Section */}
          <div className="mt-20 relative overflow-hidden bg-slate-950 rounded-3xl shadow-2xl p-8 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 italic">Ready to Work with Electrical Systems?</h3>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Safety is our top priority. Students must complete the basic electrical safety orientation before using diagnostic equipment or working on live circuits.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="https://cws.iith.ac.in/form/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/25"
                >
                  Book Training
                </a>
                <a
                  href="mailto:office.cw@iith.ac.in"
                  className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all border border-white/20 backdrop-blur-sm"
                >
                  Contact Instructor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Electrical;