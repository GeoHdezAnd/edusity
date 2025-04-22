import "./VideoPlayer.css";
import video from "../../assets/video-students.mp4";
import { useRef } from "react";

interface VideoPlayerProps {
    playState: boolean;
    setPlayState: (state: boolean) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    playState,
    setPlayState,
}) => {
    const player = useRef<HTMLDivElement>(null);

    const closePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };
    return (
        <div
            className={`video-player ${playState ? "" : "hide"}`}
            ref={player}
            onClick={closePlayer}
        >
            <video src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
