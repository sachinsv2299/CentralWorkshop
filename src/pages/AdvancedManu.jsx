import React, { useEffect } from 'react';
import { ArrowLeft, Zap, Layers, Printer, ChevronsDown } from 'lucide-react';

const machinesData = [
  {
    id: 1,
    name: '5 Axis CNC',
    description: 'Make BFW, Model Swift MC-500 5Ax. Our state-of-the-art 5-axis CNC machine enables highly precise machining of complex components, supporting intricate multi-sided operations.',
    features: [
      'Spindle: HSK A63, 15000 rpm', 
      'Traverse X/Y/Z, mm: 630 / 630 / 500', 
      'A Axis: -120 to +30 degree | C Axis: 360 degree', 
      'ATC: 30 tools (Max tool dia/len: 75(125*)/300 mm)',
      'Safe load capacity: 250 kg'
    ],
    icon: Layers,
    imageAlt: '5 Axis CNC Machine'
  },
  {
    id: 2,
    name: 'VMC',
    description: 'Make BFW, Model BMV60+ TC24. A versatile Vertical Machining Center designed for heavy-duty and high-precision milling operations.',
    features: [
      'Spindle: BT40, 6000 rpm',
      'Traverse X/Y/Z, mm: 1050 / 610 / 610',
      'Table Clamping Area: 1250 x 600 mm',
      'Safe load capacity: 1200 kg',
      'ATC: 24 tools (Max tool dia/len: 75(140*)/250 mm)'
    ],
    icon: Zap,
    imageAlt: 'VMC Machine'
  },
  {
    id: 3,
    name: 'CNC Lathe',
    description: 'Make HMT, Model Praga PTC-600. A high-performance CNC Lathe designed for precise turning operations and excellent repeatability.',
    features: [
      'Swing over bed: dia 400 mm | Swing over cross slide: 225 mm',
      'Cross travel (X) / Longitudinal travel (Z): 225 / 630 mm',
      'Spindle revolution: 40-4000 rpm',
      'Turret: 8 tools',
      'Controller: FANUC Oi-MATE'
    ],
    icon: Zap,
    imageAlt: 'CNC Lathe Machine'
  },
  // {
  //   id: 4,
  //   name: '3D Printing Lab',
  //   description: 'Modern 3D printing facility supporting FDM and SLA technologies. Rapid prototyping for design validation, functional testing, and small-batch manufacturing. Multiple material options including resin, ABS, and PETG for diverse applications.',
  //   features: ['FDM & SLA technology', 'Multiple material options', 'Build size up to 300x300x400mm', 'Layer resolution 0.1-0.2mm'],
  //   icon: Printer,
  //   imageAlt: '3D Printer'
  // }
];

const AdvancedManu = ({ onBack, Navbar, Footer, onNavigate }) => {
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
              Advanced Manufacturing
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-4xl font-semi-medium">
              The CNC Hub is the advanced manufacturing wing of the Central Workshop, representing the pinnacle of modern industrial automation. This facility is designed to bridge the gap between digital design and high-precision physical production, offering students and researchers access to state-of-the-art subtractive manufacturing technology.
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
              const Icon = machine.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={machine.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image/Visual Section */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl h-72 lg:h-64 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-center px-6">
                        <Icon className="w-20 h-20 text-orange-600 mx-auto mb-3" />
                        <p className="text-gray-600 font-semibold">{machine.imageAlt}</p>
                      </div>
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

export default AdvancedManu;
