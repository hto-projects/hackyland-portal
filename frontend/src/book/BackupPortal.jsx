import BookPage from "./BookPage";
import LinkBox from "../components/LinkBox";

const BackupPortal = () => {
  return <BookPage>
    <h1>Backup Portal</h1>
    <p className="sub">In the event that the portal fails to load, we will use these forms for backup.</p>

<div style={{display: "flex", gap: "10px", maxWidth: "700px", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
    <LinkBox to="https://forms.office.com/r/gmcc29247e" style={{background: "var(--blue)", width: "300px", maxWidth: "100%"}}>
      <h5>Team Submission Form</h5>
    </LinkBox>
    <LinkBox to="https://forms.office.com/r/3C1MVXg0Ab" style={{background: "var(--orange)", width: "300px", maxWidth: "100%"}}>
      <h5>Project Submission Form</h5>
    </LinkBox>
    <LinkBox to="https://hylandsw-my.sharepoint.com/:x:/g/personal/joseph_maxwell_hyland_com/ES3H0Z5BoZhInomECnTigzEB9xIzRbb_SFIawCNzU-yW0Q?e=VR4fqk" style={{background: "var(--pink)", width: "300px", maxWidth: "100%"}}>
      <h5>View Projects</h5>
    </LinkBox>
    <LinkBox to="https://forms.office.com/r/ZaWZ29JS60" style={{background: "var(--hyland-green)", width: "300px", maxWidth: "100%"}}>
      <h5>Vote for Projects</h5>
    </LinkBox>
    </div>
  </BookPage>
}

export default BackupPortal;