import React from 'react'
import Slidebar from '../Components/Slidebar'
import Chat from '../Components/Chat'

function Home(props) {
  return (

      <div className='home'>
        <div className='container'>
        <Slidebar/>
        <Chat/>
        </div>
      </div>
  )
}

Home.propTypes = {

}

export default Home

