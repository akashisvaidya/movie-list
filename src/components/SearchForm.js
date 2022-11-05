import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MovieCard } from "./MovieCard";
import { fetchData } from "./utilities/axiosHelpers";

export const SearchForm = ({ addMovieToList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  // get the form data while typing -- control input field
  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  // when form is sumnited call the api with the search data and get the movie details
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    error && setError("");
    movie.imdbID && setMovie({});
    // fetchData(form)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .then(() => {})
    //   .catch((error) => console.log(error));

    try {
      const resp = await fetchData(form);
      // console.log(resp.data);
      if (resp.data.Response === "True") {
        setMovie(resp.data);
      } else {
        setError(resp.data.Error);
      }
    } catch (error) {
      console.log(error);
      setError("Error occured, please try again.");
    }
  };

  const handleOnAddToList = (cat) => {
    console.log(cat);
    addMovieToList({ ...movie, cat });
    setMovie({});
    setForm("");
  };

  // display movie data in our UI
  return (
    <Form onSubmit={handleOnSubmit} className="py-3">
      <Row>
        <Col></Col>
        <Col>
          <Form.Control
            value={form}
            onChange={handleOnChange}
            placeholder="Search using movie name"
            required
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        {movie.imdbID && <MovieCard movie={movie} func={handleOnAddToList} />}
        {error && <Alert variant="danger">{error}</Alert>}
      </Row>
    </Form>
  );
};
