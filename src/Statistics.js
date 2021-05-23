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
            data: [65, 59]
        }
    ]
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
                <div className="buttonSt"> Refresh </div>
            </div>
        </div >
    )
}

export default Statistics;