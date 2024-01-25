import styled from "styled-components";

export const Rodape = styled.div`
  color: black;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;
  bottom: 0;
  margin-top: .5rem;
  font-size: 18px;
  text-align: center;

  @media only screen and (max-width: 700px){
        font-size: 12px;

    }
`;
