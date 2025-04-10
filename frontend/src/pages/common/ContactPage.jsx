import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to backend or API (not implemented)
    console.log('Contact form submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;