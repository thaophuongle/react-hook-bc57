import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name: 'abc', content: 'hello cybersoft'},
        {name: 'xyz', content: 'hello bc57'}
    ],
    userComment: {
        name: '',
        content: ''
    }
}



const ChatReducer = createSlice({
  name: "ChatReducer",
  initialState,
  reducers: {
    updateUserCommentAction: (state, action) => {
        const {id, value} = action.payload
        state.userComment[id] = value //lấy id của input, which is name or content in userComment, và set value của input làm giá trị cho name or content
    },

    addUserCommentAction: (state, action) => {
        const {payload} = action
        state.arrComment.push(payload)
    }
  }
});

export const {updateUserCommentAction, addUserCommentAction} = ChatReducer.actions

export default ChatReducer.reducer