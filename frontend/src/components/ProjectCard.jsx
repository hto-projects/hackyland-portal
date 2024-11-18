import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ProjectCard({ name, projectId, description}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDgESn9S9Yj8sHdE531aTyhWUjefuTOqAAw&s" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Link to={`/project/${projectId}`}>View Project</Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;