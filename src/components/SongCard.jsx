import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ song, i }) => {
  const activeSong = { title: "Yours" };
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group:">
        <div
          className={`absolute inset-0 justify-center items-center hover:bg-black hover:bg-opacity-50 group-hover:flex 
          ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70 "
              : ""
          }
          `}
        >
          <div
            className={`  ${activeSong?.title === song.title ? "" : "hidden"}
          `}
          >
            <PlayPause />
            
          </div>
        </div>
        <img alt="song_img" src={song.images?.coverart} />
        {song.title}
      </div>
    </div>
  );
};

export default SongCard;
