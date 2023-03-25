import { Suspense } from 'react'; 

function Loading() {
  return <h2>🌀 Loading...</h2>;
}


async function getUsers( ) {
    const res = await fetch(`http://localhost:3000/api/getPosts` , { cache: 'no-store' })
     if ( !res.ok ) {
        console.log('couldnt fetch the data for getPosts')
        // return []
        throw new Error('Failed to fetch data');
     } else {
        return res.json()
     }
}
  
export default async function Posts ( ) {
      const data = await getUsers();
      console.log( data );
      return (
       <div>
              <h1> Posts </h1>
              <Suspense fallback={<Loading />}>
                  { data.map(( post ) => (
                     <h1 key={ post.id }> { post.title } </h1>
                  ))}
              </Suspense>
        </div>
     )
}