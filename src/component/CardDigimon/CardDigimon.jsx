/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function CardDigimon({ dataCard }) {
  return (
    <>
      <Row className="mt-5 mb-5 gap-5 justify-content-center">
        {dataCard.length == 0 ? (
          <h3 className="text-center mt-5">Loading...</h3>
        ) : dataCard.length > 0 && typeof dataCard == "object" ? (
          <>
            <h3 className="text-dark">Data : {dataCard.length}</h3>
            {dataCard.map((data) => (
              <Col
                key={data.name}
                md={6}
                sm={6}
                lg={12}
                className=" p-0 w-auto shadow shadow-md"
              >
                <Card style={{ width: "21rem" }}>
                  <Card.Img
                    variant="top"
                    src={data.img}
                    style={{ height: "17em" }}
                  />
                  <Card.Body style={{ borderTop: "1px solid #adb5bd" }}>
                    <Card.Title>Name : {data.name}</Card.Title>
                    <Card.Text>Level : {data.level}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : typeof dataCard == "number" ? (
          <h3 className="text-center mt-5">Gagal Memuat Data Digimon !</h3>
        ) : dataCard == false ? (
          <h3 className="text-center mt-5">
            Mohon periksa kembali kata kunci pencarian anda
          </h3>
        ) : (
          <div></div>
        )}
      </Row>
    </>
  );
}

export default CardDigimon;
