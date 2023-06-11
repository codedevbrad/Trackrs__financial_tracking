// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../../prisma/client'


export default async function handler( req , res ) {
  try {
    const data = await prisma.post.findMany()
    return res.status(200).json( data )
  }
  catch ( err ) {
    return res.status(500).json( err );
  }
}
 