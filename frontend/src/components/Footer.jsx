import FooterLink from "./FooterLink.jsx";
import { Link } from "react-router-dom";
import BookPages from "../book/BookPages.jsx";

const Footer = () => {
  const childPages = BookPages[0].pageChildren.map(p => { return {...p, pageUrl: "/book" + p.pageUrl}});
  console.log(childPages);

  return (
   <>
   <div style={{width: "100%", background: "var(--black)", color: "white", height: "150px", display: "flex", flexDirection: "column"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}} className="footer-link-container">
        <div>
          <Link to="/book" style={{color: "white"}}>📖</Link>
        </div>
        {childPages.map((p, i) => <FooterLink key={i} page={p}></FooterLink>)}
      </div>
    </div>
   </>
  );
};

export default Footer;
