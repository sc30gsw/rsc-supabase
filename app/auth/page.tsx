import React from 'react'

import Auth from '../components/auth'

const AuthPage = () => {
  return (
    <div
      className={`flex h-[calc(100vh-56px)] flex-col items-center justify-center`}
    >
      <Auth />
    </div>
  )
}

export default AuthPage
