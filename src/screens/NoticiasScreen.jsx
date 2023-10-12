import { Container } from "react-bootstrap";


export default function NoticiasScreen() {

    function pegarNoticias() {
        fetch('https://dummyjson.com/posts/')
            .then(resposta => resposta.json())
            .then(function (respostaEmJson) {
                console.log(respostaEmJson);
            })
    }


    return (
        <Container>
            <h1>Notícias</h1>
        </Container>
    )
}