import styled from "styled-components";

export const ImagemDiv = styled.div`
  position: relative;
  background-image: url("https://www.santaluciaimpulsa.es/wp-content/uploads/2019/09/importancia-cliente-2-min.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 22rem;
  overflow: hidden;

  &::before {
    filter: brightness(0.5);
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    bottom: -10%;
    left: -10%;
    background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 1),
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
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-size: 18px;

    h1 {
      font-size: 30px;
    }

    p {
      color: #e6e6e6;
    }

    @media screen and (max-width: 780px) {
      & {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        display: flex;
        align-items: center;
        width: 50%;
        height: 10rem;
        text-align: center;
        font-size: 15px;
      }
    }
  }
`;

export const ClientesDiv = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .itens {
    width: 100%;
    height: 20rem;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    justify-content: center;

    img {
      object-fit: cover;
      margin: 1rem auto;
    }
  }

  @media screen and (max-width: 780px) {
    & {
      height: 25rem;
    }
    .itens {
      grid-template-columns: 1fr 1fr;
      height: auto;

      img {
        width: 8rem;
      }
    }
  }
`;
