import React from 'react'

function MemoComp({ name }) {
    console.log("Memo Rendering Comp")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)