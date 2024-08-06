// Need to complete form submission functionality usin axios package or another option in future development
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-api-endpoint.com/contact', formData);
      alert('Message sent successfully!');
    } catch (error) {
      alert('There was an error sending your message.');
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="text-3xl font-bold text-onyx mb-4">Get In Touch</h2>
            <p className="max-w-xl text-lg text-outerSpace">
            Reach out to us for top-notch support tailored to poker players. 
            Our team ensures prompt, professional, and courteous assistance to address your needs, ensuring an exceptional Poker Pulse experience.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-vermillion" />
                <a href="tel:1234567890" className="text-2xl font-bold text-vermillion underline underline-offset-8">123-456-7890</a>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-vermillion" />
                <a href="mailto:support@vegaspokerpulse.com" className="text-2xl font-bold text-vermillion underline underline-offset-8">support@vegaspokerpulse.com</a>
              </div>
              <address className="not-italic text-lg text-outerSpace">Cleveland, OH 44147</address>
            </div>
          </div>
          <div className="rounded-lg bg-onyx p-8 shadow-xl lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-md"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-md"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-md"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-md"
                  placeholder="Message"
                  rows="5"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-hunterGreen px-8 py-3 font-semibold text-lg text-white hover:bg-onyx sm:w-auto"
                >
                  Submit Form
                </button>
              </div>
              <div role="alert" className="rounded border-s-4 border-rojo bg-vermillion p-4">
                <div className="flex items-center gap-2 text-eerieBlack">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                        />
                    </svg>

                    <strong className="block text-eerieBlack font-semibold font-medium"> Contact Form in Development </strong>
                    </div>

                    <p className="mt-2 text-md text-eerieBlack">
                    To get in touch, please send an email or reach out through social media.
                    </p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;