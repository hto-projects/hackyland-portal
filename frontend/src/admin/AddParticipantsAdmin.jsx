import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useAddParticipantsMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { useGetAllUsersQuery } from "../slices/usersApiSlice";

const AddParticipantsAdminScreen = () => {
  const result = useGetAllUsersQuery();

  const [participantNames, setParticipantNames] = useState('');
  const [addAdmins, setAddAdmins] = useState(false);
  const [successfulUsers, setSuccessfulUsers] = useState([]);

  const [addParticipants, { isLoading }] = useAddParticipantsMutation();

  const submitHandler = async (e) => {
    setSuccessfulUsers("");
    e.preventDefault();

    const participantNamesArray = participantNames.split("\n").filter(name => name);

    try {
      const res = await addParticipants({ participantNamesArray, addAdmins }).unwrap();
      toast(res.message);
      setSuccessfulUsers(res.addedUsers.map(user => <p key={user.participantId}>{user.registeredName} ({user.participantId})</p>));
      setParticipantNames("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  
  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>hey! youre not supposed to be here. please leave</p>;

  return (
    <FormContainer>
      <h1>Add Participants <a style={{fontSize: "12px", fontWeight: "normal", fontStyle: "italic", fontDecoration: "none"}} href="/view-users">view</a></h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className='my-2' controlId='name'>
          <Form.Control
            as='textarea'
            rows={10}
            placeholder='Enter participant full names, each on their own line'
            value={participantNames}
            required={true}
            onChange={(e) => setParticipantNames(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Switch label="Admin"
          checked={addAdmins}
          onChange={(e) => setAddAdmins(e.target.value === "on")}
        />

        <Button type='submit' variant='primary' className='mt-3'>
          Add Participants
        </Button>

        {isLoading && <Loader />}
      </Form>

      {successfulUsers.length > 0 &&
        (<>
          <h2>Added Users</h2>
          {successfulUsers}
        </>)
      }
    </FormContainer>
  );
};

export default AddParticipantsAdminScreen;
