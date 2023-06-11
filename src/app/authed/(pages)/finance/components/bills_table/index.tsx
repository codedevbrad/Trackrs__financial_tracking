import TailwindTable from "@/app/tailwindComponents/table"

const userBills = {
    headers: ['Bill' , 'due', 'amount' ],
    data: [
      [ 'Rent', 'in 7 days' ,  3200 ],
      [ 'utility', 'in 10 days' , 400 ],
      [ 'car', 'in 10 days' , 3200 ]
    ]
}

export default function BillsTable() {
    return (
      <TailwindTable title='Bills due.' headings={ userBills.headers } tableData={ userBills.data } />
    )
}