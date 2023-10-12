import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NoticiasScreen() {

    const [noticias, setNoticias] = useState([]);

    // Ele é responsável por verificar se o componente 
    // foi montado (apareceu na tela) e se foi montado, 
    // ele executa o código que está dentro dele
    useEffect(() => {
        pegarNoticias();
    }, []);

    function pegarNoticias() {
        fetch('https://dummyjson.com/posts/')
            .then(resposta => resposta.json())
            .then(function (respostaEmJson) {
                setNoticias(respostaEmJson.posts);
            })
    }

    return (
        <Container>
            <h1>Notícias</h1>
            {
                noticias.map(
                    function (noticias, indice) {
                        return (
                            <Container key={indice}>
                                <h1>{noticias.title}</h1>
                                <p>{noticias.body.substring(0, 50)}...</p>
                                <Link to={'/noticias/' + noticias.id}>Leia mais</Link>
                            </Container>
                        )
                    }
                )
            }
        </Container>
    )
}