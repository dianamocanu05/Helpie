import {Link} from 'react-router-dom';
import './Help.css';
function Help() {
  return (
    <div className="Help">
      <header className="Help-bg">
          <h2 align="center" style={{ color:"#b83b5e" }}>Bine ai venit pe site! </h2>
          <h4 align="center" style={{ color: "#F5F5F5"}}>Singuri suntem doar o picatură, dar împreună suntem oceanul. </h4>
          <h3 align="center" style={{ color: 'white' }}> Impreuna ne dorim sa cream o comunitate unita si sa putem rezolva cat mai multe probleme!</h3>
          <p align="center" style={{ color: 'white' }}>Ai nevoie de ajutor? Esti unde trebuie! Tot ce trebuie sa faci este sa completezi acest formular. Dupa finalizarea acestuia vei fi redirectionat intr-o camera de asteptare unde vei fi preluat de o persoana care te poate ajuta.</p>

         <Link className="form-button" to="/">Formular Nevoi!</Link>
      </header>
    </div>
  );
}
export default Help;
