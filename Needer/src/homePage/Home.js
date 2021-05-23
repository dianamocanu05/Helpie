import './Home.css';
import Carousel from '../carousel/carousel.js';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="Home">
      <Carousel />
      {/* <header className="Home-bg">
        <h2 align="center">Singuri suntem doar o picatură, dar împreună suntem oceanul. </h2>
        <p align="center"> În contextul pandemiei Sars-Cov-2, tot mai mulți oameni au nevoie de ajutor din cauza restricțiilor ce implică imposibilitatea de deplasare
        în cadrul comunității. Această problemă poate fi rezolvată facil prin crearea unei platforme; aceasta va fi formată dintr-o pagină web și o
        aplicație mobile în cadrul căreia utilizatorului i se va pune la dispoziție un formular prin care va putea cere sau oferi ajutor.
        </p>
        <Link className="form-button" to="/form">Găsește ajutor!</Link>
      </header> */}
    </div>
  );
}
export default Home;