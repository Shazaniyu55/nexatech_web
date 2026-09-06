import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // To send for real, POST `form` to an API route (e.g. /api/contact)
    // wired to an email service, then handle the response here.
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 md:pt-40 pb-16 px-4 md:px-12 min-h-screen">
      <Head>
        <title>Contact Us | Nexatech</title>
        <meta name="description" content="Get in touch with the Nexatech team." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl text-nexagreen font-monteserat">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl font-popins max-w-2xl mx-auto">
            Have a project in mind or a question for the team? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-monteserat text-nexablack dark:text-nexawhite">
              Contact Information
            </h2>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-nexagreen mt-1" size={22} />
              <p className="font-popins">Along Aso B Mararaba Road, Nasarawa State</p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-nexagreen mt-1" size={22} />
              <a href="mailto:info@nexadataease.com" className="font-popins hover:text-nexagreen">
                info@nexadataease.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-nexagreen mt-1" size={22} />
              <a href="tel:+2340000000000" className="font-popins hover:text-nexagreen">
                +234 000 000 0000
              </a>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-monteserat mb-3">Follow Us</h3>
              <div className="flex gap-5">
                <a href="#" className="text-nexagreen hover:text-nexablack dark:hover:text-nexawhite transition-colors">
                  <FaFacebook size={26} />
                </a>
                <a href="#" className="text-nexagreen hover:text-nexablack dark:hover:text-nexawhite transition-colors">
                  <FaInstagram size={26} />
                </a>
                <a href="#" className="text-nexagreen hover:text-nexablack dark:hover:text-nexawhite transition-colors">
                  <FaTwitter size={26} />
                </a>
                <a href="#" className="text-nexagreen hover:text-nexablack dark:hover:text-nexawhite transition-colors">
                  <FaLinkedin size={26} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-nexawhite border border-gray-200 rounded-xl shadow-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <FaEnvelope className="text-nexagreen mb-4" size={40} />
                <h3 className="text-2xl font-monteserat text-nexablack mb-2">Thank you!</h3>
                <p className="font-popins text-gray-600">
                  Your message has been received. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-nexagreen hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="flex-1 px-4 py-3 rounded bg-gray-50 text-nexablack placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nexagreen"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="flex-1 px-4 py-3 rounded bg-gray-50 text-nexablack placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nexagreen"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="px-4 py-3 rounded bg-gray-50 text-nexablack placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nexagreen"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className="px-4 py-3 rounded bg-gray-50 text-nexablack placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nexagreen resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-nexagreen hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition-colors"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;