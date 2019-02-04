import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <section className="container">
    <Link to="/">Home</Link>
      <Link to="/work/">Work</Link>
      <Link to="/about/">About</Link>
      <a href="mailto:corey@cg3media.com">Contact</a>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
