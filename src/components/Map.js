import React from "react";
import PText from "../components/PText";
import "./Map.css";

function Map() {
  return (
    <div>
      <div className="container-map">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText className="p-map">Tizi Ouzou, Algeria</PText>
          <a
            href="https://www.google.com/maps/search/Tizi+Ouzou+m'douha/@36.7145635,4.0500416,14z/data=!3m1!4b1?entry=ttu"
            target="_blank"
            rel="norefferrer"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </div>
  );
}

export default Map;
