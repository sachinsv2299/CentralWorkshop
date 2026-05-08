import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: 'Advanced 5-Axis CNC Workshop',
    date: '2026-05-15T09:00:00',
    duration: '4 Hours',
    location: 'Central Workshop, Maker Space',
    description: 'Join us for a comprehensive hands-on session on 5-Axis CNC machining. Learn advanced toolpath generation and intricate multi-sided operations from industry experts.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80',
    regLink: 'https://forms.gle/placeholder',
  },
  {
    id: 2,
    title: 'Safety Protocol & Tools Orientation',
    date: '2025-10-05T14:00:00',
    duration: '2 Hours',
    location: 'Main Auditorium & Workshop',
    description: 'Mandatory safety orientation for all new students. Covers basic hand tools handling, emergency procedures, and central workshop floor rules.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'TIG Welding Masterclass',
    date: '2023-08-20T10:00:00',
    duration: '3 Hours',
    location: 'Fabrication & Welding Wing',
    description: 'An intensive masterclass on TIG welding techniques, focusing on complex aluminum and stainless steel joints and gas flow regulation.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4ce5ee91c93?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: '3D Printing Hackathon',
    date: '2023-11-10T09:00:00',
    duration: '48 Hours',
    location: '3D Printing Lab',
    description: 'A 48-hour challenge where student teams designed and rapidly prototyped functional mechanical assemblies using FDM and SLA technologies.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Introduction to Robotics Fabrication',
    date: '2026-02-10T10:00:00',
    duration: '6 Hours',
    location: 'Electronics & Fabrication Lab',
    description: 'A beginner-friendly workshop on building basic robotic frames using laser cutting and 3D printing techniques. Open to all branches.',
    image: 'https://images.unsplash.com/photo-1561744161-5586603a11b6?auto=format&fit=crop&w=800&q=80',
    regLink: 'https://forms.gle/placeholder',
  },
  {
    id: 6,
    title: 'Advanced Hydraulics Training',
    date: '2026-03-22T13:30:00',
    duration: '3 Hours',
    location: 'Hydraulics Wing',
    description: 'Learn the fundamentals of fluid power, system design, and maintenance of industrial hydraulic machinery. Certification provided upon completion.',
    image: 'https://images.unsplash.com/photo-1610415516942-019688478d1f?auto=format&fit=crop&w=800&q=80',
    regLink: 'https://forms.gle/placeholder',
  }
];

const Events = ({ onBack, Navbar, Footer, onNavigate }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set exact current time on mount
    setNow(new Date());
  }, []);

  // Filter and automatically categorize events based on current date/time
  const upcomingEvents = eventsData
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort nearest first

  const pastEvents = eventsData
    .filter(e => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort most recent past first

  const EventCard = ({ event, isPast }) => {
    const eventDate = new Date(event.date);
    const isHappeningSoon = !isPast && (eventDate - now) < 86400000; // Less than 24 hours away

    return (
      <div className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 group flex flex-col ${isPast ? 'grayscale-[30%]' : 'hover:shadow-xl hover:-translate-y-1'}`}>
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
          <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
          {/* Date Badge */}
          <div className={`absolute top-4 left-4 z-20 shadow-lg backdrop-blur-md rounded-xl p-2 text-center min-w-[3.5rem] border ${isPast ? 'bg-slate-900/80 border-slate-700 text-slate-300' : 'bg-white/90 border-white/20 text-slate-900'}`}>
            <span className={`block text-xs font-bold uppercase tracking-wider ${isPast ? 'text-slate-400' : 'text-orange-600'}`}>
              {eventDate.toLocaleString('default', { month: 'short' })}
            </span>
            <span className="block text-xl font-black">
              {eventDate.getDate()}
            </span>
          </div>

          {/* Happening Soon Indicator */}
          {isHappeningSoon && (
            <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Happening Soon
            </div>
          )}
        </div>

        <div className="p-5 lg:p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{event.title}</h3>
          
          <div className="space-y-2 mb-4 flex-grow">
            <div className="flex items-start text-slate-600 text-sm font-medium">
               <Clock size={18} className={`mr-3 mt-0.5 flex-shrink-0 ${isPast ? 'text-slate-400' : 'text-orange-500'}`} />
               <div>
                 <span>{eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                 <span className="mx-2">•</span>
                 <span>{event.duration}</span>
               </div>
            </div>
            <div className="flex items-start text-slate-600 text-sm font-medium">
               <MapPin size={18} className={`mr-3 mt-0.5 flex-shrink-0 ${isPast ? 'text-slate-400' : 'text-orange-500'}`} />
               <span>{event.location}</span>
            </div>
          </div>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {event.description}
          </p>

          <div className="mt-auto">
            {!isPast ? (
               event.regLink ? (
                 <a href={event.regLink} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-orange-50 text-orange-600 font-bold rounded-xl hover:bg-orange-600 hover:text-white transition-colors flex justify-center items-center group/btn text-sm">
                   Register Now
                   <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                 </a>
               ) : (
                 <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }} className="w-full py-2.5 bg-orange-50 text-orange-600 font-bold rounded-xl hover:bg-orange-600 hover:text-white transition-colors flex justify-center items-center group/btn text-sm">
                   Contact Us
                   <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                 </a>
               )
            ) : (
               <div className="w-full py-2.5 bg-slate-50 text-slate-500 font-bold rounded-xl flex justify-center items-center cursor-default text-sm">
                 <CheckCircle size={18} className="mr-2 text-slate-400" />
                 Event Concluded
               </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-900 selection:bg-orange-200 selection:text-orange-900 font-sans">
      <Navbar onNavigate={onNavigate} />
      
      <div className="pt-16 pb-16">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          {/* Back Button
          <div className="flex justify-start w-full mb-6 lg:mb-8">
            <button 
              onClick={() => onNavigate('#home')}
              className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 font-bold transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
          </div> */}

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Events & <span className="text-orange-500">Workshops</span>
            </h1>
            {/* <p className="text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
              Stay updated with our latest technical sessions, hackathons, and safety orientations. Join us to elevate your practical engineering skills.
            </p>
            <div className="w-16 h-1.5 bg-orange-500 mt-6 rounded-full mx-auto"></div> */}
          </div>

          {/* Upcoming Events Section */}
          <div className="mb-20">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center">
              <div className="w-2 h-8 bg-orange-500 mr-4 rounded-full"></div>
              Upcoming Events
              <span className="ml-4 bg-orange-500/20 text-orange-400 text-sm py-1 px-3 rounded-full">{upcomingEvents.length}</span>
            </h2>
            
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map(event => <EventCard key={event.id} event={event} isPast={false} />)}
              </div>
            ) : (
              <div className="bg-slate-800/50 rounded-3xl p-12 text-center border border-slate-800">
                <Calendar className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Upcoming Events</h3>
                <p className="text-slate-400">Check back later for newly scheduled workshops and training sessions.</p>
              </div>
            )}
          </div>

          {/* Past Events Section */}
          {pastEvents.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-slate-600 mr-4 rounded-full"></div>
                Past Events
                <span className="ml-4 bg-slate-800 text-slate-400 text-sm py-1 px-3 rounded-full">{pastEvents.length}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
                {pastEvents.map(event => <EventCard key={event.id} event={event} isPast={true} />)}
              </div>
            </div>
          )}

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

export default Events;
