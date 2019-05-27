import React from 'react';
import {Radar} from 'react-chartjs-2';
import styles from './Output.module.css';

const Output = ({chartData, average}) => {
    if(average)
    {
        const pointColors = ['#ff3900','#33658a','#86bbd8','#2f4858','#f6ae2d','#01fdf6','#cbbaed','#e9df00']
        const data = {
            datasets: [
                {
                    data: Object.values(chartData),
                    label: 'Nota',
                    backgroundColor: '#03fcba99',
                    borderColor: '#989898',
                    pointBackgroundColor: pointColors,
                    pointBorderColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverBackgroundColor: pointColors,
                    pointHoverBorderColor: pointColors,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ],
            labels: Object.keys(chartData)
        }
        const style = {
            displayColors: true
        }
        const scale = {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 10,
                stepSize: 1,
                display: false
            },
            pointLabels: {
                display: true,
                fontColor: '#000',
                fontSize: 12
            }
        }
        const options = {
            maintainAspectRatio: true,
            responsive: true,
            aspectRatio: 1,
            layout: {
                padding: 10,
            },
            scale: scale,
            legend: { display: false },
            style
        }
        return(
            <div className={styles.output}>
                <h1>{Math.round(average * 100) / 100}</h1>
                <Radar 
                data={data} 
                options={options}
                />
            </div>
        )
    } else {
        return(
            <div className={styles.output}>
                <h1>{"Media ta va apărea aici alături de o diagramă fancy"}</h1>
            </div>
        )
    }
}

export default Output;