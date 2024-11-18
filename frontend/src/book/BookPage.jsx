import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Card } from 'react-bootstrap';

function trailFromPath(path) {
  const trail = [];
  const levels = path.split("/").filter(p => p);
  for (let i = 0; i < levels.length; i++) {
    trail.push(trail.join("/") + "/" + levels[i]);
  }

  return trail;
}

const BookPage = ({ children, className }) => {
  const [locationStr, setLocationStr] = useState("");
  const location = useLocation();

  useEffect(() => {
    setLocationStr(location.pathname);
  }, [location, locationStr]);

  const trail = trailFromPath(locationStr);

  return <>
    <div>
      {trail.map((l, i) => {
        const name = l.split("/").pop();
        const lastOne = i === trail.length - 1;
        return lastOne ? <span>{name}</span> : <span><Link key={i} to={l}>{name}</Link> / </span>;
      })}
    </div>
    <Container className='d-flex justify-content-center'>
        <Card className={`book-page-card ${className}`} style={{background: "white", display: "flex"}}>
          {children}
          </Card>
          </Container>
  </>
}

BookPage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default BookPage;