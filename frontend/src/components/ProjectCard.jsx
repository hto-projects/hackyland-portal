import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ProjectCard({ project }) {
  // eslint-disable-next-line react/prop-types
  const { projectName, projectDescription, projectId, projectThumbnail } = project;
  return (
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={projectThumbnail || "/BlankProject.png"} />
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text>
          {projectDescription}
        </Card.Text>
        <Link to={`/project/${projectId}`}>View Project</Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
