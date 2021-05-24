import React from "react"
import styles from "./styles/HomePage.css"
import { Bar } from 'react-chartjs-2';
import { render } from "@testing-library/react";

const linie1 = {
    labels: ['Cereri disponibile', 'Binefacatori disponibili'],
    datasets: [
        {
            label: 'Numar persoane',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0, 0] //aici introduci nr cereri actuale
        }
    ]
}
getData();
async function getData() {
    var url = 'https://all-db.herokuapp.com/api/v1/unmatchedNeedersAvailableHelpers';
    var request = new Request(url, {
        method: 'GET'
    });
    const response = await fetch(request);
    const data = await response.json();
    linie1.datasets[0].data = [data.countUnmatched, data.countAvailable];

}

const HomePage = () => {
    return (
        <form id="overview">

            <div class="graficHome">
                <Bar
                    data={linie1}
                    options={{
                        title: {
                            display: true,
                            text: 'Cereri nerezolvate',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
                <div id="refresh">
                    <button className="button" onClick={getData}> Refresh </button>
                </div>
            </div>



            <div id="beneficiar">
                <a href="beneficiar.js" className="button"> Beneficiar </a>
            </div>

            <div id="binefacator">
                <a href="binefacator.js" className="button"> Binefacator </a>
            </div>

        </form>
    )
}
export default HomePage;