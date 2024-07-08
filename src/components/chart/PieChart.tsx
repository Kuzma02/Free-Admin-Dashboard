import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { useAppSelector } from "../../hooks";

ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = () => {

  const { darkMode } = useAppSelector((state) => state.darkMode);
  if (darkMode) {
    ChartJS.defaults.color = "#fff";
    ChartJS.defaults.backgroundColor = '#fff';
    ChartJS.defaults.borderColor = '#fff';
    ChartJS.defaults.color = '#fff';
  } else {
    ChartJS.defaults.color = "#000";
    ChartJS.defaults.backgroundColor = '#000';
    ChartJS.defaults.borderColor = '#000';
    ChartJS.defaults.color = '#000';
  }

  const options = {};
  const data = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
    datasets: [
      {
        label: "Time Spent",
        data: [120, 60, 30, 90, 45],
        backgroundColor: [
          "rgba(255,255,255, 1)",
          "rgba(255,255, 255, .8)",
          "rgba(255,255,255,.6)",
          "rgba(255,255,255,.4)",
          "rgba(255,255,255,.2)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} options={options} />;
};
export default PieChart;
