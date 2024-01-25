import React from "react";
import { ImagemDiv, ValoresDiv } from "./styles";
import { Navbar } from "../../components/Navbar";

export const Sobre = () => {
  return (
    <>
      <Navbar />
      <ImagemDiv>
        <div className="conteudo-sobreposto">
          <h1>Sobre nós</h1>
          <p>
            Comprometidos com a produção de embalagens inovadoras, a FortPack
            tem sido a referência no setor desde 2002. Da fabricação de
            embalagens flexíveis à criação de soluções sustentáveis, moldamos o
            futuro da indústria com dedicação à qualidade e visão para o amanhã.
          </p>
        </div>
      </ImagemDiv>
      <ValoresDiv>
        <h1>Missão,visão e valores</h1>
        <div className="itens">
          <div>
          <h2>Missão</h2>
            <p>
              Nossa missão é fornecer soluções de embalagens inovadoras,
              excedendo as expectativas dos clientes. Comprometemo-nos a moldar
              o futuro do setor, combinando tecnologia e sustentabilidade para
              entregar produtos de qualidade inigualável.
            </p>
          </div>
          <div>
            <h2>Visão</h2>
            <p>
              Buscamos ser líderes indiscutíveis na indústria de embalagens,
              destacando-nos pela inovação, responsabilidade ambiental e
              compromisso com a excelência. Almejamos ser reconhecidos
              globalmente não apenas por nossos produtos, mas também pelo
              impacto positivo que geramos.
            </p>
          </div>
          <div>
          <h2>Valores</h2>
            <p>
              Nossos valores fundamentam-se na inovação constante, qualidade
              impecável, responsabilidade ambiental, comprometimento com o
              cliente e integridade. Esses princípios guiam cada aspecto de
              nosso negócio, refletindo nosso compromisso com a excelência e a
              sustentabilidade.
            </p>
          </div>
        </div>
      </ValoresDiv>
    </>
  );
};
