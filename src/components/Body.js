import { useEffect, useState } from "react";
import { TUNES_URL_ENDPOINT } from "../constants";
import SongCard from "./SongCard";
import Shimmer from "./Shimmer";
// import Shimmer from "./Shimmer";

const Body = () => {
  const [tunesData, setTunesData] = useState({});
  const [shimmerflag, setShimmerFlag] = useState(true);

  useEffect(() => {
    getTunesData();
  }, []);

  const getTunesData = async () => {
    const response = await fetch(TUNES_URL_ENDPOINT);
    const data = await response?.json();
    setTunesData(data?.feed?.entry);
    setShimmerFlag(false);
  };

  console.log(tunesData);

  if (shimmerflag) return <Shimmer />;

  return (
    <div className=" mx flex flex-wrap bg-fuchsia-200">
      {tunesData?.length > 0 &&
        tunesData.map((item, index) => {
          return <SongCard data={tunesData?.[index]} />;
        })}
    </div>
  );
};

export default Body;
