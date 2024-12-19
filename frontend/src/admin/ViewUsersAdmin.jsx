import { useGetAllUsersQuery, useUpdateTeamForUserMutation } from "../slices/usersApiSlice";
import FilterableTable from 'react-filterable-table'
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ViewUsersAdminScreen = () => {
  const result = useGetAllUsersQuery();
  const [updateTeamForUser] = useUpdateTeamForUserMutation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (result.data) {
      setUsers(result.data);
    }
  }, [users, result]);

  // eslint-disable-next-line react/prop-types
  const renderAdmin = props => props.record.admin ? "YES" : "NO";

  const updateTeam = (participantId) => async () => {
    const newTeamId = prompt("Enter a new team ID:");
    try {
      const res = await updateTeamForUser({ participantId, teamId: newTeamId }).unwrap();
      toast(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  // eslint-disable-next-line react/prop-types
  const renderTeamId = p => p.record.teamId ? <a href={`/team/${p.record.teamId}`}>{p.record.teamId}</a> : "No Team";
  const renderUpdateTeam = p => <button onClick={updateTeam(p.record.participantId)}>Update Team</button>;

  const fields = [
    { name: "registeredName", displayName: "Registered Name", inputFilterable: true, sortable: true },
    { name: "name", displayName: "Name", inputFilterable: true, sortable: true },
    { name: "participantId", displayName: "Participant ID", inputFilterable: true, sortable: true },
    { name: "teamId", displayName: "Team ID", inputFilterable: true, sortable: true, render: renderTeamId },
    { name: "updateTeam", displayName: "Update Team", inputFilterable: false, sortable: false, render: renderUpdateTeam },
    { name: "admin", displayName: "Admin", inputFilterable: true, sortable: true, render: renderAdmin }
  ]

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading all users info</p>;

  return (
    <>
      <h1>All Users <a style={{fontSize: "12px", fontWeight: "normal", fontStyle: "italic", fontDecoration: "none"}} href="/add-participants">add</a></h1>
      <FilterableTable
        namespace="Users"
        initialSort="name"
        data={users}
        fields={fields}
        noRecordsMessage="There are no users to display"
        noFilteredRecordsMessage="No users match your filters!"
        />
    </>
  );
};

export default ViewUsersAdminScreen;
