import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Signin() {

    const [usernamevalue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const navigate = useNavigate();

    const [getUsername,setGetUsername] = useState(() => {
        return localStorage.getItem('username');
    })
    const [getPassword,setGetPassword] = useState(() => {
        return localStorage.getItem('password');
    })

    const checkData = () => {
        if((usernamevalue != getUsername || passwordValue != getPassword) || (usernamevalue == '' || passwordValue == ''))
        {
            alert('The data is wrong');
        }
        else{
            navigate('/');
        }
    }

  return (
    <div className="flex justify-center h-screen items-center">
        <div className="w-[80%] lg:w-[40%] flex flex-col justify-center items-center gap-2 shadow-2xl py-5">
            <h3 className="text-center text-2xl font-bold">SIGN IN</h3>
            <div className="w-[100%] flex flex-col gap-4 justify-center items-center mt-5 lg:mt-8">
                <input className="w-[80%] text-sm pl-2 py-1 font-semibold outline-none border-2 border-solid border-black rounded-lg" type="text" placeholder="Username" onKeyUp={(e) => setUsernameValue(e.target.value)}/>
                <input className="w-[80%] text-sm pl-2 py-1 font-semibold outline-none border-2 border-solid border-black rounded-lg" type="password" placeholder="Password" onKeyUp={(e) => setPasswordValue(e.target.value)}/>
                <span className="w-[80%] flex justify-center items-center bg-red-600 text-white text-sm pl-2 py-1 font-semibold outline-none rounded-lg lg:cursor-pointer" onClick={() => checkData()}>Sign In</span>
            </div>
                <p className="text-xs -ml-20 lg:ml-12">Don't have account? <Link className="font-bold" to='/signup'>signup</Link></p>
        </div>
    </div>
  )
}

export default Signin