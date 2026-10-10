import { useState } from "react";

export default function BrandedImage({
  alt,
  className = "",
  fallbackLabel = "Image unavailable",
  loadingFeedback = false,
  ...imageProps
}) {
  const [imageState, setImageState] = useState({ src: imageProps.src, status: "loading" });
  const status = imageState.src === imageProps.src ? imageState.status : "loading";

  return (
    <>
      <img
        {...imageProps}
        alt={alt}
        className={`${className} branded-image image-state-${status}`.trim()}
        onError={() => setImageState({ src: imageProps.src, status: "failed" })}
        onLoad={() => setImageState({ src: imageProps.src, status: "loaded" })}
      />
      {loadingFeedback && status === "loading" && (
        <span aria-hidden="true" className="branded-image-loading">Loading image…</span>
      )}
      {status === "failed" && (
        <span aria-label={`${alt} unavailable`} className="branded-image-fallback" role="img">
          <span aria-hidden="true" className="branded-image-mark">J P</span>
          {fallbackLabel && <span>{fallbackLabel}</span>}
        </span>
      )}
    </>
  );
}
