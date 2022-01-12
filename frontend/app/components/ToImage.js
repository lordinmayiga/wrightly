
import React, { Children, useCallback, useRef, useState } from 'react';
import { toPng, toSvg } from 'html-to-image';

import StringToReact from 'string-to-react'
let s = `<div>hi</div>`
// ReactDOM.render(StringToReact(s), document.getElementById('container'))

function ToImage({htmlString, imgState}) {
  const ref = useRef(null)
  const [img, setImg] = imgState

  const onButtonClick = useCallback(() => {
    // console.log(typeof ref.current)
    // console.log(typeof StringToReact("<h1>Click here if you're mindblown</h1>"))
    // console.log(StringToReact("<h1>Click here if you're mindblown</h1>"))
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'image.png'
        link.href = dataUrl
        console.log(dataUrl)
        setImg(dataUrl)
        // link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  onButtonClick()

  let m = "<h1>Click here if you're mindblown</h1>"
  return (
    <div style={{display: "none"}}>
      <div ref={ref}>
        <div>
          {/* {StringToReact(htmlString)} */}
          {htmlString}
        </div>
        {/* <button className="createtodo-save">Click</button> */}
      </div>
      <button onClick={onButtonClick}>Click me</button>
      <img src={img==""?"http://localhost:4001/img/gray.png": img} className="notescard-img" />
    </div>
  )
}

export default ToImage
