import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
const Navbar = () => {
    const {user, logOutUser}= useContext(AuthContext)
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li>   
    </>

    const handleLogOut = ()=>{
        logOutUser()
        .then(()=>{
            console.log('Log out successfull');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-12 mr-3' src={logo} alt="" />
                <h2 className='text-2xl font-bold'>Job Portal</h2>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                  <button onClick={handleLogOut} className='text-base font-medium border-1 rounded-md border-black p-2'>Log Out</button>
                    </>: <>
                    <Link to={'/register'}><button className='text-base font-medium border-1 rounded-md border-black p-2'>Register</button></Link>
                    <Link to={'/login'}><button className='text-base font-medium border-1 rounded-md border-black p-2 ml-5'>Login</button></Link>
                    </>
                }
                
            </div>
        </div>
    );
};

export default Navbar;