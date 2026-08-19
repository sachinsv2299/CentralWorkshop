import React, { useEffect } from 'react';
import { ArrowLeft, Hammer, Settings, ChevronsDown } from 'lucide-react';
import bench from '../img/machine/BenchDrillingMachine.png';
import bandsaw from '../img/machine/BandSaw.png';
import power from '../img/machine/PowerBandSaw.png';
import drilling from '../img/machine/DrillingTappingMachine.png';
import shaper from '../img/machine/ShaperMachine.png';





const machinesData = [
  {
    id: 1,
    name: 'Bench Grinder Machine',
    description: 'Make EIFCO, Model MG-10. A precision grinding machine used for sharpening cutting tools and performing rough shaping of metal components.',
    features: [
      'Spindle revolution: 2500 rpm',
      'Wheel Dia OD: 250 mm',
      'Wheel Dia ID: 31.75 mm',
      'Wheel thickness: 25 mm'
    ],
    image: bench,
    imageAlt: 'Bench Grinder Machine'
  },
  {
    id: 2,
    name: 'Band Saw & Jig Saw',
    description: 'Specialized sawing machines for straight and contour cutting. The Band Saw handles bulk material cutting, while the Jig Saw allows for intricate internal and external profile cutting.',
    features: [
      'Band Saw (Jai): Table size 535 x 585 mm, Speed 500/750 rpm',
      'Jig Saw (Jai): Throat depth 610 mm, Speed 525 rpm',
      'Cutting capacity: 32 mm (Jig Saw)',
      'Belt width: 254 mm (Band Saw)'
    ],
    image: bandsaw,
    imageAlt: 'Industrial Sawing Machines'
  },
  {
    id: 3,
    name: 'Power Hack Saw',
    description: 'Make EIFCO, Model HP-200. A heavy-duty reciprocating saw designed for cutting large metal sections with high efficiency and precision.',
    features: [
      'Stroke length max: 250 mm',
      'Max cutting capacity (W x H): 200 x 150 mm',
      'Speed: 400 rpm',
      'Blade specs: 16" x 1.25"'
    ],
    image: bandsaw,
    imageAlt: 'Power Hack Saw'
  },
  {
    id: 4,
    name: 'Power Band Saw',
    description: 'Make DIPKALA, Model AC-2-HS. High-speed horizontal band saw used for rapid and accurate cutting of bars, tubes, and profiles.',
    features: [
      'Motor: 1.5 HP',
      'Blade size: 3000 x 27 x 0.9 mm',
      'Cutting capacity: 210 x 185 mm (Rectangle)',
      'Cylindrical capacity: 185 mm dia',
      'Spindle revolution: 40-4000 rpm'
    ],
    image: power,
    imageAlt: 'Power Band Saw'
  },
  {
    id: 5,
    name: 'Drilling & Tapping Machines',
    description: 'Precision AMT and EIFCO drilling units for creating holes and internal threads (tapping) in various engineering materials.',
    features: [
      'AMT Model TDB-28: Drill capacity up to 25mm in CI',
      'Spindle speed range: 112-2800 rpm',
      'EIFCO Bench Drill: Max drill size 12mm dia',
      'Spindle travel: 140 mm'
    ],
    image: drilling,
    imageAlt: 'Drilling and Tapping Setup'
  },
  {
    id: 6,
    name: 'Shaper Machine',
    description: 'Make Sagar, Model 26" stroke. A reciprocating machine tool used for producing flat surfaces, grooves, and keyways in metal workpieces.',
    features: [
      'Stroke length: 26 inch',
      'Max distance from table to ram: 521/40 mm',
      'Vertical travel of table: 305 mm',
      'Longitudinal travel of table: 405 mm'
    ],
    image: shaper,
    imageAlt: 'Shaper Machine'
  }
];

const FittingShop = ({ onBack, Navbar, Footer, onNavigate }) => {
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
              Fitting Shop
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-4xl font-semi-medium">
              Your One-Stop Precision Fabrication & Assembly Training Hub. At Fitting Shop, we focus on developing essential skills in shaping, assembling, and finishing mechanical components using a variety of hand tools and specialized equipment.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mt-8 rounded-full mx-auto"></div>
            <div className="mt-6 flex items-center justify-center text-sm text-slate-500 space-x-2">
              <ChevronsDown className="w-5 h-5 text-orange-500 animate-bounce" />
              <span>Explore our heavy-duty machinery</span>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-slate-300">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <Hammer className="text-orange-500" /> Hand-On Expertise
              </h3>
              <p>Students gain hands-on experience in operations such as filing, sawing, bending, and fitting, which are crucial for accurate assembly work. Despite the availability of machines, emphasis is placed on manual skills to ensure precision and craftsmanship.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-slate-300">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <Settings className="text-orange-500" /> Quality & Safety
              </h3>
              <p>Learners are trained to use measuring instruments, cutting tools, finishing tools, and work-holding devices effectively. We ensure students build a strong foundation in fitting techniques, safety, and quality workmanship.</p>
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
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                        <ul className="space-y-3">
                          {machine.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {index < machinesData.length - 1 && (
                    <hr className="my-12 border-t border-gray-200" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Booking Section */}
          <div className="mt-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Master Precision Fabrication</h3>
            <p className="text-orange-100 mb-8 text-lg">
              Enroll in our fitting workshops or reserve specific machinery for your mechanical engineering projects.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://cws.iith.ac.in/form/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 text-center shadow-lg"
              >
                Book a Machine
              </a>
              <a
                href="mailto:office.cw@iith.ac.in"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-center border border-white/30 backdrop-blur-sm"
              >
                Contact for Training
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Custom Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default FittingShop;