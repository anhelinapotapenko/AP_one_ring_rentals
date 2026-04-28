import "./App.css";
import "./css/style.css";
import "bulma/css/bulma.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap-datepicker.css";
import "./css/font-awesome.css";
import "./css/font-awesome.min.css";
import "./css/font.css";

import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import HomeSlider from "./components/HomeSlider";

function App() {
  return (
    <>
      <div>
        <HomeSlider />
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
