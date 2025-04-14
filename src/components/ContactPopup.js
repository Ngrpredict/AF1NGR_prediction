import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPopup = ({ onClose }) => {
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
        () => {
          setSent(true);
          setError(false);
          form.current.reset();
        },
        () => {
          setSent(false);
          setError(true);
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Send us a message</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
        {sent && <p className="text-green-600 mt-2">Message sent!</p>}
        {error && <p className="text-red-600 mt-2">Error sending message.</p>}
      </div>
    </div>
  );
};

export default ContactPopup;
