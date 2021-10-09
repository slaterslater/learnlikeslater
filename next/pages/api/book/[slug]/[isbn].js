// pages/api/book/[slug]/[isbn].js


// const { request, gql } = require('graphql-request')

// async function main() {
//   const endpoint = process.env.GRAPHQL_API_ENDPOINT

//   const query = gql`
//   query {
//     authenticatedItem {
//       ... on User {
//         card
//         pin
//       }
//     }
//   }
//  `

//   const data = await request(endpoint, query)
//   console.log(JSON.stringify(data, undefined, 2))
// }





export default function handler(req, res) {
  // main().catch((error) => console.error(error))
  const { slug, isbn } = req.query
  res.status(200).json({ slug, isbn })
}
