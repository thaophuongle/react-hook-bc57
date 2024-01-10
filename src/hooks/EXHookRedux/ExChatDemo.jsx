import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserCommentAction, updateUserCommentAction } from "../../redux/Reducers/ChatReducer";

const ExChatDemo = () => {

    //hook useSelector tương tự mapStateToProps
    //const userComment = useSelector((state) => state.chatReducer.userComment)
    const {userComment, arrComment} = useSelector((state) => state.chatReducer)
    console.log('state redux', userComment)

    //sử dụng hook useDispatch thay cho this.props.dispatch
    const dispatch = useDispatch()

    const handleChangeValue = (e) => {
        const {id, value} = e.target //bóc tách id và value của input đc dom tới
        //gửi dữ liệu lên redux
        const action = updateUserCommentAction({
            id: id,
            value: value,
        })

        //gửi dữ liệu action lên redux
        dispatch(action)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = userComment
        const action = addUserCommentAction(payload)

        //gửi dữ liệu action lên redux
        dispatch(action)
    }

  return (
    <div className="container">
      <h3>Demo Chat</h3>
      <div className="card">
        <div className="card-header">
          {
            arrComment.map((comment) => {
                return <div className="d-flex" key={comment.name}>
            <div style={{width: '10%'}}>
              <img src={"https://i.pravatar.cc?u=1"} alt="..." style={{width: 50}} />
              <h5 className="text text-danger">{comment.name}</h5>
            </div>
            <div style={{width: '90%'}}>
              <p>
                {comment.content}
              </p>
            </div>
          </div>
            })
          }
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h3>Name</h3>
              <input className="form-control" id="name" value={userComment.name} onInput={handleChangeValue}/>
            </div>
            <div className="form-group">
              <h3>Content</h3>
              <input className="form-control" id="content" value={userComment.content} onInput={handleChangeValue}/>
            </div>
            <div className="form-group mt-3">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExChatDemo;
