import React from "react";
import { getImageUrl } from "../util/utils";

function PlaceImage({ place, imageSize }) {
  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />;
}

export default PlaceImage;
