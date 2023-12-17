import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import { faker } from "@faker-js/faker";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "consumption Monitoring",
      },
    },
  };
  
  const labels = ["125-250", "63-125", "31.5-63", "16-31.5", "8-16", "4-8", "1-4"];

  export const data = {
    labels,
    datasets: [
      {
        label: "Ideal",
        data: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Current",
        data: [0.25, 0.31, 0.38, 0.5, 0.63, 0.82, 1.15,],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  function AdminHomeGraphs(){
    return <Line options={options} data={data} />;
  }

  export default AdminHomeGraphs