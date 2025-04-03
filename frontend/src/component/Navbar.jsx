import React from 'react'
import './Navbar.css'
import { IoIosSearch } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState, useEffect} from 'react';


const Navbar = () => {

  // const handleclick =()=>{
  //   const data = localStorage.getItem("isShow")
  //   if(data){
  //     localStorage.setItem("isShow",false)
  //   }else{
  //     localStorage.setItem("isShow",true)

  //   }
  // }


  
// Dark theme
const [isDarkMode, setIsDarkMode] = useState(false);

// Toggle theme
const toggleTheme = () => {
  setIsDarkMode(prevMode => !prevMode);
};

// UseEffect to apply dark or light theme on load
useEffect(() => {
  if (isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}, [isDarkMode]);

  return (
    <>
     <div className='nav py-4 bg-white dark:bg-black top-0 sticky z-10 shadow-lg  '>
        <ul className='container mx-auto px-2 flex  justify-between items-center'>
           {/* Logo */}
            <Link to={'/'} className='logo ml-10 text-4xl font-medium dark:text-white '>SHOPIFY</Link>
        
        {/* search Bar */}
        <div className='bar flex '>  <input className='serch border-2 pl-4' placeholder='Search for a Product '></input><IoIosSearch  className='icon h-10 w-10 bg-blue-600 text-white'/></div>
           
            <Link to={'/product'}  className='product font-bold hover:underline focus:underline'>Products</Link >
            <Link to={'/category'} className='product font-bold hover:underline focus:underline'>Categories</Link>
          
          
           <div className='login flex'><IoPersonSharp  className='admin h-6 w-6 mr-2'/>
           <Link to={'/login'} className='lo font-bold hover:underline focus:underline' >Login</Link></div>
           
           <Link to={'/cart'}>
            <li className='car'>
              <MdOutlineShoppingCart className='ic h-8 w-8'/>
            </li>
          </Link>
            <li className='moon'><LuMoon className='id  h-8 w-8 mr-20'onClick={toggleTheme}/> </li>
        </ul>
        </div> 
      
    </>
  )
}

export default Navbar