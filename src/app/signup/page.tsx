"use client";
import React,{useState,useEffect} from "react";



export default  function Signup(){


    const [user,setUser] = useState({
        username: "",
        password: "",
        email: ""
    })
    
    return (
        <div className="h-[100vh] w-full items-center flex relative ">
            <form className="h-full w-[200px] flex flex-col text-center justify-center align-middle " action="submit">
                <label htmlFor="Username">Username </label>
                <input className=" justify-center" type="text" /><br />
                <label htmlFor="email">Email </label>
                <input className=" justify-center" type="text" /><br />
                <label htmlFor="password">Password </label>
                <input type="password" />
                <button type="submit" className="mt-4 border-2 border-white rounded">Submit</button>
            </form>
        </div>
    )
}

