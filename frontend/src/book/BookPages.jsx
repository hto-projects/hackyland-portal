import BookHome from "./BookHome";

import BuildingMap from "./BuildingMap";

import EventInfo from "./EventInfo";
import Rules from "./Rules";
import Tracks from "./Tracks";
import Prizes from "./Prizes";

import EventSchedule from "./EventSchedule";
import Activities from "./Activities";

import Contact from "./Contact";
import DiscordInformation from "./DiscordInformation";

export default [
  {
    pageTitle: "📘",
    pageComponent: <BookHome />,
    pageUrl: "/book",
    pageChildren: [
      {
        pageTitle: "Map",
        pageComponent: <BuildingMap />,
        pageUrl: "/building-map",
        pageChildren: []
      },
      {
        pageTitle: "Info",
        pageComponent: <EventInfo />,
        pageUrl: "/event-info",
        pageChildren: [
          {
            pageTitle: "Rules",
            pageComponent: <Rules />,
            pageUrl: "/rules",
            pageChildren: []
          },
          {
            pageTitle: "Tracks",
            pageComponent: <Tracks />,
            pageUrl: "/tracks",
            pageChildren: []
          },
          {
            pageTitle: "Prizes",
            pageComponent: <Prizes />,
            pageUrl: "/prizes",
            pageChildren: []
          }
        ]
      },
      {
        pageTitle: "Schedule",
        pageComponent: <EventSchedule />,
        pageUrl: "/event-schedule",
        pageChildren: [
          {
            pageTitle: "Activities",
            pageComponent: <Activities />,
            pageUrl: "/activities",
            pageChildren: []
          }
        ]
      },
      {
        pageTitle: "Contact",
        pageComponent: <Contact />,
        pageUrl: "/contact",
        pageChildren: [
          {
            pageTitle: "Discord",
            pageComponent: <DiscordInformation />,
            pageUrl: "/discord",
            pageChildren: []
          }
        ]
      }
    ]
  }
];
