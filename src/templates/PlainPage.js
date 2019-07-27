
import React from "react"
import { handleAuthentication } from "../utils/auth"
import Layout from '../components/Layout'


const PlainPage = ({ data: { page } }) => {

    handleAuthentication()

    return (
      <Layout
        meta={page.frontmatter.meta || false}
        title={page.frontmatter.title || false}
      >
        <p>Loading...</p>
      </Layout>
    )
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