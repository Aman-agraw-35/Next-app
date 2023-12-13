import React from "react";

export default function profile({params}:any){


    return(
        <div className="flex h-full w-full flex-col justify-center items-center text-center">
            <div className="h-40 w-40 justify-center items-center text-center">
            <h1>Welcome Dear User</h1>
            <h1>Your Id is : {params.id}</h1>
            </div>
        </div>
    )
};