import './assets/fonts/La_Belle_Aurore/la_belle_aurore.css';
import styled from "styled-components";
import Header from "./layout/header/Header";
import {Route, Routes} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./pages/cart/Cart";

const AppStyled = styled.div`
  color: #000;
`;
const Content = styled.div`
  margin-top: 4rem;
`;

const App = () => {
    return (
        <AppStyled>
            <Header/>
            <Content>
                <Routes>
                    <Route
                        index
                        element={<Landing/>}
                    />
                    <Route
                        path='/catalog'
                        element={<Catalog/>}
                    />
                    <Route
                        path='/cart'
                        element={<Cart/>}
                    />
                </Routes>
            </Content>
        </AppStyled>
    );
}

export default App;
