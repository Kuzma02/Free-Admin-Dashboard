import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = () => {
  const options = {};
  const data = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
    datasets: [
      {
        label: "Time Spent",
        data: [120, 60, 30, 90, 45],
        backgroundColor: [
          "rgba(0,0,0, 1)",
          "rgba(0,0, 0, .8)",
          "rgba(0,0,0,.6)",
          "rgba(0,0,0,.4)",
          "rgba(0,0,0,.2)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} options={options} />;
};
export default PieChart;
