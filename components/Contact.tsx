import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';

const slideIn = (direction: 'left' | 'right', delay: number): Variants => ({
    hidden: { x: direction === 'left' ? '-100%' : '100%', opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: 'spring', duration: 1.2, delay, ease: 'easeOut' } },
});


const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;

    if (!apiKey) {
      setError("The contact form is currently unavailable. Please reach out to me directly.");
      setLoading(false);
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError('Please fill out all fields.');
      setLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a friendly and professional assistant for Abdul Azeez, a software engineer. A person named ${form.name} with email ${form.email} has sent the following message: "${form.message}". Please draft a short, polite, and encouraging acknowledgment confirming the message has been received and that Abdul will get back to them soon. Mention that you've processed their request. Keep it concise (2-3 sentences).`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setResult(response.text);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-full flex justify-center items-center px-6 sm:px-16">
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideIn('left', 0.2)}
            className="flex-[0.75] bg-[#100d25]/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl max-w-3xl w-full"
        >
            <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">Get in touch</p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#151030] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-transparent font-medium focus:border-cyan-400 transition-colors"
                />
            </label>
            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#151030] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-transparent font-medium focus:border-cyan-400 transition-colors"
                />
            </label>
            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-[#151030] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-transparent font-medium focus:border-cyan-400 transition-colors"
                />
            </label>
            
            {error && <p className="text-red-500 text-center">{error}</p>}
            {result && <div className="bg-green-900/50 border border-green-500 text-white p-4 rounded-lg">
                <p className="font-bold mb-2">Message Sent!</p>
                <p>Thank you for reaching out. Here is a confirmation from my AI assistant:</p>
                <p className="mt-2 italic">"{result}"</p>
                </div>}


            <button
                type="submit"
                className="bg-cyan-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-cyan-500/30 hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Send'}
            </button>
            </form>
        </motion.div>
    </section>
  );
};

export default Contact;