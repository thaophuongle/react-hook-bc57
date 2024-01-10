import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fontSize: 20
}

const ChangeFontSizeReducer = createSlice({
  name: 'ChangeFontSize',
  initialState,
  reducers: {
    changeFontSizeAction: (state, action) => {
        state.fontSize += action.payload
    }
  }
});

export const {changeFontSizeAction} = ChangeFontSizeReducer.actions

export default ChangeFontSizeReducer.reducer