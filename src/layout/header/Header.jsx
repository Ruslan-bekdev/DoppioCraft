import React from 'react';
import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";
import {colors, headerHeight, justifyCenter_between, start_fixed,media} from "../../styles/styles";
import {useSelector} from "react-redux";

const HeaderStyled = styled.header`
  width: 100vw;
  height: ${headerHeight.laptop};
  padding-inline: 2rem;
  background-color: ${colors.main};
  box-sizing: border-box;
  ${start_fixed};
  z-index: 10;
  
  nav{
    width: 100%;
    height: 100%;
    ${justifyCenter_between}
  }

  ${media.mobile`
    height: ${headerHeight.mobile};
  `}
  ${media.tablet`
    height: ${headerHeight.tablet};
  `}
  ${media.laptop`
    height: ${headerHeight.laptop};
  `}
  ${media.desktop`
    height: ${headerHeight.desktop};
  `}
`;
const Link = styled(RouterLink)`
  color: ${colors.secondary};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  h2{
    font-family: 'La Belle Aurore', sans-serif;
  }
  @media (hover: hover){
      &:hover{
        text-decoration: underline #fff;
      }
  }
`;

const Header = () => {
    const {cartList} = useSelector(state => state.coffeeReducer);

    return (
        <HeaderStyled>
            <nav>
                <Link to='/'>
                    <h2>
                        Doppio Craft
                    </h2>
                </Link>
                <Link to='/cart'>
                    <b>
                        Корзина ({cartList.length})
                    </b>
                </Link>
            </nav>
        </HeaderStyled>
    );
};

export default Header;