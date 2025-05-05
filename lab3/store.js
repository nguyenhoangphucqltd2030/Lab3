import { configureStore, createSlice } from '@reduxjs/toolkit';


const danhBaSlice = createSlice({
  name: 'danhBa',
  initialState: {
    yeuThich: [],
  },
  reducers: {
    themYeuThich: (state, action) => {
      const lienHe = action.payload;
      const daCo = state.yeuThich.find(item => item.phone === lienHe.phone);
      if (!daCo) {
        state.yeuThich.push(lienHe);
      }
    },
    xoaYeuThich: (state, action) => {
      state.yeuThich = state.yeuThich.filter(item => item.phone !== action.payload.phone);
    },
  },
});

export const { themYeuThich, xoaYeuThich } = danhBaSlice.actions;

const store = configureStore({
    reducer: {
      danhBa: danhBaSlice.reducer, 
    },
  });
  

export default store;
