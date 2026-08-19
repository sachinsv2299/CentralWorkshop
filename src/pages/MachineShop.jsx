import React, { useEffect } from 'react';
import { ArrowLeft, ChevronsDown } from 'lucide-react';
import machineImg from '../img/machine/UniversalMillingMachine.png';
import light from '../img/machine/LightDutyLathe.png';
import hmt from '../img/machine/HMTLathe.png';
import shaper from '../img/machine/ShaperMachine.png';
import radial from '../img/machine/RadialDrillingMachine.png';
import surface from '../img/machine/SurfaceGrindingMachine.png';
import cylindrical from '../img/machine/CylindricalGrindingMachine.png';
import slotting from '../img/machine/slotting.jpg';


const machinesData = [
  {
    id: 1,
    name: 'Universal Milling Machine',
    description: 'Make BFW, Model UF2. A highly versatile milling machine suitable for a wide range of precision cutting operations.',
    features: [
      'Clamping area: 1555 x 315 mm',
      'Swivel range of head: -22.5 to +22.5 deg',
      'Travel X/Y/Z, mm: 800 / 230 / 400',
      'Speed range: 45-2000 rpm (12 speeds)',
      'Max safe weight: 400 kg'
    ],
    image: machineImg,
    imageAlt: 'Universal Milling Machine'
  },
  {
    id: 2,
    name: 'HMT Lathe',
    description: 'Make HMT, Model NH22. A robust lathe machine equipped with versatile chucks and taper turning capabilities.',
    features: [
      'Swing over cross slide: 270 mm',
      'Distance between centers: 1000 mm',
      'Speed range: 40-2040 rpm (Forward) / 60-1430 rpm (Reverse)',
      'Taper turning attachment',
      '3 jaw, 4 jaw chuck & collet chucks available'
    ],
    image: hmt,
    imageAlt: 'HMT Lathe Machine'
  },
  {
    id: 3,
    name: 'Light Duty Lathe',
    description: 'Make Anil, Model Escort-5. A compact and efficient light duty lathe for precise small-scale turning operations.',
    features: [
      'Swing over cross slide: 162 mm',
      'Distance between centers: 500 mm',
      'Speed range: 42-1465 rpm',
      '4 jaw chuck size: 8 inch',
      '3 jaw self centering chuck size: 6 inch'
    ],
    image: light,
    imageAlt: 'Light Duty Lathe Machine'
  },
  {
    id: 4,
    name: 'Shaper Machine',
    description: 'Make Sagar, Model 26” stroke. A robust shaping machine designed for precise linear material removal and flat surface generation.',
    features: [
      'Stroke length: 26 inch',
      'Max & min distance from table to ram: 521 / 40 mm',
      'Vertical travel of table: 305 mm',
      'Longitudinal travel of table: 405 mm'
    ],
    image: shaper,
    imageAlt: 'Shaper Machine'
  },
  {
    id: 5,
    name: 'Radial Drilling Machine',
    description: 'Make HMT, Model RM65. A heavy-duty radial drilling machine designed for large and robust drilling operations.',
    features: [
      'Max Drill size: dia 32 mm',
      'Spindle travel: 1300 mm',
      'Box table dim: 600 x 500 x 500 mm',
      'Speed range: 40-1800 rpm',
      'Taper: MT5 (female)'
    ],
    image: radial,
    imageAlt: 'Radial Drilling Machine'
  },
  {
    id: 6,
    name: 'Surface Grinding Machine',
    description: 'Make HMT, Model 451P. A precision surface grinding machine designed for high-quality finishing of flat surfaces.',
    features: [
      'Work area: 400 x 150 mm',
      'Longitudinal travel of table: 450 mm',
      'Cross travel of table: 150 mm',
      'Cross feed/stroke at reversal: 0.175 to 1.75 mm',
      'Wheel head vertical movement: 250 mm',
      'Speed of wheel: 2800 rpm'
    ],
    image: surface,
    imageAlt: 'Surface Grinding Machine'
  },
  {
    id: 7,
    name: 'Cylindrical Grinding Machine',
    description: 'Make HMT, Model Anubhav-130/800-U. A versatile cylindrical grinding machine designed for precision external and internal grinding operations.',
    features: [
      'Max grinding dia: 125 mm',
      'Max grinding dia (internal): 15-100 mm',
      'Wheel speed: 1910 rpm',
      'Admit between centers: 800 mm',
      'Max weight of workpiece: 60 kg',
      'Table speed: 0.05-6.0 m/min'
    ],
    image: cylindrical,
    imageAlt: 'Cylindrical Grinding Machine'
  },
  {
    id: 8,
    name: 'Slotting Machine',
    description: 'Make UNION, Model 1HP. A specialized machine designed for cutting slots, splines, and keyways with precision vertical strokes.',
    features: [
      'Motor: 1 HP',
      'Stroke range: 10-150 mm',
      'Cross travel: 200 mm',
      'Longitudinal travel: 110 mm'
    ],
    image: slotting,
    imageAlt: 'Slotting Machine'
  }
];

const MachineShop = ({ onBack, Navbar, Footer, onNavigate }) => {
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
              Machine Shop
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-4xl font-semi-medium">
              The Machine Shop is the cornerstone of the Central Workshop, serving as a high-precision manufacturing hub where theoretical engineering designs are transformed into tangible mechanical components. It provides a multidisciplinary environment for students and researchers to master subtractive manufacturing processes and develop essential technical skills.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mt-8 rounded-full mx-auto"></div>
            <div className="mt-6 flex items-center justify-center text-sm text-slate-500 space-x-2">
              <ChevronsDown className="w-5 h-5 text-orange-500 animate-bounce" />
              <span>Scroll down to explore machines</span>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
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
            <h3 className="text-3xl font-bold mb-4">Ready to Use These Machines?</h3>
            <p className="text-orange-100 mb-8 text-lg">
              Book a training session or reserve equipment time for your projects.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://cws.iith.ac.in/form/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors text-center"
              >
                Book a Machine
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

export default MachineShop;
