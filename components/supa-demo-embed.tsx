import React from "react";

const SupaDemoEmbed: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        boxSizing: "content-box",
        maxHeight: "80vh",
        width: "100%",
        aspectRatio: "1.9367588932806323",
        padding: "40px 0",
      }}
    >
      <iframe
        src="https://app.supademo.com/embed/cmd04zy2b2f72c4kj48hsir74?embed_v=2"
        loading="lazy"
        title="AI Generated Lead Magnet"
        allow="clipboard-write"
        frameBorder={0}
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default SupaDemoEmbed;
