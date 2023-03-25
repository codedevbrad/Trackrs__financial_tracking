
import { add } from "./utils/add";

/**
 * getPosts GET request.
 * @param {Request } req 
 * @param {Response } res 
 * @returns 
*/

export default async function getPostsHandler( req , res ) {
  try {
     if (req.method === 'GET') {
      let expenses = [
         { id: 1 , title: 'subscriptions' },
         { id: 2 , title: 'food shop' }
      ]
      return res.status(200).json({ expenses , func: add( 5,5 )});
     } 
     else {
        throw 'request method not found in getPosts';
     }
  }
  catch ( err ) {
    return res.status(500).json( err );
  }
}