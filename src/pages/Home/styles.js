import styled from "styled-components";

export const SobreDiv = styled.div`
  position: relative;
  background-image: url("https://www.revendedor.com.br/wp-content/uploads/2020/11/embalagens.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 28rem;
  overflow: hidden;

  a{
    text-decoration: none;
    color: white;
    font-size: 19px;
    font-weight: 700;
  }

  &::before {
    filter: brightness(0.6);
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    bottom: -10%;
    left: -10%;
    background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0)
    );
    pointer-events: none;
  }

  .conteudo-sobreposto {
    gap: 20px;
    width: 35rem;
    max-height: 30rem;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    font-size: 18px;

    h1 {
      font-size: 45px;
    }

    p {
      color: #e6e6e6;
    }

    button {
      width: 10rem;
      height: 3rem;
      font-size: 16px;
      font-weight: 500;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      background-color: #e36414;
      transition: 0.3s ease;

      &:hover {
        background-color: #ed6b07;
      }
    }
  }

  @media screen and (max-width: 780px) {
    .conteudo-sobreposto {
      left: 50%;
      height: 11rem;
      align-items: center;
      text-align: center;

      h1 {
        font-size: 25px;
      }

      p {
        display: flex;
        align-items: center;
        width: 18rem;
        height: 4rem;
        text-align: center;
        color: #e6e6e6;
      }
    }
  }
`;

export const Empresa = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dados-empresa {
    padding: 5rem;
    width: 35rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    gap: 20px;

    h1 {
      width: 100%;
      color: #001f57;
    }
  }

  .imagem {
    padding: 2rem;
    width: 30rem;
    height: 25rem;
    display: flex;
    flex-direction: column;

    img {
      width: 25rem;
      height: 26rem;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 780px) {
    & {
      flex-direction: column;
      height: auto;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    h1{
      font-size: 20px;
      font-weight: 900;
    }

    h5{
      text-align: justify;
      font-size: 14px;
    }

    .dados-empresa {
      padding: 1rem;
      width: 85%;
      height: auto;
    }
    .imagem {
      padding: 0rem;
      width: 95%;
      height: 12rem;
      align-items: center;

      img {
        width: 95%;
        height: 15rem;
        object-fit: contain;
      }
    }
  }
`;

export const Producao = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #001f57;

  h2 {
    color: #e36414;
  }

  .box-cards {
    width: 80%;
    height: 25rem;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-around;

    div {
      border-radius: 5px;
      border: 2px solid #e36414;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 15rem;
      height: 18rem;

      @keyframes pulse {
        0% {
          border-color: #e36414;
        }
        50% {
          border-color: #001f57; 
        }
        100% {
          border-color: #e36414;
        }
      }

      img {
        object-fit: cover;
        width: 8rem;
        height: 8rem;
        border: 5px solid #e36414;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      h5 {
        text-align: center;
        font-size: 18px;
        color: #e36414;
      }

      p {
        text-align: justify;
      }
    }
  }

  @media screen and (max-width: 780px) {
    & {
      height: 70rem;
    }

    .box-cards {
      width: 98%;
      flex-direction: column;
      height: 65rem;

      div {
        padding: 1rem;
      }
    }
  }
`;

export const Fabricacao = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    width: 30rem;
    height: 20rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: black;

    h1 {
      color: #001f57;
    }

    p {
      font-size: 19px;
    }
  }

  div:last-child {
    width: 38rem;
    height: 20rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    iframe {
      width: 95%;
      height: 95%;
    }
  }

  @media screen and (max-width: 780px) {
    & {
      height: auto;
      flex-direction: column;
    }

    div:first-child {
      width: 90%;
      padding: 1rem;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: auto;

      p {
        font-size: 15px;
      }
    }

    div:last-child {
      width: 90%;
    }
  }
`;
