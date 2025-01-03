import { useShowcaseQuery } from "../slices/projectsApiSlice";
import { useMyVotesQuery } from "../slices/votesApiSlice";
import ProjectCard from "../components/ProjectCard";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const ShowcaseScreen = () => {
  const result = useShowcaseQuery();
  const myVotesResult = useMyVotesQuery();
  const votesData = myVotesResult.data;

  let votesRemainingMessage = "";
  if (votesData && votesData.length >= 5) {
    votesRemainingMessage = "You have used all your votes!";
  } else if (votesData) {
    votesRemainingMessage = `You have ${5 - votesData.length} vote(s) left to cast!`;
  }

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error || !result.data) return <p>Error loading project info</p>;
  
  const projects = [...result.data].sort((a, b) => a.approvalTime - b.approvalTime);

  return (
    <>
      <h1>Showcase</h1>
      <p>
        <b>{votesRemainingMessage}</b>
      </p>
      <p>
      <i>Remember, everyone on your team has to submit ALL their votes for you to be eligible for the Student Choice award.</i></p>
      {projects.length ? <h2>Projects</h2> : <h3>No projects yet!</h3>}
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.projectId} project={project}></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default ShowcaseScreen;
