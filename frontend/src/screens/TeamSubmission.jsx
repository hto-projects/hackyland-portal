import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSubmitTeamMutation } from '../slices/teamsApiSlice';
import { toast } from 'react-toastify';
import { useTeamInfoQuery } from "../slices/teamsApiSlice";
import { Link } from 'react-router-dom';

const TeamSubmissionScreen = () => {
  const [teamName, setTeamName] = useState('');
  const [workstationNumber, setWorkstationNumber] = useState(0);
  const [participantId1, setParticipantId1] = useState('');
  const [participantId2, setParticipantId2] = useState('');
  const [participantId3, setParticipantId3] = useState('');
  const [participantId4, setParticipantId4] = useState('');
  const [participantId5, setParticipantId5] = useState('');

  const navigate = useNavigate();

  const [submitTeam, { isLoading }] = useSubmitTeamMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setParticipantId1(userInfo.participantId);
  }, [userInfo.participantId]);

  const joinedTeam = useTeamInfoQuery("mine");
  
  if (joinedTeam.isLoading) return <p>Loading...</p>;
  if (joinedTeam.data) {
    return (
      <>
        <p>You are already on a team!</p>
        <Link to="/team/mine">View your team here.</Link>
      </>
    )
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const participantIdsArray = [participantId1, participantId2, participantId3, participantId4, participantId5].filter(id => id);
    
    for (let i = 0; i < participantIdsArray.length; i++) {
      if (participantIdsArray[i].length !== 5) {
        toast.error('Participant IDs must be 5 characters long');
        return;
      }
    }

    try {
      const res = await submitTeam({ teamName, participantIdsArray, workstationNumber }).unwrap();
      toast(res.message);
      navigate('/team/mine');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <FormContainer>
      <h1>Submit Team</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Team Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter team name'
            value={teamName}
            required={true}
            onChange={(e) => setTeamName(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='workstation'>
          <Form.Label>Workstation Number</Form.Label>
          <Form.Control
            type="number"
            placeholder='Enter team name'
            value={workstationNumber}
            required={true}
            onChange={(e) => setWorkstationNumber(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="participants">
          <Form.Label>Participant ID 1 (this is yours)</Form.Label>
          <Form.Control
            type="name"
            disabled={true}
            value={participantId1}
            onChange={(e) => setParticipantId1(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="participants">
          <Form.Label>Participant ID 2</Form.Label>
          <Form.Control
            type="name"
            value={participantId2}
            onChange={(e) => setParticipantId2(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="participants">
          <Form.Label>Participant ID 3</Form.Label>
          <Form.Control
            type="name"
            value={participantId3}
            onChange={(e) => setParticipantId3(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="participants">
          <Form.Label>Participant ID 4</Form.Label>
          <Form.Control
            type="name"
            value={participantId4}
            onChange={(e) => setParticipantId4(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="participants">
          <Form.Label>Participant ID 5</Form.Label>
          <Form.Control
            type="name"
            value={participantId5}
            onChange={(e) => setParticipantId5(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Submit Team
        </Button>

        {isLoading && <Loader />}
      </Form>
    </FormContainer>
  );
};

export default TeamSubmissionScreen;
