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
        label: "Steps",
        data: [1000, 2000, 1500, 3000, 2000, 1200, 1500],
        borderColor: "rgb(255,255,255)",
      }
    ]
  };

  return (
    <Line data={data} options={options} />
  )
}
export default LineGraph