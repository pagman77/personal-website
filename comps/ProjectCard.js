import Image from 'next/image';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  CardFooter,
  ButtonGroup
} from 'reactstrap';

import { ICONS } from "../misc/icons";

export default function ProjectCard({ project }) {

  function getIcons(technologies) {

    const projectIcons = [];
    const iconNames = Object.keys(ICONS);

    for (let technology of technologies) {
      if (iconNames.includes(technology)) projectIcons.push(ICONS[technology]);
    }

    return projectIcons;
  }
  return (
    <Card inverse outline className="col-12 col-lg-5 p-4 mb-5 mx-4 project">
      <CardHeader>
        <CardTitle className='text-center card-title'>
          {project.title}
        </CardTitle>
      </CardHeader>
      <Image
        width={project.image.width}
        height={project.image.height}
        src={project.image.url}
        alt={project.title} />
      <CardBody>
        <CardText>
          <small>{project.description}</small>
        </CardText>
        <CardText className='text-center'>
          {getIcons(project.technologies).map((technology, idx) => {
            return (
              <i className={technology} key={idx}></i>
            );
          })}
        </CardText>
      </CardBody>
      <CardFooter className="container mb-2">
        <ButtonGroup className="d-flex justify-content-center align-items-center">
          {project.page && <a className="btn contact-btn p-2" href={project.page} target="blank">Project Page</a>}
          {project.github && <a className="btn contact-btn p-2" href={project.github} target="blank">Github</a>}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

