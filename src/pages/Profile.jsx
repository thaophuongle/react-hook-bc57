import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getProfileApiAction } from '../redux/Reducers/UserReducer'

const Profile = () => {
  //const [userProfile, setUserProfile] = useState({})
  const {userProfile} = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  const getProfileApi = async () => {
    // const res = await axios({
    //   url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //   }
    // })
    // console.log(res)
    // setUserProfile(res.data.content)

    const action = getProfileApiAction()
    //dispatch logic gọi api từ action async (userReducer)
    dispatch(action)
  }

  useEffect(() => {
    //call api to get profile
    getProfileApi()
  }, [])

  return (
    <div className='container'>
      <h3>Profile</h3>
      <div className="row mt-5">
        <div className="col-4">
          <img src={userProfile.avatar} alt="..." width={300}/>
          <h3>Name: {userProfile.name}</h3>
          <p>Email: {userProfile.email}</p>
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  )
}

export default Profile