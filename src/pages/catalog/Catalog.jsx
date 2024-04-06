import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {container,flexCenter,flexCenter_column,colors,media} from "../../styles/styles";
import coffees from "../../coffee.json";
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {addToCartList, setTemp, setFilteredCoffees} from "../../store/coffeeSlice";
import hot from "../../assets/hot.svg";
import cold from "../../assets/cold.svg";

const CatalogStyled = styled.div`
  ${container};
  padding-block: 1.5rem;
`;
const Search = styled.section`
  ${flexCenter_column};
  h3{
    ${media.mobile`
      font-size: 1.5rem;
    `}
    ${media.tablet`
      font-size: 2rem;
    `}
    ${media.laptop`
      font-size: 2.5rem;
    `}
    ${media.desktop`
      font-size: 3rem;
    `}
  }
  
  input{
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    background-color: #fff;
    color: ${colors.main};
    border: ${colors.main} 5px solid;
    border-radius: 72px;

    ${media.tablet`
      width: 10rem;
      height: 1rem;
      font-size: 1rem;
    `}
    ${media.laptop`
      width: 15rem;
      height: 1.5rem;
      font-size: 1.5rem;
    `}
    ${media.desktop`
      width: 17.5rem;
      height: 1.75rem;
      font-size: 1.75rem;
      padding: 0.75rem 1.75rem;
    `}
  }
  
  .tempSearch{
    position: relative;
    ${flexCenter_column};
    aspect-ratio: 1/1;

    ${media.mobile`
      height: 75px;
    `}
    ${media.tablet`
      height: 100px;
    `}
    ${media.laptop`
      height: 125px;
    `}
    ${media.desktop`
      height: 175px;
    `}
    
    &>div{
      width: 100%;
      aspect-ratio: 2/1;
      ${flexCenter};
      color: ${colors.main};
      border: ${colors.main} 5px solid;
      cursor: pointer;
      .hot{
        background-image: url(${hot});
          &_active{
            background-color: #FF4500;
          }
      }
      .cold{
        background-image: url(${cold});
          &_active{
            background-color: #87CEEB;
          }
      }
      .hot, .cold{
        width: 100%;
        aspect-ratio: 1/1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: 0.2s ease-in;
      }
    }
    
    a{
      width: 100%;
      height: 30%;
      text-decoration: none;
      background-color: #fff;
      color: ${colors.main};
      border: ${colors.main} 5px solid;
      border-top: ${colors.main} 1px solid;
      border-bottom-left-radius: 72px;
      border-bottom-right-radius: 72px;
      cursor: pointer;
      transition: 0.2s ease-in;
      &:hover{
        background-color: ${colors.main};
        color: #fff;
      }
    }
    
    &::after{
      content: '?';
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%) rotate(10deg);
      
      ${media.mobile`
        font-size: 3.2rem;
      `}
      ${media.tablet`
        font-size: 4rem;
      `}
      ${media.laptop`
        font-size: 5rem;
      `}
      ${media.desktop`
        font-size: 7rem;
      `}
    }
  }
`;

export const tempConfig = {
    hot: 'hot',
    cold: 'cold',
    any: '',
};

const Catalog = () => {
    const dispatch = useDispatch();
    const {filteredCoffees,temp,cartList} = useSelector(state => state.coffeeReducer);
    const [searchValue,setSearchValue] = useState('');
    const randomizedCoffee = coffees.sort(() => Math.random() - 0.5);

    const handleSetSearch = (e) => {
        setSearchValue(e.target.value);
    };
    const setHotTempAction = () => {
        dispatch(setTemp(tempConfig.hot));
    };
    const setColdTempAction = () => {
        dispatch(setTemp(tempConfig.cold));
    };
    const resetTempAction = () => {
        dispatch(setTemp(tempConfig.any));
    };
    const handleFilterItems = () => {
        const filtered =
            randomizedCoffee.filter(item => {
                switch (temp) {
                    case tempConfig.hot:
                        return item.title.toLowerCase()
                            .includes(searchValue.toLowerCase().trim())
                            && item.hot;
                    case tempConfig.cold:
                        return item.title.toLowerCase()
                            .includes(searchValue.toLowerCase().trim())
                            && !item.hot;
                    case tempConfig.any:
                        return item.title.toLowerCase()
                            .includes(searchValue.toLowerCase().trim());
                }
            });

        if (filtered.length === 0){
            console.log('Пусто');
            return [];
        }
        return filtered;
    };

    useEffect(() => {
        dispatch(setFilteredCoffees(handleFilterItems()));
    },[searchValue || temp]);


    return (
        <CatalogStyled>
            <Search>
                <h3>
                    <label htmlFor='search'>
                        Поиск по названию и ингридиентам
                    </label>
                </h3>
                <input
                    id='search'
                    value={searchValue}
                    onChange={handleSetSearch}
                    type='text'
                    placeholder='Поиск'
                />
                <div className={'tempSearch'}>
                    <div>
                        <div
                            onClick={setHotTempAction}
                            className={`hot ${temp === tempConfig.hot && 'hot_active'}`}
                        />
                        <div
                            onClick={setColdTempAction}
                            className={`cold ${temp === tempConfig.cold && 'cold_active'}`}
                        />
                    </div>
                    <a
                        onClick={resetTempAction}
                    >
                        Сбросить
                    </a>
                </div>
            </Search>
            <section>
                {
                    filteredCoffees.map((coffee,index) =>
                        <Card
                            item={coffee}
                            cartList={cartList}
                            dispatch={dispatch}
                            addToCartList={addToCartList}
                            key={index}
                        />
                    )
                }
            </section>
        </CatalogStyled>
    );
};

export default Catalog;