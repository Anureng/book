'use client'
import Navbar from '@/components/Navbar'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {useState} from 'react'
const LogInPage = () => {
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

    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
<div className="flex">
<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg>
</span>
<input type="text" name='email' value={email} onChange={handleChange} id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"/>
</div>

<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
<div className="flex">
<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="currentColor" viewBox="0 0 20 20"> */}
      {/* <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg> */}
</span>
<input type="text"  name='password' value={password} onChange={handleChange} id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"/>
</div>
      {/* <input type="email " placeholder='email' name='email' value={email} onChange={handleChange} />
      <input type="password " name='password' placeholder='password' value={password} onChange={handleChange} /> */}
      <button type='submit'>Click me</button>
    </form>
  </div>
  )
}

export default LogInPage