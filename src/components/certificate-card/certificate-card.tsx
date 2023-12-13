import "./certificate-card.css";

import { TiArrowRight } from "react-icons/ti";
import { CertificateCardProps } from "./types";

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const { img, url } = certificate;

  return (
    <div className="certificate-card">
      <img src={img} alt="" />
      <a target="_blank" href={url}>
        VERIFICAR <TiArrowRight />
      </a>
    </div>
  );
};

export default CertificateCard;
