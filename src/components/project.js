import React from "react"

const Project = (props) => (
  // <section className="column">
    <a className="project" data-projectslug={ props.projectSlug } onClick={ props.setProject }>
      <div 
        className="project-image" 
        style={{backgroundImage: `url('${props.project.thumbnail}')`}}
        data-projectslug={ props.projectSlug } 
        onClick={ props.setProject }
      ></div>
      <section className="project-info-wrap">
        <div 
          className="project-title"
          data-projectslug={ props.projectSlug } 
          onClick={ props.setProject }
        >{ props.project.title }</div>
        <div className="project-description">{props.project.job}</div>
        <div className="project-long-description">
        { props.project.headline }
        </div>
      </section>
    </a>
  // </section>
)

export default Project
