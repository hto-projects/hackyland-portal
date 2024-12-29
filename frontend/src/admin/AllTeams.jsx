import { useAllTeamsQuery } from "../slices/teamsApiSlice";
import { useState, useEffect } from "react";

const AllTeams = () => {
  const result = useAllTeamsQuery();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (result.data) {
      setTeams(result.data);

      // const teamsByWorkstation = [];
      // for (let i = 1; i <= 40; i++) {
      //   const teamForStation = teamsData.find(t => t.workstationNumber === i);
      //   const teamAtStation = {
      //     workstationNumber: i,
      //     teamId: teamForStation ? teamForStation.teamId : null
      //   }
        
      //   teamsByWorkstation.push(teamAtStation);
      // }

      // setTeams(teamsByWorkstation);
    }
  }, [teams, result]);

  function splitTeams() {
    // Split teams into arrays with a maximum length of 14
    const teamsSplit = [];
    let currentTeamArr = [];
    for (let i = 1; i <= 42; i++) {
      const currentTeam = teams.find(t => t.workstationNumber === i);
      if (currentTeam) {
        currentTeamArr.push(currentTeam);
      } else {
        currentTeamArr.push({ workstationNumber: i, teamId: null });
      }
      
      if (currentTeamArr.length === 14) {
        teamsSplit.push([...currentTeamArr]);
        currentTeamArr = [];
      }
    }

    if (currentTeamArr.length > 0) {
      teamsSplit.push([...currentTeamArr]);
    }
    
    return teamsSplit;
  }

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading all teams info</p>;

  return (
    <>
      <h1>All Teams</h1>
      <p>By workstation</p>
      <div className="team-tables">
      {splitTeams().map((teamGroup, index) => {
        return (
          <div key={index}>
            <div className="rowt">
                <div>#</div>
                <div>ID</div>
              </div>
              {teamGroup.map(team => {
                return (
                  <div key={team.workstationNumber} className="rowt">
                    <div>{team.workstationNumber}</div>
                    <div>{team.teamId ? <a href={`/team/${team.teamId}`}>{team.teamId}</a> : "No Team"}</div>
                  </div>
                );
              })}
            </div>
        )
      })}
      </div>
    </>
  );
};

export default AllTeams;
