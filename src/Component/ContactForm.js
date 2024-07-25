import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';  // Add your styles here

export const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const formData = new FormData(form.current);
    let errors = {};
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const collegeName = formData.get('collegeName');
    const qualification = formData.get('qualification');
    const message = formData.get('message');

    if (!fullName) {
      errors.fullName = 'Full Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone Number should be 10 digits';
    }
    if (!collegeName) {
      errors.collegeName = 'College Name is required';
    }
    if (!qualification) {
      errors.qualification = 'Qualification is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    const formData = new FormData(form.current);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          'service_pwzw23g',          // Replace with your EmailJS service ID
          'template_7kmh6wz',         // Replace with your EmailJS template ID
          form.current,
          'yihIZh17tDdb9JSJC'        // Replace with your EmailJS public key
        )
        .then(
          () => {
            setSuccessMessage('Message Sent Successfully!');
            setErrors({});
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error);
            alert(`An error occurred, please try again. Error: ${error.text}`);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setErrors(validationErrors);
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName" />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>
      <div>
        <label htmlFor="collegeName">College Name</label>
        <input type="text" name="collegeName" id="collegeName" />
        {errors.collegeName && <p className="error">{errors.collegeName}</p>}
      </div>
      <div>
        <label htmlFor="qualification">Qualification</label>
        <input type="text" name="qualification" id="qualification" />
        {errors.qualification && <p className="error">{errors.qualification}</p>}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};
