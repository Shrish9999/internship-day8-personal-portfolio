import React, { useState } from 'react';
import { personalDetails } from '../constants/data';
// import emailjs from '@emailjs/browser'; // Baad mein ID setup karni padegi

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Sending, Success, Error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulating Email Send (Asli ID baad mein dalenge)
    setTimeout(() => {
        setStatus("Message Sent! ✅");
        setFormData({ name: "", email: "", message: "" });
    }, 2000);

    /* 
    REAL IMPLEMENTATION (Baad mein ye uncomment karna):
    emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formData, 
        'YOUR_PUBLIC_KEY'
    ).then(() => setStatus("Sent!"))
    */
  };

  return (
    <div id="contact" className="w-full min-h-screen bg-zinc-900 p-10 md:p-20 flex flex-col md:flex-row gap-10 text-white">
        
        {/* Left Side: Text Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
                <h1 className="text-[7vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold text-[#CDEA68]">
                    Let's start
                </h1>
                <h1 className="text-[7vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold text-white">
                    a project together
                </h1>
            </div>

            <div className="flex flex-col gap-5 mt-10">
                 <h2 className="uppercase font-['Neue_Montreal'] text-gray-400">Contact Details</h2>
                 <a href={`mailto:${personalDetails.email}`} className="text-2xl md:text-3xl hover:text-[#CDEA68] transition-colors">{personalDetails.email}</a>
                 <a href={`tel:${personalDetails.phone}`} className="text-2xl md:text-3xl hover:text-[#CDEA68] transition-colors">{personalDetails.phone}</a>
            </div>
            
            <p className="mt-10 text-sm text-gray-500">© 2025 Shrish Tiwari.</p>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full md:w-1/2 bg-zinc-800 p-10 rounded-3xl shadow-2xl border border-zinc-700">
            <h3 className="text-3xl font-['Neue_Montreal'] mb-8">Fill the form details:</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label className="uppercase text-xs tracking-wider text-gray-400">Your Name</label>
                    <input 
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="bg-transparent border-b border-zinc-500 py-2 text-xl focus:border-[#CDEA68] focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="uppercase text-xs tracking-wider text-gray-400">Your Email</label>
                    <input 
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="bg-transparent border-b border-zinc-500 py-2 text-xl focus:border-[#CDEA68] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="uppercase text-xs tracking-wider text-gray-400">Your Message</label>
                    <textarea 
                        name="message" rows="4" required value={formData.message} onChange={handleChange}
                        className="bg-transparent border-b border-zinc-500 py-2 text-xl focus:border-[#CDEA68] focus:outline-none transition-colors resize-none"
                        placeholder="I want to build a website..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="mt-5 px-8 py-4 bg-[#CDEA68] text-black rounded-full uppercase font-bold tracking-widest hover:bg-white transition-all duration-300 flex justify-between items-center"
                >
                    {status === "Sending..." ? "Sending..." : "Send Message"}
                    <span className="w-3 h-3 bg-black rounded-full"></span>
                </button>
                
                {status && <p className="text-green-400 mt-2 font-['Neue_Montreal']">{status}</p>}
            </form>
        </div>
    </div>
  );
};

export default Contact;