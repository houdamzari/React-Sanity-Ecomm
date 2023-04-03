import React from 'react';
import {BsPerson} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../../assets/logo.png'
function NavBar(props) {
  return (
    <nav className="flex flex-row justify-around items-center w-full h-fit px-10 py-4">
      <div className="w-1/2"><img src={logo} alt="logo" className="w-16" /></div>
      <ul className="flex flex-row justify-start items-center gap-16">
        <li className="list-item">Home</li>
        <li className="list-item" >Products</li>
        <li className="list-item">About us</li>
      </ul>
      <ul className="flex flex-row items-center gap-4 w-fit">
        <li className="w-8" ><Link><BsPerson  /></Link></li>
        <li className="w-8" ><button><BiShoppingBag /></button></li>
      </ul>
    </nav>
  );
}

export default NavBar;