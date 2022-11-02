import "./contacts.css";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <h1>CONTACTS</h1>
      <div className="container-contact">
        <div className="box-contact">
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" name="" id="" placeholder="Digite seu E-mail" />
          <textarea
            placeholder="Mensagem"
            name=""
            id=""
            cols="40"
            rows="5"
          ></textarea>
          <button>ENVIAR</button>
        </div>
        <div className="box-links">
          <div className="email lnk">
            <a href="">
              <HiOutlineMail />
            </a>
            <span>E-MAIL</span>
            <a href="">maycondouglaszzlk@gmail.com</a>
          </div>

          <div className="telephone lnk">
            <a href="">
              <AiOutlinePhone />
            </a>
            <span>TELEFONE</span>
            <a href="">(84) 98191-6377</a>
          </div>
          <div className="linkedin lnk">
            <a href="">
              <GrLinkedinOption />
            </a>
            <span>LINKEDIN</span>
            <a href="">@maycondouglasss</a>
          </div>
          <div className="github lnk">
            <a href="">
              <FiGithub />
            </a>
            <span>GITHUB</span>
            <a href="">@mayconds</a>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Contacts;
