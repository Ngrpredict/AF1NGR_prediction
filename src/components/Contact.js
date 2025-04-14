import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setSent(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.error('Email error:', error.text);
          setError(true);
        }
      );
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      {sent && (
        <p className="text-green-600 mb-4 text-center">Message sent successfully!</p>
      )}
      {error && (
        <p className="text-red-600 mb-4 text-center">Something went wrong. Please try again.</p>
      )}
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-3 py-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
