import './aboutUs.css';
function AboutUs() {
  return (
    <div className="AboutUs">
      <header className="AboutUs-bg">
          <h2 align="center" style={{ color:"#b83b5e" }}>Ne bucuram sa va prezentam proiectul nostru! </h2>
          <h4 align="center" style={{ color: "#F5F5F5"}}>Grupa A3 din cadrul FII a realizat un amplu proiect ce isi propune sa rezolve o problema majora in contextul pandemic. Au fost multe sarcini de indeplinit, dar la finalul zilei putem spune ca treaba noastra a decurs perfect. </h4>
          <p align="center" style={{ color: 'white' }}> In contextul pandemiei Covid-19 am sesizat faptul ca multora dintre noi viata de zi cu zi s-a schimbat si au inceput sa apara diferite probleme care aveau nevoie de o solutie urgenta. In acest sens, ne-am gandit sa cream acest site care creeaza o conexiune intre persoanele care au nevoie de ajutor si cele care sunt dispuse sa ajute. Asadar, daca ai o sarcina ce asteapta rezolvata esti in locul potrivit. Tot ce trebuie sa faci este sa te inregistrezi pe site, iar mai apoi sa completezi formularul in care trebuie sa introduci sarcina de rezolvat, durata, data cand ai nevoie de ajutor si sa astepti sa fii preluat de un helper ce te poate ajuta.</p>
          <h3 align="center" style={{ color: 'white' }}>Va multumim ca sunteti aici si tin sa va informez ca „Singuri suntem doar o picatura, dar impreuna suntem oceanul!”.</h3>

        <button type="button" className="form-button">Formular Nevoi!</button>
      </header>
    </div>
  );
}
export default AboutUs;