import React, { useState } from "react";
import "./CTA.scss";
import Google from "../../assets/images/Google-Play.png";
import App from "../../assets/images/App-Store.png";
import Phone from "../../assets/images/Iphone.png";
import emailjs from "@emailjs/browser";

const CTA = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_n4w0s8p';
    const templateId = 'template_8s8b075';
    const publickey = 'FBYtCajEAxW-a4ZNK';

    const templatesParams = {
      from_name:name,
      from_email:email,
      to_name:'Dev.Satvik',
      message:message,
    };

    emailjs.send(serviceId, templateId, templatesParams, publickey)
    .then((Response)=> {
      console.log('email sent succesfully', Response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });

    // You can use serviceId, templateId, publickey, and templatesParams here to send an email
    // Example: emailjs.send(serviceId, templateId, templatesParams, publickey);
  }

  return (
    <div className="cta">
      <div className="left">
        <img src={Phone} alt="phone" />
      </div>
      <div className="right">
        <h1>Contact Us For More Details</h1>
        <p>
          We will contact you as soon as possible
        </p>
        <form onSubmit={handleSubmit} className="emailform">
          <input className="name_input" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="email_input" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea
          className="textarea_input"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
        {/* <span>Download app from</span>
        <div className="img">
          <img src={Google} alt="google" />
          <img src={App} alt="app" />
        </div> */}
      </div>
    </div>
  );
};

export default CTA;
