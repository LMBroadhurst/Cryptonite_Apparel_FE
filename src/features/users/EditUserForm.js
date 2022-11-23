import React, { useState } from 'react'
import { useEditMemberMutation } from '../api/apiSlice'

const defaultUserForm = {
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  subscribedToInsights: null,
  productsOwned: null
}

const EditUserForm = () => {

  const [editMemberDetails] = useEditMemberMutation()
  const [userDetails, setUserDetails] = useState({defaultUserForm})

  const handleEditDetailsOnChange = async (event) => {
    event.preventDefault()

    const property = event.target.name
    const value = event.target.value

    setUserDetails({...userDetails, [property]: value})
  }

  const handleClickEditMemberDetails = async (event) => {
    event.preventDefault()

    const payload = {...userDetails, id: 3}
    console.log(payload)

    editMemberDetails(payload)
  }

  return (
    <form className='flex flex-col gap-1' onChange={handleEditDetailsOnChange}>
      <input className='border-2 border-slate-800 rounded-lg px-1' type="email" name='email' placeholder='Email' />
      <input className='border-2 border-slate-800 rounded-lg px-1' type="text" name='firstName' placeholder='First Name' />
      <input className='border-2 border-slate-800 rounded-lg px-1' type="text" name='lastName' placeholder='Last Name' />
      <input className='border-2 border-slate-800 rounded-lg px-1' type="text" name='password' placeholder='Password' />

      <button className='bg-yellow-200 rounded-md p-2' onClick={handleClickEditMemberDetails}>Change Details</button>
    </form>
  )
}

export default EditUserForm