"use client";

import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "Our pricing is based on the scope and complexity of each project and Contact us for a custom quote."
    },
    {
      question: "Can I make updates to the design later?",
      answer: "Our pricing is based on the scope and complexity of each project and Contact us for a custom quote."
    },
    {
      question: "How long does a project take?",
      answer: "Our pricing is based on the scope and complexity of each project and Contact us for a custom quote."
    },
    {
      question: "What is your design process?",
      answer: "Our pricing is based on the scope and complexity of each project and Contact us for a custom quote."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Our pricing is based on the scope and complexity of each project and Contact us for a custom quote."
    },
    {
      question: "Do I own the rights to the designs?",
      answer: "Our pricing is based on the scope and complexity of each project and Contact us for a custom quote."
    }
  ];

  return (
         <section className="py-20 relative">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                     {/* Small heading */}
           <div className="flex items-center justify-center gap-2 mb-6">
             <div className="w-2 h-2 bg-white rounded-full"></div>
             <span className="text-white uppercase text-sm font-medium tracking-wider">FAQS</span>
           </div>
           
           {/* Main title */}
           <h2 className="text-4xl lg:text-5xl font-bold">
             <span className="text-white">Answer to your </span>
             <span className="text-white">most common</span>
             <span className="text-white"> questions</span>
           </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {faqs.slice(0, 3).map((faq, index) => (
              <motion.div 
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Question Mark Icon */}
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">?</span>
                </div>
                
                {/* Question and Answer */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {faqs.slice(3, 6).map((faq, index) => (
              <motion.div 
                key={index + 3}
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Question Mark Icon */}
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">?</span>
                </div>
                
                {/* Question and Answer */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
