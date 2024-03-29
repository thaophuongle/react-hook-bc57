import {configureStore} from '@reduxjs/toolkit'
import ChatReducer from './Reducers/ChatReducer'
import ChangeFontSizeReducer from './Reducers/ChangeFontSizeReducer'
import CRUDProductReducer from './Reducers/CRUDProductReducer'
import ProductReducer from './Reducers/ProductReducer'
import UserReducer from './Reducers/UserReducer'
import DrawerReducer from './Reducers/DrawerReducer'

export const store = configureStore({
    reducer: {
        //các reducer của ứng dụng
        chatReducer: ChatReducer,
        changeFontSizeReducer: ChangeFontSizeReducer,
        crudProductReducer: CRUDProductReducer,
        productReducer: ProductReducer,
        userReducer: UserReducer,
        drawerReducer: DrawerReducer,
    }
})