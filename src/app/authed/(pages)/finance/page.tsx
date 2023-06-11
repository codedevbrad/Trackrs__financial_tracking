import IncomeTable  from "./components/income_table"
import CategoryTable from "./components/category_table" 

export default async function FiancePage () {

  return (
    <div> 
        <IncomeTable   />
        <CategoryTable  />
    </div>
  )
}