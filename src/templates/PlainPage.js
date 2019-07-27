
import React from "react"
import { handleAuthentication } from "../utils/auth"

const PlainPage = ({ data: { page } }) => {
    console.log('handleAuthentication: ', handleAuthentication());


    handleAuthentication()

    return <p>Loading...</p>
    
  }
  
  export default PlainPage
  
  export const pageQuery = graphql`
    query PlainPage($id: String!) {
      page: markdownRemark(id: { eq: $id }) {
        ...Meta
        html
        frontmatter {
          title
          template
          subtitle
          featuredImage
          address
          phone
          email
          locations {
            mapLink
            lat
            lng
          }
        }
      }
    }
  `