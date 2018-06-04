import React from 'react';

export default class Contact extends React.Component {
  render() { return (
    <div className="quick-form-job">
      <h3>Contact</h3>
      <form>
        <input type="text" placeholder="Enter your Name *" />
        <input type="text" placeholder="Email Address*" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Message should have more than 50 characters"></textarea>
        <button className="submit">Send Email</button>
        <span>You accepts our <a href="#" title="">Terms and Conditions</a></span>
      </form>
    </div>
  );
  }
}