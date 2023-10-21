import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";

export default function ContatoScreen() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [mensagem, setMensagem] = useState();
  const [error, setError] = useState();

  /*
      Realizar a implementação do formulário de contato
      com variáveis e anon functions para pegar os dados
      e enviar para o backend usando o fetch
      */
  function handleSubmit(event) {
    event.preventDefault(); 
    
    if(!validaFormulario()) return;
    
    fetch("http://localhost/rest/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: new URLSearchParams({
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
      }).toString(),
    });

    console.log(event);
  }

  function validaFormulario() {
    if (!nome) {
      setError("Digite o nome");
      return false;
    }
  }

  return (
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <h1>Entre em </h1>
          <h2>contato conosco</h2>
          <p></p>
        </Col>
        <Col lg={6} xs={12}>
          <Form>
            <Row>
              <Form.Group className="mb-3" as={Col} lg={6}>
                <Form.Label>Digite seu nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome completo"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} lg={6}>
                <Form.Label>Digite seu E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite E-mail" />
              </Form.Group>
              <FormGroup as={Col}>
                <Form.Label>Digite seu Telefone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu Telefone"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                />
              </FormGroup>
              <FormGroup as={Col}>
                <Form.Label>Digite sua Mensagem</Form.Label>
                <Form.Control
                  as={"textarea"}
                  placeholder="Digite sua Mensagem"
                  value={mensagem}
                  onChange={(event) => setMensagem(event.target.value)}
                />
              </FormGroup>
              {error && <Alert variant="danger">{error}</Alert>}
              <FormGroup as={Col} lg={12}>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Enviar contato
                </Button>
              </FormGroup>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
