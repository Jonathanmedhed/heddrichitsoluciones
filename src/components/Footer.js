import React, { useState } from "react";

const Footer = ({ className }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const selectSocial = (option) => {
    setShowPhone(false);
    setShowWhatsapp(false);
    setShowEmail(false);

    switch (option) {
      case "phone":
        setShowPhone(true);
        break;
      case "whatsapp":
        setShowWhatsapp(true);
        break;
      case "email":
        setShowEmail(true);
        break;
      default:
        break;
    }
  };

  return (
    <footer className={`${className ? className : ""}`}>
      {(showEmail || showPhone || showWhatsapp) && (
        <div className="social-info hide-sm">
          {showPhone && "04126289924"}
          {showWhatsapp && "+584126289924"}
          {showEmail && "heddrichitsolutions@gmail.com"}
        </div>
      )}
      <div
        className={
          showEmail || showPhone || showWhatsapp ? "social mt-1" : "social"
        }
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.instagram.com/heddrichitsoluciones/"}
          className="sub-item"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href={`tel:04126289924`} className="sub-item show-sm">
          <i className="fas fa-phone"></i>
        </a>
        <span
          onClick={() => selectSocial("phone")}
          onKeyDown={() => selectSocial("phone")}
          className="sub-item hide-sm"
          role="button"
          tabIndex={0}
        >
          <i
            className={showPhone ? "fas fa-phone bg-light" : "fas fa-phone"}
          ></i>
        </span>
        <a href={`https://wa.me/+584126289924`} className="sub-item show-sm">
          <i className="fab fa-whatsapp"></i>
        </a>
        <span
          className="sub-item hide-sm"
          onClick={() => selectSocial("whatsapp")}
          onKeyDown={() => selectSocial("whatsapp")}
          role="button"
          tabIndex={0}
        >
          <i
            className={
              showWhatsapp ? "fab fa-whatsapp bg-light" : "fab fa-whatsapp"
            }
          ></i>
        </span>
        <a
          href={`mailto:heddrichitsolutions@gmail.com`}
          className="sub-item show-sm"
        >
          <i className="far fa-envelope"></i>
        </a>
        <span
          onClick={() => selectSocial("email")}
          onKeyDown={() => selectSocial("email")}
          className="sub-item hide-sm"
          role="button"
          tabIndex={0}
        >
          <i
            className={
              showEmail ? "far fa-envelope bg-light" : "far fa-envelope"
            }
          ></i>
        </span>
      </div>
      <div className="logo-section">
        <div className="title">
          <div className="title-content">
            <div className="top">heddrich</div>
            <div className="mid">IT</div>
            <div className="bot">soluciones</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        derechos revervados <i className="far fa-copyright"></i>{" "}
        <strong>heddrich IT soluciones</strong>
      </div>
    </footer>
  );
};

export default Footer;
