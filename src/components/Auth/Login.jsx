// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {

    

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


//     const submitHandler = (e)=>{
//         e.preventDefault()
//         handleLogin(email,password)
//         setEmail("")
//         setPassword("")
//     }


//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-xl border-emerald-600 p-20'>
//             <form 
//             onSubmit={(e)=>{
//                 submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'
//             >
//                 <input 
//                 value={email}
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
//                 />
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
//                 <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login

import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Reset error message

        try {
            await handleLogin(email, password); // Assuming handleLogin returns a promise
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }

        // Clear input fields after submission
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form 
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'
                >
                    <label htmlFor='email' className='sr-only'>Email</label>
                    <input 
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                    
                    <label htmlFor='password' className='sr-only'>Password</label>
                    <input
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' 
                        type="password" 
                        placeholder='Enter password' 
                    />
                    
                    {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
                    
                    <button 
                        className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Log in'}
                    </button>
                </form>
            </div>
        </div>
    );
};

// Adding PropTypes for better type-checking
Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default Login;
