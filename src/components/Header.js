import React from "react";
import mainMobileImg from "./phone.png";
import mainPcImg from "../images/pc.png";

const Header = ({ className, goTo }) => {
  /**
  const [showSidebar, setShowSidebar] = useState(false);

  const sideBarItems = [
    {
      label: "Inicio",
      className: "option",
      command: (event) => {
        setShowSidebar(false);
      },
    },
    {
      label: "Productos",
      className: "option",
      command: (event) => {
        history.push("/products");
        setShowSidebar(false);
      },
    },
    {
      label: "Contacto",
      className: "option",
      command: (event) => {
        history.push("/contactus");
        setShowSidebar(false);
      },
    },
  ];
   */

  return (
    <header className={`navbar ${className ? className : ""}`}>
      <div className="content">
        <div className="title">
          <div className="title-content">
            <div className="top">heddrich</div>
            <div className="mid">IT</div>
            <div className="bot">soluciones</div>
          </div>
        </div>
        <div className="options">
          <span
            onKeyDown={() => goTo("info")}
            onClick={() => goTo("info")}
            className="option"
            role="button"
            tabIndex={0}
          >
            Información
          </span>
          <span
            onKeyDown={() => goTo("prices")}
            onClick={() => goTo("prices")}
            className="option"
            role="button"
            tabIndex={0}
          >
            Precios
          </span>
          <span onClick={() => goTo("contact")} className="option">
            Contacto
          </span>
        </div>
      </div>
      <div className="jumbo">
        <div className="left-content">
          <h1>Tu Negocio en la Web</h1>
          <p>
            Aumenta tus ventas en cuestión de días, llega a clientes a los
            cuales nunca habías llegado.
          </p>
          <div className="buttons">
            <span
              className="btn btn-white"
              onClick={() => goTo("info")}
              onKeyDown={() => goTo("info")}
              role="button"
              tabIndex={0}
            >
              Información
            </span>
            <span
              className="btn btn-white"
              onClick={() => goTo("contact")}
              onKeyDown={() => goTo("contact")}
              role="button"
              tabIndex={0}
            >
              Contáctanos
            </span>
          </div>
        </div>
        <div className="right-content">
          <img className="mobile" src={mainMobileImg} alt="phone-header"></img>
          <img className="pc" src={mainPcImg} alt="pc-header"></img>
        </div>
      </div>
      <div className="bottom">
        <span className="bottom-option">
          <i className="fas fa-truck-loading" />
        </span>
        <span className="bottom-option">
          <i className="fas fa-store" />
        </span>
        <span className="bottom-option">
          <i className="fas fa-cash-register" />
          <span className="bottom-option --dark">Bs</span>
          <span className="bottom-option --dark">$</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
