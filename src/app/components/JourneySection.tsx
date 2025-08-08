"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const JourneySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top Section - Text and Image */}
        <div className="mb-20">
          <motion.div 
            className="bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                         <div className="grid lg:grid-cols-5">
                             {/* Left Panel - Text and Button */}
               <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white uppercase text-sm font-medium tracking-wider">OUR FACT</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-white">Our journey </span>
                  <span className="text-white">your inspiration</span>
                </h2>
                
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Our journey is built on creativity, innovation, inspiring brands to achieve their full potential.
                </p>
                
                <div className="flex items-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                  <button className="w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-5 h-5 text-black transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                </div>
              </div>

                             {/* Right Panel - Image */}
               <div className="lg:col-span-3 relative h-[320px] lg:h-[380px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay from right edge */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

                 {/* Middle Section - Three Feature Columns */}
         <div className="relative grid md:grid-cols-3 gap-8 mb-20">
           <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/20"></div>
           <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/20"></div>
           {/* Column 1 - Innovation At The Core */}
           <motion.div 
             className="text-left"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             viewport={{ once: true }}
           >
                           <div className="w-12 h-12 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
             <h3 className="text-xl font-bold text-white mb-4">Innovation At The Core</h3>
             <p className="text-white/80 leading-relaxed">
               We leverage the latest technology to deliver cutting-edge features that keep you.
             </p>
           </motion.div>

           {/* Column 2 - User-Centric Design */}
           <motion.div 
             className="text-left"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
           >
                           <div className="w-12 h-12 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 0l2-2m-2 2l-2-2" />
                </svg>
              </div>
             <h3 className="text-xl font-bold text-white mb-4">User-Centric Design</h3>
             <p className="text-white/80 leading-relaxed">
               We leverage the latest technology to deliver cutting-edge features that keep you.
             </p>
           </motion.div>

           {/* Column 3 - Dedicated Support */}
           <motion.div 
             className="text-left"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             viewport={{ once: true }}
           >
                           <div className="w-12 h-12 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
             <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
             <p className="text-white/80 leading-relaxed">
               We leverage the latest technology to deliver cutting-edge features that keep you.
             </p>
           </motion.div>
         </div>

                 {/* Bottom Section - Statistics */}
         <motion.div 
           className="bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 p-8 lg:p-12"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
         >
                       <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Desktop çizgileri */}
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-white/20"></div>
              <div className="hidden md:block absolute left-2/4 top-0 bottom-0 w-px bg-white/20"></div>
              <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-white/20"></div>
              {/* Mobil çizgileri */}
              <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
              <div className="md:hidden absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
                         {/* Stat 1 */}
             <div className="text-left">
               <div className="text-4xl lg:text-5xl font-bold text-white mb-2">235+</div>
               <p className="text-white/80 text-sm">With 235K+ creative portfolio projects completed.</p>
             </div>

             {/* Stat 2 */}
             <div className="text-left">
               <div className="text-4xl lg:text-5xl font-bold text-white mb-2">97%</div>
               <p className="text-white/80 text-sm">With 235K+ creative portfolio projects completed.</p>
             </div>

             {/* Stat 3 */}
             <div className="text-left">
               <div className="text-4xl lg:text-5xl font-bold text-white mb-2">17k+</div>
               <p className="text-white/80 text-sm">With 235K+ creative portfolio projects completed.</p>
             </div>

             {/* Stat 4 */}
             <div className="text-left">
               <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1.1k+</div>
               <p className="text-white/80 text-sm">With 235K+ creative portfolio projects completed.</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JourneySection;
