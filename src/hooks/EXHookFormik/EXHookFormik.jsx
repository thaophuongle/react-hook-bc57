import React from 'react'
import {useFormik} from 'formik'
import * as yup from "yup"

const EXHookFormik = () => {

    const frmRegister = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            password: '',
            email: ''
        },
        validationSchema: yup.object().shape({
            fullName: yup.string().required('Full name cannot be blank').matches(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, 'name is not valid'),
            phone: yup.string().required('Phone cannot be blank'),
            email: yup.string().required('Email cannot be blank').email('Email is invalid'),
            password: yup.string().required().min(6).max(20)
        }),

        onSubmit: (value) => {
            console.log(value)
        }
    })
  return (
    <form className='container' onSubmit={frmRegister.handleSubmit}>
        <h3>Register form</h3>
        <div className="form-group">
            <p>Full Name</p>
            <input  name="fullName" id="fullName" className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>{frmRegister.errors.fullName && frmRegister.errors.fullName}</p>
        </div>
        <div className="form-group">
            <p>Phone</p>
            <input  name="phone" id="phone" className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>{frmRegister.errors.phone && frmRegister.errors.phone}</p>
        </div>
        <div className="form-group">
            <p>Email</p>
            <input  name="email" id="email" className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>{frmRegister.errors.email && frmRegister.errors.email}</p>
        </div>
        <div className="form-group">
            <p>Password</p>
            <input type='password'  name="password" id="password" className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>{frmRegister.errors.password && frmRegister.errors.password}</p>
        </div>
        <div className="form-group mt-2">
            <button className='btn btn-success' type='submit'>Register</button>
        </div>
    </form>
  )
}

export default EXHookFormik