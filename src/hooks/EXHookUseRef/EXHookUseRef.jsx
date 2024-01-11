import React, { useRef, useState } from 'react'
import ChildComponent from './ChildComponent'

//useRef: thường sử dụng để lưu lại các giá trị sau mỗi lần render
//ngoài ra useRef còn được dùng để tham chiếu (dom) đến 1 thẻ html hoặc thẻ component, khi dom đến thẻ component thì ta có thể truy xuất được tất cả thuộc tính và phương thức của component đó



const EXHookUseRef = () => {

    // const [userLogin, setUserLogin] = useState({
    //     username: '',
    //     password: ''
    // })

    const [like, setLike] = useState(1)
    const refLogin = useRef({
        username: '',
         password: ''
    })

    const refDom = useRef()
    const refDomChildComponent = useRef()

    console.log(refLogin)
    const handleChangeInput = (e) => {
        const {id, value} = e.target; //lấy bóc tách id và value của input đc dom tới
        refLogin.current[id] = value
    }
    
    //ngoài ra ref cũng dùng để dom đến các thẻ, tuy nhiên có thể quản lý được đễ dàng thông qua biến ref trên component đó
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refLogin.current)
        refDom.current.className = 'btn btn-dark'
    }

  return (
    <form className='container mt-3' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input className='form-control' id='username' name='username' onInput={handleChangeInput}/>
        </div>
        <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input type='password' className='form-control' id='password' name='password' onInput={handleChangeInput}/>
        </div>
        <div className="form-group mt-2">
            <button className='btn btn-success' ref={refDom}>Login</button>
        </div>
        <div className="form-group mt-2">
            <button className='btn btn-danger' onClick={() => {
                setLike(like + 1)
            }}><i className='fa fa-heart'></i> {like}</button>
        </div>
        <ChildComponent ref={refDomChildComponent}/>
        <button className='btn btn-primary mt-2' onClick={() => {
            console.log(refDomChildComponent.current)
        }}>Get element component</button>
    </form>
  )
}

export default EXHookUseRef