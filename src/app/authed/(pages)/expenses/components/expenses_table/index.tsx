import TailwindTable from "@/app/tailwindComponents/table"

const userIncome = {
  headers: ['Expense' , 'date' , 'description' , 'need' , 'category' , 'cost' ],
  data: [
    [ 'fueling car', '11/05/2023', '2 weeks worth of fuel', 'Must', 'car', '10.55'] , 
    [ 'buying takeout' , '12/05/2023' , 'wanted in-and-out', 'enjoyment' , 'takeout', '23.00' ]
  ]
}

export default function ExpenseTable() {
    return (
        <TailwindTable title={'Monthly expenses tracked.'} headings={ userIncome.headers } tableData={ userIncome.data } />
    )
}
  