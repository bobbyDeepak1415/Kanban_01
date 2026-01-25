import axios from "axios";
import { comment } from "postcss";
import React, { useEffect, useState } from "react";

const PageSize = 10;

const Demo = () => {
  const [comments, setComments] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );

        setComments(response.data);
      } catch (e) {
        console.log("failed to fetch", e);
      }
    };

    fetchData();
  }, []);

  const startIndex = page * PageSize;

  const currentComments = comments.slice(startIndex, startIndex + PageSize);

  const moveback = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const moveForward = () => {
    if (startIndex + PageSize <= comments) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="h-screen bg-slate-800">
      <ol>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>
      <div className="flex">
        <button
          className="bg-teal-200 px-3 py-1 m-2 rounded-md"
          disabled={page === 0}
          onClick={moveback}
        >
          Prev
        </button>
        <button
          className="bg-teal-200 px-3 py-1 m-2 rounded-md"
          onClick={moveForward}
          disabled={startIndex + PageSize >= comments.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Demo;
