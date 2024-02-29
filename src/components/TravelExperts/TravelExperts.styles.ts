import styled from "styled-components";

const gridTemplateColumns = "repeat(2, 200px)";
const gridTemplateRows = "repeat(2, 200px)";

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
    grid-template-columns: ${gridTemplateColumns};
    grid-template-rows: repeat(3, 200px);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 200px);
    grid-template-rows: repeat(6, 200px);
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
    margin-bottom: 2;
    color: #8dc6ff;
    font-size: 0.8rem;
  }
`;