import React, { useEffect } from 'react';
import { ArrowLeft, Mail, ExternalLink, Users } from 'lucide-react';
import GangadharanRajuImg from '../img/GangadharanRaju.png';
import sto1Img from '../img/sto1.png';
import ajithImg from '../img/jts_ajith1.png';
import jbImg from '../img/jts_jb1.png';
import st1Img from '../img/st1.png';
import praveenImg from '../img/st_praveen1.png';
import srinivasImg from '../img/srinivas1.png';
import pramodImg from '../img/pramod1.png';
import lingamaiahImg from '../img/Lingamaiah1.png';
import sahooImg from '../img/sahoo1.png';
import prashuImg from '../img/PRASHU1.png';
import arbImg from '../img/A_RB1.png';
import jyotiImg from '../img/Jyoti1.png';
import sakibImg from '../img/SAKIB1.png';
import drbImg from '../img/D_rb1.png';

const leadershipData = [
  {
    name: 'Gangadharan Raju',
    role: 'Faculty-in-Charge',
    subRole: 'Professor',
    email: 'gangadharanr@iith.ac.in',
    img: GangadharanRajuImg,
    link: 'https://people.iith.ac.in/gangadharanr/'
  },
  {
    name: 'Malla Seetarami Naidu',
    role: 'Workshop-in-Charge',
    subRole: 'Senior Technical Officer',
    email: 'seetaram.malla@admin.iith.ac.in',
    img: sto1Img,
    link: null
  }
];

const staffData = [
  { name: 'Ajith Kanakambaran', role: 'Junior Technical Superintendent', email: 'ajith.ak@admin.iith.ac.in', img: ajithImg },
  { name: 'Jeebanbandhu Mahanta', role: 'Junior Technical Superintendent', email: 'j.mahanta@admin.iith.ac.in', img: jbImg },
  { name: 'Vadla Brahma Chary', role: 'Senior Technician', email: 'brahmachary.vadla@admin.iith.ac.in', img: st1Img },
  { name: 'A Praveen Kumar', role: 'Senior Technician', email: 'praveen.ausali@admin.iith.ac.in', img: praveenImg },
  { name: 'M Srinivas', role: 'Technician', email: 'manchala.srinivas@admin.iith.ac.in', img: srinivasImg },
  { name: 'Lohakare Pramod Maroti', role: 'Technician', email: 'pramod.lohakare@admin.iith.ac.in', img: pramodImg },
  { name: 'Lingamaiah B', role: 'Technician', email: 'lingam.b@admin.iith.ac.in', img: lingamaiahImg },
  { name: 'Dhananjay Sahoo', role: 'Technician', email: 'dhananjay.sahoo@admin.iith.ac.in', img: sahooImg },
  { name: 'G Prashanth', role: 'Junior Technician', email: 'prashanth.g@admin.iith.ac.in', img: prashuImg },
  { name: 'Ajay Kumar Kar', role: 'Junior Technician (Lien)', email: 'ajaykumar.kar@admin.iith.ac.in', img: arbImg },
  { name: 'Jiban Jyoti Palai', role: 'Junior Technician', email: 'jibanjyoti.palai@admin.iith.ac.in', img: jyotiImg },
  { name: 'Shaiyyam Sakib Sabba', role: 'Junior Technician', email: 'sakib.sabba@admin.iith.ac.in', img: sakibImg },
  { name: 'Lavoji Devender Reddy', role: 'Skilled Technician (Contract)', email: 'devender.lavoti@gmail.com', img: drbImg }
];

const Team = ({ onBack, Navbar, Footer, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-900 selection:bg-orange-200 selection:text-orange-900 font-sans">
      <Navbar onNavigate={onNavigate} />
      
      <div className="pt-16 pb-16">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          {/* Back Button
          <div className="flex justify-start w-full mb-6 lg:mb-8">
            <button 
              onClick={() => onNavigate('#home')}
              className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-bold transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
          </div> */}

          <div className="text-center max-w-3xl mx-auto mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Meet Our <span className="text-orange-500">Team</span>
            </h1>
          </div>

          {/* Page Header
          
          <div className="mb-16 rounded-3xl bg-gradient-to-r from-orange-100 via-orange-50 to-white p-8 lg:p-12 shadow-sm border border-orange-100">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-4">
              Meet Our Team
            </h1>
            <p className="text-base lg:text-lg text-slate-600 max-w-3xl font-medium leading-relaxed">
              The Central Workshop is powered by a dedicated team of faculty, technical officers, and skilled technicians committed to fostering an environment of innovation, precision, and hands-on learning.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mt-8 rounded-full"></div>
          </div> */}

          {/* Leadership Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14 max-w-xl mx-auto">
              {leadershipData.map((member, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-orange-500 rounded-full scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-full relative z-10 border-4 border-white shadow-md bg-white" 
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffedd5&color=c2410c&size=200`; }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-bold mb-1">{member.role}</p>
                  <p className="text-slate-500 text-sm mb-4">{member.subRole}</p>
                  
                  <div className="flex justify-center">
                    <a href={`mailto:${member.email}`} className="inline-flex items-center text-slate-500 hover:text-orange-600 transition-colors">
                      <Mail size={18} className="mr-1.5 flex-shrink-0" />
                      <span className="text-sm font-medium break-all">{member.email}</span>
                    </a>
                  </div>
                  
                  {member.link && (
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <a href={member.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                        <ExternalLink size={16} className="mr-1.5" />
                        View Profile
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Staff Section */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              {/* <Users className="text-orange-600 w-8 h-8" /> */}
              {/* <h2 className="text-3xl font-bold text-white">Technical Staff</h2> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-3xl mx-auto">
              {staffData.map((member, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-slate-50 group-hover:border-orange-100 transition-colors bg-white" 
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f8fafc&color=334155&size=150`; }}
                  />
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 text-sm font-semibold mb-4 h-10 flex items-center justify-center">
                    {member.role}
                  </p>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-slate-50 group-hover:bg-orange-50 text-slate-600 group-hover:text-orange-600 rounded-xl text-sm font-medium transition-colors break-all"
                  >
                    <Mail size={16} className="mr-2 flex-shrink-0" />
                    <span>Email</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Team;
