import styled from "styled-components";

const gridTemplateColumns = "repeat(2, 200px)";
const gridTemplateRows = "repeat(2, 200px)";

export const IntroParagraph = styled.p`
  font-size: 1rem;
  font-family: "Popins", sans-serif;
  color: #8dc6ff;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 20px;
  width: 80%;
  margin: 0 auto;
  padding: 30px 20px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${gridTemplateColumns};
  grid-template-rows: ${gridTemplateRows};
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-family: "Popins", sans-serif;

  :hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 200px);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 170px);
    grid-template-rows: repeat(2, 140px);
    padding-bottom: 20px;
  }
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  img {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 2px;
  }

  h3 {
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
  }

  a {
    margin-bottom: 2px;
    color: #8dc6ff;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 0.6rem;
    }
    img {
      width: 75px;
    }
  }
`;
