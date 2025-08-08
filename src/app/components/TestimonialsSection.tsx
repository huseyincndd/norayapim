"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(2);

  const testimonials = [
    {
      name: "Deniz Yılmaz",
      title: "Tasarımcı",
      rating: 5,
      text: "Bu ekiple çalışmak kesinlikle bir zevkti. Detaylara olan dikkatleri ve yaratıcı vizyonları markamızı hiç hayal etmediğimiz şekillerde hayata geçirdi. Final sonuç tüm beklentilerimizi aştı ve şirketimizin özünü mükemmel bir şekilde yakaladı.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Selin Kaya",
      title: "Pazarlama Direktörü",
      rating: 5,
      text: "Bu ekibin her projeye getirdiği profesyonellik ve yaratıcılık seviyesi olağanüstü. Vizyonumuzu marka kimliğimizi mükemmel bir şekilde temsil eden etkileyici bir gerçekliğe dönüştürdüler.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Mehmet Demir",
      title: "CEO",
      rating: 5,
      text: "Baştan sona olağanüstü hizmet. Ekibin tasarım ve geliştirme konusundaki uzmanlığı, sektörümüzde gerçekten öne çıkan bir dijital varlık yaratmamıza yardımcı oldu.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Top Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white/80 text-sm uppercase tracking-wider font-medium">
              Müşteri Yorumları
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Mutlu{" "}
            <span className="text-white">müşterilerimizin</span>{" "}
            söylediklerini dinleyin
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
                     className="flex flex-col lg:flex-row lg:h-[400px] gap-6"
        >
          {/* Client Photo - Left Section (25%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
                         className="w-full lg:w-1/3 relative rounded-2xl overflow-hidden border border-gray-700/50 h-64 lg:h-full"
          >
                         <img
               src={current.image}
               alt={current.name}
               className="w-full h-full object-cover"
             />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

                     {/* Testimonial Card - Right Section (75%) */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             viewport={{ once: true }}
             className="w-full lg:w-2/3 bg-white/5 backdrop-blur-xl p-8 lg:p-12 relative rounded-2xl border border-white/20 shadow-2xl"
           >

                         {/* Large Quote Marks Background */}
             <div className="absolute top-4 left-4 text-white/10 text-8xl font-serif">
               "
             </div>
             <div className="absolute bottom-4 right-4 text-white/10 text-8xl font-serif">
               "
             </div>
            
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

                         {/* Testimonial Text */}
             <blockquote className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 relative z-10 px-8">
               Bu ekiple çalışmak kesinlikle bir zevkti. Belirsiz fikirlerimizi aldılar ve beklentilerimizi aşan etkileyici bir görsel kimliğe dönüştürdüler. İlk danışmadan final ürüne kadar detaylara olan dikkatleri ve markamızı hayata geçirme yetenekleri olağanüstü. Her zaman geri bildirime açıktılar ve her adımda tamamen memnun olduğumuzdan emin oldular.
             </blockquote>

            {/* Separator */}
            <div className="w-full h-px bg-white/20 mb-6" />

                         {/* Client Info and Navigation */}
             <div className="flex justify-between items-end">
               {/* Client Info - Left */}
               <div>
                 <h4 className="text-white font-bold text-xl mb-1">
                   {current.name}
                 </h4>
                 <p className="text-white/70 text-sm">
                   {current.title}
                 </p>
               </div>
               
               {/* Navigation Arrows - Right */}
               <div className="flex gap-2">
                 <button
                   onClick={prevTestimonial}
                   className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300 flex items-center justify-center border border-gray-600/50 hover:border-gray-500/50"
                 >
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                   </svg>
                 </button>
                 <button
                   onClick={nextTestimonial}
                   className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300 flex items-center justify-center border border-gray-600/50 hover:border-gray-500/50"
                 >
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                 </button>
               </div>
             </div>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
