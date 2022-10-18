import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

export default function Results({ results }) {
  return (
    <div>
      <FlipMove className="mx-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 3xl:flex justify-center flex-wrap">
        {results.map((result) => (
          <Thumbnail result={result} key={result.id} />
        ))}
      </FlipMove>
    </div>
  );
}
