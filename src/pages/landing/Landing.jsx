import React from 'react';
import styled from "styled-components";
import landing_back from "../../assets/landing_back.jpg";
import {centerY_relative, colors, headerHeight, media} from "../../styles/styles";
import {Link as RouterLink} from "react-router-dom";

const LandingStyled = styled.div`
  width: 100vw;
  height: calc(100dvh - ${headerHeight.laptop});
  background-image: url(${landing_back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  ${media.mobile`
    height: calc(100dvh - ${headerHeight.mobile});
  `}
  ${media.tablet`
    height: calc(100dvh - ${headerHeight.tablet});
  `}
  ${media.laptop`
    height: calc(100dvh - ${headerHeight.laptop});
  `}
  ${media.desktop`
    height: calc(100dvh - ${headerHeight.desktop});
  `}
`;
const Content = styled.div`
  height: 100%;
  position: relative;
`;
const Description = styled.div`
  color: #fff;
  width: fit-content;
  text-align: start;
  padding-block: 2rem;
  padding-left: 2rem;
  border-bottom-right-radius: 56px;
  border-top-right-radius: 56px;
  background-color: rgb(${colors.mainRGB},0.75);
  ${centerY_relative};
  transform: translateY(-10rem);
  h2, p{
    max-width: 90%;
  }
  h2{
    font-size: 3rem;
  }
  p{
    font-size: 1.5rem;
  }
  ${media.mobile`
    width: auto;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  `}
  ${media.desktop`
    padding-block: 3rem;
    padding-left: 3rem;
    transform: translateY(-12rem);
    h2{
      font-size: 4rem;
    }
    p{
      font-size: 2rem;
    }
  `}
`;
const Actions = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
`;
const Link = styled(RouterLink)`
  padding: 0.5rem 2rem;
  text-decoration: none;
  background-color: #fff;
  color: ${colors.main};
  border: ${colors.main} 5px solid;
  border-radius: 72px;
  cursor: pointer;
  transition: 0.2s ease-in;
  &::after{
    content: '>';
    margin-left: 0.2rem;
    font-weight: 700;
  }
  &:hover{
    background-color: ${colors.main};
    color: #fff;
  }
`;

const Landing = () => {
    return (
        <LandingStyled>
            <Content>
                <Description>
                    <h2>ИССЛЕДУЙ МИР КОФЕ</h2>
                    <p>
                        Открой для себя разнообразие кофейных вкусов
                    </p>
                </Description>
                <Actions>
                    <Link to='/catalog'>
                        Перейти к каталогу
                    </Link>
                </Actions>
            </Content>
        </LandingStyled>
    );
};

export default Landing;