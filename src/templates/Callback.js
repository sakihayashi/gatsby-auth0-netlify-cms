
import React from "react"
import { handleAuthentication } from "../utils/auth"
import { graphql } from 'gatsby'

const Callback = ({ data: { page } }) => {
    console.log('handleAuthentication: ', handleAuthentication());


    handleAuthentication()

    return <p>Loading...</p>
    
  }
  
  export default Callback
  
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