import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const BtnGroup = () => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="primary">All</Button>
      <Button variant="success">Happy</Button>
      <Button variant="info">Lazy</Button>
    </ButtonGroup>
  );
};
