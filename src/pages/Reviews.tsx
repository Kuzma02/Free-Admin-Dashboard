import { ProductTable, Sidebar } from "../components"

const Reviews = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full ">
        <ProductTable />
      </div>
    </div>
  )
}
export default Reviews