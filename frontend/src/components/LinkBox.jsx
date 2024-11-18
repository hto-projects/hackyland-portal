import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkBox({ to, style, children }) {
  if (!style) {
    style = {
      background: "var(--blue)"
    };
  }

  const ext = to.startsWith("http") || to.startsWith("mailto");

  return (
    <Link to={to} className="link-box" style={style} rel={ext && "noreferrer"} target={ext && "_blank"}>
      {children}
    </Link>
  );
}

LinkBox.propTypes = {
  to: PropTypes.string.isRequired,
  style: PropTypes.string,
  children: PropTypes.node
};

export default LinkBox;