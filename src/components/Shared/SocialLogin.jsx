import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
       const {googleLogin}= useContext(AuthContext)
    const handleGoogleLogin=()=>{
      googleLogin()
      .then(res => {
        console.log(res)
      })
      .catch(err=>{
        console.log(err);
      })
    }
    return (
        <div className="card  rounded-box grid h-20 place-items-center">
        <button onClick={handleGoogleLogin} className="text-xl border-2 rounded-md p-2"> <FaGoogle /></button>
     </div>
    );
};

export default SocialLogin;