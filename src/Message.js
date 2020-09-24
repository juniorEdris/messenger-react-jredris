import React,{ forwardRef } from 'react'

import { Card, CardContent,Typography } from '@material-ui/core';
import './Message.css'
const Message = forwardRef( ({message,username},ref) => {
    const isUser = username === message.username;


    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}` }>
    <Card className={isUser ? 'message_userCard' : 'message_guestCard' } variant="outlined"> 
      <CardContent>
        <Typography 
        variant='h5'  
        component='h2'
        gutterBottom>
        {!isUser && `${message.username || 'Unknown user'}: `}{message.message}
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
})

export default Message
