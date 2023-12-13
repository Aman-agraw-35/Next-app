"use client";
import React,{useState,useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import { NextResponse } from "next/server";

export default  function Signup(){

   const router = useRouter();
    const [user,setUser] = useState({
        username: "",
        password: "",
        email: ""
    })
    
    async function   handleClick(e:any){
        try {
     e.preventDefault();
     console.log(user);
     
     router.push("/login");
        } catch (error:any) {
          NextResponse.json(error);
        }
    }
    
    return (
        <div className="h-[100vh] w-full items-center flex relative flex-col ">
            <form onSubmit={handleClick} className="h-max mb-4 w-[200px] flex flex-col text-center 
            justify-center align-middle " action="submit">
                
                <label htmlFor="Username">Username </label>
                <input 
                onChange={(e) => setUser({...user , username : e.target.value })} 
                value={user.username} 
                placeholder="Username" 
                className=" justify-center text-black" 
                type="text" />
                <br/>

                <label htmlFor="email">Email </label>
                <input 
                onChange={(e) => setUser({...user , email : e.target.value })} 
                value={user.email} 
                placeholder="Email" 
                className=" justify-center text-black" 
                type="text" 
                />
                <br/>

                <label htmlFor="password">Password </label>
                <input 
                type="password" 
                onChange={(e) => setUser({...user , password : e.target.value })} 
                value={user.password} 
                placeholder="Password"
                className="text-black" 
                />


                <button  type="submit"  className="mt-4 border-2 border-white rounded">Submit
                </button>
            </form>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}

