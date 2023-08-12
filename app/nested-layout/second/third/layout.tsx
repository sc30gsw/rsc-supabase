import React from 'react'

const ThirdPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="text-center">
      <p>Layout 3</p>
      {children}
    </main>
  )
}

export default ThirdPage
