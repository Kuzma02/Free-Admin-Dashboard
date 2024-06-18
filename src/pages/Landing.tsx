import { Sidebar } from "../components"
import Line from "../components/chart/Line"

const Landing = () => {
  return (
    <div className="h-[100vh] border-t border-blackSecondary border-1">
      <Sidebar />
      <Line />
    </div>
  )
}
export default Landing