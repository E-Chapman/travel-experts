import "./App.css";
import TravelExpertsList from "./components/TravelExperts/TravelExpertsList";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <TravelExpertsList />
      <Footer />
    </>
  );
};

export default App;
