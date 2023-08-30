'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {useState} from 'react'


const page = () => {
  const [userInfo, setUserInfo] = useState({
    email:"",
    password:""
  })

  const {email, password} = userInfo

  const router = useRouter()

  const handleChange = ({target}:any) => {
    const {name ,value} = target

    setUserInfo({...userInfo, [name]:value})
  }


  const handleSubmit = async(e:any)  =>{
    e.preventDefault();

    //handle Login Feature

    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    if(res?.error) return alert(res.error);

    console.log(res);
    router.replace("/")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email " placeholder='email' name='email' value={email} onChange={handleChange} />
        <input type="password " name='password' placeholder='password' value={password} onChange={handleChange} />
        <button type='submit'>Click me</button>
      </form>
    </div>
  )
}

export default page