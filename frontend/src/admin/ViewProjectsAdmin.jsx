import { useAllProjectsQuery } from "../slices/projectsApiSlice";
import { toast } from "react-toastify";
import { useApproveProjectMutation } from "../slices/projectsApiSlice";
import { useDeleteProjectMutation } from "../slices/projectsApiSlice";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';

const ViewProjectsAdmin = () => {
  const result = useAllProjectsQuery();
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [approveProject] = useApproveProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();

  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState({});

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (project) => () => {
    setModalProject(project);
    setShowModal(true);
  };

  useEffect(() => {
    if (result.data) {
      setProjectsToShow(result.data);
    }
  }, [result.data]);

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading projects info</p>;

  const approveProjectHandler = (projectId) => async () => {
    try {
      const res = await approveProject(projectId).unwrap();
      toast(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const deleteProjectHandler = (projectId) => async () => {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      const res = await deleteProject(projectId).unwrap();
      toast(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <h1>View Projects: Admin</h1>
      <p>
        <button onClick={() => setProjectsToShow(result.data)}>Show All Projects</button>
        <button onClick={() => setProjectsToShow(result.data.filter((project) => project.projectStatus === "unapproved"))}>Show Unapproved Projects</button>
        <button onClick={() => { const newArr = [...result.data]; newArr.sort((p1, p2) => p1.workstationNumber - p2.workstationNumber); setProjectsToShow(newArr)}}>Sort By Workstation Number</button>
        <button onClick={() => { const newArr = [...result.data]; newArr.sort((p1, p2) => p2.voteCount - p1.voteCount); setProjectsToShow(newArr)}}>Sort By Vote Count</button>
      </p>
      <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
      {projectsToShow.map((project) => (
        <div className="admin-project-box" key={project.projectId} style={{padding: "20px", background: "white", borderRadius: "24pt", border: "1px solid var(--black)"}}>
          <div style={{background: "var(--light-blue)", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "center"}} >
            <div style={{marginLeft: "10%", width: "40%"}}>
                <img src={project.projectThumbnail} width="100%" />
                <h1>{project.projectName}</h1>
                <p>{project.projectDescription}</p>
                </div>
                <div style={{marginLeft: "10%", width: "40%"}}>
                <p><a href={project.artifactLink} target="_blank" rel="noreferrer">Artifact Link</a></p>
                <p><a href={`/team/${project.teamId}`} target="_blank" rel="noreferrer">Team Link</a></p>
                <p>Workstation Number: <b>{project.workstationNumber}</b></p>
                <p>
                  Project Status: {project.projectStatus}</p><p>
                  {project.projectStatus === "unapproved" && (
                    <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
                      <button onClick={approveProjectHandler(project.projectId)} style={{width: "min-content"}}>Approve</button>
                      <button onClick={deleteProjectHandler(project.projectId)} style={{width: "min-content"}}>Delete</button>
                    </div>
                  )}
                </p>
                </div>
      </div>
      <div style={{background:"var(--light-yellow)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <h3>Student Choice</h3>
          <p>Votes for this project: {project.voteCount}</p>
          <p>Eligible for Student Choice? {project.teamMemberVotes.every(tv => tv.votes.length === 5) ? "YES" : "NO"}</p>
          <p><button onClick={handleShowModal(project)}>View Team Member Votes</button></p>
          </div>
        </div>
      ))}
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalProject.projectName} Team Votes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalProject.teamMemberVotes && modalProject.teamMemberVotes.map((tv, i) => (
            <div key={i}>
              <h5>{tv.participantName} ({tv.participantId})</h5>
              {tv.votes.length ? <ul>
                {tv.votes.map((vote, j) => (
                  <li key={j}><a href={`/project/${vote.projectId}`} target="_blank" rel="noreferrer">{vote.projectId}</a></li>
                ))}
              </ul> : <p>No votes cast</p>}
            </div>)
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewProjectsAdmin;
