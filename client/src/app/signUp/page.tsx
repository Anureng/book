"use client"
import React,{useState} from 'react'

const page = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email:"",
    password: ""
  })

  const {name, email, password} = userInfo;

  const handleChane = ({target}:any)=>{
    const {name, value} = target

    setUserInfo({...userInfo ,[name]:value})
  }


  const handleSubmit = async(e:any) =>{
    e.preventDefault()
    const res = await fetch("/auth/users",{
      method: "POST",
      body: JSON.stringify(userInfo)
    }).then((res)=>res.json())
    console.log(res);
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter Name...' type="text" name='name' value={name} onChange={handleChane} />
        <input placeholder='Enter Email...' type="email" name='email' value={email} onChange={handleChane} />
        <input placeholder='Enter Password...' type="password" name='password' value={password} onChange={handleChane} />
        <button type='submit'>Click</button>
      </form>
    </div>
  )
}

export default page