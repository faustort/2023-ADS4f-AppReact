import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './../screens/HomeScreen';
import Body from './../components/Body';
import SobreScreen from "../screens/SobreScreen";
import ContatoScreen from "../screens/ContatoScreen";


export default function RoutesRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />}>
                    <Route element={<HomeScreen />} path="/" ></Route>
                    <Route element={<SobreScreen />} path="/sobre"></Route>
                    <Route element={<ContatoScreen />} path="/contato"></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}