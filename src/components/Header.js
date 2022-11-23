import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-blue-300'>
        <div className='flex flex-row justify-between p-2'>
            <h1>C. Apparel</h1>

            <nav>
                <ul className='flex flex-row gap-2'>
                    <li><Link to={'/'}>Shop</Link></li>
                    <li><Link to={'/auth'}>Login</Link></li>
                    <li><Link to={'/account'}>Account</Link></li>
                    <li><Link to={'/admin'}>Admin</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header