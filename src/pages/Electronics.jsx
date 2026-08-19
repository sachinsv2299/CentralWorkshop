import React, { useEffect } from 'react';
import { ArrowLeft, Cpu, ChevronsDown } from 'lucide-react';
import funcGenImg from '../img/machine/functiongenerator.jpg';
import oscilloscopeImg from '../img/machine/oscilloscope.png';
import multiPowerSupplyImg from '../img/machine/multipower.png';
import powerSupplyImg from '../img/machine/powersupply.png';
import solderingImg from '../img/machine/soldering.png';
import desolderingImg from '../img/machine/desoldering.png';

const equipmentData = [
  {
    id: 1,
    name: 'Function Generator',
    description: 'Make Scientific SM5030-5. A versatile signal source used to generate different types of electrical waveforms over a wide range of frequencies.',
    features: [
      'Frequency: upto 5Mhz',
      'Amplitude: 20 Vpp',
      'Attenuation: 0dB, 20dB, 40dB',
      'Waveforms: Sine, Square, Pulse, PWM, Triangle'
    ],
    image: funcGenImg,
    imageAlt: 'Scientific SM5030-5 Function Generator'
  },
  {
    id: 2,
    name: 'Digital Storage Oscilloscope',
    description: 'Make Agilent Technologies, DSO3062A. An essential diagnostic tool for observing varying signal voltages, usually as a two-dimensional plot of one or more signals as a function of time.',
    features: [
      'Frequency: 60MHz',
      'Sample Rate: 1GSa/s',
      'No. of Channels: 2',
      'Advanced triggering and measurement'
    ],
    image: oscilloscopeImg,
    imageAlt: 'Agilent Technologies DSO3062A'
  },
  {
    id: 3,
    name: 'Multi Output DC Regulated Power Supply',
    description: 'Make Physitech, PHY 8230M. A high-stability laboratory power source providing multiple simultaneous voltage outputs for complex circuit testing.',
    features: [
      'No. of Channels: 2',
      'Fixed Voltages: 5V, +12V and -12V',
      'Voltage rating: 0 - 30Vdc',
      'Current rating: 2A'
    ],
    image: multiPowerSupplyImg,
    imageAlt: 'Physitech PHY 8230M Power Supply'
  },
  {
    id: 4,
    name: 'Regulated DC Power Supply',
    description: 'Make APLAB, LQ6324. A precision single-channel power supply designed for benchtop electronic design and troubleshooting.',
    features: [
      'No. of Channels: 1',
      'Fixed Voltages: 5V, +12V and -12V',
      'Voltage rating: 0 - 32Vdc',
      'Current rating: 2A'
    ],
    image: powerSupplyImg,
    imageAlt: 'APLAB LQ6324 Power Supply'
  },
  {
    id: 5,
    name: 'Soldering Station',
    description: 'Make Solderon 878D. A semi-automatic, digital soldering solution with integrated air blower for precise SMD and through-hole component assembly.',
    features: [
      'Voltage rating: 230V',
      'Power rating: 500 Watts',
      'Automation: Semi-Automatic',
      'Display: Digital | Blower: Yes'
    ],
    image: solderingImg,
    imageAlt: 'Solderon 878D Soldering Station'
  },
  {
    id: 6,
    name: 'Desoldering Station',
    description: 'Make Z+. A specialized tool for the safe removal of electronic components and solder from circuit boards without damaging the pads.',
    features: [
      'Voltage rating: 230V',
      'Power rating: 30 Watts',
      'Efficient suction mechanism',
      'Ergonomic handpiece'
    ],
    image: desolderingImg,
    imageAlt: 'Z+ Desoldering Station'
  }
];

const Electronics = ({ onBack, Navbar, Footer, onNavigate }) => {
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
          <div className="mb-16 rounded-2xl bg-gradient-to-r from-orange-100 via-orange-50 to-white p-6 sm:p-8 lg:p-12 shadow-xl border border-orange-200 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-4 uppercase tracking-tight">
              Electronics Section
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
              Your One-Stop Learning Hub for Electronic Circuits & Device Applications — Hands-on training in circuit design, testing, and modern electronic systems.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mt-8 rounded-full mx-auto"></div>
            <div className="mt-6 flex items-center justify-center text-sm text-slate-500 space-x-2">
              <ChevronsDown className="w-5 h-5 text-orange-500 animate-bounce" />
              <span>Scroll to view bench equipment</span>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-16 bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">About Us</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  At the Electronics Section, we focus on building a strong foundation in both the practical and theoretical aspects of electronic devices and circuit design. The program emphasizes hands-on learning, enabling students <span className="text-orange-400">to independently build, test, and analyze electronic circuits.</span>
                </p>
                <div className="flex items-center gap-4 text-orange-500 font-semibold">
                  <div className="p-2 bg-orange-500/10 rounded-lg"><Cpu size={24} /></div>
                  <span>Semiconductor Devices & PCB Prototyping</span>
                </div>
              </div>
              <div className="text-slate-300 border-l border-slate-700 pl-8">
                <p className="mb-4">
                  Students gain in-depth knowledge of semiconductor devices, electronic components, and circuit behavior through laboratory experiments and project-based activities. Training includes circuit construction techniques, PCB handling, breadboard prototyping, and soldering skills.
                </p>
                <p className="italic text-sm text-slate-400">
                  This lab-oriented approach helps learners develop problem-solving abilities and technical confidence while working with real-world electronic systems.
                </p>
              </div>
            </div>
          </div>

          {/* Equipment Inventory */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-orange-500 pb-2 inline-block uppercase tracking-wider">Our Facilities</h3>
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
                        <p className="mt-6 text-slate-400 font-medium uppercase tracking-widest text-xs">Laboratory Equipment</p>
                        <p className="text-slate-800 font-bold text-center mt-1">{item.imageAlt}</p>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-4">
                        CORE FACILITY
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">{item.name}</h2>
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
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 italic">Advance Your Circuit Design Skills</h3>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Our Electronics lab provides the tools for advanced studies and industry applications. Ensure you have attended the mandatory ESD (Electrostatic Discharge) safety briefing before handling sensitive components.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="https://cws.iith.ac.in/form/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/25"
                >
                  Book Lab Slot
                </a>
                <a
                  href="mailto:office.cw@iith.ac.in"
                  className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all border border-white/20 backdrop-blur-sm"
                >
                  Technical Support
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

export default Electronics;