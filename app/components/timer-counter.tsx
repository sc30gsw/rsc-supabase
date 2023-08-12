'use client'

import React, { useEffect, useState } from 'react'

const TimerCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 500)
  }, [])
  return (
    <div>
      <p>{count}</p>
      <button
        className="font-semibold my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}

export default TimerCounter
