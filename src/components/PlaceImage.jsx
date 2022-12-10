import React, { useContext } from "react";
import { ImageContext } from "../context/Context";
import { getImageUrl } from "../util/utils";

function PlaceImage({ place }) {
  const imageSize = useContext(ImageContext);

  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />;
}

export default PlaceImage;
