import './assets/fonts/La_Belle_Aurore/la_belle_aurore.css';
import styled from "styled-components";
import Header from "./layout/header/Header";
import {Route, Routes} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Catalog from "./pages/catalog/Catalog";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Cart from "./pages/cart/Cart";
import {headerHeight,media} from "./styles/styles";

const Content = styled.main`
  margin-top: ${headerHeight.laptop};
  
  ${media.mobile`
    margin-top: ${headerHeight.mobile};
  `}
  ${media.tablet`
    margin-top: ${headerHeight.tablet};
  `}
  ${media.laptop`
    margin-top: ${headerHeight.laptop};
  `}
  ${media.desktop`
    margin-top: ${headerHeight.desktop};
  `}
`;

export const publicFromGithub = 'https://github.com/Ruslan-bekdev/DoppioCraft/raw/main/public/';

const App = () => {
    return (
        <>
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
                    <Route
                        path='*'
                        element={<NotFoundPage/>}
                    />
                </Routes>
            </Content>
        </>
    );
}

export default App;
