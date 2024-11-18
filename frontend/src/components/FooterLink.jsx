import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const FooterLink = ({ page, parentUrl }) => {
  const { pageUrl, pageTitle } = page;
  const fullPageUrl = parentUrl ? parentUrl + pageUrl : pageUrl;

  const [linkSelected, setLinkSelected] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLinkSelected(location.pathname.startsWith(fullPageUrl));
  }, [location, fullPageUrl]);

  return (
   <div>
      <Link to={fullPageUrl} style={{color: linkSelected ? "var(--white)" : "#888888"}}>{pageTitle}</Link>

      {(linkSelected || pageUrl === "/book") && page.pageChildren.map((c, i) => <FooterLink key={i} page={c} parentUrl={fullPageUrl}></FooterLink>)}
   </div>
  );
};

FooterLink.propTypes = {
  page: PropTypes.shape({
    pageUrl: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    pageChildren: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  parentUrl: PropTypes.string
};

export default FooterLink;
