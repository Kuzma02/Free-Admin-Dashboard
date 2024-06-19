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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {};
  const data = {
    labels: [
      "Rent",
      "Groceries",
      "Utilities",
      "Transportation",
      "Entertainment",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [1200, 300, 150, 180, 100],
        backgroundColor: ["rgb(255,255,255)"],
        borderColor: ["rgb(255,255,255)"],
        borderWidth: 1,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
export default BarChart;
