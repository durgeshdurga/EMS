// import React, { useState } from 'react'
// import { setLocalStorage } from '../../utils/localStorage'
// import { data } from 'autoprefixer'

// const Header = (props) => {

//   // const [username, setUsername] = useState('')

//   // if(!data){
//   //   setUsername('Admin')
//   // }else{
//   //   setUsername(data.firstName)
//   // }

//   const logOutUser = ()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()
//   }
//   return (
//     <div className='flex items-end justify-between'>
//         <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
//         <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
//     </div>
//   )
// }

// export default Header
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ changeUser }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the user data from local storage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    // Set the username based on the retrieved data
    if (loggedInUser) {
      setUsername(loggedInUser.firstName || 'User');
    } else {
      setUsername('Admin'); // Default username
    }
  }, []);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser'); // Clear user data
    changeUser(''); // Update user state in parent component
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
        aria-label='Log Out'
      >
        Log Out
      </button>
    </div>
  );
};

// Adding PropTypes for better type-checking
Header.propTypes = {
  changeUser: PropTypes.func.isRequired,
};

export default Header;
