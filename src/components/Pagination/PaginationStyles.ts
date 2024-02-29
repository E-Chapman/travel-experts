import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    margin: 10px;
    background-color: #8dc6ff;
    color: #09203f;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 0.7rem;
    }

    @media (max-width: 480px) {
      padding: 10px 10px;
      font-size: 0.6rem;
    }
  }

  button:not(:disabled):hover {
    background-color: #646cff;
  }

  :disabled {
    background-color: #808080;
    cursor: not-allowed;
  }
`;
