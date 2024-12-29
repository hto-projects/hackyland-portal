import { Container, Card } from 'react-bootstrap';
import "../../public/style.css";
import { useUserInfoQuery } from "../slices/usersApiSlice";
import { useTeamInfoQuery } from '../slices/teamsApiSlice';
import LinkBox from './LinkBox';

const Hero = () => {
  const userInfo = useUserInfoQuery();
  const teamInfo = useTeamInfoQuery("mine");

  let homeBoxes = [];

  if (userInfo.data) {
    if (userInfo.data.admin) {
      homeBoxes.push(
        <LinkBox to="/view-users" style={{background: "var(--blue)"}}>
          View users
        </LinkBox>
      );

      homeBoxes.push(
        <LinkBox to="/all-teams" style={{background: "var(--pink)"}}>
          View teams
        </LinkBox>
      );

      homeBoxes.push(
        <LinkBox to="/view-projects" style={{background: "var(--orange)"}}>
          View projects
        </LinkBox>
      );
    } else {

    if (teamInfo.data) {
      // user is signed in and has a team
      homeBoxes.push(
        <LinkBox to="team/mine" style={{background: "var(--orange)"}}>
          View your team
        </LinkBox>
      );

      if (teamInfo.data.projectId) {
        // team has submitted a project
        homeBoxes.push(
          <LinkBox to={`/project/${teamInfo.data.projectId}`} style={{background: "var(--blue)"}}>
            View your project
          </LinkBox>
        );
      } else {
        // team has not submitted a project
        homeBoxes.push(
          <LinkBox to="/project-submission" style={{background: "var(--blue)"}}>
            Submit your project
          </LinkBox>
        );
      }
      
    } else {
      // user is signed in but does not have a team
      homeBoxes.push(
        <LinkBox to="/team-submission" style={{background: "var(--orange)"}}>
          Submit your team
        </LinkBox>
      );
    }
  }
  } else {
    // user is not signed in
    homeBoxes.push(
      <LinkBox to="/login" style={{background: "var(--blue)"}}>
        <p><b>Sign in</b> with your password</p>
      </LinkBox>
    );

    homeBoxes.push(
      <LinkBox to="/register" style={{background: "var(--orange)"}}>
        <p><b>Join</b> with your Participant ID</p>
      </LinkBox>
    );
  }

  let headerText = userInfo.data ? `Welcome, ${userInfo.data.name}` : "Welcome to the Hyland Hackathon";

  if (userInfo.isLoading || teamInfo.isLoading) {
    return <p>Loading... <i><a href="/book/event-schedule/backup-portal">backup portal if needed</a></i></p>;
  }
  
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card style={{background: "white", borderRadius: "24pt", padding: "50px", display: "flex", alignItems: "center"}}>
          <h1 className='text-center mb-4'>{headerText}</h1>
          <div className="all-container">
            <div className="home-sub">
              <div></div> <div></div> <div></div> <div></div>
            </div>
            <div className="home-box-container">
              {homeBoxes}
            </div>
            <div className="always-on-home">
              <LinkBox to="/showcase" style={{background: "var(--yellow)", color: "var(--black)"}}>
                View the showcase
              </LinkBox>
              <LinkBox to="/book" style={{background: "var(--hyland-green)"}}>
                View the book
              </LinkBox>
            </div>
          </div>
        </Card>
      </Container>
      <p style={{float: "right"}}><i><a href="/book/event-schedule/backup-portal">backup portal if needed</a></i></p>
    </div>
  );
};

export default Hero;
