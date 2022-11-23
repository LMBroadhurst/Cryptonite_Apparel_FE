import React, { useState } from 'react'
import { useCreateMemberMutation } from '../api/apiSlice'

const defaultUserForm = {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    subscribedToInsights: false,
    productsOwned: []
}

const RegisterMember = () => {

    const [userDetails, setUserDetails] = useState({defaultUserForm})
    const [createMember] = useCreateMemberMutation()

    const handleEditDetailsOnChange = async (event) => {
        event.preventDefault()

        const property = event.target.name
        const value = event.target.value
        setUserDetails({...userDetails, [property]: value})
    }

    const handleCreateUser = (event) => {
        event.preventDefault()

        createMember(userDetails)
        alert(`Congrats ${userDetails.firstName}, you have joined the CA community`)
    }
    
  return (
    <section>
    <h3>Register</h3>
    <form className='flex flex-col gap-1' onChange={handleEditDetailsOnChange} onSubmit={handleCreateUser}>
      <input required className='border-2 border-slate-800 rounded-lg px-1' type="email" name='email' placeholder='Email' />
      <input required className='border-2 border-slate-800 rounded-lg px-1' type="text" name='firstName' placeholder='First Name' />
      <input required className='border-2 border-slate-800 rounded-lg px-1' type="text" name='lastName' placeholder='Last Name' />
      <input className='border-2 border-slate-800 rounded-lg px-1' type="password" name='password' placeholder='Password' />
      <select required name='subscribedToInsights'>
        <option>true</option>
        <option>false</option>
      </select>

      <button type='submit' className='bg-yellow-200 rounded-md p-2'>Change Details</button>
    </form>
    </section>
  )
}

export default RegisterMember