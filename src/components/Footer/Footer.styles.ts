import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #09203f;
  color: #8dc6ff;
  font-size: 0.8rem;
  padding: 10px;
  font-family: "Popins", sans-serif;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;

  a {
    color: #8dc6ff;
  }

  :hover {
    color: #646cff;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
