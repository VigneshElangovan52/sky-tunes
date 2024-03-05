import React from "react";

const SongCard = ({ data }) => {
  // const {title} = data;
  console.log(data, "songcardData");

  const formatDate = (date) => {
    let formattedDate = new Date(date);
    formattedDate = formattedDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });
    return formattedDate;
  };

  return (
    <div className="m-3 w-44 h-64 cursor-pointer border border-solid border-stone-400 rounded-lg bg-purple-200 hover:bg-purple-300">
      <img
        className="m-2 w-40 h-28 rounded-md border border-solid"
        src={data && data["im:image"]?.[2]?.label}
        alt="album-poster"
      />
      <p className=" m-1 font-serif flex items-start">
        {data && data["im:name"]?.label <= 20 ? data["im:name"]?.label : data["im:name"]?.label.slice(0,20)}
      </p>
      <p className="m-1 font-mono flex items-start">
        By {data && data["im:artist"]?.label.length < 20 ? data["im:artist"]?.label : data["im:artist"]?.label.slice(0,15)}
      </p>
      <p className="m-1 font-mono text-sm flex items-start">
        Priced{" "}
        {data &&
          data["im:price"]?.attributes?.amount +
            " " +
            data["im:price"]?.attributes?.currency}
      </p>
     <div className="flex justify-between items-center">
     <p className="m-1 text-xs flex font-semibold items-start">
        Out on {data && formatDate(data["im:releaseDate"]?.label)}
      </p>
      <button className="w-12 mr-2 bg-orange-200 border-stone-500 h-5 cursor-pointer border border-solid rounded-md text-xs font-semibold hover:bg-orange-500">Buy🛒</button>
     </div>
    </div>
  );
};

export default SongCard;
