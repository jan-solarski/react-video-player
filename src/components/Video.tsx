import React, { useState } from "react";

interface Hotspot {
  time: number;
  description: string;
  thumbnail: string;
}

interface VideoPlayerProps {
  hotspots: Hotspot[];
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ hotspots }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    setCurrentTime(hotspot.time);
    setSelectedHotspot(hotspot);
    setIsModalOpen(true);
    // Update browser URL
    window.history.pushState({}, "", `#t=${hotspot.time}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="video-player">
      <video onTimeUpdate={handleTimeUpdate}>
        {/* Add video source */}
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="timeline">
        {hotspots.map((hotspot) => (
          <div
            className="hotspot"
            key={hotspot.time}
            onClick={() => handleHotspotClick(hotspot)}
          >
            {/* Display hotspot icon */}
          </div>
        ))}
      </div>
      {isModalOpen && selectedHotspot ? (
        <div className="modal">
          <div className="modal-header">
            <h3>{selectedHotspot.description}</h3>
            <button onClick={handleCloseModal}>X</button>
          </div>
          <div className="modal-body">
            <img
              src={selectedHotspot.thumbnail}
              alt={selectedHotspot.description}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
