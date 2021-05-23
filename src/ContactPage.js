import React from "react"
import TeamCard from "./TeamCard"
import "./styles/TeamCard.css"

const Members = [
    ["Ciuchilan Andreea",   "Mocanu Diana",         "Pricop Ana",       "Olaru Andreea"],
    ["Blajut Cristin",      "Bucataru Cristian",    "Hrib Ecaterina",   "Roca Dominic"],
    ["Chiriac Catalin",     "Damian Radu",          "Andrei Dascalu",   "Serafim Uliuliuc"],
    ["Musteata Robert",     "Onofrei Tudor",        "Moraru George",    "Angheluș Vlad"],
    ["SOTIR CLAUDIA",       "Maxim Andrei",         "Lupu Florin",      "Carp Valentin"],
    ["Vina Andreea",        "Bujor Bogdan",         "Rosu Andrei",      "Sfabu Anton"],
    ["Ioan Alexandra",      "Inculet Alexandru",    "Inculet Bogdan",   "Florea Robert"],
    ["Budaca Lorin",        "Chiruta Adrian",       "Craciun Tudor",    "Ifrim Andrei"],
]

const Teams = [
    { Type: "Integrare", Members: Members[0]},
    { Type: "FrontEnd", Members: Members[1]},
    { Type: "BackEnd", Members: Members[2]},
    { Type: "FrontEnd", Members: Members[3]},
    { Type: "Backend", Members: Members[4]},
    { Type: "Backend", Members: Members[5]},
    { Type: "FrontEnd", Members: Members[6]},
    { Type: "Mobile", Members: Members[7]},
  ];

const ContactPage = () => {
    const generateContact = () =>
        Teams.map((item, index) =>(
            <TeamCard Type={item.Type} Members={item.Members}/>
        ));
    return (
    <div class="Contact">
        <h1>Contact</h1>
        <div class="ContactPage">
            {generateContact()}
        </div>
    </div>
    );
}

export default ContactPage;