import React from 'react';
import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";
import {colors, headerHeight, justifyCenter_between, start_fixed,media} from "../../styles/styles";
import {useSelector} from "react-redux";

const HeaderStyled = styled.div`
  width: 100vw;
  height: ${headerHeight.laptop};
  padding-inline: 2rem;
  background-color: ${colors.main};
  box-sizing: border-box;
  ${justifyCenter_between}
  ${start_fixed};
  z-index: 10;

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
const Actions = styled.div`
    
`;
const Link = styled(RouterLink)`
  color: ${colors.secondary};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  h1{
    font-family: 'La Belle Aurore', sans-serif;
  }
  &+&{
    margin-left: 0.5rem;
  }
  &:hover{
    color: #fff;
    text-decoration: underline #fff;
  }
`;

const Header = () => {
    const {cartList} = useSelector(state => state.coffeeReducer);

    return (
        <HeaderStyled>
            <Link to='/'>
                <h1>
                    Doppio Craft
                </h1>
            </Link>
            <Actions>
                <Link to='/cart'>
                    <b>
                        Корзина ({cartList.length})
                    </b>
                </Link>
            </Actions>
        </HeaderStyled>
    );
};

export default Header;