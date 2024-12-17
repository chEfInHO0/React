import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
  onClick: () => void;
};

export const Video = ({ src, isPlaying, onClick }: Props) => {
  const videoTag = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    isPlaying ? videoTag.current?.play() : videoTag.current?.pause();
  }, [isPlaying]);

  return (
    <div className="flex flex-col">
      {isPlaying ? "Rodando" : "Pausado"}
      <video ref={videoTag} src={src} loop playsInline></video>
      <button className="btn active-btn" onClick={onClick}>
        {isPlaying ? "Pauser" : "Rodar"}
      </button>
    </div>
  );
};
