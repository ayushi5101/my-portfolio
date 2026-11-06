
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  // Update form values when the visitor types
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  // Send message directly through EmailJS
  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_q0d8k4o",
        "template_9vox4b8",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        {
          publicKey: "dAQbbsbCaKJlfgMUn"
        }
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus(
        "Failed to send message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <p className="contact-label">
          LET'S CONNECT
        </p>

        <h2 className="contact-heading">
          Get in <span>Touch</span>
        </h2>

        <p className="contact-description">
          Have a project, opportunity, or question?
          I'd love to hear from you.
        </p>

        <div className="contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="contact-card">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:ayushiparmar105@gmail.com">
                ayushiparmar105@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/ayushiparmar5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Profile
              </a>
            </div>

            <div className="contact-item">
              <strong>GitHub</strong>
              <a
                href="https://github.com/ayushi5101/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile
              </a>
            </div>

            <p className="contact-location">
              Canada | Open to Relocation
            </p>
          </div>

          {/* CONTACT FORM */}
          <form
            className="contact-card contact-form"
            onSubmit={handleSubmit}
          >
            <h3>Send a Message</h3>

            <label htmlFor="contact-name">
              Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-email">
              Email
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-message">
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className="contact-status"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
