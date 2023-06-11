import TailwindTable from "@/app/tailwindComponents/table"

const userIncome = {
    headers: ['Income' , 'Potential earning description' , 'when paid' , 'amount' ],
    data: [
      [ 'Tech job', 'working as a full-stack dev', 'end of month', 3200 ],
      [ 'etsy art', 'selling my a.i artwork', 'end of month',  3200 ],
      [ 'tutoring', 'tutoring lessons online', '11th', 3200 ]
    ]
}

export default function IncomeTable() {
    return (
      <TailwindTable title='My income.' headings={ userIncome.headers } tableData={ userIncome.data } />
    )
}