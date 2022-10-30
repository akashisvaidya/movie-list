import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  return (
    <>
      <div className="bg-dark p-3 rounded-50 text-secondary">
        <Row className="mt-5">
          <Col>
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary">All</Button>
              <Button variant="success">Happy</Button>
              <Button variant="info">Lazy</Button>
            </ButtonGroup>
            <div className="py-2">10 Movies Found</div>
          </Col>
        </Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Col>
      </div>
    </>
  );
};
