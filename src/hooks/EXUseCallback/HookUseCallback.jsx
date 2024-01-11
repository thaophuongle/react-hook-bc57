import React, { useCallback, useState } from "react";
import Comment from "./Comment";

const HookUseCallback = () => {
  let [like, setLike] = useState(1);
  let [number, setNumber] = useState(1);

const renderLike = () => {
    return `Like: ${like}`
}

const callbackRenderLike = useCallback(renderLike, [like])
//khi dependency like thay đổi thì useCallback sẽ cache lại địa chỉ lần thay đổi gần nhất, nếu like ko thay đổi thì địa chỉ renderLike giữ nguyên

  return (
    <div className="m-5">
        <button className="btn btn-primary mx-2" onClick={() => {
            setNumber(number + 1)
        }}>{number}</button>
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderLike={callbackRenderLike} />
    </div>
  );
};

export default HookUseCallback;



