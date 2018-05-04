import React from 'react';

const Contact = (props) => {
  const action = `https://formspree.io/${props.contact}`;
  return (
    <div id="contact">
      <h2>Get in Touch</h2>
      <div id="contact-form">
        <form method="POST" action={action}>
          <input type="hidden" name="_subject" value="Contact request from personal website" />
          <input type="email" name="_replyto" placeholder="Your email" required />
          <textarea name="messsage" placeholder="Your message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
