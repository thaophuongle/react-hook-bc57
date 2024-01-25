import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { TOKEN, USER_LOGIN } from '../../util/config';

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
    }
  }
});

export const {loginAction} = UserReducer.actions

export default UserReducer.reducer

//-----------------action thunk---------------------
export const loginApiAction = (userLogin) => { //closure function
  return async (dispatch) => {
    //call api
    const res = await axios({
      url: 'https://shop.cyberlearn.vn/api/Users/signin',
      method: 'POST',
      data: {
        email: userLogin.email,
        password: userLogin.password
      }
    })

    //sau khi lấy được token thì lưu vào local storage
    localStorage.setItem(TOKEN, res.data.content.accessToken)

    localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content))

    //gửi dữ liệu sau khi thành công vào reducer
    const action = loginAction(res.data.content)
    dispatch(action)
  }
}