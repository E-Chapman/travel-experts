import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Popins", sans-serif;
  color: #8dc6ff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    height: 50px;
  }

  ul {
    list-style: none;
    display: flex;
    font-size: 1rem;
    gap: 20px;
    padding: 0;
    margin: 0;
    align-items: center;
  }

  li {
    cursor: pointer;
    transition: color 0.3s ease;

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  .experts {
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
