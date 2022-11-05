import React from "react";
import { Col, Row } from "react-bootstrap";

import { BtnGroup } from "./BtnGroup";

import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <>
      <div className="bg-dark p-3 rounded-50 text-secondary">
        <Row className="mt-5">
          <Col>
            <BtnGroup />
            <div className="py-2">{movies.length} Movies Found</div>
          </Col>
        </Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          {movies.map((item) => (
            <MovieCard key={item.imdbID} movie={item} />
          ))}
        </Col>
      </div>
    </>
  );
};
