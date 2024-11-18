import { useGetAllUsersQuery } from "../slices/usersApiSlice";
import Table from 'react-bootstrap/Table'
import FilterableTable from 'react-filterable-table'
import { useState, useEffect } from "react";

const ViewUsersAdminScreen = () => {
  const result = useGetAllUsersQuery();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (result.data) {
      setUsers(result.data);
    }
  }, [users, result]);

  // eslint-disable-next-line react/prop-types
  const renderAdmin = props => props.record.admin ? "YES" : "NO";

  const fields = [
    { name: "registeredName", displayName: "Registered Name", inputFilterable: true, sortable: true },
    { name: "participantId", displayName: "Participant ID", inputFilterable: true, sortable: true },
    { name: "name", displayName: "Name", inputFilterable: true, sortable: true },
    { name: "teamId", displayName: "Team ID", inputFilterable: true, sortable: true },
    { name: "admin", displayName: "Admin", inputFilterable: true, sortable: true, render: renderAdmin }
  ]

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading all users info</p>;

  return (
    <>
      <h1>All Users</h1>
      <FilterableTable
        namespace="Users"
        initialSort="name"
        data={users}
        fields={fields}
        noRecordsMessage="There are no users to display"
        noFilteredRecordsMessage="No users match your filters!"
        />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Registered Name</th>
            <th>Participant ID</th>
            <th>Name</th>
            <th>Team ID</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.participantId}>
              <td>{u.registeredName}</td>
              <td>{u.participantId}</td>
              <td>{u.name}</td>
              <td>{u.teamId}</td>
              <td>{u.admin ? "YES" : "NO"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ViewUsersAdminScreen;
