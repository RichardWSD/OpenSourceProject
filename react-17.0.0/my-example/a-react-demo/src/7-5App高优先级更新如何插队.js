import React, { useEffect, useState, useRef } from "react"

export default function App() {
  const buttonRef = useRef(null)
  const [count, updateCount] = useState(0)

  const onClick = () => {
    updateCount((count) => count + 2)
  }

  useEffect(() => {
    const button = buttonRef.current
    setTimeout(() => {
      updateCount(1)
    }, 1000);
    setTimeout(() => {
      button.click()
    }, 1040);
  }, [])

  return (
    <div>
      <button ref={buttonRef} onClick={onClick}>增加2</button>
      <div>
       {Array(3000).fill(0).map((_, i) => <span key={i}>{count}</span>)}
      </div>
    </div>
  )
}