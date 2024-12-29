import BookPage from "./BookPage";
import { Link } from "react-router-dom";

const EventSchedule = () => {
  return <BookPage className="schedule-page">
    <h1>Event Schedule</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>
      <div style={{textAlign: "center"}}>
    <h2>Saturday, January 11</h2>
    <table>
<thead>
<tr>
<th>Time</th>
<th>Function</th>
<th>Location</th>
</tr>
</thead>
<tbody>
<tr style={{background: "var(--light-pink)"}}>
<td><b>9:00AM</b> - 10:00AM</td>
<td>Breakfast / Teams Form</td>
<td>Hallway / Auditorium</td>
</tr>
<tr style={{background: "var(--light-yellow)"}}>
<td><b>10:00AM</b> - 10:30AM</td>
<td>Event Kick-off</td>
<td>Auditorium</td>
</tr>
<tr>
<td><b>10:30AM</b> - 11:00AM</td>
<td>Station Setup</td>
<td>Workstations</td>
</tr>
<tr style={{background: "var(--light-yellow)"}}>
<td><b>11:00AM</b></td>
<td><b><Link to="/team-submission">TEAM SUBMISSIONS DUE</Link></b></td>
<td><b>Workstations</b></td>
</tr>
<tr style={{background: "var(--light-blue)"}}>
<td><b>11:00AM</b> - 12:30PM</td>
<td><Link to="activities?activity=web-world">Web World Workshop</Link></td>
<td>Auditorium</td>
</tr>
<tr style={{background: "var(--light-pink)"}}>
<td><b>12:30PM</b> - 1:00PM</td>
<td>Lunch</td>
<td>Hallway / Auditorium</td>
</tr>
<tr style={{background: "var(--light-blue)"}}>
<td><b>3:00PM</b> - 4:00PM</td>
<td><Link to="activities?activity=data-based">Data<em>based</em> Workshop</Link></td>
<td>Auditorium</td>
</tr>
<tr style={{background: "var(--light-blue)"}}>
<td><b>5:00PM</b> - 6:00PM</td>
<td><Link to="activities?activity=hacky-hour">Hacky Hour</Link></td>
<td>Auditorium</td>
</tr>
<tr style={{background: "var(--light-pink)"}}>
<td><b>6:00PM</b> - 6:30PM</td>
<td>Dinner</td>
<td>Hallway / Auditorium</td>
</tr>
<tr style={{background: "var(--light-blue)"}}>
<td><b>6:30PM</b> - 7:00PM</td>
<td><Link to="activities?activity=binary-data">Binary Data Session</Link></td>
<td>Auditorium</td>
</tr>
<tr>
<td><b>8:30PM</b> - 9:00PM</td>
<td>Knockout</td>
<td>Volleyball Court</td>
</tr>
<tr>
<td><b>9:00PM</b> - 11:00PM</td>
<td>Toy Story 3</td>
<td>Auditorium</td>
</tr>
</tbody>
</table>
</div>
<div style={{textAlign: "center"}}>
  <h2>Sunday, January 12</h2>
  <table>
<thead>
<tr>
<th>Time</th>
<th>Function</th>
<th>Location</th>
</tr>
</thead>
<tbody>
<tr style={{background: "var(--light-pink)"}}>
<td><b>8:30AM</b> - 9:00AM</td>
<td>Grab-n-go Breakfast</td>
<td>Hallway</td>
</tr>
<tr style={{background: "var(--light-yellow)"}}>
<td><b>9:00AM</b> - 9:15AM</td>
<td>Day 2 Kick-off</td>
<td>Auditorium</td>
</tr>
<tr style={{background: "var(--light-blue)"}}>
<td><b>11:00AM</b> - 12:00PM</td>
<td><Link to="activities?activity=pixel-art">Pixel Art Workshop</Link></td>
<td>Auditorium</td>
</tr>
<tr style={{background: "var(--light-pink)"}}>
<td><b>1:00PM</b> - 1:30PM</td>
<td>Lunch</td>
<td>Hallway / Auditorium</td>
</tr>
<tr style={{background: "var(--light-blue)"}}>
<td><b>2:00PM</b> - 3:00PM</td>
<td><Link to="activities?activity=video-editing">Video Editing</Link></td>
<td>Auditorium</td>
</tr>
<tr style={{background: "var(--light-yellow)"}}>
<td><b>5:00PM</b></td>
<td><b><Link to="/project-submission">PROJECT SUBMISSIONS DUE</Link></b></td>
<td><b>Workstations</b></td>
</tr>
<tr>
<td><b>5:00PM</b> - 6:00PM</td>
<td>Showcase Viewing</td>
<td>Auditorium / Workstations</td>
</tr>
<tr style={{background: "var(--light-pink)"}}>
<td><b>6:00PM</b> - 6:30PM</td>
<td>Dinner</td>
<td>Hallway / Auditorium</td>
</tr>
<tr style={{background: "var(--light-yellow)"}}>
<td><b>6:30PM</b> - 7:00PM</td>
<td>Closing Ceremony</td>
<td>Auditorium</td>
</tr>
</tbody>
</table>
</div>
</div>
  </BookPage>
}

export default EventSchedule;