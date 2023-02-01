import { HotspotModal } from "./HotspotModal";
import { useState } from "react";

interface Props {
  time: number;
  description: string;
}

export const Hotspot = ({ time, description }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const durationSec = 576;

  return (
    <div
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
      style={{
        position: "absolute",
        left: `${(time / durationSec) * 100}%`,
        bottom: "0",
        width: "10px",
        height: "10px",
        backgroundColor: "red",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <HotspotModal show={showModal} time={time} description={description} />
    </div>
  );
};
