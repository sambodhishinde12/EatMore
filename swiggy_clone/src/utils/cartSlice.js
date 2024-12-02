import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        items:[]
    },
    reducers:{
        addItem : (state,action)=>{
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.items.push({...action.payload,quantity:1})
            }
        },
        removeItem : (state,action)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            state.items.length=0
        },
        increaseItem : (state,action)=>{
            const item = state.items.find(item => item.card.info.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseItem : (state,action)=>{
            const item = state.items.find(item => item.card.info.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // Remove the item if quantity reaches 0
                    state.items = state.items.filter(i => i.card.info.id !== action.payload);
                }
            }
        },
    },
})
export const {addItem,removeItem,clearCart,increaseItem, decreaseItem} = cartSlice.actions;
export default cartSlice.reducer;
