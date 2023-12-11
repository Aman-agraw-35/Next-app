"use client";
import React,{useState,useEffect} from "react";


export default  function Login(){

    
const [user,setUser] = useState({
    password: "",
    email: ""
})

    return (
        <div className="h-[100vh] w-[100vh] items-center flex relative ">
            <form className="h-full w-[200px] flex flex-col text-center justify-center align-middle " action="submit">
                <label htmlFor="email">Email </label>
                <input className=" justify-center" type="text" /><br />
                <label htmlFor="password">Password </label>
                <input type="password" />
                <button type="submit" className="mt-4 border-2 border-white rounded">Submit</button>
            </form>
        </div>
    )
}

