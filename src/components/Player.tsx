import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Video = styled.video`
  flex-shrink: 1;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

interface Props {
  src: string;
  muted?: boolean;
  autoPlay?: boolean;
}

export const Player = (props: Props) => {
  const { src, autoPlay, muted } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const onPlay = () => {
        setIsPlaying(true);
      };

      const onPause = () => {
        setIsPlaying(false);
      };

      const element = videoRef.current;
      element.addEventListener("play", onPlay);
      element.addEventListener("playing", onPlay);
      element.addEventListener("pause", () => setIsPlaying(false));
    }
  }, [videoRef.current]);
  const handlePlayPauseClick = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <Flex
      flexDir="column"
      cursor="pointer"
      align="center"
      justify="center"
      pos="relative"
      rounded="10px"
      overflow="hidden"
    >
      <Video
        autoPlay={autoPlay}
        muted={muted}
        src={src}
        ref={videoRef}
        onClick={handlePlayPauseClick}
      />
    </Flex>
  );
};
