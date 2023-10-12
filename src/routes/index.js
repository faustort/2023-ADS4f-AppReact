import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './../screens/HomeScreen';
import Body from './../components/Body';
import SobreScreen from "../screens/SobreScreen";
import ContatoScreen from "../screens/ContatoScreen";
import NoticiasScreen from "../screens/NoticiasScreen";
import { Container } from "react-bootstrap";
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
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<SobreScreen />} path="/sobre" />
                    <Route element={<NoticiasScreen />} path="/noticias" />
                    <Route element={<ContatoScreen />} path="/contato" />
                    <Route path="*" element={<Pagina404 />} />
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