import { useParams } from "react-router-dom";
import { useTeamInfoQuery } from "../slices/teamsApiSlice";

const TeamInfoScreen = () => {
  const { team } = useParams();

  const result = useTeamInfoQuery(team);

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading team info</p>;
  
  return (
    <>
      <h1>Team Info for {result.data.teamName}</h1>
      <h2>Members</h2>
      {result.data.members.map((m, i) => <p key={i}>{m}</p>)}
    </>
  )
};

export default TeamInfoScreen;
