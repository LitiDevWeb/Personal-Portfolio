import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">First Name: </label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name: </label>
          <br></br>
          <input
            type="text"
            id="last"
            name="last"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="mail">E-mail: </label>
          <br></br>
          <input
            type="email"
            id="mail"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message: </label>
          <br></br>
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
