import { Col, Container, Form, Row } from "react-bootstrap";

export default function ContatoScreen() {
    /*
    
    Realizar a implementação do formulário de contato
    com variáveis e anon functions para pegar os dados
    e enviar para o backend usando o fetch
    
    */

    function handleSubmit(event) {
        event.preventDefault();
        fetch("", {
            method: "POST",
            body: JSON.stringify({
                nome: aaa,
                email: bbb,
            })
        });
        console.log(event);
    });
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
                            />
                        </Form.Group>
                        <Form.Group as={Col} lg={6}>
                            <Form.Label>Digite seu E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite E-mail"
                            />
                        </Form.Group>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
)
}