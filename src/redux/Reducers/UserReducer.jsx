import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { USER_LOGIN, TOKEN, http } from '../../util/config'; 
import { history } from '../../index';

//xử lý load giá trị ban đầu cho state từ storage (localStorage)
let userLoginDefault = {
  email: '',
  accessToken: ''
}

if (localStorage.getItem(USER_LOGIN)) {
  userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userProfile: {},
    userLogin: userLoginDefault
}

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload
    },

    getProfileAction: (state, action) => {
      state.userProfile = action.payload
    }
  },
});

export const {loginAction, getProfileAction} = UserReducer.actions

export default UserReducer.reducer

//-----------------action thunk---------------------
export const loginApiAction = (userLogin) => { //closure function
  return async (dispatch) => {
    try {
      //call api
    const res = await http.post('/Users/signin', userLogin)//userLogin sẽ là data


    //sau khi lấy được token thì lưu vào local storage
    localStorage.setItem(TOKEN, res.data.content.accessToken)

    localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content))

    //gửi dữ liệu sau khi thành công vào reducer
    const action = loginAction(res.data.content)
    dispatch(action)
    }

    catch (err) {
      if (err.response.status == 404) {
        alert('Email or password is not correct')
        window.location.href = '/'
      }
    }
  }
}

export const getProfileApiAction = () => {
  return async (dispatch) => {
    try
    {
      const res = await http.post('/Users/getProfile')

    //sau khi có dữ liệu => dispatch lên reducer
    const action = getProfileAction(res.data.content)
    dispatch(action)
    }
    catch(err) {

    }
  }
}