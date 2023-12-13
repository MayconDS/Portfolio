import "./contacts.css";

import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FormEvent, useState } from "react";

import emailjs from "@emailjs/browser";
import { Slide } from "react-awesome-reveal";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: FormEvent) {
    e.preventDefault();

    if (name == "" || email == "" || message == "") {
      alert("Preencha todos os campos!!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_vwt9m2a",
        "template_onxilc7",
        templateParams,
        "Pm13dir6pOY6H_r1w"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          alert("Email enviado!");
        },
        () => {
          alert("Error ao tentar enviar");
        }
      );
  }

  return (
    <div id="contacts" className="contacts">
      <div className="light"></div>
      <div className="bg"></div>
      <div className="container">
        <div className="left-side">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Slide className="animation">
            <p>
              Fique a vontade para me enviar uma mensagem, estou disponivel para
              trabalho, freelancer e caso queira que eu participe de um projeto.
              Mas fique a vontade para me mandar qualquer mensagem, sera um
              prazer conhecer-lo
            </p>
          </Slide>
          <div className="contact-info">
            <div className="solo" id="contact">
              <Slide className="animation">
                <div id="icon">
                  <a href="mailto:maycondouglaszzlk@gmail.com" target="_blank">
                    <MdOutlineMail />
                  </a>

                  <h3>
                    <a
                      href="mailto:maycondouglaszzlk@gmail.com"
                      target="_blank"
                    >
                      E-mail
                    </a>
                  </h3>
                </div>
                <span>maycondouglaszzlk@gmail.com</span>
              </Slide>
            </div>

            <div className="side-by-side" id="contact">
              <Slide className="animation">
                <div id="icon">
                  <a href="https://wa.me/5584981916377" target="_blank">
                    <FiPhone />
                  </a>

                  <h3>
                    <a href="https://wa.me/5584981916377" target="_blank">
                      Phone
                    </a>
                  </h3>
                </div>
                <span>+55 (84) 98191-6377</span>
              </Slide>
            </div>

            <div className="side-by-side" id="contact">
              <Slide className="animation">
                <div id="icon">
                  <a
                    href="https://www.linkedin.com/in/maycondouglasss/"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>

                  <h3>
                    <a
                      href="https://www.linkedin.com/in/maycondouglasss/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </h3>
                </div>
                <span>maycondouglass</span>
              </Slide>
            </div>

            <div className="solo" id="contact">
              <Slide className="animation">
                <div id="icon">
                  <a href="https://github.com/MayconDS" target="_blank">
                    {" "}
                    <AiFillGithub />
                  </a>

                  <h3>
                    <a href="https://github.com/MayconDS" target="_blank">
                      GitHub
                    </a>
                  </h3>
                </div>
                <span>MayconDs</span>
              </Slide>
            </div>
          </div>
        </div>
        <div className="right-side">
          <form onSubmit={(e) => sendEmail(e)}>
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="form-box">
              <input
                id="input-box"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Seu nome"
              />
              <input
                id="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Seu e-mail"
              />
              <textarea
                id="input-box"
                placeholder="Mensagem"
                cols={20}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button>ENVIAR MENSAGEM</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
