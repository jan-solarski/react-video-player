interface Props {
  show: boolean;
  time: number;
  description: string;
}
export const HotspotModal = ({ show, time, description }: Props) => {
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <p>{description}</p>
      <p>Time: {time}</p>
    </div>
  );
};
