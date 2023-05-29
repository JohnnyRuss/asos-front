import React from "react";
import { createImageUrl } from "utils";
import SliderVideoPlayButton from "./SliderVideoPlayButton";

interface SliderFigType {
  url: string;
  thumbnail?: boolean;
  onClick?: () => void;
  activeThumbnail?: string;
}

const SliderFig: React.FC<SliderFigType> = ({
  url,
  thumbnail = true,
  onClick,
  activeThumbnail,
}) => {
  return (
    <figure
      {...(onClick ? { onClick } : "")}
      className={`w-full overflow-hidden cursor-pointer ${
        thumbnail ? "aspect-square" : "h-full object-cover object-top"
      } ${url?.endsWith(".mp4") && thumbnail ? "relative" : ""} ${
        activeThumbnail === url ? "border border-blue-600 rounded-md" : ""
      }`}
    >
      {url.endsWith(".mp4") ? (
        <>
          <video
            src={createImageUrl(url)}
            autoPlay={!thumbnail}
            muted={true}
            loop={!thumbnail}
            className="w-full h-full object-cover object-top"
          />
          {thumbnail && <SliderVideoPlayButton />}
        </>
      ) : (
        <img
          src={createImageUrl(url)}
          alt={url}
          className="w-full h-full object-cover object-top"
        />
      )}
    </figure>
  );
};

export default SliderFig;
