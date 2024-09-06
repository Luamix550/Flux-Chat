import React from 'react'
import { users } from '@/app/users';

export default function Profile({ params } : { params : { userId: string } }) {
    const { userId } = params;

    const user = users.filter(user => {
        return user.id === parseInt(userId);
    });

  return (
    <h1>{ user[0].username }</h1>
  )
}
