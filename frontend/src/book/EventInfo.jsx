import BookPage from "./BookPage";
import { Link } from "react-router-dom";

const EventInfo = () => {
  return (
    <>
      <BookPage>
        <h1>Event Information</h1>
        <p>This page contains some general information about the hackathon. Mostly it contains links to other pages.</p>

        <h3>Rules</h3>
        <p>Please take a look at the <Link to="rules">rules</Link> to ensure you behave appropriately during the event.</p>

        <h3>Tracks</h3>
        <p>Check out the <Link to="tracks">tracks</Link> if you would like some guidance about what to do during the event.</p>

        <h3>Prizes</h3>
        <p>Peruse the <Link to="prizes">prize catalog</Link> and start thinking about what you might choose if you win an award.</p>
        <p>If you find that another student is doing really well, and deserves a superlative award, you can nominate them using <a href="https://forms.office.com/r/2c9TbuMiLV" target="_blank" rel="noreferrer">this form</a>.</p>

        <h2>Other Pages</h2>
        <ul>
        <li><Link to="/book">Book Home</Link></li>
        <li><Link to="/book/building-map">Building Map</Link></li>
        <li><Link to="/book/event-schedule">Event Schedule</Link></li>
        <li><Link to="/book/contact">Contact Information</Link></li>
        <li><a href="https://hackyland.github.io" target="_blank" rel="noreferrer">Workshop & Session Materials</a></li>
        </ul>
      </BookPage>
    </>
  );
}

export default EventInfo;