import React from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import Chats from '../Components/Chats'

const Slidebar = () => {
  return (
    <div className='slidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Slidebar
