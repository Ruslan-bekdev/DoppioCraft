import {createSlice} from "@reduxjs/toolkit";

const coffeeSlice = createSlice({
    name: 'coffeeSlice',
    initialState:{
        filteredCoffees: [],
        temp: '',
        cartList: [],
    },
    reducers:{
        setFilteredCoffees: (state, action) => {
            state.filteredCoffees = action.payload;
        },
        setTemp: (state, action) => {
            state.temp = action.payload;
        },
        addToCartList: (state, action) => {
            state.cartList = [...state.cartList, action.payload];
        },
        countPlus: (state, action) => {
            const item = state.cartList[action.payload];
            item.count += 1;
        },
        countMinus: (state, action) => {
            const item = state.cartList[action.payload];
            item.count -= 1;
            if (item.count === 0) {
                state.cartList = state.cartList.filter(
                    cartItem => cartItem !== item
                );
            }
        },
    },
});

export const {
    setFilteredCoffees,
    setTemp,
    addToCartList,
    countPlus,
    countMinus
} = coffeeSlice.actions

export default coffeeSlice.reducer;