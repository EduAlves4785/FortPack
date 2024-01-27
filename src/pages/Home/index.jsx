import React from "react";
import { SobreDiv,Empresa,Producao,Fabricacao } from "./styles";
import { Navbar } from "../../components/Navbar/index";

import embalagens from '../../assets/img/embalagens.png'
import flexiveis from '../../assets/img/flexiveis.png'
import papelcartao from '../../assets/img/papelcartao.png'
import metalicas from '../../assets/img/metalicas.png'
import { Footer } from "../../components/Footer";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Navbar />
      <SobreDiv>
        <div className="conteudo-sobreposto">
          <h1>Embalagens de qualidade</h1>
          <p>Unindo praticidade e estilo para atender às suas necessidades</p>
          <button ><Link to="/FortPack/contato">Entre em contato</Link></button>
        </div>
      </SobreDiv>
      <Empresa>
        <div className="dados-empresa">
          <h1>Mais de 12 anos de tradição</h1>
          <h5>Embalagens de qualidade superior, proporcionando confiança e sofisticação em cada detalhe.</h5>
          <p>Com mais de 12 anos de tradição, orgulhamo-nos de oferecer embalagens de qualidade superior, marcadas por uma jornada de confiança e sofisticação em cada detalhe. Esta longa trajetória reflete nosso compromisso em proporcionar aos clientes uma experiência única e duradoura.</p>
        </div>
        <div className="imagem">
          <img src={embalagens} alt="Imagen embalagens" />
        </div>
      </Empresa>
      <Producao>
        <h2>O que produzimos?</h2>
        <div className="box-cards">
          <div>
            <img src={flexiveis} alt="Embalagens flexíveis" />
            <h5>Embalagens Flexíveis</h5>
            <p>A industria FortPack possui certificação ISO 9001 revisão 2015, a qualidade é garantida em todos os processos.</p>
          </div>
          <div>
            <img src={papelcartao} alt="Embalagens flexíveis" />
            <h5>Embalagens de Papel e Cartão</h5>
            <p>A industria FortPack possui certificação ISO 9001 revisão 2015, a qualidade é garantida em todos os processos.</p>
          </div>
          <div>
            <img src={metalicas} alt="Embalagens flexíveis" />
            <h5>Embalagens Metálicas</h5>
            <p>A industria FortPack possui certificação ISO 9001 revisão 2015, a qualidade é garantida em todos os processos.</p>
          </div>
        </div>
      </Producao>
      <Fabricacao>
          <div>
            <h1>Nossa fabricação</h1>
            <p>Descubra nossa excelência em fabricação de embalagens, onde combinamos tecnologia avançada, materiais inovadores e precisão artesanal. Nosso processo abrange desde a concepção até a produção, garantindo embalagens de alta qualidade, adaptadas às necessidades específicas de cada cliente. Confiabilidade, eficiência e comprometimento são os pilares que sustentam nossa abordagem de fabricação. Conheça a diferenciação que oferecemos em cada etapa do nosso processo.</p>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/kNz8qynVgE8" title="How industrial packaging equipment works?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </Fabricacao>
      <Footer/>
    </>
  );
};
