import "./css/bootstrap.min.css";
import "./css/font-awesome.css";
import "./css/font.css";
import "./css/style.css";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSlider from "./components/HomeSlider";

function App() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <HomeSlider />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
