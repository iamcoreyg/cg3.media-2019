import React from "react"
import SVG from "../images/cg3-outline.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import anime from 'animejs'

class About extends React.Component {
  componentDidMount () {
    anime({
      targets: '.page',
      keyframes: [{ opacity: 0, scale: .8 }, { opacity: 1, scale: 1 }],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.cls-1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 7500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });

    anime({
      targets: '.js-delay-fade-in',
      keyframes: [
        { opacity: 0, translateY: -50, perspective: '400px', rotateY: '45deg' },
        { opacity: 1, translateY: 0, perspective: '400px', rotateY: '0deg' }
      ],
      duration: 3000,
      delay: 0,
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="About" />
          <section className="container top-space bottom-space">
          <h1 className="page-title primary">About</h1>
            <div className="columns">
              <div className="column js-delay-fade-in">
                <h5>Capabilities</h5>
                <ul>
                  <li>Web / Mobile</li>
                  <li>Digital Products / Apps</li>
                  <li>Wordpress / Squarespace / Wix</li>
                  <li>Graphics & UI/UX Design</li>
                  <li>Photography</li>
                  <li>Music Production</li>
                </ul>

                <h5>Selected Clients</h5>
                <ul>
                  <li>Def Jam Recordings</li>
                  <li>Interscope Records</li>
                  <li>Red Bull Records</li>
                  <li>Sony Music / RCA</li>
                  <li>Universal Music Group</li>
                </ul>
              </div>

              <div className="column js-delay-fade-in">
                <p>CG3.Media</p>

                <h3>We grow our clients' projects and businesses</h3>
                <p>
                  We've worked with major labels, start-ups and brands to create websites, apps,
                  designs, and ideas. We specialize in custom design &amp; development but also offer consulting
                  services for clients that use platforms like Wordpress, Squarespace or Shopify.
                </p>

                <p>
                  We've also built a few tools like <a rel="noopener noreferrer"  target="_blank" href="https://hypel.ink">Hype Link</a> and <a rel="noopener noreferrer"  target="_blank" href="https://speakflow.com">Speakflow</a>
                </p>

                <small className="subtle">Based in Los Angeles, CA</small>

              </div>
              <SVG />
            </div>
          </section>
      </Layout>
    )
  }
}

export default About
