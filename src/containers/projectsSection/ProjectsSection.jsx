import "./projectsSection.css";
import { ContactCard } from "../../components/index";

const ProjectsSection = () => {
  return (
    <div  className="projects-section-wrapper section-padding reveal">
        <div className="projects-section container">
          <ContactCard/>
          <div className="project-stats" >
            <div className="project-stat">
              <h1 className="project-stat-heading">520+</h1>
              <p className="project-stat-subtext">Projects Done</p>
            </div>
            <div className="project-stat">
              <h1 className="project-stat-heading">15+</h1>
              <p className="project-stat-subtext">Years Experience</p>
            </div>
            <div className="project-stat">
              <h1 className="project-stat-heading">500+</h1>
              <p className="project-stat-subtext">Satisfied Clients</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectsSection;