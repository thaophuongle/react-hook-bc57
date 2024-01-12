import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()//useNavigate dùng để điều hướng trang

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (userLogin) => {
      console.log(userLogin)
      //xử lý đăng nhập
      if (userLogin.email === 'admin' && userLogin.password === '123') {
        navigate('/profile')
      }
      else {
        alert('email or password is invalid')
        navigate('/forgot-pass')
      }
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
        <input id='password' name='password' className="form-control" onChange={formLogin.handleChange}/>
      </div>
      <div className="form-group mt-2">
        <button type='submit' className='btn btn-success'>Login</button>
      </div>
    </form>
  )
}

export default Login