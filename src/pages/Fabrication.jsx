import React, { useEffect } from 'react';
import { ArrowLeft, Zap, Layers, Printer, ChevronsDown } from 'lucide-react';

const machinesData = [
  {
    id: 1,
    name: 'TIG Welding Machine',
    description: 'Make Ador Fontech, TETRIX 451 AC/DC SYNERGIC. A versatile and high-performance TIG welding machine designed for precision welding with advanced synergic control.',
    features: [
      'Welding current: 5-450 Amp',
      'Max connected load: 16.3 kVA',
      'Generator rating: 30 kVA',
      'Torch cooling: Water',
      'Electrode holder: 1.6 / 2.4 / 3.2 / 4.0 mm',
      'Ceramic nozzles: 6.5 / 8 / 11 mm'
    ],
    icon: Layers,
    imageAlt: 'TIG Welding Machine'
  },
  {
    id: 2,
    name: 'MIG Welding Machine',
    description: 'Make Ador Fontech, Model TAURUS 551 SYNERGIC S-MIG. A robust MIG welding machine providing high welding current and precise wire feed control.',
    features: [
      'Welding current: 5-550 Amp',
      'Wire feed speed: 0.5 - 24 m/min',
      'Shielding gas: CO2',
      'Torch cooling: Water',
      'Wire diameter: 0.8 / 1 / 1.2 / 1.6 mm'
    ],
    icon: Zap,
    imageAlt: 'MIG Welding Machine'
  },
  {
    id: 3,
    name: 'Plasma Cutting Machine',
    description: 'Make Ador Fontech/ Powermacx, Model Powermax 85. A powerful plasma cutting machine for both automated CNC and manual cutting operations.',
    features: [
      'Bed size (LxB): 1000 x 1000 mm',
      'Max thickness (auto mode): 12 mm',
      'Max thickness (manual mode): 16 mm',
      'Max dist between nozzle & base: 100 mm',
      'Max Current: 85 Amp',
      'CNC programmable'
    ],
    icon: Zap,
    imageAlt: 'Plasma Cutting Machine'
  },
  {
    id: 4,
    name: 'Arc Welding',
    description: 'Make ESAB, Model Transweld 400. A powerful and reliable arc welding machine suitable for various electrode sizes and heavy-duty applications.',
    features: [
      'Rated input current: 63 Amp',
      'Current range: 50-400 Amp',
      'Rated input power: 26 kVA',
      'Voltage max: 80 Volts',
      'Electrode dia: 1.6-6.0 mm'
    ],
    icon: Layers,
    imageAlt: 'Arc Welding Machine'
  },
  {
    id: 5,
    name: 'Gas Welding',
    description: 'A versatile traditional gas welding setup suitable for various metal joining, heating, and cutting applications.',
    features: [
      'Oxy Acetylene welding',
      'Gas cutting',
      'Brazing'
    ],
    icon: Zap,
    imageAlt: 'Gas Welding Setup'
  },
  {
    id: 6,
    name: 'Welding Table',
    description: 'Make FIXTO, Model D16-2D. A high-precision welding table equipped with a rotary positioner and nitrided top plates to ensure optimal workpiece accessibility and durability.',
    features: [
      'Size: 1500 x 1000 mm',
      'Flatness: 0.3 mm/1000mm',
      'Hole separation: 50 +/- 0.05 mm',
      'Nitrided top plates to avoid weld spatters',
      'Rotary positioner to rotate table (360 degree)',
      'FIXTO clamp set for workpiece'
    ],
    icon: Layers,
    imageAlt: 'Welding Table'
  }
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
              Welding and Fabrication
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-4xl font-semi-medium">
              At Welding Shop we specialize in advanced welding services and supply industry-standard welding machines. With years of experience and skilled professionals. We deliver precision, durability, and safety in every project — from light repairs to heavy-duty fabrication.

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
