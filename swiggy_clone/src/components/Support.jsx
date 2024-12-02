import React from "react";
import styles from "./Support.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Support = () => {
  return (
    <section className={styles.sectionBg}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.row}>
            {/* Left Contact Info Section */}
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>Contact Us</h2>
              <ul className={styles.contactInfoList}>
                <li className={styles.infoItem}>
                  <div className={styles.infoLeft}>
                  <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className={styles.infoRight}>
                    <h4>+91 7689473970</h4>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div className={styles.infoLeft}>
                  <FontAwesomeIcon icon={faEnvelope} />                  </div>
                  <div className={styles.infoRight}>
                    <h4>eatmore@gmail.com</h4>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div className={styles.infoLeft}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className={styles.infoRight}>
                    <h4>123 Main Street, Pune City</h4>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Contact Form Section */}
            <div className={styles.contactForm}>
              <form id="contact-form"  className={styles.contact_form}>
                <input type="hidden" name="form-name" value="contactForm" />
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="first-name"
                        placeholder="Enter Your Name *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        rows="4"
                        name="message"
                        className="form-control"
                        id="description"
                        placeholder="Enter Your Message *"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className={`${styles.btnBig} btn`}>
                      Send Us <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
