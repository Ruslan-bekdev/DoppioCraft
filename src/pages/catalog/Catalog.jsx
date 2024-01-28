import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {container,flexCenter,flexCenter_column,colors} from "../../styles/styles";
import coffees from "../../coffee.json";
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {addToCartList, setTemp, setFilteredCoffees} from "../../store/coffeeSlice";
import hot from "../../assets/hot.svg";
import cold from "../../assets/cold.svg";

const CatalogStyled = styled.div`
  ${container}
`;
const Search = styled.div`
  margin-top: 6rem;
  ${flexCenter_column}
  input{
    margin: 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    background-color: #fff;
    color: ${colors.main};
    border: ${colors.main} 5px solid;
    border-radius: 72px;
  }
  .tempSearch{
    &>div{
      ${flexCenter};
      color: ${colors.main};
      border: ${colors.main} 5px solid;
      box-sizing: content-box;
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
        width: 25px;
        height: 25px;
        padding: 0.5rem 1rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: 0.2s ease-in;
      }
    }
    button{
      padding: 0.25rem 1rem;
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
            coffees.filter(item => {
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
                <label htmlFor='search'>
                    <h3>
                        Поиск по названию и ингридиентам
                    </h3>
                </label>
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
                    <button
                        onClick={resetTempAction}
                    >
                        Сбросить
                    </button>
                </div>
            </Search>
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
        </CatalogStyled>
    );
};

export default Catalog;