import React from 'react'

const SecondLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="text-center">
      <p>Layout 2</p>
      {children}
    </main>
  )
}

export default SecondLayout
