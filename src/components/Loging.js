import React from 'react'
import Header from './Header'

const Loging = () => {
  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg' alt='back-logo'/>
      </div>
        <form className=' absolute w-3/12 my-36 mx-auto right-0 left-0  p-12 bg-black text-white rounded-lg bg-opacity-80' >
        <h1 className='font-bold text-3xl'>Sign In</h1>
        <input type='text' placeholder='Email or mobile number' className='p-4 my-4 w-full bg-gray-600'/>
        <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-600'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' >Sign in</button>
      </form>
    </div>
  )
}

export default Loging
