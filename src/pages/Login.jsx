import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loginApiAction } from '../redux/Reducers/UserReducer'
import { useDispatch } from 'react-redux'

const Login = () => {
  const navigate = useNavigate()//useNavigate dùng để điều hướng trang
  const dispatch = useDispatch()

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (userLogin) => {
      // console.log(userLogin)
      // //Xử lý đăng nhập
      // if(userLogin.email === 'admin' && userLogin.password == '123'){
      //   navigate('/profile')
      // }else {
      //   alert('email or password is invalid');
      //   navigate('/forgot-pass')
      // }


     //gọi api đăng nhập
      // const res = await axios({
      //   url: 'https://shop.cyberlearn.vn/api/Users/signin',
      //   method: "POST",
      //   data: {
      //     email: userLogin.email,
      //     password: userLogin.password
      //   }
      // })

      // //sau khi lấy token thì lưu vào local storage
      // localStorage.setItem('accessToken', res.data.content.accessToken)
      // console.log(res.data.content)
      const action = loginApiAction(userLogin)
      dispatch(action)
    }
  })

  return (
    <form className='container' onSubmit={formLogin.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input id='email' name='email' className="form-control" onChange={formLogin.handleChange}/>
      </div>
      <div className="form-group mt-2">
        <p>Password</p>
        <input type='password' id='password' name='password' className="form-control" onChange={formLogin.handleChange}/>
      </div>
      <div className="form-group mt-2">
        <button type='submit' className='btn btn-success'>Login</button>
      </div>
    </form>
  )
}

export default Login