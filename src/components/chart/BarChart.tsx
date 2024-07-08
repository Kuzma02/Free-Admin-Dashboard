import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useAppSelector } from "../../hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

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
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "Order number",
        data: [120, 300, 150, 180, 100, 200, 300],
        backgroundColor: ["rgb(255,255,255)"],
        borderColor: ["rgb(255,255,255)"],
        borderWidth: 1,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
export default BarChart;
