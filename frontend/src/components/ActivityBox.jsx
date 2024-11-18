import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

function ActivityBox({ activity, active }) {
  const { name, emoji, description, materialUrl } = activity;

  const activeDiv = useRef();

  const scrollToActive = () => {
    const {current} = activeDiv
    if (current){
      current.scrollIntoView({behavior: "smooth"})
    }
  }

  useEffect(scrollToActive, [active]);

  if (active) {
    return (
      <div className="activity-box active" ref={activeDiv}>
        <h3>{emoji} {name}</h3>
        <p>{description}</p>
        <a href={materialUrl} rel="noreferrer" target="_blank">
        Click here to access the {name} materials.
      </a>
    </div>
    );
  }

  return (
    <div className="activity-box">
      <h3>{emoji} {name}</h3>
      <p>{description}</p>
      <a href={materialUrl} rel="noreferrer" target="_blank">
        Click here to access the {name} materials.
      </a>
    </div>
  );
}

ActivityBox.propTypes = {
  activity: PropTypes.object.isRequired,
  active: PropTypes.bool
};

export default ActivityBox;