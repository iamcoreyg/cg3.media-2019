import React from "react"
import Project from "../components/project"
import Layout from "../components/layout"
import SEO from "../components/seo"
import anime from 'animejs'
import Projects from '../projects'
import Slider from "react-slick";

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: null,
      projectIsLoaded: false,
      transitioning: false
    }

    this.setProject = this.setProject.bind(this);
    this.sliderInit = this.sliderInit.bind(this)
  }

  componentDidMount () {
    anime({
      targets: '.page',
      keyframes: [{ opacity: 0, scale: .8 }, { opacity: 1, scale: 1 }],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    setTimeout(function() {
      anime({
        targets: '.project',
        keyframes: [
          { opacity: 0, rotateY: '45deg' },
          { opacity: 1, rotateY: '0deg' }
        ],
        duration: 2000,
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      })
    }, 1000)

    this.setState({
      distanceToOpenProject: document.querySelector('.open-project').getBoundingClientRect().top
    })
  }

  componentDidUpdate() {
    if (this.state.project) {
      window.scroll({
        top: this.state.distanceToOpenProject + 60, 
        left: 0, 
        behavior: 'smooth'
      })
    }
  }

  sliderInit() {
    let images = document.querySelectorAll('img[data-src]')
    images.forEach((image) => {
      let src = image.dataset.src;
      image.setAttribute('src', src)
      image.removeAttribute('data-src')

      image.classList.add('fadein')
    })
  }

  setProject = (e) => {
    window.scroll({
      top: 0,
      left: 0, 
      behavior: 'smooth'
    })

    let p = e.target.dataset.projectslug

    this.setState({
      project: Projects.all[p],
      projectIsLoaded: false,
      transitioning: true
    })

    setTimeout(function() {
      this.setState({
        projectIsLoaded: true,
        transitioning: false
      })
    }.bind(this), 2000)
  }
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <Layout bgColor="#131318">
        <SEO title="Work" />
          
          <section className="container work-page top-space">
            <h1 className="page-title primary">Selected Work</h1>
          </section>
           
          <section className={`open-project ${this.state.transitioning ? 'open' : ''} ${!this.state.projectIsLoaded ? '' : 'open black-bg'}`}>
            { this.state.transitioning && 
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }

            { this.state.project && !this.state.transitioning &&
              <section className="container top-space">
                <div className="columns">
                  <div className="column">
                    <h1>{ this.state.project.title }</h1>
                    <p className="subtle">{ this.state.project.headline }</p>
                    { 
                      this.state.project.urls.map(
                        (url) => <a className="url-btn" rel="noopener noreferrer" href={url.url} target="_blank">{url.text}</a>
                      )
                    }
                  </div>
                  <div className="column">
                    <p dangerouslySetInnerHTML={{__html: this.state.project['description'] }} />
                    <small className="subtle" dangerouslySetInnerHTML={{__html: this.state.project['nerdy-details'] }} />
                  </div>
                </div>
                
                <Slider {...settings} onInit={this.sliderInit} onReInit={this.sliderInit} beforeChange={this.sliderInit}>
                    { 
                      this.state.project.slider.map(
                        (img) => <div><img data-src={ img.url } /></div>
                      )
                    }
                </Slider>
              </section>
            }
          </section>
          
          <section className="container work-wrap">
            {
              Object.keys(Projects.all).map(
                (project) => <Project projectSlug={project} project={Projects.all[project]} setProject={this.setProject}/>
              )
            }
          </section>
      </Layout>
    )
  }
}

export default Work
