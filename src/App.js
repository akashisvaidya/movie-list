import "./App.css";
import { Button, Container } from "react-bootstrap";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <div className="wrapper">
      <Container>
        {/* title */}
        <Title />

        {/* form */}
        <SearchForm />
        {/* movie list */}

        <MovieList />
      </Container>
    </div>
  );
}

export default App;
