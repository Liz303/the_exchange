import { useState } from "react";
import { decode } from "html-entities";
import EmailFormSvg from "../ContactSVGs/EmailFormSvg";
import SubmitSvg from "../ContactSVGs/SubmitSvg";
import styles from "./style.module.scss";

const NewsletterSubscribe = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <div>
      <div className={styles.newsletterWrap}>
        <p>Sign up to receive updates on reservations, events and happenings</p>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="email"
              placeholder="your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className={styles.inputBorder}>
              <EmailFormSvg />
            </div>
          </div>
          <button
            type="submit"
            className={`${styles.button} glitch-no-underline`}
          >
            <SubmitSvg />
            <span>
              <i>Submit</i>
            </span>
          </button>
        </form>
      </div>
      {status === "sending" && <p>Sending...</p>}
      {status === "error" || error ? (
        <p
          className="newsletter-form-error"
          dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
        />
      ) : null}
      {status === "success" && status !== "error" && !error && (
        <p dangerouslySetInnerHTML={{ __html: decode(message) }} />
      )}
    </div>
  );
};

export default NewsletterSubscribe;
