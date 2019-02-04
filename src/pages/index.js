import React from "react"
import video from '../../public/static/bg-vid.mp4'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import anime from 'animejs'
import { isMobile } from 'react-device-detect';
import codeImage from '../../public/static/code.jpg';
import visualImage from '../../public/static/visuals.jpg';
import strategyImage from '../../public/static/strategy.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

class IndexPage extends React.Component {
  componentDidMount () {
    anime({
      targets: '.page',
      keyframes: [{ opacity: 0, scale: .8 }, { opacity: 1, scale: 1 }],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    if (!isMobile) {
      let videoSource = document.querySelector('#myVideo source')
      let src = videoSource.dataset.src;
      videoSource.setAttribute('src', src)
    }

    AOS.init();
  }

  componentDidUpdate() {
    if (!isMobile) {
      let videoSource = document.querySelector('#myVideo source')
      let src = videoSource.dataset.src;
      videoSource.setAttribute('src', src)
    }
  }

  render() {
    return (
      <Layout bgColor="white">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <main className="home-1">
          <div className="video-wrap">
            <video muted id="myVideo" autoPlay loop>
                <source data-src={video} type="video/mp4" />
            </video>
          </div>
          <section className="container top-space">
            <div className="intro" data-aos="fade-right">
              <h1>CG3.Media <span className="lighter">creates digital experiences</span></h1>
              <h3 className="intro-text">
                Helping people and businesses tell their stories.
              </h3>
            </div>
          </section>
        </main>

        <main className="home-2">
          <section className="container top-space bottom-space">
            <h1 className="page-title primary">Empowering You</h1>
            <h3 className="lighter">
              We're a boutique creative &amp;  technology company; working with small businesses
              and major companies. 
            </h3>

            <section class="columns bottom-space top-space">
              <div class="column">
                <h4 className="lighter">Code</h4>
                <p class="subtle">
                  We craft custom websites from scratch and customize platforms 
                  like Wordpress and Squarespace.
                </p>
              </div>
              <div class="column">
                <img src={codeImage} data-aos="fade-left"/>
              </div>
            </section>

            <section class="columns bottom-space">
              <div class="column">
                <img src={visualImage} data-aos="fade-right"/>
              </div>
              <div class="column">
                <h4 className="lighter">Visuals</h4>
                <p class="subtle">
                  Bold visuals create engaging experiences. We create beautiful 
                  interface & graphic design, photography, and video.
                </p>
              </div>
            </section>

             <section class="columns bottom-space">
              <div class="column">
                <h4 className="lighter">Strategy</h4>
                <p class="subtle">
                We'll help you configure business platforms like Google apps, 
                leverage advertising platforms, and use social media to 
                grow brands and launch successful projects.
                </p>
              </div>
              <div class="column">
                <img src={strategyImage} data-aos="fade-left"/>
              </div>
            </section>


            <Link to="/about" className="url-btn">Learn more</Link>
          </section>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
