'use client'
import { USER } from '@/Types/UserType'
import React, { useState } from 'react'


type PropsUsers = {
    users: USER[] | null
  
  }

  function UsersComp({users}: PropsUsers){
  return (
    <div className='w-full flex flex-col'>userComp
        {users?.map((user, index)=> {
          return (
            <React.Fragment key={index}>
            <p className='text-md'>{user.firstName} - {user.lastName}</p>
            <h3 className='text-xl'>{user.nickname}</h3>
            </React.Fragment>
            )
        })}
    </div>
  )
}

export default UsersComp