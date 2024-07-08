import { Chart, Line } from "react-chartjs-2";
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
import { useAppSelector } from "../../hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
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
      "Sunday",
    ],
    datasets: [
      {
        label: "Traffic",
        data: [10000, 30000, 15000, 30000, 25000, 19000, 50000],
      },
    ],
  };

  return <Line data={data} options={options} />;
};
export default LineGraph;
