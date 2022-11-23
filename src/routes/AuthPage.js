import React from 'react'
import Header from '../components/Header'
import LoginMember from '../features/users/LoginMember'
import RegisterMember from '../features/users/RegisterMember'

const AuthPage = () => {
  return (
    <main>
        <Header />
        <div className='flex flex-row gap-5'>
            <RegisterMember />
            <LoginMember />
        </div>
    </main>
  )
}

export default AuthPage