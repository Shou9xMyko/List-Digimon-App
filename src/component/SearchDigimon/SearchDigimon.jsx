import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDigimon from "../CardDigimon/CardDigimon";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function SearchDigimon() {
  const [resultCard, setCardResult] = useState([]);
  const [valInput, setValInput] = useState("");

  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  const pressEnterInput = (event) => {
    if (event.key == "Enter") {
      buttonRef.current.click();
    }
  };

  const searchData = () => {
    axios("https://digimon-api.vercel.app/api/digimon").then((response) => {
      let resultSearch = response.data.filter((obj) => {
        let toLowerCaseNameData = obj.name.toLowerCase();
        return toLowerCaseNameData.includes(valInput.toLowerCase());
      });

      resultSearch.length == 0
        ? setCardResult(false)
        : setCardResult(resultSearch);

      console.log(resultSearch);
    });
  };

  useEffect(() => {
    axios("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        setCardResult(response.data);
      })
      .catch((error) => {
        if (error) setCardResult(error.response.status);
      });
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col
          sm={12}
          md={10}
          className="p-0 pe-sm-0 pe-md-3  d-flex align-items-center"
        >
          <InputGroup>
            <Form.Control
              className="shadow-none"
              placeholder="Cari nama Digimon!"
              aria-label="Username"
              onKeyDown={pressEnterInput}
              ref={inputRef}
              onChange={(e) => setValInput(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={2}
          className="p-0 d-flex align-items-center mt-4 mt-sm-4 mt-md-0"
        >
          <Button
            ref={buttonRef}
            variant="primary"
            className="w-100"
            onClick={searchData}
          >
            Cari
          </Button>
        </Col>
      </Row>
      {/* Card Digimon */}
      <CardDigimon dataCard={resultCard} />
      {/* Card Digimon */}
    </Container>
  );
}

export default SearchDigimon;
