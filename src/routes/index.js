import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './../screens/HomeScreen';
import Body from './../components/Body';
import SobreScreen from "../screens/SobreScreen";
import ContatoScreen from "../screens/ContatoScreen";

/**
 * Retorna o componente de navegação
 * primária do meu aplicativo / site
 */
export default function RoutesRoot() {
    return (
        <BrowserRouter>
            {/* BrowserRouter é o elemento que define a navegação base */}
            <Routes>
                {/* Routes é a definição de rotas necessário */}
                <Route path="/" element={<Body />}>
                    {/* Aqui definimos as rotas */}
                    <Route element={<HomeScreen />} path="/" ></Route>
                    <Route element={<SobreScreen />} path="/sobre"></Route>
                    <Route element={<ContatoScreen />} path="/contato"></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}