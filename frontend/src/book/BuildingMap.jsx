import BookPage from "./BookPage";
import map from '../../public/HackathonMap.png';

const BuildingMap = () => {
  return <BookPage>
    <div className="map-container">
      <img src={map} style={{width: "100%"}} />
    </div>
    <a href={map} download="HackathonMap.png">Click here to download</a>
  </BookPage>
}

export default BuildingMap;