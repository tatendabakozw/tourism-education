import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options  = {
  plugins: {
    legend: {
      display: false
    }
  }
}

export const data = {
  labels: ['Kitchen', 'Toilet', 'Bathroom'],
  datasets: [
    {
      label: '% Usage',
      data: [12, 19, 3],
      backgroundColor: [
        '#0e7490',
        '#0284c7',
        '#67e8f9',
      ],
      borderColor: [
        '#0e7490',
        '#0284c7',
        '#67e8f9',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
