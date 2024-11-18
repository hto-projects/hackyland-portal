import { useShowcaseQuery } from "../slices/projectsApiSlice";
import ProjectCard from "../components/ProjectCard";

const ShowcaseScreen = () => {
  const result = useShowcaseQuery();

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading saqsasproject info</p>;

  return (
    <>
      <h1>Showcase</h1>
      <h2>Projects</h2>
      {result.data.map((project) => (
        <ProjectCard key={project.projectId} name={project.projectName} description={project.projectDescription} projectId={project.projectId}></ProjectCard>
      ))}
    </>
  );
};

export default ShowcaseScreen;
