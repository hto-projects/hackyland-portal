import BookPage from "./BookPage";
import ActivityBox from "../components/ActivityBox";
import { useSearchParams } from "react-router-dom";


const activityDescriptions = [
  {
    emoji: "🌎",
    name: "Web World Workshop",
    id: "web-world",
    description: "A website is a world. Explore the opportunities of HTML, CSS, and JavaScript in this expansive yet beginner-friendly workshop. By the end of the activity, you'll have your own website up and running, a perfect jumping off point for a stellar project submission!",
    materialUrl: "https://hackyland.github.io/WebWorld/Home.html"
  },
  {
    emoji: "🔢",
    name: "Databased Workshop",
    id: "data-based",
    description: "Expand the power of your website or app with a database. Cloud databases allow users anywhere to interact with each other and ensure that your content is dynamic. By the end of this activity, you'll have your own cloud database up and running, ready to be integrated into your project!",
    materialUrl: "https://hackyland.github.io/DataBased/Home.html"
  },
  {
    emoji: "🐱‍💻",
    name: "Hacky Hour",
    id: "hacky-hour",
    description: "Get started with the Hack Heist during this window of opportunity. You'll get to know your fellow hackers while you work together to solve challenges and, ultimately, unlock the secrets of the locked file cabinet. The clock is ticking, so don't waste a second!",
    materialUrl: "https://hackyland.github.io/HackyHour/Home.html"
  },
  {
    emoji: "🔟",
    name: "Binary Data Session",
    id: "binary-data",
    description: "What is the fundamental unit of experience? What is at the core of all existence? We may not know the answer to those questions in terms of our universe, but in the world of computers, the answer is simple: binary data. In this session, you'll learn how simple 0s and 1s are behind every single digital thing that has ever existed.",
    materialUrl: "https://hackyland.github.io/BinaryData/Home.html"
  },
  {
    emoji: "🎨",
    name: "Pixel Art Workshop",
    id: "pixel-art",
    description: "If you're a fan of retro games, or you love to make art, this workshop is for you! Learn how to create pixel art, a form of digital art that uses pixels to create images. By the end of the workshop, you'll have your own pixel art piece to show off!",
    materialUrl: "https://hackyland.github.io/PixelArt/Home.html"
  },
  {
    emoji: "🎥",
    name: "Video Editing Session",
    id: "video-editing",
    description: "Never made a video before? Perfect! This session will show you how you can make a great video artifact to submit for your project. Been making videos for years? Perfect! This session will also go over some unique tools and techniques to take your film projects to the next level.",
    materialUrl: "https://hackyland.github.io/VideoEditing/Home.html"
  }
];

const Activities = () => {
  const [searchParams] = useSearchParams();
  const activityId = searchParams.get("activity");

  document.addEventListener("DOMContentLoaded", () => {
    console.log('ok');
    if (activityId) {
      document.getElementById(`activity-${activityId}`).scrollIntoView();
    }
  });

  return <BookPage>
    <h1 style={{textAlign: "center"}}>Activities</h1>
    <div className="activities-container">
      {activityDescriptions.map((activity, i) => {
        return <ActivityBox key={i} activity={activity} active={activityId === activity.id} />
      })}
    </div>
  </BookPage>
}

export default Activities;