import React from "react";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer transition transform ease-in-out duration-200 sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.original_title || result.original_name}
        </h2>
        <div className="opacity-0 group-hover:opacity-100 flex justify-between mt-1">
          <p>{result.release_date || result.first_air_date}</p>
          <p className='flex items-center'>
            <BiLike /> {result.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
