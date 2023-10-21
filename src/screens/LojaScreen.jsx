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
        <Card>
          <Card.Img variant="top" src="{imagem}" />
          <Card.Body>
            <Card.Title>{Nome Do Produto}</Card.Title>
            <Card.Text>{Descrição do Produto}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{Price}</ListGroup.Item>
            <ListGroup.Item>{Category}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link to="/???" as={Link}>
              Ver Produto
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}
