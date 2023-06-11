import TailwindTable from "@/app/tailwindComponents/table"

const userIncome = {
  headers: ['category' , 'description' , 'spendLimit' , 'tracked' ],
  data: [
    [ 'fueling car', '4 weeks of driving',  '80' , '80%'],
    [ 'streaming services',  'paying for streaming' , '50' , '75%' ],
    [ 'investing' , 'ISA and Plum' , '75' , '100%' ]
  ]
}

export default function ExpenseTable() {
    return (
        <TailwindTable title={'Monthly expenses predicted and tracked by category.'} headings={ userIncome.headers } tableData={ userIncome.data } />
    )
}
  