import { useParams } from "react-router-dom";
import { useProjectInfoQuery } from "../slices/projectsApiSlice";
import { Link } from "react-router-dom";

const ProjectInfoScreen = () => {
  const { project } = useParams();
  const result = useProjectInfoQuery(project);

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading project info</p>;

  return (
    <>
      <h1>Project Info for {project}</h1>
      <img src="{result.data.projectThumbnail}" alt="project thumbnail" />
      <p>Project Name: {result.data.projectName}</p>
      <p>Project Description: {result.data.projectDescription}</p>
      <Link to="/showcase">back to showcase</Link>
    </>
  );
};

export default ProjectInfoScreen;
