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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Nome Do Produto</Card.Title>
            <Card.Text>Descrição do Protudo</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Price</ListGroup.Item>
            <ListGroup.Item>Category</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#" as={Link}>
              Ver Produto
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}
