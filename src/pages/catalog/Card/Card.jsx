import React from 'react';
import styled from "styled-components";
import {colors} from "../../../styles/styles";
import {container, justifyCenter_between} from "../../../styles/styles";
import ZoomableImage from "../../../components/zoomableImage/ZoomableImage";
import hot from "../../../assets/hot.svg";
import cold from "../../../assets/cold.svg";

const CardStyled = styled.div`
  height: 250px;
  margin-block: 4rem;
  ${container}
  ${justifyCenter_between}
  &:first-child{
    margin-top: 8rem;
  }
`;
const Image = styled(ZoomableImage)`
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 4rem;
    border-bottom-left-radius: 4rem;
  }
`;
const Description = styled.div`
  margin-left: 40px;
  color: #000;
  text-align: start;
  >*:not(:first-child){
    margin-top: 1rem;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  .hot{
    background-image: url(${hot});
  }
  .cold{
    background-image: url(${cold});
  }
  .hot, .cold{
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
const Ingredients = styled.p`
  color: ${colors.main};
`;
const PriceAndAction = styled.div`
  ${justifyCenter_between}
  button{
    padding-inline: 2rem;
    padding-block: 0.5rem;
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
            <Image src={item.image} alt={'Фото ' + item.title}/>
            <Description>
                <Title>
                    <h2>{item.title}</h2>
                    <div className={item.hot ?'hot' :'cold'}/>
                </Title>
                <p>{item.description}</p>
                <Ingredients>
                    Ингридиенты:
                    {
                        item.ingredients.map((item,index)=>{
                            return index === 0
                                ?` ${item}`
                                :`, ${item}`;
                        })
                    }
                </Ingredients>
                <PriceAndAction>
                    <b>{item.price} сом</b>
                    <button onClick={addCartAction}>В корзину</button>
                </PriceAndAction>
            </Description>
        </CardStyled>
    );
};

export default Card;