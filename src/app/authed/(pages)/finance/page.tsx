import IncomeTable  from "./components/income_table"
import CategoryTable from "./components/category_table" 
import BillsTable from "./components/bills_table"

export default async function FiancePage () {
  return (
    <div> 
        <IncomeTable   />
        <BillsTable />
        <CategoryTable  />
    </div>
  )
}