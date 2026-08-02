import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Contact form submitted:", message);
  }

  return (
    <div className="page">
      <section className="card">
        <h2>Contact</h2>
        <p className="page__text">Type a message below and see it update in real time.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Message
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write a short message"
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-preview" aria-live="polite">
          <h3>Live Preview</h3>
          <p>{message || "Your typed message will appear here."}</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;