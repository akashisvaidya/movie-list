import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {}, func, showDelete, handleOnClear }) => {
  // console.log(movie);
  const { Poster, Title, Year, imdbRating, Plot, imdbID } = movie;
  return (
    <Card
      style={{
        width: "18rem",
        marginTop: "10px",
        color: "black",
      }}
    >
      <Card.Img
        variant="top"
        className="text-danger text-center"
        alt="Image Not Found"
        src={Poster}
      />
      <Card.Body>
        <Card.Title className="text-center fw-bold">{Title}</Card.Title>
        <Card.Text>
          <div>
            <span className=" fw-bold">Released:</span> {Year}
          </div>
          <div>
            <span className=" fw-bold">Ratings:</span> {imdbRating}
          </div>
          <div>
            <span className=" fw-bold">Movie Plot:</span> {Plot}
          </div>
        </Card.Text>
        {showDelete ? (
          <div>
            <Button variant="danger" onClick={() => func(imdbID)}>
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <Button variant="primary">Watch it.</Button>
            <Button onClick={() => func("happy")} variant="success">
              Happy
            </Button>
            <Button onClick={handleOnClear} variant="warning">
              <i class="fa-regular fa-circle-xmark"></i>
            </Button>

            <Button onClick={() => func("lazy")} variant="warning">
              Lazy
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
