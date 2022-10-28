import Image from 'next/image';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
  CardFooter,
  Button,
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
    <Card inverse outline color="dark" className="col-12 col-lg-5 m-5 p-3 project">
      <CardHeader className="text-dark ">
        <CardTitle className='text-center card-title'>
          {project.title}
        </CardTitle>
      </CardHeader>
      <Image
        width={project.image.width}
        height={project.image.height}
        src={project.image.url}
        alt={project.title} />
      <CardBody className="text-dark">
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
      <CardFooter className="d-flex justify-content-center align-content-center">
        <ButtonGroup className="w-100">
          {project.page && <a className="btn contact-btn p-2" href={project.page} target="blank">Project Page</a>}
          {project.github && <a className="btn contact-btn p-2" href={project.github} target="blank">Github</a>}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

