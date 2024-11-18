import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import { useUserInfoQuery } from "../slices/usersApiSlice";
import { useSubmitProjectMutation, useProjectInfoQuery } from '../slices/projectsApiSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProjectSubmissionScreen = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [artifactLink, setArtifactLink] = useState('');
  const [projectThumbnail, setProjectThumbnail] = useState('');

  const navigate = useNavigate();

  const [submitProject, { isLoading }] = useSubmitProjectMutation();

  const userInfo = useUserInfoQuery();
  const submittedProject = useProjectInfoQuery("ours");

  if (userInfo.isLoading) return <p>Loading...</p>;
  if (userInfo.error) return <p>Error loading team info</p>;
  if (!userInfo.data.teamId) return <p>You must be on a team in order to submit a project!</p>
  
  if (submittedProject.isLoading) return <p>Loading...</p>;
  if (submittedProject.data) {
    return (
      <>
        <p>Your team has already submitted a project!</p>
        <Link to="/project/ours">View your project here.</Link>
      </>
    )
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!userInfo.data.teamId) {
      alert("you must be on a team to submit a project.");
    }

    try {
      const res = await submitProject({ projectName, projectDescription, artifactLink, projectThumbnail }).unwrap();
      alert(res.message);
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Submit Project</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter project name'
            value={projectName}
            required={true}
            onChange={(e) => setProjectName(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Enter project description'
            value={projectDescription}
            required={true}
            onChange={(e) => setProjectDescription(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Artifact Link</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter an accessible URL to your project artifact'
            value={artifactLink}
            required={true}
            onChange={(e) => setArtifactLink(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Project Thumbnail (optional)</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter an image URL to appear alongside your project'
            value={projectThumbnail}
            required={false}
            onChange={(e) => setProjectThumbnail(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Submit Project
        </Button>

        {isLoading && <Loader />}
      </Form>
    </FormContainer>
  );
};

export default ProjectSubmissionScreen;
