import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div style={{ marginBottom: "20px" }}>
          <p className="footer__list__heading">Contact us</p>
          <ul className="footer__list">
            <li className="footer__list__item">
              <i class="fas fa-envelope footer__icon"></i>
              <span className="footer__list__text">dalemundi@gmail.com</span>
            </li>
            <li className="footer__list__item">
              <span
                className="footer__list__text"
                style={{ marginLeft: "20px", marginTop: "-8px" }}
              >
                info@realestatehut.co
              </span>
            </li>
            <li className="footer__list__item">
              <i class="fas fa-phone-alt footer__icon"></i>
              <span className="footer__list__text">+1 416-413-1313</span>
            </li>
            <li className="footer__list__item">
              <i class="fas fa-map-marker-alt footer__icon"></i>
              <span className="footer__list__text ">206-7895 Tranmere Dr</span>
            </li>
            <li className="footer__list__item">
              <span
                className="footer__list__text"
                style={{ marginLeft: "15px", marginTop: "-8px" }}
              >
                Mississauga,ON Lss TV9
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__list__heading"> Quick Links</p>
          <ul className="footer__list">
            <li className="footer__list__item">
              <span className="footer__list__text">Home</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">About Us</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Our Listing</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Reviews</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Our Blog</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__list__heading"> About Us</p>
          <ul className="footer__list">
            <li className="footer__list__item">
              <span className="footer__list__text">Our Story</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Our Events</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Latest Updates</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Diversity</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__list__heading"> Properties</p>
          <ul className="footer__list">
            <li className="footer__list__item">
              <span className="footer__list__text">Submit Listing</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Buy Home</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Pre-construction</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Taxsale Properties</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__list__heading">Newsletter</p>
          <ul className="footer__list">
            <li className="footer__list__item">
              <span className="footer__list__text">
                To be updated on our news & promotions,
              </span>
            </li>
            <li className="footer__list__item">
              <span
                className="footer__list__text"
                style={{ marginTop: "-8px" }}
              >
                join our mailing list
              </span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Buy Home</span>
            </li>
            <li className="footer__list__item">
              <span className="footer__list__text">Pre-construction</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        copyright @ 2020 Real Estate Hut Inc,.Brokerage,All rigth reserved
      </div>
    </>
  );
};

export default Footer;
