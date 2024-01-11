import React, { memo } from 'react'

const Comment = (props) => {
console.log('child component comment') //khi props truyền vào thay đổi thì component con thay đổi, nếu ko thì sẽ ko thay đổi khi có memo

  return (
    <div className='bg-dark text-white p-5'>
        <h3>Like (child component): {props.renderLike()}</h3>
        Comment
    </div>
  )
}

//sử dụng memo chỉ là shallow compare (so sánh nông (1 cấp)), đối với object thì khi setState ở component cha phải clone {...} hoặc [...] hoặc cloneDeep (lodash)
export default memo(Comment)