import styled from "styled-components";

export const ImagemDiv = styled.div`
  position: relative;
  background-image: url("https://th.bing.com/th/id/R.8c0f09c8270c59eb58d448343290db11?rik=FxhnMsP5rVYCnA&riu=http%3a%2f%2fmundocarreira.com.br%2fwp-content%2fuploads%2f2014%2f11%2ftelemarketing.jpg&ehk=iBcAUfe8DtW5CeWLwZJmlKmiXboy8%2f2nlJLafnCJbv0%3d&risl=&pid=ImgRaw&r=0");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 18rem;
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

export const FormContainer = styled.div`
  width: 100%;
  height: 26rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 26rem;
    height: 20rem;
    background-color: #dbdbdb;
    border-radius: 8px;

    h1 {
      text-align: center;
    }

    div {
      display: flex;
      padding: 0.5rem;
      width: 78%;
      display: flex;
      align-items: center;
      justify-content: center;

      label{
        margin-right: 1rem;
        font-weight: 500;
      }

      input {
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 0.3rem;
        width: 15rem;
        height: 1rem;
      }

      textarea{
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 0.3rem;
        width: 15rem;
      }
    }

    button {
      border: none;
      padding: 0.5rem;
      font-size: 17px;
      font-weight: 500;
      border-radius: 5px;
      background-color: #e6e6e6;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: #ffffff;
      }
    }
  }

  @media screen and (max-width: 780px) {
    .formulario {
      width: 95%;

      div {
        width: 90%;
      }
    }
  }
`;
