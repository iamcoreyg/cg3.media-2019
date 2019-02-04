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

  setProject = (e) => {
    this.setState({
      projectIsLoaded: false,
      transitioning: true
    })

    document.querySelector('.open-project').classList.add('open')

    window.scroll({
      top: 0,
      left: 0, 
      behavior: 'smooth'
    })

    let p = e.target.dataset.projectslug
    setTimeout( function() {
      this.setState({
        project: Projects.all[p],
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
      autoplaySpeed: 2500
    };

    return (
      <Layout bgColor="#ff6747">
        <SEO title="Work" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          
          <section className="container work-page top-space">
            <h1 className="page-title">Selected Work</h1>
          </section>
           
          <section className={`open-project ${this.state.transitioning ? 'open' : ''} ${!this.state.projectIsLoaded ? '' : 'open black-bg'}`}>
            { this.state.transitioning && 
              <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }

            { this.state.project && this.state.project.title && !this.state.transitioning &&
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
                
                <Slider {...settings}>
                    { 
                      this.state.project.slider.map(
                        (img) => <div><img src={ img.url } /></div>
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
