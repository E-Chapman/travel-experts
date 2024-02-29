import logo from "./assets/logo.png";
import "./App.css";
import TravelExpertsList from "./components/TravelExperts/TravelExpertsList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="solar system logo" />
      </div>
      <TravelExpertsList />
      <Footer />
    </>
  );
};

export default App;
