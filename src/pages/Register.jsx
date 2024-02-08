import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { updateOnOkayAction } from '../redux/Reducers/DrawerReducer'
import { useDispatch } from 'react-redux'

const Register = () => {
  const formRegister = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: ""
    },
    onSubmit: (values) => {
      console.log('handle register')
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const action = updateOnOkayAction(formRegister.handleSubmit)
    dispatch(action)
  }, [])

  return (
    <form className='container' onSubmit={formRegister.handleSubmit}>
      <h3>Register</h3>
      <div className="form-group">
        <p>Email</p>
        <input className='form-control' id='email' name='email' onChange={formRegister.handleChange}/>
      </div>
      <div className="form-group">
        <p>Password</p>
        <input className='form-control' id='password' name='password' type='password' onChange={formRegister.handleChange}/>
      </div>
      <div className="form-group">
        <p>Name</p>
        <input className='form-control' id='name' name='name' onChange={formRegister.handleChange}/>
      </div>
      <div className="form-group">
        <p>Phone</p>
        <input className='form-control' id='phone' name='phone' onChange={formRegister.handleChange}/>
      </div>
      <div className="form-group">
        <p>Gender</p>
        <select className='form-control' name="gender" id="gender" onChange={formRegister.handleChange}>
          <option value={true}>Male</option>
          <option value={false}>Female</option>
        </select>
      </div>
      <div className='mt-2'>
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
  )
}

export default Register