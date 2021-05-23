import "./faqPage.css"

function faqPage() {
  return (
    <div class="wrapper1">
        <h1>Întrebări frecvente</h1>
        <div class="QA">
            <h2 class="question">1. Cu ce mă ajută această aplicație?</h2>
            <h3 class="answer"> Această aplicație este creată pentru a ajuta utilizatorii să găsească ajutorul de care au nevoie. </h3>
            <h2 class="question">2. Cum se utilizează?</h2>
            <h3 class="answer"> Aplicația folosește un algoritm de asociere pentru a pune in contact persoanele care au nevoie de ajutor cu cei care oferă acest ajutor. </h3>
            <h2 class="question">3. Cât de rapid îmi sunt satisfăcute nevoile?</h2>
            <h3 class="answer"> Depinde dacă sunt sau nu persoane care vă pot ajuta. Aplicația vă va asigna un helper imediat ce este disponibil </h3>
            <h2 class="question">4. Pot cere ajutor pentru mai multe probleme?</h2>
            <h3 class="answer"> Sigur ca da. Folosiți formularul pentru a introduce toate lucrurile de care aveți nevoie. </h3>
            <h2 class="question">5. Ce câștigați voi din asta?</h2>
            <h3 class="answer"> Nimic. Suntem bucuroși să oferim un serviciu care să ne apropie și să ne amintim să ne ajutăm în aceste vremuri grele. </h3>
        </div>
    </div>
  );
}

export default faqPage;