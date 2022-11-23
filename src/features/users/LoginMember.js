import React, { useState } from 'react'

const defaultUserForm = {
    email: '',
    password: '',
}

const LoginMember = () => {

    const [userDetails, setUserDetails] = useState({defaultUserForm})

    const handleEditDetailsOnChange = async (event) => {
        event.preventDefault()

        const property = event.target.name
        const value = event.target.value
        setUserDetails({...userDetails, [property]: value})
    }

    const handleLoginMember = (event) => {
        event.preventDefault()

    }

  return (
    <section>
    <h3>Login</h3>
    <h3>Needs Auth!</h3>
    <form className='flex flex-col gap-1' onChange={handleEditDetailsOnChange} onSubmit={handleLoginMember}>
      <input required className='border-2 border-slate-800 rounded-lg px-1' type="email" name='email' placeholder='Email' />
      <input className='border-2 border-slate-800 rounded-lg px-1' type="password" name='password' placeholder='Password' />

      <button type='submit' className='bg-yellow-200 rounded-md p-2'>Login</button>
    </form>
    </section>
  )
}

export default LoginMember