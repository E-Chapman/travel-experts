import logo from "./assets/logo.jpg";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Astronaut logo" />
      </div>
      <h1>Space Travel Experts</h1>
      <div className="card">Travel Experts to be added here</div>
    </>
  );
};

export default App;
