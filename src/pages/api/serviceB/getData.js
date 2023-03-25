/**
 * getPosts GET request.
 * @param {Request } req 
 * @param {Response } res 
 * @returns 
 */

export default async function getPostsHandler( req , res ) {
  try {
     if (req.method === 'GET') {
        // Process a POST request
        return res.status(200).json([
            { id: 1 , title: 'subscriptions' },
            { id: 2 , title: 'food shop' }
        ]);
     } 
     else {
        throw 'request method not found in getPosts';
     }
  }
  catch ( err ) {
    return res.status(500).json( err );
  }
}