import React from "react";
import styles from "./styles/Statistics.css"
import { Bar } from 'react-chartjs-2'

const grafic = {
    labels: ['People you helped', 'People that helped you'],
    datasets: [
        {
            label: 'Number',
            backgroundColor: 'green',
            borderColor: 'violet',
            borderWidth: 2,
            data: [0, 0]
        }
    ]
}
getUserData();
async function getUserData() {
    var url = 'https://all-db.herokuapp.com/api/v1/statisticForUser';
    var request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: localStorage.getItem("username")
        })
    });
    const response = await fetch(request);
    const data = await response.json();
    grafic.datasets[0].data = [data.countHelper, data.countNeeder];

}

const Statistics = () => {
    return (
        <div id="paginaStatistics">
            <div id="graficProfile">
                <Bar
                    data={grafic}
                    options={{
                        title: {
                            display: true,
                            text: 'Chart',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>

            <div id="refreshSt">
                <button className="buttonSt" onClick={getUserData}> Refresh </button>
            </div>
        </div >
    )
}

export default Statistics;