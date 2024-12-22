import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {
    y: {
      grid: {
        color: '#55595E',
      },
      ticks: {
        color: 'white',
      },
      beginAtZero: true,
    },
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0)',
      },
      ticks: {
        color: 'white',
      },
      beginAtZero: true,
    },
  },
  barThickness: 20,
  y: {
    ticks: {
      maxTicksLimit: 6,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const labels = ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7'];

const data = {
  labels,
  datasets: [
    {
      label: 'Expenses',
      data: labels.map(() => Math.round((Math.random() * (5000 - 200) + 200) * 100) / 100),
      backgroundColor: '#F8F9FA',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 4,
    },
    {
      label: 'Income',
      data: labels.map(() => Math.round((Math.random() * (5000 - 200) + 200) * 100) / 100),
      backgroundColor: '#B5F2E5',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 4,
    },
  ],
};

const StatisticsHome = () => {
  return (
    <div className="w-ful h-80 bg-stone-900 p-6">
      <span className="text-white">Statistics</span>
      <div className="h-64 w-full">
        <Bar height="100%" width="100%" options={options} data={data} />
      </div>
    </div>
  );
};

export default StatisticsHome;
