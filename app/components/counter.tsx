'use client'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="border border-orange-500 p-1 text-center">
      <p>{count}</p>
      <button
        className="font-medium my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        increment
      </button>
    </div>
  )
}

export default Counter
