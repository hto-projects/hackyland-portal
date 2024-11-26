import { useAllProjectsQuery } from "../slices/projectsApiSlice";
import { toast } from "react-toastify";
import { useApproveProjectMutation } from "../slices/projectsApiSlice";

const ViewProjectsAdmin = () => {
  const result = useAllProjectsQuery();
  const [approveProject] = useApproveProjectMutation();

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

  return (
    <>
      <h1>View Projects: Admin</h1>
      <div style={{display: "flex", flexWrap: "wrap"}}>
      {result.data.map((project) => (
        <div key={project.projectId} style={{padding: "20px", background: "white", borderRadius: "24pt", border: "1px solid var(--black)"}}>
          <img src={project.projectThumbnail} width="100" />
          <h3>{project.projectName}</h3>
          <p>{project.projectDescription}</p>
          <p><a href={project.artifactLink} target="_blank" rel="noreferrer">Artifact Link</a></p>
          <p><a href={`/team/${project.teamId}`} target="_blank" rel="noreferrer">Team Link</a></p>
          <p>
            Project Status: {project.projectStatus}
            {project.projectStatus === "unapproved" && (
              <button onClick={approveProjectHandler(project.projectId)}>Approve</button>
            )}
          </p>
        </div>
      ))}
      </div>
    </>
  );
};

export default ViewProjectsAdmin;
