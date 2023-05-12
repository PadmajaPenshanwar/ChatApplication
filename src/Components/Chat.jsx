import React from 'react'
import call from '../img/call.png'
import add from '../img/add.png'
import more from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={call} alt="" width="10%" />
          <img src={add} alt="" />
          <img src={more}alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
