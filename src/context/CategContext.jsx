import { createContext } from "react";
import { readCategories } from "../utility/crudUtility";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";


export const CategContext=createContext()

export const CategProvider=({children})=>{
    const [categories1,setCategories]=useState(null)

    useEffect(()=>{
        readCategories(setCategories)
    },[])
    return(
        <CategContext.Provider value={{categories1}}>
            {children}
        </CategContext.Provider>
    )
}
