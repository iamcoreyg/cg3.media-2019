import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./bulma.min.css"
import "./layout.css"
import Footer from './footer'

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            background: '#1e1e1e',
            color: '#fff'
          }}
        >
          <main>
            <section className="page" style={{background: props.bgColor, backgroundImage: props.bgColor}}>
              <div>{props.children}</div>
            </section>
            <Footer />
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
