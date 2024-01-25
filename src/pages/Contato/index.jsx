import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/index";
import { ImagemDiv, FormContainer } from "./styles";
import { Footer } from "../../components/Footer";

export const Contato = () => {
  const mensagemForm = () => {
    setForm(<h1>Obrigado,logo entraremos em contato!</h1>);
  };

  const [form, setForm] = useState(
    <>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label htmlFor="phone">Telefone:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>

      <div>
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols={25}
          required
        ></textarea>
      </div>

      <button onClick={mensagemForm}>Enviar Mensagem</button>
    </>
  );

  return (
    <>
      <Navbar />
      <ImagemDiv>
        <div className="conteudo-sobreposto">
          <h1>Contato</h1>
          <p>
            Estamos aqui para ouvir você. Envie-nos uma mensagem e nossa equipe
            entrará em contato o mais rápido possível para atender às suas
            necessidades.
          </p>
        </div>
      </ImagemDiv>
      <FormContainer>
        <div className="formulario">{form}</div>
      </FormContainer>
      <Footer />
    </>
  );
};
