import React from 'react'
import { BarElement, CategoryScale, Chart as ChartJs, Legend, LinearScale, Tooltip, } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJs.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

export default function BarGraph() {
    const data = {
        labels: ['5', '9', '11', '13' , '15', '17', '19', '21' , '23', '25', '27'],
        datasets: [
            {
                label: "Weekly revenue",
                backgroundColor: 'rgb(50, 196, 254)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [10000, 5000, 3000, 10000, 7000, 12000, 9000, 15000, 6000, 8000, 4000],
                borderRadius: 50
            },
            {
              label: "Weekly revenue",
              backgroundColor: 'rgb(50, 196, 254)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
              hoverBorderColor: 'rgba(255, 99, 132, 1)',
              data: [7000, 3000, 2500, 9000, 5000, 11000, 7000, 13000, 5500, 7500, 3500],
              borderRadius: 50
          }
        ]
    }
    const options ={
        scales: {
            x: {
              type: 'category', 
              grid: {
                display: false, 
              },
              border: {
                display: true
              },
              barThickness: 50
            },
            y: {
              beginAtZero: true,
              grid: {
                display: true, 
              },
              ticks: {
                display: true,
              },
              ticks: {
                display: true,
                callback: function(value) {
                    if (value === 0) return '0';
                    if (value === 5000) return '5k';
                    if (value === 10000) return '10k';
                    if (value === 15000) return '15k';
                }
            },
              border: {
                display: false
              }
            },
          },
          plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
            },
        }
    }
    
  return (
    <div style={{maxHeight: '200px'}}>
        <Bar className='w-100' data={data} options={options}></Bar>
    </div>
  )
}
