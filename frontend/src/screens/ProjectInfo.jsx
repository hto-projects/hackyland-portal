import { useParams } from "react-router-dom";
import { useProjectInfoQuery } from "../slices/projectsApiSlice";
import { useMyVotesQuery, useCastVoteMutation, useRemoveVoteMutation } from "../slices/votesApiSlice";
import { useUserInfoQuery } from "../slices/usersApiSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from '../components/Loader';

const ProjectInfoScreen = () => {
  const { project } = useParams();
  const result = useProjectInfoQuery(project);
  const myVotes = useMyVotesQuery();
  const me = useUserInfoQuery();
  const votesForThisProject = myVotes && myVotes.data && myVotes.data.filter(v => v.projectId === project);
  const thisIsMyProject = me.data && result.data && me.data.teamId === result.data.teamId;

  const [castVote, { castVoteIsLoading }] = useCastVoteMutation();
  const [removeVote, { removeVoteIsLoading }] = useRemoveVoteMutation();

  const onCastVote = async (e) => {
    try {
      const res = await castVote({ projectId: project }).unwrap();
      toast(res.message, { autoClose: 1000 });
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const onRemoveVote = async (e) => {
    try {
      const res = await removeVote({ projectId: project }).unwrap();
      toast(res.message, { autoClose: 1000 });
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  let votingPanel = <div></div>;
  if (me.data && !thisIsMyProject && myVotes && myVotes.data) {
    votingPanel = (
      <div style={{float: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", background: "var(--light-yellow)", padding: "10px", borderRadius: "12pt", width: "300px"}}>
        <p>You have cast <b>{votesForThisProject ? votesForThisProject.length : 0}</b> / 5 vote(s) for this project. You have {5 - myVotes.data.length} vote(s) remaining.</p>
        <p>
          <button disabled={votesForThisProject.length <= 0} onClick={onRemoveVote}>-1</button>
          <button disabled={myVotes.data.length >= 5} onClick={onCastVote}>+1</button>
        </p>
        {(castVoteIsLoading || removeVoteIsLoading) && <Loader />}
      </div>
    )
  }

  if (result.isLoading) return <p>Loading...</p>;
  if (result.error) return <p>Error loading project info</p>;

  return (
    <>
      <div className="project-info-container">
        <p><Link to="/showcase">showcase</Link> / {result.data.projectId}</p>
        <h1>{result.data.projectName}</h1>
        <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
          {result.data.projectThumbnail && <img src={result.data.projectThumbnail} style={{maxWidth: "100%", maxHeight: "300px"}} alt="project thumbnail" />}
          <div>
            <p>{result.data.projectDescription}</p>
            <p><a href={result.data.artifactLink} target="_blank" rel="noreferrer">View Project Artifact</a></p>
          </div>
        </div>
        
        {votingPanel}
      </div>
    </>
  );
};

export default ProjectInfoScreen;
