import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Trend',
    desc: 'We continuously analyze technology and industry signals to identify emerging opportunities.'
  },
  {
    title: 'Matchmaking',
    desc: 'Our network connects you with the right partners to accelerate execution.'
  },
  {
    title: 'Expert-Led Delivery',
    desc: 'Seasoned practitioners guide each engagement end-to-end for measurable outcomes.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-customBlack">How It Works</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-customBlue text-xl font-medium mb-2">{step.title}</div>
            <p className="text-center text-customGreyishBlack max-w-md">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
