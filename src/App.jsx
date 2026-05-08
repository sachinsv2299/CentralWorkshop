
import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  Wrench, 
  Calendar, 
  Info, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  ArrowLeft
} from 'lucide-react';
import AdvancedManu from './pages/AdvancedManu';
import MachineShop from './pages/MachineShop';
import Fabrication from './pages/Fabrication';
import Hydraulics from './pages/Hydraulics';
import Fitting from './pages/Fitting';
import Electrical from './pages/Electrical';
import Electronics from './pages/Electronics';
import DIY from './pages/DIY';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import electronicsImg from './img/electronics.png';
import advancedManuImg from './img/cnc.png';
import machineShopImg from './img/machineshop.png';
import fabricationImg from './img/welding.png';
import hydraulicsImg from './img/hydralic.png';
import fittingImg from './img/fittingshop.png';
import electricalImg from './img/electrical.png';
import diyImg from './img/diy.png';

// --- Components ---

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Training', href: '#training' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (event, href) => {
    setIsOpen(false);
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-slate-900 py-1'}`}>
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <Settings className="text-white w-6 h-6 animate-spin-slow" />
            </div>
            <span className={`font-bold text-lg sm:text-xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Central Workshop <span className="text-orange-600">IITH</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-gray-100'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const GearCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotation = 0;

    const gears = [
      { x: 0.2, y: 0.3, teeth: 12, radius: 60, speed: 0.005, phase: 0, color: 'rgba(234, 88, 12, 0.2)' },
      { x: 0.35, y: 0.45, teeth: 16, radius: 80, speed: -0.00375, phase: 0.1, color: 'rgba(75, 85, 99, 0.15)' },
      { x: 0.5, y: 0.3, teeth: 12, radius: 60, speed: 0.005, phase: 0.2, color: 'rgba(234, 88, 12, 0.2)' },
      { x: 0.8, y: 0.7, teeth: 20, radius: 100, speed: 0.003, phase: 0.5, color: 'rgba(75, 85, 99, 0.15)' },
      { x: 0.1, y: 0.8, teeth: 14, radius: 70, speed: -0.004, phase: 0.3, color: 'rgba(234, 88, 12, 0.1)' }
    ];

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    const drawGear = (x, y, teeth, radius, holeRadius, angle, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      for (let i = 0; i < teeth; i++) {
        const theta = (i / teeth) * 2 * Math.PI;
        const nextTheta = ((i + 0.5) / teeth) * 2 * Math.PI;
        const outerRadius = radius * 1.15;
        
        ctx.lineTo(Math.cos(theta) * radius, Math.sin(theta) * radius);
        ctx.lineTo(Math.cos(theta) * outerRadius, Math.sin(theta) * outerRadius);
        ctx.lineTo(Math.cos(nextTheta) * outerRadius, Math.sin(nextTheta) * outerRadius);
        ctx.lineTo(Math.cos(nextTheta) * radius, Math.sin(nextTheta) * radius);
      }
      ctx.closePath();
      ctx.fill();
      
      // Center hole
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(0, 0, holeRadius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += 0.005;

      gears.forEach(gear => {
        const currentRotation = rotation * (gear.speed / 0.005) + gear.phase;
        drawGear(
          gear.x * canvas.width,
          gear.y * canvas.height,
          gear.teeth,
          Math.min(canvas.width, canvas.height) * (gear.radius / 800),
          Math.min(canvas.width, canvas.height) * (gear.radius / 800) * 0.3,
          currentRotation,
          gear.color
        );
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />;
};

const Section = ({ id, title, subtitle, children, bgColor = "bg-white", className = "" }) => (
  <section id={id} className={`py-16 lg:py-20 xl:py-24 ${bgColor} ${className}`}>
    <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto">{subtitle}</p>}
        <div className="w-16 lg:w-20 h-1 lg:h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
      </div>
      {children}
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-orange-400 hover:shadow-xl transition-all duration-300 group">
    <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
      <Icon className="text-orange-600 group-hover:text-white w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FacilityCard = ({ title, items, imageText, image, onClick }) => (
  <div onClick={onClick} className="overflow-hidden rounded-2xl bg-white shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 text-left">
    <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
      {image && (
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      )}
      <div className={`absolute inset-0 transition-colors duration-300 ${image ? 'bg-slate-900/30 group-hover:bg-slate-900/10' : 'bg-orange-900/10 group-hover:bg-orange-900/0'}`}></div>
      {!image && <span className="text-gray-400 font-bold text-lg uppercase tracking-widest relative z-10">{imageText}</span>}
    </div>
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center text-left">
        <div className="w-2 h-6 bg-orange-600 mr-3 rounded-full"></div>
        <span>{title}</span>
      </h3>
      <ul className="space-y-2 text-left">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-gray-600 text-sm text-left">
            <ChevronRight size={14} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-left">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-4 lg:py-6 border-t border-white/5">
    <div className="w-full px-6 lg:px-12 xl:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-600 p-2 rounded-lg">
            <Settings className="w-4 lg:w-5 h-4 lg:h-5 animate-spin-slow" />
          </div>
          <span className="font-bold text-lg lg:text-xl tracking-tight">
            Central Workshop <span className="text-orange-500 text-xs lg:text-sm">IIT Hyderabad</span>
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6 text-gray-400 text-xs lg:text-sm">
          <a href="https://cws.iith.ac.in/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="https://cws.iith.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facility Rules</a>
          <a href="https://www.iith.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IITH Main Site</a>
        </div>
      </div>
      <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-white/5 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Indian Institute of Technology Hyderabad. All Rights Reserved.
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    document.title = 'Central Workshop';
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const pages = ['advanced-manufacturing', 'machine-shop', 'fabrication', 'hydraulics', 'fitting', 'electrical', 'electronics', 'diy', 'team', 'gallery', 'events'];
      
      if (pages.includes(hash)) {
        setSelectedFacility(hash);
      } else {
        setSelectedFacility(null);
        if (hash) {
          setTimeout(() => {
            const target = document.getElementById(hash);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash on load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (href) => {
    const hash = href.startsWith('#') ? href : `#${href}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      const targetId = hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToFacilities = () => {
    window.location.hash = '#facilities';
  };

  // Show facility detail page
  if (selectedFacility) {
    const commonProps = {
      onBack: handleBackToFacilities,
      Navbar: Navbar,
      Footer: Footer,
      onNavigate: handleNavigate
    };

    switch (selectedFacility) {
      case 'advanced-manufacturing':
        return <AdvancedManu {...commonProps} />;
      case 'machine-shop':
        return <MachineShop {...commonProps} />;
      case 'fabrication':
        return <Fabrication {...commonProps} />;
      case 'hydraulics':
        return <Hydraulics {...commonProps} />;
      case 'fitting':
        return <Fitting {...commonProps} />;
      case 'electrical':
        return <Electrical {...commonProps} />;
      case 'electronics':
        return <Electronics {...commonProps} />;
      case 'diy':
        return <DIY {...commonProps} />;
      case 'team':
        return <Team {...commonProps} />;
      case 'gallery':
        return <Gallery {...commonProps} />;
      case 'events':
        return <Events {...commonProps} />;
      default:
        break;
    }
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50 selection:bg-orange-200 selection:text-orange-900 font-sans">
      <Navbar onNavigate={handleNavigate} />
      {/* Hero Section */}

      <header id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 pt-12 md:pt-16">
        <GearCanvas />
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center lg:text-left -translate-y-6 lg:-translate-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-600/10 border border-orange-500/20 px-3 py-1 rounded-full text-orange-400 text-sm font-medium mb-6 animate-bounce lg:ml-16">
              <Zap size={14} />
              <span>Maker Space</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-14 xl:mb-20 sm:max-w-3xl lg:max-w-4xl mx-auto lg:mx-0">
              Empowering <span className="text-orange-500">Innovation</span> Through Engineering.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto lg:mx-0">
              The Central Workshop at IIT Hyderabad is a state-of-the-art facility supporting academic research and 
              student projects with precision manufacturing and hands-on training.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a 
                href="#facilities"
                onClick={(e) => { e.preventDefault(); handleNavigate('#facilities'); }}
                className="px-4 sm:px-5 py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center group text-[11px] sm:text-xs"
              >
                Explore Facilities
                <ChevronRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://cws.iith.ac.in/workflow/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-sm flex items-center justify-center border border-white/10 text-[11px] sm:text-xs"
              >
                Submit Work Request
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -ml-4 lg:-ml-12 animate-bounce flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 mb-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-white/60 text-xs font-medium tracking-wide">Scroll down to explore</span>
        </div>
      </header> 

      {/* Stats Section */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            {[
              { label: 'Machines', value: '50+' },
              { label: 'Students/Year', value: '1000+' },
              { label: 'Total Area', value: '10k sqft' },
              { label: 'Research Projects', value: '200+' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-orange-600 mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Features/Why Us */}
      <Section id="features" title="Why We Stand Out" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard 
            icon={Wrench}
            title="Vision"
            description="To be a premier center of excellence in fabrication and manufacturing, empowering the next generation of engineers to transform visionary concepts into tangible, high-precision realities."
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Mission"
            description="To provide an advanced technical ecosystem equipped with high-precision machinery and expert mentorship, ensuring that every student's creative design can be successfully engineered into a functional prototype."
          />
          <FeatureCard 
            icon={Users}
            title="Collaborative Space"
            description="A vibrant hub where students come together to transform their innovative ideas and creative blueprints into tangible, real-world projects through hands-on experimentation, collaboration, and practical problem-solving."
          />
        </div>
      </Section>

      {/* Facilities Section */}
      <Section 
        id="facilities" 
        title="Our Specialized Facilities" 
        subtitle="Equipped with the latest technology, our workshop handles everything from heavy-duty machining to high-precision fabrication."
        className="!pb-10 lg:!pb-12 xl:!pb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">

           <FacilityCard 
            title="Advanced Manufacturing" 
            items={["3-Axis CNC Milling", "CNC Turning Center", "EDM Wire Cut", "3D Printing Lab"]}
            imageText="Precision CNC"
            image={advancedManuImg}
            onClick={() => handleNavigate('#advanced-manufacturing')}
          />

          <FacilityCard 
            title="Machine Shop" 
            items={["High-speed Lathe Machines", "Vertical Milling Machines", "Surface Grinding", "Radial Drilling"]}
            imageText="Heavy Machining"
            image={machineShopImg}
            onClick={() => handleNavigate('#machine-shop')}
          />
         
          <FacilityCard 
            title="Fabrication & Welding" 
            items={["TIG & MIG Welding", "Plasma Arc Cutting", "Gas Welding Setups", "Sheet Metal Processing"]}
            imageText="Fabrication"
            image={fabricationImg}
            onClick={() => handleNavigate('#fabrication')}
          />
          <FacilityCard 
            title="Hydraulic & Pneumatics" 
            items={["Air Compressor", "Pneumatic Training Kit", "Hydrolic Training Kit", "Band Saw"]}
            imageText="Wood Works"
            image={hydraulicsImg}
            onClick={() => handleNavigate('#hydraulics')}
          />
          <FacilityCard 
            title="Fitting Shop" 
            items={["Bench Work Stations", "Power Hammers", "Electric Furnaces", "Heat Treatment"]}
            imageText="Metal Forming"
            image={fittingImg}
            onClick={() => handleNavigate('#fitting')}
          />
          <FacilityCard 
            title="Electrical" 
            items={["Sand Casting Setup", "Pit Furnaces", "Pattern Making", "Molding Tools"]}
            imageText="Casting Lab"
            image={electricalImg}
            onClick={() => handleNavigate('#electrical')}
          />
        <FacilityCard 
            title="Electronics" 
            items={["Sand Casting Setup", "Pit Furnaces", "Pattern Making", "Molding Tools"]}
            imageText="Casting Lab"
            image={electronicsImg}
            onClick={() => handleNavigate('#electronics')}
          />

          <FacilityCard 
            title="DIY" 
            items={["Sand Casting Setup", "Pit Furnaces", "Pattern Making", "Molding Tools"]}
            imageText="Casting Lab"
            image={diyImg}
            onClick={() => handleNavigate('#diy')}
          />
        
        </div>
      </Section>

     

      {/* Training & Safety */}
      <Section id="training" title="Training & Safety" subtitle="We ensure every user is proficient and protected before stepping onto the shop floor." className="!pt-10 lg:!pt-12 xl:!pt-16 !pb-10 lg:!pb-12 xl:!pb-16">
        <div className="bg-slate-900 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-6 lg:p-8 xl:p-12 lg:w-1/2">
            <h3 className="text-xl lg:text-xl xl:text-2xl font-bold text-white mb-6">Student Workshop Training</h3>
            <div className="space-y-4 lg:space-y-6">
              {[
                { step: "01", text: "Compulsory safety orientation module." },
                { step: "02", text: "Hand-tool proficiency assessment." },
                { step: "03", text: "Supervised machine operation training." },
                { step: "04", text: "Advanced CNC programming certification." }
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-3 lg:space-x-4">
                  <span className="text-orange-500 font-mono font-bold text-lg lg:text-xl">{item.step}</span>
                  <p className="text-gray-300 text-sm lg:text-base">{item.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 lg:mt-10 px-4 lg:px-6 py-2 lg:py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm lg:text-base">
              Download Safety Manual
            </button>
          </div>
          <div className="bg-orange-600 p-6 lg:p-8 xl:p-12 lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl lg:text-xl xl:text-2xl font-bold text-white mb-6">Mandatory Safety Gear</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {['Safety Goggles', 'Workshop Apron', 'Safety Shoes', 'Face Shield', 'Ear Muffs', 'Heat Gloves'].map((gear) => (
                <div key={gear} className="bg-orange-500/50 p-3 lg:p-4 rounded-xl border border-orange-400/30 flex items-center space-x-3 text-white">
                  <ShieldCheck size={18} className="lg:w-5 lg:h-5" />
                  <span className="font-medium text-sm lg:text-base">{gear}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Reach out for equipment booking, training inquiries, or technical support." className="!pt-10 lg:!pt-12 xl:!pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-start space-x-4 lg:space-x-5">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-orange-600 w-5 lg:w-6 h-5 lg:h-6" />
              </div>
              <div>
                <h4 className="text-left font-bold text-gray-900 text-base lg:text-base xl:text-lg">Our Location</h4>
                <p className="text-gray-600 text-sm lg:text-base">Central Workshop (Maker Space), IIT Hyderabad Campus, Kandi, Sangareddy, Telangana - 502284</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 lg:space-x-5">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-orange-600 w-5 lg:w-6 h-5 lg:h-6" />
              </div>
              <div>
                <h4 className="text-left font-bold text-gray-900 text-base lg:text-base xl:text-lg">Email Address</h4>
                <p className="text-gray-600 text-sm lg:text-base">office.cw@iith.ac.in</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 lg:space-x-5">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-orange-600 w-5 lg:w-6 h-5 lg:h-6" />
              </div>
              <div>
                <h4 className="text-left font-bold text-gray-900 text-base lg:text-base xl:text-lg">Phone</h4>
                <p className="text-gray-600 text-sm lg:text-base">+91 83 3103 6457</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 lg:space-x-5">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="text-orange-600 w-5 lg:w-6 h-5 lg:h-6" />
              </div>
              <div>
                <h4 className="text-left font-bold text-gray-900 text-base lg:text-base xl:text-lg">Working Hours</h4>
                <p className="text-gray-600 text-sm lg:text-base">Monday - Friday : 09:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-xl border border-gray-100">
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name') || '';
                const id = formData.get('studentId') || '';
                const message = formData.get('message') || '';
                const subject = `Workshop Inquiry from ${name} ${id ? `(${id})` : ''}`;
                window.location.href = `mailto:office.cw@iith.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 lg:px-6 py-2 lg:py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm lg:text-base" placeholder="" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Student ID</label>
                  <input type="text" name="studentId" className="w-full px-4 lg:px-6 py-2 lg:py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm lg:text-base" placeholder="" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 lg:px-6 py-2 lg:py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm lg:text-base" placeholder="" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea name="message" required className="w-full px-4 lg:px-6 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all h-24 lg:h-24 text-sm lg:text-base" placeholder=""></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-600/30 hover:bg-orange-700 transition-all transform active:scale-[0.98] text-sm lg:text-base">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Footer />

      {/* Custom Styles for Animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}