import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { http } from '../../util/config';

const initialState = {
    arrProduct: [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "size": "[36,37,38,39,40,41,42]",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "deleted": false,
            "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
            "relatedProducts": "[2,3,5]",
            "feature": true,
            "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
          },
          {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "size": "[36,37,38,39,40,41,42]",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "deleted": false,
            "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
            "relatedProducts": "[1,4,6]",
            "feature": false,
            "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
          },
          {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "size": "[36,37,38,39,40,41,42]",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "deleted": false,
            "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
            "relatedProducts": "[4,5,7]",
            "feature": true,
            "image": "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png"
          },
    ]
}

const ProductReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrayProductAction: (state, action) => {
        state.arrProduct = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductAsyncThunkAction.fulfilled, (state, action) => {
        state.arrProduct = action.payload
    })
  }
}); 

export const {setArrayProductAction} = ProductReducer.actions

export default ProductReducer.reducer


//------------------action thunk (action bất đồng bộ gọi api)-------------------
export const getAllProductApiAction = () => { //closure function
    //export const getAllProductApiAction = (param) => {
    return async (dispatch) => {
        const res = await http.get('/product')
          //sau khi có dữ liệu
          const action = setArrayProductAction(res.data.content)
          dispatch(action)
        }
}

export const getAllProductAsyncThunkAction = createAsyncThunk('productReducer/getAllProductAsyncThunkAction', async () => {
    const res = await axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
      })

      //return kết quả
      return res.data.content
})