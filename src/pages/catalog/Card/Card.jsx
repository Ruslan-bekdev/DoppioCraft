import React from 'react';
import styled from "styled-components";
import {colors, flexCenter_column, justifyEnd_between, media} from "../../../styles/styles";
import {container, justifyCenter_between} from "../../../styles/styles";
import ZoomableImage from "../../../components/zoomableImage/ZoomableImage";
import hot from "../../../assets/hot.svg";
import cold from "../../../assets/cold.svg";
import {publicFromGithub} from "../../../App";

const CardStyled = styled.div`
  ${container}
  ${justifyCenter_between};
  
  ${media.mobile`
    ${flexCenter_column}
    height: 300px;
    width: 350px;
    justify-content: center;
    margin-block: 4rem;
  `}
  ${media.tablet`
    height: 200px;
    margin-block: 2rem;
  `}
  ${media.laptop`
    height: 250px;
    margin-block: 3rem;
  `}
  ${media.desktop`
    height: 350px;
    margin-block: 4rem;
  `}
`;
const Image = styled(ZoomableImage)`
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 4rem;
    border-bottom-left-radius: 4rem;
  }
  
  ${media.mobile`
    height: 100px;
    flex-grow: 1;
    margin-bottom: 0;
      &>img{
       border-radius: 0;
      }
  `}
`;
const Description = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-left: 40px;
  color: #000;
  text-align: start;
  
  dl{
    font-weight: bold;
    dt,dd{
      display: inline-block;
    }
    dd{
      margin-left: .5rem;
    }
  }

  ${media.mobile`
    margin-left: 0;
    text-align: center;
    dl{
      dt,dd{
        display: block;
      }
      dd{
        margin-left: auto;
      }
    }
  `}
`;
const Title = styled.h2`
  width: fit-content;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    aspect-ratio: 1/1;
    bottom: 0;
    right: 0;
    transform: translateX(100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &.hot::after {
    background-image: url(${hot});
  }

  &.cold::after {
    background-image: url(${cold});
  }
  
  ${media.mobile`
    transform: translateX(-15px);
    margin-inline: auto;
  `}
`;
const PriceAndAction = styled.div`
  ${justifyEnd_between}
  a{
    padding: 0.2rem 1.2rem;
    background-color: #fff;
    color: ${colors.main};
    border: ${colors.main} 5px solid;
    border-radius: 72px;
    cursor: pointer;
    transition: 0.2s ease-in;
    &:hover{
      background-color: ${colors.main};
      color: #fff;
    }
  }

  ${media.mobile`
    ${flexCenter_column}
  `}
`;

const Card = ({item,cartList,dispatch,addToCartList}) => {
    const addCountKey = () => {
      return {...item,count:1};
    };
    const addCartAction = () => {
        const itemWithCount = addCountKey();
        const isItemBasked = cartList.some(
            baskedItem => baskedItem.id === itemWithCount.id);
        if (!isItemBasked)
            dispatch(addToCartList(itemWithCount));
    };

    return (
        <CardStyled>
            <Image src={publicFromGithub + item.image} alt={'Фото ' + item.title}/>
            <Description>
                <Title className={item.hot ? 'hot' : 'cold'}>
                    {item.title}
                </Title>
                <p>{item.description}</p>
                <dl>
                    <dt>Ингридиенты:</dt>
                    <dd>
                        {
                            item.ingredients.map((item,index)=>{
                                return index === 0
                                    ?` ${item}`
                                    :`, ${item}`;
                            })
                        }
                    </dd>
                </dl>
                <PriceAndAction>
                    <b>{item.price} сом</b>
                    <a onClick={addCartAction}>В корзину</a>
                </PriceAndAction>
            </Description>
        </CardStyled>
    );
};

export default Card;