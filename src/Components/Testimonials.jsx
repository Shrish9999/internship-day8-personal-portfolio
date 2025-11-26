import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: "Alex R.", role: "CEO, StartUp", text: "Simply mind-blowing animations. Best developer we hired." },
  { name: "Sarah K.", role: "Product Manager", text: "Clean code, fast delivery, and amazing communication." },
  { name: "David B.", role: "Art Director", text: "He turned our boring design into a masterpiece." },
  { name: "Elena M.", role: "Founder", text: "The parallax effects are just stunning. Highly recommended." },
];

const ReviewCard = ({ review }) => (
  <div className="w-[350px] p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm mr-6 hover:bg-white/10 transition-colors">
    <p className="text-gray-300 font-sans text-sm mb-4 leading-relaxed">"{review.text}"</p>
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-800"></div>
        <div>
            <h4 className="text-white font-bold text-sm">{review.name}</h4>
            <p className="text-gray-500 text-xs uppercase">{review.role}</p>
        </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-32 overflow-hidden bg-primary relative">
        <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
                Client <span className="text-accent">Stories</span>
            </h2>
        </div>

        {/* Row 1: Left Movement */}
        <div className="flex mb-8 mask-gradient">
            <motion.div 
                initial={{ x: 0 }} 
                animate={{ x: "-50%" }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex"
            >
                {[...reviews, ...reviews, ...reviews].map((r, i) => <ReviewCard key={i} review={r} />)}
            </motion.div>
        </div>

        {/* Row 2: Right Movement */}
        <div className="flex mask-gradient">
            <motion.div 
                initial={{ x: "-50%" }} 
                animate={{ x: 0 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex"
            >
                {[...reviews, ...reviews, ...reviews].map((r, i) => <ReviewCard key={i} review={r} />)}
            </motion.div>
        </div>
    </section>
  );
};

export default Testimonials;