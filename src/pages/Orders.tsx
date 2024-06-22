import { ProductTable, Sidebar } from "../components"

const Orders = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full ">
        <ProductTable />
      </div>
    </div>
  )
}
export default Orders