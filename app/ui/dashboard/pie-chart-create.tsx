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

const Chart = ({ data }: BarChartProps) => {
  return <Pie data={data} />;
};

export default Chart;