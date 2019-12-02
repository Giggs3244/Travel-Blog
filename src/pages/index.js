import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeaderPreHome from "../components/molecules/headerprehome/HeaderPreHome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderPreHome />
    
  </Layout>
)

export default IndexPage
