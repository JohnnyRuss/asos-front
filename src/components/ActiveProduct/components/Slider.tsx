import React, { useState, useMemo } from "react";
import { useProductsStore } from "store";
import SliderFig from "./SliderFig";
import SliderButton from "./SliderButton";

const Slider: React.FC = () => {
  const { productMedia } = useProductsStore((state) => ({
    productMedia: state.product?.media,
  }));

  const allProductMedia: string[] = useMemo(() => {
    const pictures = productMedia?.pictures || [];
    const video = productMedia?.video.src || "";
    return [...pictures, video].filter(
      (url) => url !== "" && url !== undefined
    );
  }, [productMedia]);

  const [activeThumbnail, setActiveThumbnail] = useState<string>(
    allProductMedia[0]
  );

  function handleSlider(direction: "ASCENDING" | "DESCENDING") {
    const totalSlidesCount = allProductMedia.length;
    const currSlideIndex =
      productMedia?.pictures.findIndex(
        (mediaUrl) => mediaUrl === activeThumbnail
      ) || 0;

    if (direction === "ASCENDING") {
      if (currSlideIndex === totalSlidesCount - 1)
        setActiveThumbnail(allProductMedia[0]);
      else setActiveThumbnail(allProductMedia[currSlideIndex + 1]);
    } else if (direction === "DESCENDING") {
      if (currSlideIndex === 0)
        setActiveThumbnail(allProductMedia[allProductMedia.length - 1]);
      else setActiveThumbnail(allProductMedia[currSlideIndex - 1]);
    }
  }

  function handleSliderThumbnail(url: string) {
    setActiveThumbnail(url);
  }

  return (
    <div className="self-start flex justify-center gap-2 overflow-hidden">
      {productMedia?.pictures[0] && (
        <>
          <div className="w-24 flex flex-col gap-3">
            {allProductMedia[0] &&
              allProductMedia.map((url) => (
                <SliderFig
                  key={url}
                  url={url}
                  activeThumbnail={activeThumbnail}
                  onClick={() => handleSliderThumbnail(url)}
                />
              ))}
          </div>

          <div className="max-w-[520px] relative">
            <SliderFig thumbnail={false} url={activeThumbnail} />
            <SliderButton
              side="LEFT"
              onClick={() => handleSlider("DESCENDING")}
            />
            <SliderButton
              side="RIGHT"
              onClick={() => handleSlider("ASCENDING")}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
