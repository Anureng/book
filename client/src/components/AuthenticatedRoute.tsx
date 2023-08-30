"use client"
import { useSession ,signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const AuthenticatedRoute = () => {
    const {data , status} =useSession();

    const isAuthenticated = status === 'authenticated';

    if(isAuthenticated)
    return (
  <div className='flex space-x-2'>
<p>{data?.user?.name}
</p>
<button onClick={()=>signOut()}>logout</button>
  </div>
        )
  return (
    <div>
        <p>
            <Link href="/login">
            login
            </Link>
            </p>
        <p>
            <Link href="/signUp">
            SignUp
            </Link>
            </p>
    </div>
  )
}

export default AuthenticatedRoute