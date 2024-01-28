import React from 'react';
import styled from "styled-components";
import {colors, container} from "../../styles/styles";
import {useDispatch,useSelector} from "react-redux";
import ZoomableImage from "../../components/zoomableImage/ZoomableImage";
import {countMinus, countPlus} from "../../store/coffeeSlice";
import {flexCenter} from "../../styles/styles";
import {Link as RouterLink} from "react-router-dom";

const CartStyled = styled.div`
  ${container};
  height: 75dvh;
  position: relative;
`;
const CartContent = styled.div`
  position: relative;
  top: 6rem;
`;
const BackLink = styled(RouterLink)`
  position: fixed;
  top: 6rem;
  left: 1rem;
  padding: 0.5rem 2rem;
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
`;
const EmptyCartContent = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100%;
`;
const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: start;
  font-weight: bold;
  th{
    text-align: start;
  }
  thead, tbody tr{
    border-bottom: 1px solid #000;
  }
  tbody .coffee_title{
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
    }
  }
  th,td{
    padding-block: 1.5rem;
  }
  th:not(:first-child){
    width: 25%;
  }
`;
const Image = styled(ZoomableImage)`
  position: relative;
  height: 75px;
  aspect-ratio: 1;
  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Action = styled.div`
  width: fit-content;
  border: 1px solid #000;
  border-radius: 103px;
  button{
    width: 25px;
    aspect-ratio: 1;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }
`;
const ConfirmButton = styled.button`
  padding: 0.5rem 2rem;
  margin-bottom: 2rem;
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
                <BackLink to='/catalog'>Назад в каталог</BackLink>
                <h2>Ваша корзина пуста</h2>
            </EmptyCartContent>
            :<CartContent>
                <BackLink to='/catalog'>Назад в каталог</BackLink>
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
                                   <Image src={item.image} alt={'Фото' + item.title}/>
                                   <h3>{item.title}</h3>
                               </td>
                               <td>
                                   <Action>
                                       <button
                                           onClick={()=>countMinusAction(index)}
                                       >
                                           -
                                       </button>
                                       <span>{item.count}</span>
                                       <button
                                           onClick={()=>countPlusAction(index)}
                                       >
                                           +
                                       </button>
                                   </Action>
                               </td>
                               <td>{item.price * item.count} сом</td>
                           </tr>
                       )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Итоговая цена:</td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tfoot>
                </CartTable>
                <ConfirmButton
                    onClick={handleConfirm}
                >
                    Заказать
                </ConfirmButton>
            </CartContent>
            }
        </CartStyled>
    );
};

export default Cart;
