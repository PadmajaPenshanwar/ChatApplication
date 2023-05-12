import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/3978518/pexels-photo-3978518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Padmaja</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
