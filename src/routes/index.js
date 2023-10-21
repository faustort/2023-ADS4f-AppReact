import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './../screens/HomeScreen';
import Body from './../components/Body';
import SobreScreen from "../screens/SobreScreen";
import ContatoScreen from "../screens/ContatoScreen";
import NoticiasScreen from "../screens/NoticiasScreen";
import { Container } from "react-bootstrap";
import NoticiasSingleScreen from "../screens/NoticiasSingleScreen";
import LojaScreen from "../screens/LojaScreen";
/**
 * Retorna o componente de navegação
 * primária do meu aplicativo / site
 */
export default function RootNavigation() {
    return (
        <BrowserRouter>
            {/* BrowserRouter é o elemento que define a navegação base */}
            <Routes>
                {/* Routes é a definição de rotas necessário */}
                <Route path="/" element={<Body />}>
                    {/* Aqui definimos as rotas */}
                    <Route
                        path="/"
                        element={<HomeScreen />} />
                    <Route
                        path="/sobre"
                        element={<SobreScreen />} />
                    <Route
                        path="/noticias"
                        element={<NoticiasScreen />} />
                    <Route
                        path="/noticias/:idNoticia"
                        element={<NoticiasSingleScreen />} />
                    <Route
                        path="/contato"
                        element={<ContatoScreen />} />
                    <Route
                        path="/loja"
                        element={<LojaScreen />} />
                    <Route
                        path="*"
                        element={<Pagina404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Pagina404() {
    return (
        <Container>
            <h1>404</h1>
            <p>Página não encontrada</p>
        </Container>
    )
}