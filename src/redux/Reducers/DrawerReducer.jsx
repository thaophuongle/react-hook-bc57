import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: true
}

const DrawerReducer = createSlice({
  name: "drawerReducer",
  initialState,
  reducers: {
    handleDrawerAction: (state, action) => {
        state.open = action.payload
    }
  }
});

export const {handleDrawerAction} = DrawerReducer.actions

export default DrawerReducer.reducer