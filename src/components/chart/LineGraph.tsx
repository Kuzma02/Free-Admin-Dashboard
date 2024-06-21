import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.defaults.color = 'white';

const LineGraph = () => {

  const options = {};
  const data ={
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Traffic",
        data: [10000, 30000, 15000, 30000, 25000, 19000, 50000],
        borderColor: "rgb(255,255,255)",
      }
    ]
  };

  return (
    <Line data={data} options={options} />
  )
}
export default LineGraph