import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {

    const [fnvalue, setfnValue] = useState('');
    const [lnvalue, setlnValue] = useState('');
    const [emailvalue, setemailValue] = useState('');
    const [usernamevalue, setusernameValue] = useState('');
    const [passvalue, setpassValue] = useState('');
    const navigate = useNavigate();


    
    const saveData = () => {

        if(!(fnvalue == '' || lnvalue == '' || emailvalue == '' || usernamevalue == '' || passvalue == ''))
        {
            localStorage.setItem('firstname', fnvalue);
            localStorage.setItem('lastname', lnvalue);
            localStorage.setItem('email', emailvalue);
            localStorage.setItem('username', usernamevalue);
            localStorage.setItem('password', passvalue);
            navigate('/signin');
        }
        else{
            alert('Fill Data');
        }
    }
  

  return (
    <div className="flex justify-center h-screen items-center">
        <div className="w-[80%] lg:w-[40%] flex flex-col gap-2 shadow-2xl py-5">
            <h3 className="text-center text-2xl font-bold">SIGN UP</h3>
            <div className="w-[100%] flex flex-col gap-4 lg;justify-center items-center mt-5 lg:mt-8">
                <input id="firstname" className="w-[80%] text-sm pl-2 py-1 font-semibold outline-none border-2 border-solid border-black rounded-lg" type="text" placeholder="FirstName" onKeyUp={(e) => setfnValue(e.target.value)}/>
                <input id="lastname" className="w-[80%] text-sm pl-2 py-1 font-semibold outline-none border-2 border-solid border-black rounded-lg" type="text" placeholder="LastName" onKeyUp={(e) => setlnValue(e.target.value)}/>
                <input id="email" className="w-[80%] text-sm pl-2 py-1 font-semibold outline-none border-2 border-solid border-black rounded-lg" type="email" placeholder="Email" onKeyUp={(e) => setemailValue(e.target.value)}/>
                <input id="username" className="w-[80%] text-sm pl-2 py-1 font-semibold outline-none border-2 border-solid border-black rounded-lg" type="text" placeholder="Username" onKeyUp={(e) => setusernameValue(e.target.value)}/>
                <input id="password" className="w-[80%] text-sm pl-2 py-1 font-semibold outline-none border-2 border-solid border-black rounded-lg" type="password" placeholder="Password" onKeyUp={(e) => setpassValue(e.target.value)}/>
                <span className="w-[80%] flex justify-center items-center bg-red-600 text-white text-sm pl-2 py-1 font-semibold outline-none rounded-lg lg:cursor-pointer" onClick={() => saveData()}>Sign Up</span>
            </div>
                <p className="text-xs ml-9 lg:ml-12">have account? <Link className="font-bold" to='/signin'>signin</Link></p>
        </div>
    </div>
  )
}

export default Signup