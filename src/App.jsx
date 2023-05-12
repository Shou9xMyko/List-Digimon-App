import "./App.css";
import SearchDigimon from "./component/SearchDigimon/SearchDigimon";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <h1 className="text-center fw-bold mt-5 text-primary">List Digimon</h1>
      <SearchDigimon />
      <h2 className="text-center fw-bold mb-4">
        Create with 💖 By{" "}
        <a
          className="Author"
          href="https://www.instagram.com/mikofrndo_89/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shou9
        </a>
      </h2>
    </Container>
  );
}

export default App;
