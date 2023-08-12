import React from 'react'

const FirstLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout 1</p>
      {children}
    </main>
  )
}

export default FirstLayout
