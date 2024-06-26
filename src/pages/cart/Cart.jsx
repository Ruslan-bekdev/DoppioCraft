import React from 'react';
import styled from "styled-components";
import {center_absolute, colors, container, flexCenter, media} from "../../styles/styles";
import {useDispatch,useSelector} from "react-redux";
import ZoomableImage from "../../components/zoomableImage/ZoomableImage";
import {countMinus, countPlus} from "../../store/coffeeSlice";
import {flexCenter_column} from "../../styles/styles";
import {Link as RouterLink} from "react-router-dom";
import {publicFromGithub} from "../../App";

const CartStyled = styled.div`
  ${container};
  height: 75dvh;
  position: relative;
`;
const EmptyCartContent = styled.section`
  ${flexCenter_column};
  width: 100%;
  height: 100%;
`;
const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
  *{
    font-size: 1.5rem;
    ${media.mobile`
      font-size: 1.2rem;
    `};
  }
  th,td{
    padding-block: 1.5rem;
    ${media.mobile`
      padding-block: 0.5rem;
    `};
  }
  th{
    text-align: start;
    &:not(:first-child){
      width: 25%;
    }
  }
  thead, tbody tr{
    border-bottom: 1px solid #000;
  }
  thead{
    th:not(:first-child){
      text-align: center;
    }
  }
  tbody {
    .coffee_title{
      display: flex;
      align-items: center;
      h3{
        margin-left: 1rem;
      };
    }
    ${media.mobile`
      .coffee_title{
        ${flexCenter_column};
        h3{
          margin-left: 0 !important;
        };
      }
      .totalItemCount{
        h4{
          width: min-content;
          margin-inline: auto;
        };
      }
    `};
  }
`;
const Image = styled(ZoomableImage)`
  position: relative;
  height: 6rem;
  aspect-ratio: 1/1;
  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ActionTd = styled.td`
  position: relative;
  &>div{
    ${flexCenter};
    ${center_absolute};
    width: fit-content;
    border: 1px solid #000;
    border-radius: 103px;
    button{
      ${flexCenter};
      width: 2rem;
      aspect-ratio: 1/1;
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
    ${media.mobile`
      ${flexCenter_column};
      button, span{
        font-size: 1.2rem;
      }
    `};
  }
`;
const Actions = styled.div`
  ${flexCenter_column};
  ${media.mobile`
    flex-direction: row-reverse;
  `};
`;
const ConfirmButton = styled.button`
  padding: 0.5rem 2rem;
  text-decoration: none;
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
`;
const BackLink = styled(RouterLink)`
  padding: 0.5rem 2rem;
  margin-block: 1.5rem;
  text-decoration: none;
  background-color: #fff;
  color: ${colors.main};
  border: ${colors.main} 5px solid;
  border-radius: 72px;
  cursor: pointer;
  transition: 0.2s ease-in;
  &::before{
    content: '<';
    margin-right: 0.2rem;
    font-weight: 700;
  }
  &:hover{
    background-color: ${colors.main};
    color: #fff;
  }
  ${media.mobile`
    margin-block: 1rem;
    margin-right: 0.2rem;
  `};
`;

const Cart = () => {
    const dispatch = useDispatch();
    const {cartList} = useSelector(state => state.coffeeReducer);

    let totalPrice = 0;
    cartList.map((item)=>{
        totalPrice+=(item.price * item.count);
    });

    const countPlusAction = (index) => {
        dispatch(countPlus(index));
    };
    const countMinusAction = (index) => {
        dispatch(countMinus(index));
    };

    const handleConfirm = () => {
        alert('Заказ принят! Ожидайте...');
    };

    return (
        <CartStyled>
            {cartList.length === 0
            ?<EmptyCartContent>
                <h2>Ваша корзина пуста</h2>
                <BackLink to='/catalog'>Назад в каталог</BackLink>
            </EmptyCartContent>
            :<>
                <CartTable>
                    <thead>
                        <tr>
                            <th>Продукт</th>
                            <th>Кол-во</th>
                            <th>Итоговая цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.map((item,index) =>
                           <tr key={index}>
                               <td className='coffee_title'>
                                   <Image src={publicFromGithub + item.image} alt={'Фото' + item.title}/>
                                   <h3>{item.title}</h3>
                               </td>
                               <ActionTd>
                                   <div>
                                       <button
                                           type="button"
                                           onClick={()=>countMinusAction(index)}
                                       >
                                           {item.count === 1 ?'x' :'-'}
                                       </button>
                                       <span>{item.count}</span>
                                       <button
                                           type="button"
                                           onClick={()=>countPlusAction(index)}
                                       >
                                           +
                                       </button>
                                   </div>
                               </ActionTd>
                               <td className='totalItemCount'>
                                   <h4>
                                       {
                                           item.price * item.count
                                       } сом
                                   </h4>
                               </td>
                           </tr>
                       )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Итоговая цена:</td>
                            <td></td>
                            <td>{totalPrice} сом</td>
                        </tr>
                    </tfoot>
                </CartTable>
                <Actions>
                    <ConfirmButton
                        type="submit"
                        onClick={handleConfirm}
                    >
                        Заказать
                    </ConfirmButton>
                    <BackLink to='/catalog'>Назад в каталог</BackLink>
                </Actions>
            </>
            }
        </CartStyled>
    );
};

export default Cart;