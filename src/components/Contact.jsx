"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import { motion } from "framer-motion";
import { fadeIn } from "../animations/motionVariants";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                'service_2z9xue9',
                'template_vpa8p0s',
                form.current,
                {
                    publicKey: 'TQhpMkDW61jI11crj',
                }
            )
            .then(
                () => {
                    setStatus('success');
                    e.target.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                }
            );
    };

    return (
        <section id="contact" className="py-20 relative text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Email</h3>
                                <p className="text-gray-400">riteshsingh3589@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                                <p className="text-gray-400">9457625597</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Location</h3>
                                <p className="text-gray-400">New Delhi</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-500 text-center text-sm">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-center text-sm">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
