import { useState } from "react"



    
    

const Login = ({handleLogin}) => {
  

    const[email,setEmail]=useState('')
    const [password,setPassword]= useState('')


    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl  border-emerald-600 p-20'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=" flex flex-col   items-center justify-center">
<input
 value={email} onChange={(e)=>{
   setEmail(e.target.value)
}}
 required className="outline-none bg-transparent border-2 py-3 px-5 text-xl border-emerald-600 rounded-full placeholder:text-gray-400"
type="email" placeholder='enter your email' />
<input value={password}
onChange={(e)=>{
    setPassword(e.target.value)
}}
required className="outline-none bg-transparent border-2 py-3 px-5 text-xl mt-2 border-emerald-600 rounded-full placeholder:text-gray-400"  
type="password" placeholder='password' />
<button className="text-white outline-none mt-4  py-3 px-5 text-xl bg-emerald-600 rounded-full placeholder:text-white"
>Login </button>

      </form>
      </div>
    </div>
  )
}

export default Login
