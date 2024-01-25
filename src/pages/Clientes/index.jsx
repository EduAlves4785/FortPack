import React from "react";
import { Navbar } from "../../components/Navbar/index";
import { Footer } from "../../components/Footer";
import { ImagemDiv, ClientesDiv } from "./styles";

import cliente1 from "../../assets/img/cliente1.jpg";
import cliente2 from "../../assets/img/cliente2.jpg";
import cliente3 from "../../assets/img/cliente3.jpg";
import cliente4 from "../../assets/img/cliente4.jpg";
import cliente5 from "../../assets/img/cliente5.jpg";
import cliente6 from "../../assets/img/cliente6.jpg";
import cliente7 from "../../assets/img/cliente7.jpg";

export const Clientes = () => {
  return (
    <>
      <Navbar />
      <ImagemDiv>
        <div className="conteudo-sobreposto">
          <h1>Clientes</h1>
          <p>
            A carteira diversificada da FortPack, abrangendo empresas de portes
            variados, reflete nossa competência excepcional em atender desde
            pequenos empreendimentos até grandes multinacionais. Este
            reconhecimento da qualidade destaca nossa posição como líder de
            mercado, evidenciando nossa capacidade de conquistar e manter a
            confiança em todos os segmentos industriais.
          </p>
        </div>
      </ImagemDiv>
      <ClientesDiv>
        <div className="itens">
          <img src={cliente1} alt="Cliente 1" />
          <img src={cliente2} alt="Cliente 2" />
          <img src={cliente3} alt="Cliente 3" />
          <img src={cliente4} alt="Cliente 4" />
          <img src={cliente5} alt="Cliente 5" />
          <img src={cliente6} alt="Cliente 6" />
          <img src={cliente7} alt="Cliente 7" />
        </div>
      </ClientesDiv>
      <Footer/>
    </>
  );
};
