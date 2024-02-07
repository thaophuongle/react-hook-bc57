import React from 'react'
import { useDispatch } from 'react-redux'
import { handleDrawerAction } from '../redux/Reducers/DrawerReducer'

const DemoTestDrawer = () => {
    const dispatch = useDispatch()

    const handleLoginForm = () => {
        //đưa dữ liệu form lên redux và open drawer
        const action = handleDrawerAction(true)
        dispatch(action)
    }

  return (
    <div className='container'>
        <button className='btn btn-success' onClick={handleLoginForm}>Login</button>
    </div>
  )
}

export default DemoTestDrawer