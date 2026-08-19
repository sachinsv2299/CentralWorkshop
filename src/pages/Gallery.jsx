import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, Maximize2, Image as ImageIcon } from 'lucide-react';
import training1 from '../img/gallery/trainingcr2.jpg';
import training2 from '../img/gallery/trainingcr3.jpg';
import training3 from '../img/gallery/trainingcr4.jpg';
import training4 from '../img/gallery/trainingcr5.jpg';
import workshop1 from '../img/gallery/workshop.png';
import workshop2 from '../img/gallery/workshop2.jpg';
import workshop3 from '../img/gallery/workshop3.png';
import workshop4 from '../img/gallery/workshop4.jpg';
import workshop5 from '../img/gallery/workshop5.jpg';
import workshop6 from '../img/gallery/workshop6.jpg';

import achievements1 from '../img/gallery/Achievement1.jpeg';



const galleryData = [
  
  {
    id: 1,
    title: 'CISR Sponsored training program for ITI students',
    category: 'Training',
    img: training1
  },
  {
    id: 2,
    title: 'CISR Sponsored training program for ITI students',
    category: 'Training',
    img: training2
  },
  {
    id: 3,
    title: 'CISR Sponsored training program for ITI students',
    category: 'Training',
    img: training3
  },
  {
    id: 4,
    title: 'CISR Sponsored training program for ITI students',
    category: 'Training',
    img: training4
  },
  {
    id: 5,
    title: 'Student Achievements',
    category: 'Achievements',
    img: achievements1
  },
  {
    id: 6,
    title: 'Workshop',
    category: 'Workshop',
    img: workshop1
  },
  {
    id: 7,
    title: 'Workshop',
    category: 'Workshop',
    img: workshop2
  },
  {
    id: 8,
    title: 'Workshop',
    category: 'Workshop',
    img: workshop3
  },

  {
    id: 9,
    title: 'Workshop',
    category: 'Workshop',
    img: workshop4
  },
  {
    id: 10,
    title: 'Workshop',
    category: 'Workshop',
    img: workshop5
  },
  {
    id: 11,
    title: 'Workshop',
    category: 'Workshop',
    img: workshop6
  }

];

const categories = ['All', 'Workshop', 'Training', 'Achievements', 'Events'];

const Gallery = ({ onBack, Navbar, Footer, onNavigate }) => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

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
              Our <span className="text-orange-500">Gallery</span>
            </h1>
            {/* <p className="text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
              Explore the Central Workshop in action. From precision machining to student-led innovations, witness the environment where theoretical designs become physical reality.
            </p> */}
            <div className="w-16 h-1.5 bg-orange-500 mt-6 rounded-full mx-auto"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredImages.map((item) => (
              <div 
                key={item.id} 
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-slate-800 shadow-lg"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <img 
                  src={item.img} 
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 lg:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white flex items-center justify-between">
                      {item.title}
                      <Maximize2 size={20} className="text-white/70" />
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No images found for this category.</p>
            </div>
          )}

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-sm animate-in fade-in duration-200">
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          
          <div className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center">
            <img 
              src={selectedImage.img} 
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center">
              <span className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-2 block">{selectedImage.category}</span>
              <h2 className="text-2xl font-bold text-white">{selectedImage.title}</h2>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        html { scroll-behavior: smooth; }
        body { ${selectedImage ? 'overflow: hidden;' : ''} }
      `}</style>
    </div>
  );
};

export default Gallery;
