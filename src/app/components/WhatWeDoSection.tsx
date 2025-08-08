"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Web Design And Development",
      description: "Creating intuitive user experiences through thoughtful layouts, wireframes, and prototypes that prioritize your audience's needs."
    },
    {
      title: "Motion Graphics And Animation",
      description: "Creating intuitive user experiences through thoughtful layouts, wireframes, and prototypes that prioritize your audience's needs."
    },
    {
      title: "Illustrations And Custom Artwork",
      description: "Creating intuitive user experiences through thoughtful layouts, wireframes, and prototypes that prioritize your audience's needs."
    }
  ];

  return (
         <section className="relative overflow-hidden">
       <div className="grid grid-cols-1 lg:grid-cols-10 min-h-screen">
         
         {/* Left Column */}
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="p-8 lg:p-16 flex flex-col justify-center lg:col-span-6"
         >
                     <div className="max-w-lg">
                         {/* Header */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 mb-6"
             >
               <div className="w-2 h-2 bg-white rounded-full" />
               <h2 className="text-sm lg:text-base font-semibold text-white tracking-wider uppercase">
                 WHAT WE DO
               </h2>
             </motion.div>

                         {/* Main Heading */}
             <motion.h3
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               viewport={{ once: true }}
               className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
             >
               Turning creative <span className="text-white">ideas</span><br />
               Into stunning results
             </motion.h3>

            {/* Service Descriptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {services.map((service, index) => (
                <div key={index} className={`${index < services.length - 1 ? 'border-b border-white/20 pb-6' : ''}`}>
                                     <div className="flex items-start gap-3 mb-3">
                     <div className="w-6 h-6 border-2 border-white rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                       <div className="w-2 h-2 bg-white rounded-full" />
                     </div>
                     <h4 className="text-lg lg:text-xl font-bold text-white">
                       {service.title}
                     </h4>
                   </div>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed ml-9">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

                 {/* Right Column - Image with Get Started Button */}
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="px-6 py-8 lg:pt-16 lg:pb-16 lg:pr-16 lg:pl-0 flex flex-col justify-center lg:col-span-4"
         >
          <div className="relative">
            {/* Top Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-right mb-8"
            >
              <p className="text-white text-lg mb-2">We Have Worked For You</p>
                             <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-wider">
                 SCIENCE 1996
               </h2>
            </motion.div>

            {/* Main Image with Get Started Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Get Started Button - Circular */}
                             <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.8 }}
                 viewport={{ once: true }}
                 className="absolute -top-4 -left-4 z-10 w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
               >
                                 <div className="text-center">
                   <div className="text-black text-xs lg:text-sm font-bold leading-tight">
                     GET<br />STARTED
                   </div>
                   <svg className="w-4 h-4 text-black mx-auto mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                   </svg>
                 </div>
              </motion.div>

                             {/* Main Image */}
               <div className="relative overflow-hidden rounded-2xl flex-shrink-0 w-full lg:w-auto">
                 <img
                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop&q=80"
                   alt="Profesyonel işbirliği"
                   className="w-full h-[450px] lg:w-96 lg:h-[550px] object-cover rounded-2xl"
                 />
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection; 