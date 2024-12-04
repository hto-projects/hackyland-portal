import BookPage from "./BookPage";
import { Link } from "react-router-dom";

const Tracks = () => {
  return <BookPage className="tracks-page">
    <h1>Tracks</h1>
    <p><i>Choose your adventure and set your course for a meaningful and enjoyable hackathon experience.</i> These tracks will help you figure out what you want to do this weekend based on your goals for the event.</p>
    <div className="tracks-container">
      <div className="track explorer">
        <h1>🚀</h1>
        <h2>Explorer</h2>
        <p>You’re here to have fun, play around with code, and see what’s out there. You’ll walk away with fond memories and new perspectives.
        </p>
        <p>To follow this track:</p>
        <ul>
          <li>Attend as many <Link to="/book/event-schedule/activities">workshops and sessions</Link> as possible</li>
          <li>Participate in activities like the Hack Heist</li>
          <li>Get to know your fellow participants</li>
        </ul>
      </div>
      <div className="track creator">
        <h1>👷‍♀️</h1>
        <h2>Creator</h2>
        <p>You’re here to build something amazing. You’ll walk away with the beginnings of a spectacular software project, and maybe an award or two. 
        </p>
        <p>To follow this track:</p>
        <ul>
          <li>Spend the majority of your time working on your project</li>
          <li>Make sure your vision is aligned with your team</li>
          <li>Ask the mentors for specific guidance during your development</li>
        </ul>
      </div>
      <div className="track scholar">
        <h1>📚</h1>
        <h2>Scholar</h2>
        <p>You’re here to learn as much as you can by attending workshops and researching for your project. You’ll walk away with a head full of new knowledge. 
        </p>
        <p>To follow this track:</p>
        <ul>
          <li>Attend sessions or workshops that seem relevant to you</li>
          <li>Work hard on your project, and ask the mentors to share their wisdom with you</li>
          <li>Worry less about submitting your artifact, and more about the development journey</li>
        </ul>
      </div>
    </div>
  </BookPage>
}

export default Tracks;