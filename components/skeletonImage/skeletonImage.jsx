"use client";
import { useState } from "react";
import Image from "next/image";
import "./skeletonImage.css";

const SkeletonImage = ({ src, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="image-wrapper"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {!loaded && <div className="skeleton" />}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={`image ${loaded ? "image-loaded" : ""}`}
      />
    </div>
  );
};

export default SkeletonImage;
