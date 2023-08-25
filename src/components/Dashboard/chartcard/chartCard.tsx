import React from 'react';
import './chartCard.scss';
import { Line } from 'react-chartjs-2';

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  tooltips: {
    enabled: false,
  },
  hover: { mode: null },
};

export const ChartCard = (props: any) => (
  <div className="card-container">
    {<Line type="line" data={props.energy?.data} options={options} />}
  </div>
);
