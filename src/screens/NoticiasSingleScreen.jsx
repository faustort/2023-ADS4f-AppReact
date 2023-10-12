import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
export default function NoticiasSingleScreen() {
    const [noticia, setNoticia] = useState([]);
    const { idNoticia } = useParams();
    useEffect(() => {
        fetch('https://dummyjson.com/posts/' + idNoticia)
            .then(resposta => resposta.json())
            .then(function (respostaEmJson) {
                setNoticia(respostaEmJson);
            })

    }, [])
    return (
        <Container>
            {noticia?.title &&
                (
                    <div>
                        <h1>{noticia.title} </h1>
                        <p>{noticia.body}</p>
                    </div>
                )
            }
        </Container>
    )
}