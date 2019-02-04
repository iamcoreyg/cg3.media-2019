import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./bulma.min.css"
import "./layout.css"

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
            <footer>
              <section className="container">
                <section className="columns">
                  <section className="column">
                    <h3>CG3.Media</h3>
                    <small className="subtle">&copy; { new Date().getFullYear() } CG3.Media • All Rights Reserved.</small>
                  </section>
                  <section className="column">
                    <a href="#">corey@cg3media.com</a> <br />
                    <Link to="/about">About</Link> <br />
                    <Link to="/work">Work</Link>
                  </section>
                  <section className="column">
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/cg3media">Twitter</a> <br />
                    <a rel="noopener noreferrer" target="_blank"href="https://instagram.com/cg3media">Instagram</a> <br />
                  </section>
                </section>
              </section>
            </footer>
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
