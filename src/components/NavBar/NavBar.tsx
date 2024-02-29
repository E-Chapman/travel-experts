import logo from "../../assets/logo.png";
import { NavBarContainer } from "./NavBar.styles";

const NavBar = () => {
  return (
    <nav>
      <NavBarContainer>
        <img src={logo} className="logo" alt="solar system logo" />
        <ul>
          <li>Upcoming Trips</li>
          <li className="experts">Your Travel Experts</li>
        </ul>
      </NavBarContainer>
    </nav>
  );
};

export default NavBar;
