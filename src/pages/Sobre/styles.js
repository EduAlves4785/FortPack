import styled from "styled-components";

export const ImagemDiv = styled.div`
  position: relative;
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/008/646/105/original/two-professional-industry-workers-teams-in-safety-uniforms-and-engineers-partners-worked-with-metalwork-tools-discussed-mechanical-drawing-for-lathe-machines-and-workshop-in-manufacturing-factory-video.jpg");
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

export const ValoresDiv = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: #001f57;;
  }

  h2 {
    font-size: 29px;
  }

  .itens {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    div {
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      justify-content: space-around;
      background-color: #f2f2f2;
      border-radius: 8px;
      width: 20rem;
      height: 13rem;
      padding: 1rem;
      transition: 0.3s;

      &:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      }
    }
  }

  @media screen and (max-width: 780px){
    &{
        text-align:center;
        height: 58rem;
    }

    .itens{
        flex-direction: column;
        height: 50rem;

        div{
            width: 85%;
        }
    }
  }
`;
