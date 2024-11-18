import { useUserInfoQuery } from "../slices/usersApiSlice";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  const result = useUserInfoQuery();

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading user info</p>;

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {result.data.name}</p>
      <p>Participant Id: {result.data.participantId}</p>
      {result.data.teamId ?
        <p>Team: <Link to={`/team/${result.data.teamId}`}>{result.data.teamId}</Link></p> :
        <p>You are not on a team yet - <Link to="/team-submission">click here to submit one!</Link></p>}
    </>
  );
};

export default ProfileScreen;
