import "./certificates.css";

import { CertificateType } from "../../certificate-card/types";
import CertificateCard from "../../certificate-card/certificate-card";
import { Slide } from "react-awesome-reveal";

const Certificates = () => {
  const certificates: CertificateType[] = [
    {
      img: "/cfAlgoritimo.png",
      url: "https://www.freecodecamp.org/certification/maycondouglas/javascript-algorithms-and-data-structures",
    },
    {
      img: "/cfFrontend.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/558MJF7EFXPY",
    },
    {
      img: "/cfJavascript.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/U5XWJAVSUD9G",
    },
  ];

  return (
    <div id="certificates" className="certificates">
      <div className="light"></div>
      <div className="container">
        <Slide direction="down" className="animation">
          {" "}
          <h1>CERTIFICATES</h1>
        </Slide>
        <div className="certificates-box">
          {certificates.map((certificate: CertificateType, index: number) => (
            <Slide direction="left">
              <CertificateCard key={index} certificate={certificate} />
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
