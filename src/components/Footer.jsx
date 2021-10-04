import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className=" ParafoDelFooter">
          Todos los derechos reservados 2003-2021. República Argentina. INCAA{" "}
          <br />
          Lima 319; Código Postal: C1073AAG, CABA; República Argentina.
        </p>
      </div>
      <div>
        <ul className="EspacioDelFooter">
          <li>
            <a href="">
              <img
                className=" ImagenDelFooter"
                src="http://img/logo-cinear.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className=" ImagenDelFooter"
                src="http://img/logo-arsat.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className=" ImagenDelFooter"
                src="http://img/logo-incaa.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
