import TailwindTable from "@/app/tailwindComponents/table"

const userServices = {
    headers: ['Service' , 'subscription type' , 'amount' ],
    data: [
      [ 'Netflix' , 'standard HD' ,  11.99 ],
      [ 'Spotify', 'premium' , 9 ]
    ]
}

export default function BillsTable() {
    return (
      <TailwindTable title='Subscriptions due.' headings={ userServices.headers } tableData={ userServices.data } />
    )
}