import BookPage from "./BookPage";
import LinkBox from "../components/LinkBox";

const BackupPortal = () => {
  return <BookPage>
    <h1>Backup Portal</h1>
    <p className="sub">In the event that the portal fails to load, we will use this page for backup.</p>
    <LinkBox to="/book/" style={{background: "var(--hyland-green)", width: "100%", textAlign: "center", padding: "20px", marginBottom: "40px"}}>
      <h2>HACKBOOK</h2>
    </LinkBox>

    <div style={{width: "100%", textAlign: "center", marginBottom: "20px"}}>
      <h2>PORTAL FORMS</h2>
    </div>
<div style={{display: "flex", gap: "10px", maxWidth: "700px", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
    <LinkBox to="https://forms.office.com/r/wpk7ZMfge3" style={{background: "var(--blue)", width: "300px", maxWidth: "100%"}}>
      <h5>Team Submission Form</h5>
    </LinkBox>
    <LinkBox to="https://forms.office.com/r/3C1MVXg0Ab" style={{background: "var(--orange)", width: "300px", maxWidth: "100%"}}>
      <h5>Project Submission Form</h5>
    </LinkBox>
    <LinkBox to="https://hylandsw-my.sharepoint.com/:x:/g/personal/joseph_maxwell_hyland_com/ES3H0Z5BoZhInomECnTigzEB9xIzRbb_SFIawCNzU-yW0Q?e=VR4fqk" style={{background: "var(--pink)", width: "300px", maxWidth: "100%"}}>
      <h5>View Projects</h5>
    </LinkBox>
    <LinkBox to="https://forms.office.com/r/84EYq9zUDC" style={{background: "var(--yellow)", color: "var(--black)", width: "300px", maxWidth: "100%"}}>
      <h5>Vote for Projects</h5>
    </LinkBox>
    </div>

<p style={{textAlign: "center", marginTop: "50px", fontStyle: "italic"}}>At the end of the event, <a href="https://forms.office.com/r/6QnpgCaYA9">click here to give us your feedback</a>!</p>
  </BookPage>
}

export default BackupPortal;