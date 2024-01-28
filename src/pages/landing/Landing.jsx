import React from 'react';
import styled from "styled-components";
import landing_back from "../../assets/landing_back.jpg";
import {centerY_relative, colors} from "../../styles/styles";
import {Link as RouterLink} from "react-router-dom";

const LandingStyled = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);
  background-image: url(${landing_back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;
const Content = styled.div`
  height: 100dvh;
  position: relative;
`;
const Description = styled.div`
  color: #fff;
  width: fit-content;
  text-align: start;
  padding-block: 1rem;
  padding-inline: 4rem;
  box-sizing: border-box;
  transform: translateY(-75%);
  border-bottom-right-radius: 56px;
  border-top-right-radius: 56px;
  background-color: rgb(${colors.mainRGB},0.75);
  ${centerY_relative};
  h2, p{
    max-width: 30rem;
  }
  h2{
    font-size: 3rem;
  }
  p{
    font-size: 1.5rem;
  }
`;
const Actions = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 8rem;
  right: 5rem;
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