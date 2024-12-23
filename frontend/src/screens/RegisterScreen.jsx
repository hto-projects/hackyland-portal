import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [participantId, setParticipantId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registeredName, setRegisteredName] = useState('');
  const [foundParticipantId, setFoundParticipantId] = useState('');
  const [confirmedName, setConfirmedName] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (participantId.length !== 5) {
      toast.error('Participant ID must be 5 characters long');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const res = await register({ name, participantId, password, confirmedName: false }).unwrap();
      setRegisteredName(res.registeredName);
      setFoundParticipantId(res.foundParticipantId);
      setShowConfirm(true);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const confirmCreation = async (e) => {
    e.preventDefault();

    if (participantId.length !== 5) {
      toast.error('Participant ID must be 5 characters long');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      setShowConfirm(false);
      const res = await register({ name, participantId, password, confirmedName }).unwrap();
      console.log("hmmm?");
      toast(res.message);
      console.log("WHYY")
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      cancelModal();
      toast.error(err?.data?.message || err.error);
    }
  };

  const cancelModal = () => {
    setPassword("");
    setConfirmPassword("");
    setParticipantId("");
    setRegisteredName("");
    setFoundParticipantId('');
    setConfirmedName(false);
    setShowConfirm(false);
  }

  return (
    <FormContainer>
      <h1>Join</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={registeredName}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='participantId'>
          <Form.Label>Participant ID</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter participant ID'
            value={participantId}
            onChange={(e) => setParticipantId(e.target.value)}
            disabled={registeredName}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={registeredName}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={registeredName}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' style={{background: "var(--orange)", border: "none"}} className='mt-3' disabled={registeredName}>
          Join
        </Button>
      </Form>

      <Modal show={showConfirm} onHide={cancelModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Confirm Join</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={confirmCreation}>
            <p>Participant ID <b>{foundParticipantId}</b> <br/> Registered with the name <b>{registeredName}</b></p>
            <Form.Group className='my-2' controlId='confirmCreation'>
              <Form.Check
                type='checkbox'
                label='I confirm that that is me'
                checked={confirmedName}
                onChange={(e) => setConfirmedName(e.target.checked)}
              ></Form.Check>
              
            <Button type='submit' style={{background: "var(--orange)", border: "none"}} className='mt-3' disabled={!confirmedName}>
              Confirm
            </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p style={{fontStyle: "italic"}}>If that is not you, double check your participant ID and try again.</p>
          <Button variant="secondary" onClick={cancelModal}>
            That&apos;s not me!
          </Button>
        </Modal.Footer>
      </Modal>

      
      {isLoading && <Loader />}

      <Row className='py-3'>
        <Col>
          Already have an account? <Link to={`/login`}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
