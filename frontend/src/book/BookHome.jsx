
import LinkBox from "../components/LinkBox";

const BookHome = () => {
  return (
    <div className="book-home">
      <h1>📖 HACKBOOK 📖</h1>
      <p>This collection of pages will tell you all you need to know about this year&apos;s hackathon.</p>

      <div className="book-link-container">
        <LinkBox display="Building Map" to="/book/building-map" style={{background: "var(--hyland-green)"}}>
          <h3>Building Map</h3>
        </LinkBox>
        <LinkBox display="Event Information" to="/book/event-info" style={{background: "var(--blue)"}}>
          <h3>Event Information</h3>
        </LinkBox>
        <LinkBox display="Event Schedule" to="/book/event-schedule" style={{background: "var(--pink)"}}>
          <h3>Event Schedule</h3>
        </LinkBox>
        <LinkBox display="Contact Information" to="/book/contact" style={{background: "var(--orange)"}}>
          <h3>Contact Information</h3>
        </LinkBox>
        <LinkBox display="Workshops & Sessions" to="https://hackyland.github.io/" style={{background: "var(--black)"}}>
          <h3>Workshops & Sessions</h3>
        </LinkBox>
      </div>
    </div>
  );
}

export default BookHome;