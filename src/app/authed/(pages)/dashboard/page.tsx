
import { auth } from '@clerk/nextjs/app-beta'

import Statistics from '../dashboard/components/statistics'
import Spending from "./components/spending"

async function getData( ): Promise<any> {
  const { userId } : { userId : string | null } = auth();
  const res = await fetch(`${ process.env.BASE_URL }/api/example/getExampleUser?userId=${ userId }` , { cache: "no-store" });
  if ( !res.ok ) {
      res.text().then( text => console.error( text ) );
      return [];
  } else {
      return res.json();
  }
}

export default async function Dashboard () {
  let data = await getData( );
  console.log( data )
  return (
    <>
        <Statistics />
        <Spending />
    </>
  )
}