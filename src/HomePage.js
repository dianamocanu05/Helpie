import React from "react"
import styles from "./styles/HomePage.css"
import { Bar } from 'react-chartjs-2';

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
            data: [21, 66] //aici introduci nr cereri actuale
        }
    ]
}


const HomePage = () => {
    return (
        <div id="overview">

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
                <div className="button"> Refresh </div>
            </div>
            </div>

           

            <div id="beneficiar">
                <a href="beneficiar.js" className="button"> Beneficiar </a>
            </div>

            <div id="binefacator">
                <a href="binefacator.js" className="button"> Binefacator </a>
            </div>

        </div>
    )
}

export default HomePage;