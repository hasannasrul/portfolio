import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Kubernetes",
      description: "workloads yaml and some projects",
      imgUrl: projImg4,
      link: "https://github.com/hasannasrul/Kubernetes-Devops"
    },
    {
      title: "Terraform",
      description: "concepts and some IaC snippets",
      imgUrl: projImg2,
      link: "https://github.com/hasannasrul/Terraform-Devops"
    },
    {
      title: "Complete pipeline",
      description: "three tier application deployment using ci/cd kubernetes",
      imgUrl: projImg6,
      link: "https://github.com/hasannasrul/cicd-project-devops"
    },
    {
      title: "Python",
      description: "Useful scripts and code snippets for devops in python",
      imgUrl: projImg1,
      link: "https://github.com/hasannasrul/Python-Devops"
    },
    {
      title: "CI/CD",
      description: "pipeline as code and some important concepts",
      imgUrl: projImg5,
      link: "https://github.com/hasannasrul/CI-CD-Devops"
    },
    {
      title: "Linux",
      description: "repetitive task scripts and important Linux concepts",
      imgUrl: projImg3,
      link: "https://github.com/hasannasrul/Linux-Devops"
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Code repos and Projects</h2>
                <p>Hover Over Code repos/Project to get a description</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                link={project.link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
