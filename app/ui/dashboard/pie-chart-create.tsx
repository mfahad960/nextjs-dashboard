'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

type BarChartProps = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
};

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context: any) {
          const dataset = context.dataset;
          const total = dataset.data.reduce((acc: number, value: number) => acc + value, 0);
          const currentValue = dataset.data[context.dataIndex];
          const percentage = ((currentValue / total) * 100).toFixed(2); // Calculate percentage
          return `${context.label}: $${currentValue} (${percentage}%)`;
        },
      },
    },
    legend: {
      labels: {
        generateLabels: function (chart: any) {
          const data = chart.data;
          return data.labels.map((label: string, index: number) => {
            const value = data.datasets[0].data[index];
            return {
              text: `${label}`, // Add `%` or `$` here
              fillStyle: data.datasets[0].backgroundColor[index],
              hidden: false,
            };
          });
        },
      },
    },
  },
};

const Chart = ({ data }: BarChartProps) => {
  return <Pie data={data} options={options}/>;
};

export default Chart;