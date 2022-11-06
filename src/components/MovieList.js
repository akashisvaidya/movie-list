import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { BtnGroup } from "./BtnGroup";

import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies, handleOnDelete }) => {
  const [display, setDisplay] = useState([]);
  // console.log("before use effect");
  useEffect(() => {
    // console.log("from use effect");
    // update the local state
    setDisplay(movies);
  }, [movies]);
  // render all the time -> without dependency array
  //render one time and only
  // render ontime and only render if some specific pros updates

  // console.log("after use effect");
  const handleOnFilter = (str) => {
    // console.log(str);
    str === "all"
      ? setDisplay(movies)
      : setDisplay(movies.filter((item) => item.cat === str));
  };

  return (
    <>
      <div className="bg-dark p-3 rounded-50 text-secondary">
        <Row className="mt-5">
          <Col>
            <BtnGroup handleOnFilter={handleOnFilter} />
            <div className="py-2">{display.length} Movies Found</div>
          </Col>
        </Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          {display.map((item) => (
            <MovieCard
              key={item.imdbID}
              movie={item}
              showDelete={true}
              func={handleOnDelete}
            />
          ))}
        </Col>
      </div>
    </>
  );
};
