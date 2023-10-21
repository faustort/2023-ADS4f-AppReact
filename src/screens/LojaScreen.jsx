import { Card, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 *
 * Façam a tela de loja aqui
 */
export default function LojaScreen() {
  // https://fakestoreapi.com/products/

  return (
    <Container>
      <h1>Loja</h1>
      <Container>
        {/* Aqui será um loop */}
        {/* 
            Lembre-se que você pode usar Row e Col para 
            dividir os produtos 
        */}
        <Card>
          <Card.Img variant="top" src="{imagem}" />
          <Card.Body>
            <Card.Title>{}</Card.Title>
            <Card.Text>{}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{}</ListGroup.Item>
            <ListGroup.Item>{}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link to="/" as={Link}>
              Ver Produto
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

// Crie um componente externo e use props
// para renderizar os produtos
// duas formas de fazer
function Produto(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="{imagem}" />
        <Card.Body>
          <Card.Title>{}</Card.Title>
          <Card.Text>{}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{}</ListGroup.Item>
          <ListGroup.Item>{}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link to="/???" as={Link}>
            Ver Produto
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
