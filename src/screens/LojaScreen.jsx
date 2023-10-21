import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 *
 * Façam a tela de loja aqui
 */
export default function LojaScreen() {
  const [produtos, setProdutos] = useState([]);

  // https://fakestoreapi.com/products/

  useEffect(() => {
    getProdutos();
  }, []);

  function getProdutos() {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }

  return (
    <Container>
      <h1>Loja</h1>
      <Container>
        <Row>
          {produtos.map((produto) => (
            <Col lg={3} md={4} xs={12}>
              <Produto
                nome={produto.title}
                imagem={produto.image}
                preco={produto.price}
                descricao={produto.description.substring(0, 45) + "..."}
                link={produto.link}
                className="h-100 flex-1"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

// Crie um componente externo e use props
// para renderizar os produtos
// duas formas de fazer
function Produto({ nome, imagem, preco, descricao, link }) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={imagem} />
        <Card.Body>
          <Card.Title>{nome}</Card.Title>
          <Card.Text>{descricao}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{preco}</ListGroup.Item>
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
