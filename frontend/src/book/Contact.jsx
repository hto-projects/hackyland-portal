import BookPage from "./BookPage";
import LinkBox from "../components/LinkBox";

const Contact = () => {
  return <BookPage>
    <h1>Tech Outreach Team Contact Information</h1>
    <p className="sub">In case of emergencies, at least one member of the Tech Outreach Team will be on-call at all times throughout the weekend.</p>

    <p>You can reach them here:</p>

    <ul>
      <li>Joseph Maxwell: <b>(216) 218-2609</b></li>
      <li>Caitlin Nowlin: <b>(216) 469-4921</b></li>
      <li>Emi Stafford: <b>(???) ???-?????</b></li>
    </ul>

    <p>You can also message them on <a href="https://discord.gg/pufaaWJaAH" target="_blank" rel="noreferrer">Discord</a> or send an email to <a href="mailto:techoutreach@hyland.com">techoutreach@hyland.com</a>.</p>

    <LinkBox to="/book/contact/discord" style={{background: "var(--blue)", width: "300px", maxWidth: "100%"}}>
      <h5>Discord Server Information</h5>
    </LinkBox>
  </BookPage>
}

export default Contact;