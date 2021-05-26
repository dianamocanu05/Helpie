import './App_style.css';
import AlteServicii from './alte_servicii_component/alte_servicii';
import Footer from "../footer-folder/footer.js";
import Navbar from "../Navbar/Navbar";
function App() {
  return (
    <div className="App_forum">
      <Navbar />
      <AlteServicii />
      <Footer />
    </div>
  );
}

export default App;
