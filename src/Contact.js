import React from 'react';
import { BsEnvelope, BsPhone, BsChatSquareDots } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
      };
      


  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <BsEnvelope className="contact-icon" />
            <p className="contact-text">cleograce@gmail.com</p>
          </div>
          <div className="contact-item">
            <BsPhone className="contact-icon" />
            <p className="contact-text">+1 123 456 7890</p>
          </div>
          <div className="contact-item">
            <BsChatSquareDots className="contact-icon" />
            <p className="contact-text">Chat with our assistant</p>
          </div>
        </div>
        <div className="contact-form">
          <h4 className="form-title">Send us a Message</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
