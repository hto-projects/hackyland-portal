import { useParams } from "react-router-dom";
import { useTeamInfoQuery } from "../slices/teamsApiSlice";

const TeamInfoScreen = () => {
  const { team } = useParams();

  const result = useTeamInfoQuery(team);

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading team info</p>;
  
  return (
    <>
      <h1>Team: {result.data.teamName}</h1>
      <p>Workstation Number: <b>{result.data.workstationNumber}</b></p>
      <h2>Members</h2>
      <ul>
        {result.data.members.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
      
    </>
  )
};

export default TeamInfoScreen;
