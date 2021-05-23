import React from "react";
import styles from "./styles/Profile.css"
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div id="paginaProfile">

            <div id="date">
                <div class="detalii">
                    <div class="spatiuPr"> Nume: </div>
                    <div> <input /> </div>
                </div>
                <div class="detalii">
                    <div class="spatiuPr"> Prenume: </div>
                    <div> <input /> </div>
                </div>
                <div class="detalii">
                    <div class="spatiuPr"> Distanta maxima: </div>
                    <div> <input /> </div>
                </div>
                <div class="detalii">
                    <div class="spatiuPr"> Adresa: </div>
                    <div> <input /> </div>
                </div>
                <div class="detalii">
                    <div class="spatiuPr"> Telefon: </div>
                    <div> <input /> </div>
                </div>

            </div>

            <div id="descriere" class="epilepsy">

                <div id="despre">

                    <div id="aptitudini">
                        <p> Cum pot ajuta? </p>
                        <p> Specializari: <input />, <input />, <input /> </p>
                        <p> Aptitudini: <input />, <input /> </p>
                    </div>


                    <div id="disponibilitate">
                        <p> Cand pot ajuta? </p>
                        <input type="time" /> - <input type="time" />
                    </div>

                </div>

                <div id="centerx2Profile">
                    <div class="butoaneProfile"> Salveaza Profil </div>
                    <a href="Statistics" class="butoaneProfile"> Statistics </a>
                    <div class="butoaneProfile"> Sterge Contul </div>
                </div>

            </div>

        </div>

    )
}

export default Profile;