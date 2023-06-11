import TailwindTable from "@/app/tailwindComponents/table"

const userIncome = {
  headers: ['Expense' , 'date' , 'description' , 'need' , 'category' , 'predicted' , 'tracked' ],
  data: [
    [ 'fueling car', '11/05/2023', '2 weeks of driving', 'Must', 'car', '42.55', '10.55' ],
    [ 'phone bill', '11/05/2023', 'phone bill for Iphone 11', 'Must', 'car', '12.00', '0' ]
  ]
}

export default function ExpenseTable() {
    return (
        <TailwindTable title={'Monthly expenses tracked.'} headings={ userIncome.headers } tableData={ userIncome.data } />
    )
}
  