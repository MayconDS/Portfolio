import cfJavascript from "../../utils/imgs/cfJavascript.png";
import cfAlgoritimo from "../../utils/imgs/cfAlgoritimo.png";
import cfFrontend from "../../utils/imgs/cfFrontend.png";

import { Slide } from "react-awesome-reveal";

import "./certificate.css";

const Certificate = () => {
  return (
    <section id="certificate" className="certificate">
      <div className="container">
        <Slide>
          {" "}
          <h1>CERTIFICADOS</h1>
        </Slide>
        <Slide>
          <div className="grid-3">
            <div className="card-certificate">
              <img src={cfJavascript} alt="" />
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/U5XWJAVSUD9G"
              >
                VERIFICAR
              </a>
            </div>
            <div className="card-certificate">
              <img src={cfAlgoritimo} alt="" />
              <a
                target="_blank"
                href="https://www.freecodecamp.org/certification/maycondouglas/javascript-algorithms-and-data-structures"
              >
                VERIFICAR
              </a>
            </div>
            <div className="card-certificate">
              <img src={cfFrontend} alt="" />
              <a
                target="_blank"
                href="https://www.coursera.org/account/accomplishments/certificate/558MJF7EFXPY"
              >
                VERIFICAR
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Certificate;
